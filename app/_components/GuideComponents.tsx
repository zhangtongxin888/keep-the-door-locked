import Link from "next/link";

export function GuideCard({ number, title, description, href, label }: { number: string; title: string; description: string; href: string; label: string; }) {
  return <article className="guide-card"><span className="card-number">{number}</span><h3>{title}</h3><p>{description}</p><Link href={href} aria-label={`${label}: ${title}`}>{label} <span aria-hidden="true">→</span></Link></article>;
}

export function LoopSteps() {
  const steps = [
    ["01", "Keep it locked", "A knock is a prompt to investigate, not permission to open."],
    ["02", "Observe", "Use the peephole or camera and listen to what the visitor says."],
    ["03", "Check the rules", "Treat strange speech or a rule mismatch as a warning."],
    ["04", "Decide", "Let a verified visitor in or keep the door shut and wait it out."],
  ];
  return <ol className="loop-steps">{steps.map(([number, title, itemText], index) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{itemText}</p></div>{index < steps.length - 1 && <i aria-hidden="true">→</i>}</li>)}</ol>;
}

export function Tip({ label = "Verified tip", tone = "tip", children }: { label?: string; tone?: "tip" | "warning"; children: React.ReactNode; }) {
  return <aside className={`callout ${tone}`}><strong>{label}</strong><div>{children}</div></aside>;
}

export function SourceNote({ children }: { children: React.ReactNode }) { return <aside className="source-note">{children}</aside>; }

export function NextGuide({ eyebrow, title, text: description, href }: { eyebrow: string; title: string; text: string; href: string; }) {
  return <aside className="next-guide"><div><span>{eyebrow}</span><h2>{title}</h2><p>{description}</p></div><Link className="button button-primary" href={href}>Continue <span aria-hidden="true">→</span></Link></aside>;
}
