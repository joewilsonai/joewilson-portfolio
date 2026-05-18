// Rapsodo case file — the deep dive.
// Paper / dossier aesthetic, separate from the dark editorial overview at /.
// Reachable from the Rapsodo card's "Read case file →" link.

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rapsodo Case File — Joe Wilson",
  description:
    "Director of Customer Success, Golf & Diamond Sports, 2025–2026. How AI-native operating compresses a five-person org into one.",
};

export default function RapsodoCaseFile() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: rapsodoCSS }} />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,300..900,30..100;1,9..144,300..900,30..100&family=Geist:wght@300..700&family=JetBrains+Mono:wght@400;500&display=swap"
      />

      <div className="rapsodo-root">
        <a href="/" className="rapsodo-back">← Back to joewilson.ai</a>

        <div className="rapsodo-page">
          <span className="rapsodo-corner tl" />
          <span className="rapsodo-corner tr" />
          <span className="rapsodo-corner bl" />
          <span className="rapsodo-corner br" />

          <header className="rapsodo-header">
            <div className="rapsodo-meta-bar">
              <div className="left">
                <span className="rapsodo-dot" />
                <span>Case File / Director of CS</span>
              </div>
              <div>2025 — 2026 / Rapsodo</div>
            </div>
            <h1 className="rapsodo-display-name">
              Joe Wilson<em>.</em>
            </h1>
            <p className="rapsodo-role-line">
              Director of Customer Success, <span>Golf &amp; Diamond Sports</span>
            </p>
            <div className="rapsodo-stamp">
              <div className="rapsodo-stamp-inner">
                AI-Native
                <span className="big">Operator</span>
                2026
              </div>
            </div>
          </header>

          <section className="rapsodo-thesis">
            <div className="rapsodo-label">THESIS</div>
            <p className="rapsodo-thesis-body">
              Ran customer success at a hardware-to-SaaS sports tech company as a
              one-person CS Ops, data engineering, and analytics function — because{" "}
              <strong>AI was the multiplier</strong>. The work below is what one
              Director normally hands to a five-person team. Here, it shipped solo,
              faster, with Claude as the engineering partner.
            </p>
          </section>

          <section className="rapsodo-frame">
            <div className="rapsodo-frame-grid">
              <div className="rapsodo-frame-col before">
                <h4>Without AI</h4>
                <p>
                  Director of CS hires 1 data engineer, 1 analyst, 1 CS Ops manager,
                  1 support engineer, and 1 BI partner. Six headcount, 12 months to
                  stand up the same system.
                </p>
              </div>
              <div className="rapsodo-arrow">→</div>
              <div className="rapsodo-frame-col after">
                <h4>AI-Native</h4>
                <p>
                  Director of CS pairs with Claude across code, data, and strategy.
                  Ships the same system solo. Compresses the org. Owns the outcome
                  end-to-end.
                </p>
              </div>
            </div>
          </section>

          <section className="rapsodo-work">
            <div className="rapsodo-work-intro">
              <div className="rapsodo-label">SCOPE</div>
              <p>
                Full lifecycle ownership across two product lines — MLM2Pro (golf)
                and Diamond Sports (baseball). NRR / GRR accountability. CS and
                Support team leadership. Direct executive reporting to the CEO.
                Every section below is work that AI made possible at a one-person
                scale.
              </p>
            </div>

            <div className="rapsodo-section">
              <div className="rapsodo-section-head">
                <div className="rapsodo-section-num">01 / 05</div>
                <div className="rapsodo-section-title">Strategy &amp; Program Design</div>
                <div className="rapsodo-section-sub">
                  Director-level<br />AI as thinking partner
                </div>
              </div>
              <div className="rapsodo-section-body">
                <div className="rapsodo-item">
                  <h5>The Four-Program CS Framework</h5>
                  <p>
                    LaunchPad (activation) → KeepSwinging (engagement) → NextRound
                    (renewal) → Champions (advocacy). A retention architecture
                    pressure-tested against behavioral data, not vibes.
                  </p>
                </div>
                <div className="rapsodo-item">
                  <h5>Behavioral Retention Model</h5>
                  <p>
                    Reframed the company&rsquo;s assumption that fast users retain.
                    Mixpanel segmentation showed the opposite: converting users
                    engage <em>slowly and deeply</em>, while speed-runners churn.
                    Lifecycle journeys redesigned around depth.
                  </p>
                </div>
                <div className="rapsodo-item">
                  <h5>Executive QBRs</h5>
                  <p>
                    Quarterly reviews to the CEO and leadership team on retention
                    performance, reliability risk, and roadmap priorities — sourced
                    from support, usage, and revenue data Claude helped synthesize
                    into narrative.
                  </p>
                </div>
              </div>
            </div>

            <div className="rapsodo-section">
              <div className="rapsodo-section-head">
                <div className="rapsodo-section-num">02 / 05</div>
                <div className="rapsodo-section-title">Data Engineering</div>
                <div className="rapsodo-section-sub">
                  Normally a team<br />Shipped solo with Claude Code
                </div>
              </div>
              <div className="rapsodo-section-body">
                <div className="rapsodo-item">
                  <h5>
                    Mixpanel → Iterable Real-Time Pipeline{" "}
                    <span className="rapsodo-tag">AI-Built</span>
                  </h5>
                  <p>
                    Stood up a Google Cloud Run integration that bypassed
                    MuleSoft&rsquo;s 24-hour batch delay. Behavioral events
                    triggered lifecycle messaging the same day. Built with Claude
                    as the engineering co-pilot — no data engineering team
                    required.
                  </p>
                </div>
                <div className="rapsodo-item">
                  <h5>
                    Zendesk + Jira Unified Signal Layer{" "}
                    <span className="rapsodo-tag">AI-Built</span>
                  </h5>
                  <p>
                    Pulled support tickets and engineering escalations into a
                    single customer signal pipeline feeding weekly issue reviews
                    and closed-loop product feedback. Replaced manual cross-tool
                    reporting that previously consumed half a CS Ops headcount.
                  </p>
                </div>
                <div className="rapsodo-item">
                  <h5>
                    Zendesk BigQuery Analysis Pipelines{" "}
                    <span className="rapsodo-tag">AI-Built</span>
                  </h5>
                  <p>
                    Built ticket classification and engineering escalation
                    reporting for Diamond Sports — surfacing P0/P1 patterns,
                    recurring root causes, and time-to-resolution drift. Direct SQL
                    work with Claude pairing on schema and query design.
                  </p>
                </div>
                <div className="rapsodo-item">
                  <h5>Zendesk WebView / Unity Integration</h5>
                  <p>
                    In-app support layer for the MLM2Pro mobile experience — closed
                    the gap between product moment and support response.
                  </p>
                </div>
              </div>
            </div>

            <div className="rapsodo-section">
              <div className="rapsodo-section-head">
                <div className="rapsodo-section-num">03 / 05</div>
                <div className="rapsodo-section-title">Analytics &amp; Modeling</div>
                <div className="rapsodo-section-sub">
                  Normally a data science team<br />Shipped solo with Claude
                </div>
              </div>
              <div className="rapsodo-section-body">
                <div className="rapsodo-item">
                  <h5>
                    Churn Signal Model — Baseball{" "}
                    <span className="rapsodo-tag">AI-Built</span>
                  </h5>
                  <p>
                    Identified leading indicators of churn for Diamond Sports
                    accounts. Built without a data scientist — Claude handled the
                    feature engineering and statistical scaffolding.
                  </p>
                </div>
                <div className="rapsodo-item">
                  <h5>
                    Sales Call Predictive Analytics{" "}
                    <span className="rapsodo-tag">AI-Built</span>
                  </h5>
                  <p>
                    99% churn prediction and 96% success prediction accuracy on
                    sales call conversation data — correlating spoken intent to
                    downstream account health.
                  </p>
                </div>
                <div className="rapsodo-item">
                  <h5>NPS / VoC Framework</h5>
                  <p>
                    Stood up the full system from scratch — instrumentation,
                    reporting cadence, and qualitative analysis loop. Surfaced
                    onboarding friction, activation gaps, and recurring failure
                    modes for Product and Marketing.
                  </p>
                </div>
              </div>
            </div>

            <div className="rapsodo-section">
              <div className="rapsodo-section-head">
                <div className="rapsodo-section-num">04 / 05</div>
                <div className="rapsodo-section-title">Support Operations</div>
                <div className="rapsodo-section-sub">
                  AI in the response loop<br />Not just behind it
                </div>
              </div>
              <div className="rapsodo-section-body">
                <div className="rapsodo-item">
                  <h5>AI-First Tier 1 / Tier 2 Tooling</h5>
                  <p>
                    Deployed Claude-assisted support workflows across triage,
                    response drafting, and knowledge base generation. Cut response
                    times and accelerated KB coverage without expanding the support
                    team.
                  </p>
                </div>
                <div className="rapsodo-item">
                  <h5>Iterable Lifecycle Journey Redesign</h5>
                  <p>
                    Rebuilt MLM2Pro trial-user journeys around depth-of-engagement
                    triggers — fewer messages, better timing, higher conversion.
                    Designed against real behavioral cohorts from the Mixpanel
                    pipeline above.
                  </p>
                </div>
              </div>
            </div>

            <div className="rapsodo-section">
              <div className="rapsodo-section-head">
                <div className="rapsodo-section-num">05 / 05</div>
                <div className="rapsodo-section-title">Executive Business Cases</div>
                <div className="rapsodo-section-sub">
                  Strategic deliverables<br />Modeled, written, defended
                </div>
              </div>
              <div className="rapsodo-section-body">
                <div className="rapsodo-item">
                  <h5>Legacy Device EOL Proposal</h5>
                  <p>
                    Made the business case for free Pro 2.0 hardware upgrades
                    across <strong>253 legacy-device accounts</strong> — balancing
                    ethical renewal practice with{" "}
                    <strong>~$184K ARR protection</strong> on a sunsetting product
                    line.
                  </p>
                </div>
                <div className="rapsodo-item">
                  <h5>Diamond Sports Product Engineering Report</h5>
                  <p>
                    Comprehensive read on engineering escalation patterns,
                    time-in-stage drift, and the product reliability story
                    Engineering and Product leadership needed in one place.
                  </p>
                </div>
                <div className="rapsodo-item">
                  <h5>Kelton AI Operations Lead Transition Doc</h5>
                  <p>
                    Authored the role positioning, scope, and capability stack for
                    an AI Operations Lead role — translating CS lifecycle work into
                    a cross-functional AI ops mandate.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="rapsodo-stack">
            <div className="rapsodo-label">STACK</div>
            <div className="rapsodo-stack-list">
              <span className="primary">Claude / Claude Code</span>
              <span>Mixpanel</span>
              <span>Iterable</span>
              <span>Google Cloud Run</span>
              <span>BigQuery</span>
              <span>Zendesk</span>
              <span>Jira</span>
              <span>Salesforce</span>
              <span>Elasticsearch</span>
              <span>MongoDB</span>
              <span>Unity (WebView)</span>
              <span>SQL / Python</span>
            </div>
          </section>

          <section className="rapsodo-close">
            <div className="rapsodo-label">CLOSE</div>
            <p className="rapsodo-close-body">
              This is what <em>AI-native</em> actually looks like. Not the
              buzzword. The structural reality. The difference between a CS
              director who manages a team — and one who <em>is</em> the team,
              amplified across data, code, and strategy at the same time.
            </p>
          </section>

          <footer className="rapsodo-footer">
            <div>
              Joe Wilson <span className="accent">/</span> St. Charles, MO
            </div>
            <div>
              <a href="mailto:joe.wilson@live.com">joe.wilson@live.com</a>{" "}
              <span className="accent">/</span>{" "}
              <a href="https://www.linkedin.com/in/joewilsonjr/">LinkedIn</a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

const rapsodoCSS = `
  .rapsodo-root {
    --paper: #f6f1e8;
    --paper-deep: #efe7d7;
    --ink: #161413;
    --ink-soft: #3a3633;
    --ink-muted: #6f6a64;
    --rule: #2a2724;
    --clay: #b04a2e;
    --clay-deep: #8a3620;
    --grid-line: rgba(22, 20, 19, 0.06);
    background: var(--paper);
    color: var(--ink);
    font-family: 'Geist', sans-serif;
    font-weight: 400;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    background-image:
      radial-gradient(circle at 20% 10%, rgba(176, 74, 46, 0.04) 0%, transparent 40%),
      radial-gradient(circle at 80% 90%, rgba(92, 107, 86, 0.05) 0%, transparent 50%),
      linear-gradient(var(--grid-line) 1px, transparent 1px),
      linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
    background-size: auto, auto, 40px 40px, 40px 40px;
    min-height: 100vh;
    padding: 60px 24px;
  }
  .rapsodo-back {
    display: block; max-width: 980px; margin: 0 auto 16px;
    font-family: 'JetBrains Mono', monospace; font-size: 11px;
    letter-spacing: 0.14em; text-transform: uppercase;
    color: var(--ink-muted); text-decoration: none;
  }
  .rapsodo-back:hover { color: var(--clay); }
  .rapsodo-page {
    max-width: 980px; margin: 0 auto; background: var(--paper);
    border: 1px solid rgba(22, 20, 19, 0.12);
    box-shadow: 0 1px 0 rgba(22, 20, 19, 0.04), 0 24px 60px -20px rgba(22, 20, 19, 0.18);
    position: relative; overflow: hidden;
  }
  .rapsodo-corner { position: absolute; width: 28px; height: 28px; border: 1px solid var(--rule); }
  .rapsodo-corner.tl { top: 16px; left: 16px; border-right: none; border-bottom: none; }
  .rapsodo-corner.tr { top: 16px; right: 16px; border-left: none; border-bottom: none; }
  .rapsodo-corner.bl { bottom: 16px; left: 16px; border-right: none; border-top: none; }
  .rapsodo-corner.br { bottom: 16px; right: 16px; border-left: none; border-top: none; }
  .rapsodo-header { padding: 64px 72px 40px; border-bottom: 1px solid var(--rule); position: relative; }
  .rapsodo-meta-bar {
    display: flex; justify-content: space-between; align-items: center;
    font-family: 'JetBrains Mono', monospace; font-size: 11px;
    letter-spacing: 0.14em; text-transform: uppercase;
    color: var(--ink-muted); margin-bottom: 32px;
  }
  .rapsodo-meta-bar .left { display: flex; gap: 16px; align-items: center; }
  .rapsodo-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--clay); display: inline-block; }
  .rapsodo-display-name {
    font-family: 'Fraunces', serif; font-weight: 300;
    font-size: clamp(48px, 8vw, 88px); line-height: 0.95;
    letter-spacing: -0.02em; color: var(--ink); margin: 0 0 12px;
  }
  .rapsodo-display-name em {
    font-style: italic; font-weight: 300; color: var(--clay);
    font-variation-settings: "SOFT" 100;
  }
  .rapsodo-role-line {
    font-family: 'Fraunces', serif; font-size: 22px; font-weight: 400;
    letter-spacing: -0.01em; color: var(--ink-soft); margin: 16px 0 0;
  }
  .rapsodo-role-line span { font-style: italic; color: var(--clay-deep); }
  .rapsodo-thesis {
    padding: 56px 72px 48px; border-bottom: 1px solid var(--rule);
    display: grid; grid-template-columns: 140px 1fr; gap: 48px; align-items: start;
  }
  .rapsodo-label {
    font-family: 'JetBrains Mono', monospace; font-size: 10px;
    letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--ink-muted); padding-top: 8px; position: relative;
  }
  .rapsodo-label::before {
    content: ''; position: absolute; top: 0; left: 0;
    width: 24px; height: 1px; background: var(--clay);
  }
  .rapsodo-thesis-body {
    font-family: 'Fraunces', serif; font-size: 26px; font-weight: 350;
    line-height: 1.35; letter-spacing: -0.01em; color: var(--ink); margin: 0;
  }
  .rapsodo-thesis-body strong {
    font-weight: 500;
    background: linear-gradient(180deg, transparent 65%, rgba(176, 74, 46, 0.22) 65%);
    padding: 0 2px;
  }
  .rapsodo-frame { padding: 48px 72px; border-bottom: 1px solid var(--rule); background: var(--paper-deep); }
  .rapsodo-frame-grid { display: grid; grid-template-columns: 1fr 80px 1fr; gap: 0; align-items: center; }
  .rapsodo-frame-col h4 {
    font-family: 'JetBrains Mono', monospace; font-size: 10px;
    letter-spacing: 0.2em; text-transform: uppercase; margin: 0 0 16px;
  }
  .rapsodo-frame-col.before h4 { color: var(--ink-muted); }
  .rapsodo-frame-col.after h4 { color: var(--clay); }
  .rapsodo-frame-col p {
    font-family: 'Fraunces', serif; font-size: 17px; line-height: 1.5;
    color: var(--ink-soft); margin: 0;
  }
  .rapsodo-frame-col.before p {
    text-decoration: line-through;
    text-decoration-color: rgba(176, 74, 46, 0.5);
    text-decoration-thickness: 1px; opacity: 0.7;
  }
  .rapsodo-frame-col.after p { color: var(--ink); font-weight: 400; }
  .rapsodo-arrow { text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 24px; color: var(--clay); }
  .rapsodo-work { padding: 56px 72px 32px; }
  .rapsodo-work-intro {
    display: grid; grid-template-columns: 140px 1fr; gap: 48px; margin-bottom: 48px;
  }
  .rapsodo-work-intro p {
    font-family: 'Fraunces', serif; font-size: 19px; line-height: 1.5;
    color: var(--ink-soft); font-weight: 350; margin: 0;
  }
  .rapsodo-section {
    display: grid; grid-template-columns: 140px 1fr; gap: 48px;
    padding: 32px 0; border-top: 1px solid rgba(22, 20, 19, 0.08);
  }
  .rapsodo-section:first-of-type { border-top: none; padding-top: 0; }
  .rapsodo-section-num {
    font-family: 'JetBrains Mono', monospace; font-size: 11px;
    color: var(--clay); letter-spacing: 0.12em; margin-bottom: 8px;
  }
  .rapsodo-section-title {
    font-family: 'Fraunces', serif; font-size: 22px; font-weight: 400;
    line-height: 1.1; letter-spacing: -0.01em; color: var(--ink);
  }
  .rapsodo-section-sub {
    font-family: 'JetBrains Mono', monospace; font-size: 10px;
    letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--ink-muted); margin-top: 12px; line-height: 1.5;
  }
  .rapsodo-section-body { display: flex; flex-direction: column; gap: 20px; }
  .rapsodo-item { padding-left: 22px; position: relative; }
  .rapsodo-item::before {
    content: ''; position: absolute; left: 0; top: 11px;
    width: 10px; height: 1px; background: var(--ink-muted);
  }
  .rapsodo-item h5 {
    font-family: 'Geist', sans-serif; font-size: 15px; font-weight: 500;
    color: var(--ink); margin: 0 0 4px; letter-spacing: -0.005em;
  }
  .rapsodo-item p { font-size: 14px; color: var(--ink-soft); line-height: 1.55; margin: 0; }
  .rapsodo-tag {
    display: inline-block; font-family: 'JetBrains Mono', monospace;
    font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase;
    background: rgba(176, 74, 46, 0.08); color: var(--clay-deep);
    padding: 2px 8px; border-radius: 2px; margin-left: 8px; vertical-align: 2px;
  }
  .rapsodo-stack {
    padding: 48px 72px; border-top: 1px solid var(--rule);
    border-bottom: 1px solid var(--rule); background: var(--paper-deep);
    display: grid; grid-template-columns: 140px 1fr; gap: 48px;
  }
  .rapsodo-stack-list { display: flex; flex-wrap: wrap; gap: 8px 16px; }
  .rapsodo-stack-list span {
    font-family: 'JetBrains Mono', monospace; font-size: 12px;
    color: var(--ink-soft); padding: 6px 12px;
    border: 1px solid rgba(22, 20, 19, 0.18); background: var(--paper);
    letter-spacing: 0.04em;
  }
  .rapsodo-stack-list span.primary {
    border-color: var(--clay); color: var(--clay-deep);
    background: rgba(176, 74, 46, 0.05); font-weight: 500;
  }
  .rapsodo-close { padding: 56px 72px 64px; display: grid; grid-template-columns: 140px 1fr; gap: 48px; }
  .rapsodo-close-body {
    font-family: 'Fraunces', serif; font-size: 22px; line-height: 1.4;
    color: var(--ink); font-weight: 350; letter-spacing: -0.01em; margin: 0;
  }
  .rapsodo-close-body em { color: var(--clay-deep); font-style: italic; }
  .rapsodo-footer {
    padding: 24px 72px; background: var(--ink); color: var(--paper);
    font-family: 'JetBrains Mono', monospace; font-size: 10px;
    letter-spacing: 0.18em; text-transform: uppercase;
    display: flex; justify-content: space-between;
  }
  .rapsodo-footer a { color: var(--paper); text-decoration: none; }
  .rapsodo-footer a:hover { color: var(--clay); }
  .rapsodo-footer .accent { color: var(--clay); }
  .rapsodo-stamp {
    position: absolute; top: 80px; right: 60px; width: 110px; height: 110px;
    border: 2px solid var(--clay); border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    transform: rotate(-12deg); opacity: 0.85; pointer-events: none;
  }
  .rapsodo-stamp-inner {
    text-align: center; color: var(--clay);
    font-family: 'JetBrains Mono', monospace; font-size: 9px;
    letter-spacing: 0.12em; line-height: 1.3; text-transform: uppercase; font-weight: 500;
  }
  .rapsodo-stamp-inner .big {
    font-family: 'Fraunces', serif; font-size: 14px; font-weight: 500;
    letter-spacing: 0; text-transform: none; font-style: italic;
    display: block; margin: 2px 0;
  }
  @media (max-width: 768px) {
    .rapsodo-root { padding: 16px 8px; }
    .rapsodo-header, .rapsodo-thesis, .rapsodo-frame, .rapsodo-work,
    .rapsodo-stack, .rapsodo-close, .rapsodo-footer {
      padding-left: 28px; padding-right: 28px;
    }
    .rapsodo-thesis, .rapsodo-work-intro, .rapsodo-section,
    .rapsodo-stack, .rapsodo-close {
      grid-template-columns: 1fr; gap: 16px;
    }
    .rapsodo-display-name { font-size: 44px; }
    .rapsodo-thesis-body { font-size: 20px; }
    .rapsodo-frame-grid { grid-template-columns: 1fr; gap: 24px; }
    .rapsodo-arrow { transform: rotate(90deg); }
    .rapsodo-stamp { top: 24px; right: 24px; width: 80px; height: 80px; }
  }
`;
