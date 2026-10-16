'use client';

import { A11y, Keyboard, Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import type { FeatureBanner } from '@/data/activityDetails';
import { withBasePath } from '@/utils';

// 대시보드 화면을 소개 사이트(gamedev-kit-site)와 같은 모양으로 넘겨 본다 — 보고 있는 화면이 가운데, 양옆 화면이 걸쳐 보이고, 끝없이 이어진다.
const KitShots = ({ shots, label }: { shots: NonNullable<FeatureBanner['shots']>; label: string }) => (
  <div className="art shots" role="region" aria-label={label}>
    <Swiper
      modules={[A11y, Keyboard, Mousewheel, Pagination]}
      centeredSlides
      slidesPerView="auto"
      spaceBetween={12}
      breakpoints={{ 640: { spaceBetween: 24 } }}
      loop
      grabCursor
      keyboard={{ enabled: true }}
      mousewheel={{ forceToAxis: true }}
      pagination={{ clickable: true }}
      speed={500}
    >
      {shots.map((shot, i) => (
        <SwiperSlide key={shot.image} className="scene">
          <figure>
            <figcaption>
              <span className="scene-n">{String(i + 1).padStart(2, '0')}</span>
              <b>{shot.title}</b>
              <span className="scene-text">{shot.caption}</span>
            </figcaption>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={withBasePath(shot.image)} alt={shot.alt} draggable={false} />
          </figure>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default KitShots;
