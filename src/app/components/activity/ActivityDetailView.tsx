import type { ActivityDetail, DetailLink, FeatureBanner, FlowSection } from '@/data/activityDetails';
import { withBasePath } from '@/utils';
import KitShots from './KitShots';
import './detail.css';

interface ActivityDetailViewProps {
  detail: ActivityDetail;
  // 슬라이드 패널 안에서는 닫기 버튼을, 단독 페이지에서는 이력서로 돌아가는 링크를 둔다.
  onClose?: () => void;
  // 다른 상세 페이지로 가는 링크를 눌렀을 때. 패널 안에서는 내용만 바꾸고, 없으면 주소로 이동한다.
  onNavigate?: (href: string) => void;
}

const pad = (n: number) => String(n).padStart(2, '0');

interface SectionHeadProps {
  title: string;
  sub?: string;
  lead?: string;
  link?: DetailLink;
  onNavigate?: (href: string) => void;
}

const SectionHead = ({ title, sub, lead, link, onNavigate }: SectionHeadProps) => (
  <>
    <h2>
      {title}
      {sub && <span>{sub}</span>}
    </h2>
    {lead && (
      <p className="lead">
        {lead}
        {link &&
          (link.href.startsWith('/') ? (
            <a
              className="more"
              href={withBasePath(link.href)}
              onClick={
                onNavigate &&
                ((e) => {
                  // 새 탭으로 여는 클릭은 그대로 둔다.
                  if (e.metaKey || e.ctrlKey || e.shiftKey) return;
                  e.preventDefault();
                  onNavigate(link.href);
                })
              }
            >
              {link.label} →
            </a>
          ) : (
            <a className="more" href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label} →
            </a>
          ))}
      </p>
    )}
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

// 번호가 붙은 단계 카드가 선으로 이어지는 절.
const FlowBlock = ({ section, onNavigate }: { section: FlowSection; onNavigate?: (href: string) => void }) => {
  // 단계가 넷이거나 일곱 이상이면 네 칸, 다섯 · 여섯이면 세 칸으로 놓는다.
  const count = section.stages.length;
  const cols = count === 5 || count === 6 ? 3 : 4;

  return (
    <section>
      <SectionHead {...section} onNavigate={onNavigate} />
      <ol
        className="flow"
        data-cols={cols}
        data-loop={section.loop}
        style={{ '--cols': cols, '--n': count } as React.CSSProperties}
      >
        {section.stages.map((stage, i) => (
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
      {section.after && (
        // 매번 돌지 않는 단계는 줄에서 빼 아래에 따로 둔다.
        <div className="after">
          <div className="node">
            <div className="lab">
              {section.after.when} · {section.after.owner}
              {section.after.model && <em>{section.after.model}</em>}
            </div>
            <h3>{section.after.name}</h3>
            <p>{section.after.line}</p>
          </div>
        </div>
      )}
      {section.legend && (
        <div className="legend">
          <span>
            <i className="k-me" />
            {section.legend.me}
          </span>
          <span>
            <i className="k-ai" />
            {section.legend.ai}
          </span>
        </div>
      )}
    </section>
  );
};

// 막대 n개. 앞 게임에서 이어받은 몫(carried)은 흐리게 그린다.
const Bars = ({ kind, count, carried }: { kind: 'voice' | 'rules'; count: number; carried: number }) => (
  <div className="bars">
    {Array.from({ length: count }, (_, i) => (
      <i key={i} className={`${kind} ${i < carried ? 'old' : ''}`} />
    ))}
  </div>
);

// 제목과 한 문장 아래에 붙는 그림. 사이클의 알약과 같은 모양으로 그린다.
const FeatureArt = ({ item }: { item: FeatureBanner }) => {
  if (item.sync) {
    const { gddLabel, codeLabel, missing, rows } = item.sync;
    return (
      <div className="art sync" role="img" aria-label={item.alt}>
        <div className="row labels">
          <span className="lab">{gddLabel}</span>
          <span />
          <span className="lab">{codeLabel}</span>
        </div>
        {rows.map((row) => (
          <div key={row.id} className="row" data-state={row.state}>
            <div className="cell">
              <code>{row.id}</code>
              <b>{row.gdd}</b>
              <em>{row.state}</em>
            </div>
            <span className="link" />
            <div className="cell code">
              {row.code ? (
                <>
                  <code>
                    {row.code}
                    <b>{row.codeValue}</b>
                  </code>
                  <code className="mark"># GDD: {row.id}</code>
                </>
              ) : (
                <span>{missing}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (item.compounds) {
    const { carried, voice, rules, example, games } = item.compounds;
    return (
      <div className="art compounds" role="img" aria-label={item.alt}>
        <ol>
          {games.map((game, i) => (
            <li key={game.name} data-carried={carried}>
              <div className="stacks">
                {voice && <Bars kind="voice" count={game.voice ?? 0} carried={i ? games[i - 1].voice ?? 0 : 0} />}
                <Bars kind="rules" count={game.rules} carried={i ? games[i - 1].rules : 0} />
              </div>
              <b>{game.name}</b>
            </li>
          ))}
        </ol>
        <div className="legend">
          {voice && (
            <span>
              <i className="k-voice" />
              {voice}
            </span>
          )}
          <span>
            <i className="k-rules" />
            {rules}
          </span>
        </div>
        {example && <p className="example">{example}</p>}
      </div>
    );
  }
  if (item.shots) {
    return <KitShots shots={item.shots} label={item.alt} />;
  }
  if (item.image) {
    return (
      <div className="art shot">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={withBasePath(item.image)} alt={item.alt} loading="lazy" />
      </div>
    );
  }
  return null;
};

// 이름과 한 줄 설명이 든 카드 묶음. 꼬리표(모델 등)가 있으면 이름 옆에 붙인다.
const CardBlock = ({
  section,
  onNavigate,
}: {
  section: NonNullable<ActivityDetail['agents']>;
  onNavigate?: (href: string) => void;
}) => (
  <section>
    <SectionHead {...section} onNavigate={onNavigate} />
    <ul className="skills">
      {section.items.map((item) => (
        <li key={item.name}>
          <b>{item.name}</b>
          {item.tag && <em className="tag">{item.tag}</em>}
          <p>{item.line}</p>
        </li>
      ))}
    </ul>
  </section>
);

const ActivityDetailView = ({ detail, onClose, onNavigate }: ActivityDetailViewProps) => {
  return (
    <div className="detail kit">
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
          {/* 배너의 반짝이는 별. 자리와 색은 CSS가 정한다. */}
          <div className="stars" aria-hidden="true">
            {Array.from({ length: 12 }, (_, i) => (
              <i key={i} />
            ))}
          </div>
          <div className="head-text">
            <div className="lab">{detail.kicker}</div>
            <h1>
              {detail.title} <span>{detail.heading}</span>
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
          {(detail.videoId || detail.banner) && (
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
                detail.banner && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={withBasePath(detail.banner)} alt={detail.bannerAlt ?? `${detail.title} 배너`} />
                )
              )}
            </div>
          )}
        </header>

        {detail.tiles.length > 0 && (
          <div className="tiles" style={{ '--n': detail.tiles.length } as React.CSSProperties}>
            {detail.tiles.map((tile) => (
              <div key={tile.label} className={`tile ${tile.tone ?? ''}`}>
                <span className="lab">{tile.label}</span>
                <TileValue value={tile.value} />
              </div>
            ))}
          </div>
        )}

        <div className="strip" aria-hidden="true">
          {Array.from({ length: detail.strip }, (_, i) => (
            <div key={i} style={{ '--i': i } as React.CSSProperties}>
              <i />
            </div>
          ))}
        </div>

        {detail.flow && <FlowBlock section={detail.flow} onNavigate={onNavigate} />}
        {detail.features && (
          <section>
            <SectionHead {...detail.features} onNavigate={onNavigate} />
            <ul className="banners">
              {detail.features.items.map((item) => (
                <li key={item.name}>
                  <h3>{item.name}</h3>
                  <p>{item.line}</p>
                  <FeatureArt item={item} />
                </li>
              ))}
            </ul>
          </section>
        )}
        {detail.agents && <CardBlock section={detail.agents} onNavigate={onNavigate} />}
        {detail.assetFlow && <FlowBlock section={detail.assetFlow} onNavigate={onNavigate} />}
        {detail.assetCards && <CardBlock section={detail.assetCards} onNavigate={onNavigate} />}

        {detail.tools && (
          <section>
            <SectionHead {...detail.tools} onNavigate={onNavigate} />
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
        )}

        {detail.growth && <CardBlock section={detail.growth} onNavigate={onNavigate} />}

        <section>
          <SectionHead {...detail.timeline} onNavigate={onNavigate} />
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

      </div>
    </div>
  );
};

export default ActivityDetailView;
