import type { FeatureBanner, KitWhy as KitWhyData } from '@/data/activityDetails';
import KitShots from './KitShots';

// 소개 사이트(gamedev-kit-site)의 '쓰는 이유'와 같은 모양 — 문제와 해결을 짝지은 카드 셋, 그 아래 이유마다 한 덩어리.
// 첫 이유는 글 아래에 화면 띠를 넓게, 둘째 · 셋째는 글과 그림을 좌우로 엇갈려 둔다.

const SyncPanel = ({ data, label }: { data: NonNullable<FeatureBanner['syncPanel']>; label: string }) => (
  <figure className="vis sync-vis" aria-label={label}>
    <div className="sync-grid">
      <div className="panel">
        <span className="panel-lab">{data.gdd}</span>
        {data.rows.map((r) => (
          <div key={r.id} className="sync-row">
            <code className="sid">{r.id}</code>
            <b className={`sval ${r.state}`}>{r.gdd}</b>
            <span className={`pill ${r.state}`}>{r.state}</span>
          </div>
        ))}
      </div>
      <div className="links" aria-hidden="true">
        {data.rows.map((r) => (
          <i key={r.id} className={r.state}>
            {r.state === 'synced' ? '⟷' : r.state === 'mismatch' ? '≠' : ''}
          </i>
        ))}
      </div>
      <div className="panel">
        <span className="panel-lab">{data.code}</span>
        {data.rows.map((r) => (
          <div key={r.id} className={`code-row ${r.state}`}>
            {r.code ? (
              <>
                <code>{r.code}</code>
                <small>{`// GDD: ${r.id}`}</small>
              </>
            ) : (
              <small>{data.none}</small>
            )}
          </div>
        ))}
      </div>
    </div>
    <figcaption>{data.foot}</figcaption>
  </figure>
);

const RuleStack = ({ data, label }: { data: NonNullable<FeatureBanner['ruleStack']>; label: string }) => (
  <figure className="vis rules-vis" aria-label={label}>
    <div className="rule-games">
      {data.games.map((g, gi) => (
        <div key={g} className="rule-col">
          <ol className="stack">
            {data.list.slice(0, (gi + 1) * 2).map((r, ri) => (
              <li key={r} className={ri >= gi * 2 ? 'fresh' : 'carried'}>
                {r}
              </li>
            ))}
          </ol>
          <span className="game">{g}</span>
        </div>
      ))}
    </div>
    <figcaption className="legend">
      <span>
        <i className="fresh" />
        {data.fresh}
      </span>
      <span>
        <i className="carried" />
        {data.carried}
      </span>
    </figcaption>
  </figure>
);

const Art = ({ item }: { item: FeatureBanner }) => {
  if (item.shots) return <KitShots shots={item.shots} label={item.alt} />;
  if (item.syncPanel) return <SyncPanel data={item.syncPanel} label={item.alt} />;
  if (item.ruleStack) return <RuleStack data={item.ruleStack} label={item.alt} />;
  return null;
};

const pad = (n: number) => String(n).padStart(2, '0');

const KitWhy = ({ section }: { section: KitWhyData }) => (
  <>
    <section className="why">
      <span className="eyebrow">{section.eyebrow}</span>
      <h2>{section.title}</h2>
      <ol className="index">
        {section.items.map((r, i) => (
          <li key={r.name}>
            <span className="index-n">{pad(i + 1)}</span>
            <s>{r.problem}</s>
            <b>{r.name}</b>
          </li>
        ))}
      </ol>
    </section>
    {section.items.map((r, i) => (
      <section key={r.name} className={`reason${i ? ' split' : ''}${i === 2 ? ' flip' : ''}`}>
        <header className="reason-head">
          <span className="reason-n">
            {pad(i + 1)} · {r.problem}
          </span>
          <h3>{r.name}</h3>
          <p className="lead">{r.line}</p>
        </header>
        <Art item={r} />
      </section>
    ))}
  </>
);

export default KitWhy;
