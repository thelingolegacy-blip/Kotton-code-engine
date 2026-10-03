type Status = "PASS" | "BLOCKED" | "PENDING" | "DEFINED" | "LOCKED";

type Gate = {
  name: string;
  status: Status;
  detail?: string;
};

const controlChain = [
  "CANON","ARCHITECTURE","CODE","MAIN","CI TRIGGERED",
  "RUNNER ALLOCATION","FIRST GREEN CI","SCHEMA","DASHBOARD V1",
  "APPS","PROMOTION",
];

const runner: Gate[] = [
  { name: "Runner allocation", status: "BLOCKED", detail: "runner_id: 0" },
  { name: "Job assignment", status: "BLOCKED", detail: "none" },
  { name: "Steps instantiated", status: "BLOCKED", detail: "none" },
  { name: "Logs", status: "BLOCKED", detail: "none" },
];

const ci: Gate[] = [
  { name: "CI Bootstrap", status: "PENDING", detail: "First green bootstrap not established" },
  { name: "CI Full", status: "PENDING", detail: "Awaiting bootstrap evidence" },
];

const realms = [
  ["Pancake House", "Comedy · comfort · everyday lessons"],
  ["Spark Forest", "Discovery · curiosity · word learning"],
  ["Dream Kingdoms", "Imagination · emotional intelligence · heart codes"],
];

const episodes = [
  ["KC-001", "The Code Is Born", "Pancake House", "4–8", "Family / discovery", "DEVELOPMENT"],
  ["KC-002", "The Missing Paw", "Spark Forest", "4–8", "Observation / teamwork", "DRAFT"],
  ["KC-003", "The First Glow", "Dream Kingdoms", "4–8", "Memory / legacy", "DRAFT"],
];

function Badge({ status }: { status: Status }) {
  return <span className={`badge badge-${status.toLowerCase()}`}>{status}</span>;
}

function Section({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <section className="dash-section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
        </div>
      </div>
      {children}
    </section>
  );
}

export default function StudioDashboard() {
  return (
    <main className="studio-shell">
      <header className="hero">
        <div>
          <span className="eyebrow">KOTTON'S CODE · STUDIO OS</span>
          <h1>Command Dashboard</h1>
          <p>
            Evidence-first production control. State is displayed; authority is
            earned through verified predicates.
          </p>
        </div>
        <div className="hero-state">
          <span>ENVIRONMENT</span>
          <strong>main</strong>
          <Badge status="BLOCKED" />
        </div>
      </header>

      <Section title="Control" eyebrow="PHASE 1 · OPERATIONALIZATION">
        <div className="control-grid">
          <div className="control-card control-primary">
            <span className="muted">CONTROL-CHAIN POSITION</span>
            <strong>RUNNER ALLOCATION</strong>
            <p>CI cannot advance until runner allocation is independently evidenced.</p>
          </div>
          <div className="control-card">
            <span className="muted">CI STATUS</span>
            <strong>BLOCKED</strong>
            <p>Last observed run failed before step initialization.</p>
          </div>
          <div className="control-card">
            <span className="muted">LAST VERIFIED COMMIT</span>
            <code>6e0687d1…14ed17</code>
            <p>Merge commit for PR #1.</p>
          </div>
          <div className="control-card">
            <span className="muted">PROMOTION</span>
            <strong>LOCKED</strong>
            <p>AppDeploy promotion remains gated.</p>
          </div>
        </div>
      </Section>

      <Section title="Control Chain" eyebrow="TRANSITION AUTHORITY">
        <div className="chain">
          {controlChain.map((gate, index) => (
            <div key={gate} className={`chain-item ${gate === "RUNNER ALLOCATION" ? "active" : ""}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{gate}</strong>
            </div>
          ))}
        </div>
      </Section>

      <div className="two-column">
        <Section title="Runner" eyebrow="G02 · EXECUTION">
          <div className="status-list">
            {runner.map((item) => (
              <div className="status-row" key={item.name}>
                <div><strong>{item.name}</strong><small>{item.detail}</small></div>
                <Badge status={item.status} />
              </div>
            ))}
          </div>
        </Section>

        <Section title="CI Milestones" eyebrow="EVIDENCE">
          <div className="status-list">
            {ci.map((item) => (
              <div className="status-row" key={item.name}>
                <div><strong>{item.name}</strong><small>{item.detail}</small></div>
                <Badge status={item.status} />
              </div>
            ))}
          </div>
        </Section>
      </div>

      <Section title="Realms" eyebrow="WORLD SYSTEM">
        <div className="card-grid">
          {realms.map(([name, description]) => (
            <article className="realm-card" key={name}>
              <span className="realm-mark">KC</span>
              <h3>{name}</h3>
              <p>{description}</p>
              <Badge status="DEFINED" />
            </article>
          ))}
        </div>
      </Section>

      <Section title="Episodes" eyebrow="CONTENT CONTROL">
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>ID</th><th>Title</th><th>Realm</th><th>Age</th><th>Lesson</th><th>State</th></tr>
            </thead>
            <tbody>
              {episodes.map(([id, title, realm, age, lesson, state]) => (
                <tr key={id}>
                  <td><code>{id}</code></td><td>{title}</td><td>{realm}</td>
                  <td>{age}</td><td>{lesson}</td><td><Badge status={state as Status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <div className="two-column">
        <Section title="Approval" eyebrow="GOVERNANCE">
          <div className="approval-chain">
            {["DRAFT","REVIEW","INTEGRITY_CHECK","APPROVED","PUBLISHED","LIVE_VERIFIED"].map((state, index) => (
              <div key={state} className="approval-step">
                <span>{index + 1}</span><strong>{state}</strong>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Schema" eyebrow="FIRESTORE · SPEC ONLY">
          <div className="schema-grid">
            {["realms/{realmId}","episodes/{episodeId}","assets/{assetId}","governance/{governanceId}"].map((item) => (
              <code key={item}>{item}</code>
            ))}
          </div>
          <div className="rule-callout">
            <Badge status="DEFINED" />
            <strong>Authorization remains fail-closed.</strong>
            <span>Data model ≠ authorization.</span>
          </div>
        </Section>
      </div>

      <footer className="footer">
        <span>KOTTON'S CODE · PHASE 1</span>
        <span>Evidence establishes state. Verification establishes transition authority.</span>
      </footer>
    </main>
  );
}
