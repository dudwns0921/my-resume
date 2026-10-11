import type { ActivityDetail } from '@/data/activityDetails';
import { withBasePath } from '@/utils';
import './detail.css';

interface ActivityDetailViewProps {
  detail: ActivityDetail;
  // 슬라이드 패널 안에서는 닫기 버튼을, 단독 페이지에서는 이력서로 돌아가는 링크를 둔다.
  onClose?: () => void;
}

const pad = (n: number) => String(n).padStart(2, '0');

const SectionHead = ({ title, sub, lead }: { title: string; sub?: string; lead?: string }) => (
  <>
    <h2>
      {title}
      {sub && <span>{sub}</span>}
    </h2>
    {lead && <p className="lead">{lead}</p>}
  </>
);

// '129' · '87%'처럼 숫자로 된 값은 0에서 세어 올라간다. 읽는 글자는 그대로 두고 세는 숫자는 장식으로만 그린다.
const TileValue = ({ value }: { value: string }) => {
  const match = value.match(/^(\d+)(%?)$/);
  if (!match) return <b>{value}</b>;
  return (
    <b className="count" data-suffix={match[2]} style={{ '--to': Number(match[1]) } as React.CSSProperties}>
      <span>{value}</span>
    </b>
  );
};

const ActivityDetailView = ({ detail, onClose }: ActivityDetailViewProps) => {
  // 단계가 여섯 이하면 세 칸, 그보다 많으면 네 칸으로 놓는다.
  const flowCols = detail.flow.stages.length <= 6 ? 3 : 4;

  return (
    <div className="detail">
      <div className="detail-page">
        <div className="bar">
          {onClose ? (
            <button type="button" className="back" onClick={onClose}>
              ← 닫기
            </button>
          ) : (
            <a className="back" href={withBasePath('/')}>
              ← 이력서로
            </a>
          )}
          <span className="lab">{detail.title}</span>
        </div>

        <header className="head">
          <div className="head-text">
            <div className="lab">{detail.kicker}</div>
            <h1>
              {detail.title} <span>제작 과정</span>
            </h1>
            <p className="sub">{detail.summary}</p>
            <div className="links">
              {detail.links.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label} →
                </a>
              ))}
            </div>
          </div>
          <div className="media">
            {detail.videoId ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${detail.videoId}`}
                title={`${detail.title} 영상`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={withBasePath(detail.banner)} alt={`${detail.title} 배너`} />
            )}
          </div>
        </header>

        <div className="tiles">
          {detail.tiles.map((tile) => (
            <div key={tile.label} className={`tile ${tile.tone ?? ''}`}>
              <span className="lab">{tile.label}</span>
              <TileValue value={tile.value} />
            </div>
          ))}
        </div>

        <div className="strip" aria-hidden="true">
          {Array.from({ length: detail.strip }, (_, i) => (
            <div key={i} style={{ '--i': i } as React.CSSProperties}>
              <i />
            </div>
          ))}
        </div>

        <section>
          <SectionHead {...detail.flow} />
          <ol className="flow" data-cols={flowCols} style={{ '--cols': flowCols } as React.CSSProperties}>
            {detail.flow.stages.map((stage, i) => (
              <li key={stage.name} className="slot" style={{ '--i': i } as React.CSSProperties}>
                <div className={`node ${stage.byUser ? 'me' : ''}`}>
                  <div className="ghost" aria-hidden="true">
                    {pad(i + 1)}
                  </div>
                  <div className="lab">
                    {pad(i + 1)} · {stage.owner}
                    {stage.model && <em>{stage.model}</em>}
                  </div>
                  <h3>{stage.name}</h3>
                  <p>{stage.line}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="legend">
            <span>
              <i className="k-me" />
              {detail.flow.legend.me}
            </span>
            <span>
              <i className="k-ai" />
              {detail.flow.legend.ai}
            </span>
          </div>
        </section>

        <section>
          <SectionHead {...detail.decisions} />
          <ul className="decisions">
            {detail.decisions.items.map((d) => (
              <li key={d.before}>
                <div className="was">{d.before}</div>
                <div className="now">{d.after}</div>
                {d.why && <div className="why">{d.why}</div>}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <SectionHead {...detail.tools} />
          <ul className="skills">
            {detail.tools.items.map((tool) => (
              <li key={tool.name}>
                <code>{tool.name}</code>
                <p>{tool.line}</p>
              </li>
            ))}
          </ul>
          {detail.tools.figure && (
            <figure className="board">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={withBasePath(detail.tools.figure.image)} alt={detail.tools.figure.alt} loading="lazy" />
              <figcaption>
                <code>{detail.tools.figure.tag}</code>
                <p>{detail.tools.figure.caption}</p>
                {detail.tools.figure.link && (
                  <a href={detail.tools.figure.link.href} target="_blank" rel="noopener noreferrer">
                    {detail.tools.figure.link.label} →
                  </a>
                )}
              </figcaption>
            </figure>
          )}
        </section>

        <section>
          <SectionHead {...detail.timeline} />
          <ol className="cycles">
            {detail.timeline.items.map((card) => (
              <li key={card.label}>
                {card.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={withBasePath(card.image)} alt={card.name} loading="lazy" />
                ) : (
                  <div className="noimg" aria-hidden="true">
                    {card.label}
                  </div>
                )}
                <div className="body">
                  <div className="lab">{card.label}</div>
                  <h3>{card.name}</h3>
                  <p>{card.line}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <SectionHead {...detail.reverts} />
          <ul className="reverts">
            {detail.reverts.items.map((r) => (
              <li key={r.title}>
                <b>{r.title}</b>
                <p>{r.body}</p>
              </li>
            ))}
          </ul>
        </section>

        {detail.outro && (
          <section>
            <SectionHead title={detail.outro.title} sub={detail.outro.sub} />
            <p className="outro">{detail.outro.text}</p>
          </section>
        )}

      </div>
    </div>
  );
};

export default ActivityDetailView;
