'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { activityDetails, type ActivityDetail } from '@/data/activityDetails';
import ActivityDetailView from './ActivityDetailView';

interface ActivityCardProps {
  detail: ActivityDetail;
  // 카드 내용은 서버에서 그린 것을 그대로 받는다 (배지 색이 무작위라 클라이언트에서 다시 그리면 어긋난다).
  children: React.ReactNode;
}

// 패널이 밀려 나가는 시간. detail.css 의 .detail-panel transition 과 맞춘다.
const SLIDE_MS = 500;

// 상세 내용이 있는 액티비티. 카드 안의 상세 페이지 링크('제작 과정 보기')를 누르면 오른쪽에서 상세 패널이 밀려 나온다
// (웹에서만 — PDF에는 카드만 찍힌다). 카드의 다른 곳은 눌러도 아무 일도 없다.
const ActivityCard = ({ detail, children }: ActivityCardProps) => {
  const [open, setOpen] = useState(false);
  // 닫히는 동안에도 밀려 나가는 모습이 보이게, 패널은 애니메이션이 끝난 뒤에 걷는다.
  const [mounted, setMounted] = useState(false);
  // 패널 안에서 다른 상세 페이지(예: gamedev-kit 소개)로 넘어가면 내용만 바꾼다.
  const [shown, setShown] = useState(detail);
  const drawerRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    if (!mounted) return;
    // 패널이 화면 밖에 한 번 그려진 다음에 밀려 들어오게 한다.
    const timer = setTimeout(() => setOpen(true), 30);
    return () => clearTimeout(timer);
  }, [mounted]);

  useEffect(() => {
    if (!open) return;
    // 열려 있는 동안에는 걷는 타이머가 남지 않게 한다.
    clearTimeout(closeTimerRef.current);
    const drawer = drawerRef.current;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);

    // 열려 있는 동안 뒤의 이력서는 초점도 클릭도 받지 않는다.
    const behind = Array.from(document.body.children).filter(
      (el): el is HTMLElement => el instanceof HTMLElement && el !== drawer && !el.inert,
    );
    behind.forEach((el) => (el.inert = true));
    // 초점은 닫기 단추가 아니라 패널이 받는다 (Space · PageDown 으로 바로 읽어 내려가게).
    // 패널이 아직 화면 밖에 있으므로, 브라우저가 그쪽으로 스크롤해 미끄러짐을 건너뛰지 않게 한다.
    drawer?.querySelector<HTMLElement>('.detail-panel')?.focus({ preventScroll: true });

    return () => {
      window.removeEventListener('keydown', onKey);
      behind.forEach((el) => (el.inert = false));
      returnFocusRef.current?.focus();
      // 배경을 더블클릭해 닫으면 둘째 클릭이 방금 풀린 뒤쪽 이력서에 떨어지므로, 바로 이어지는 그 클릭 하나만 삼킨다.
      window.addEventListener(
        'click',
        (e) => {
          if (e.detail > 1) {
            e.preventDefault();
            e.stopPropagation();
          }
        },
        { capture: true, once: true },
      );
      // 전환이 꺼진 환경(움직임 줄이기)에서도 걷히도록 transitionend 대신 시간으로 걷는다.
      closeTimerRef.current = setTimeout(() => setMounted(false), SLIDE_MS);
    };
  }, [open]);

  // 링크는 서버에서 그린 카드 안에 있으므로, 감싼 칸에서 그 클릭만 받아 패널로 바꿔 연다.
  const onLinkClick = (e: React.MouseEvent) => {
    const anchor = (e.target as HTMLElement).closest('a');
    // 바깥으로 나가는 링크와 새 탭으로 여는 클릭은 그대로 둔다.
    if (!anchor || anchor.target === '_blank' || e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    returnFocusRef.current = anchor;
    setShown(detail);
    clearTimeout(closeTimerRef.current);
    // 걷는 타이머가 막 돌아 아직 반영되지 않은 틈에 눌려도 패널이 걷히지 않게, 열 때는 늘 다시 올린다.
    setMounted(true);
    // 닫히는 중이면 걷히기 전에 그대로 다시 연다.
    if (mounted) setOpen(true);
  };

  return (
    <>
      <div onClick={onLinkClick}>{children}</div>
      {mounted &&
        createPortal(
          <div ref={drawerRef} className={`detail-drawer no-pdf${open ? ' open' : ''}`}>
            {/* 링크를 더블클릭해 연 경우 둘째 클릭이 여기 떨어지므로, 한 번 누른 클릭만 닫는다. */}
            <div className="detail-backdrop" onClick={(e) => e.detail < 2 && setOpen(false)} />
            <aside
              className="detail-panel"
              tabIndex={-1}
              role="dialog"
              aria-modal="true"
              aria-label={`${shown.title} ${shown.heading}`}
            >
              <ActivityDetailView
                key={shown.slug}
                detail={shown}
                onClose={() => setOpen(false)}
                onNavigate={(href) => {
                  const next = activityDetails.find((d) => `/activities/${d.slug}` === href);
                  if (!next) return;
                  setShown(next);
                  // 내용이 바뀌면 맨 위로 올리고, 초점이 사라지지 않게 패널에 다시 준다.
                  const panel = drawerRef.current?.querySelector<HTMLElement>('.detail-panel');
                  panel?.scrollTo(0, 0);
                  panel?.focus({ preventScroll: true });
                }}
              />
            </aside>
          </div>,
          document.body,
        )}
    </>
  );
};

export default ActivityCard;
