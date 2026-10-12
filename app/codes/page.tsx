import type { Metadata } from "next";
import Link from "next/link";
import { NextGuide, Tip } from "../_components/GuideComponents";
import { ArticleShell } from "../_components/SiteChrome";

export const metadata: Metadata = {
  title: { absolute: "Keep the Door Locked Codes (October 2026): Cash Rewards" },
  description: "Working Keep the Door Locked codes for October 2026 — Cash, HideCloset and TheMaze — with rewards, how to redeem, and codes that may be expired.",
  alternates: { canonical: "/codes/" },
  openGraph: { title: "Keep the Door Locked Codes (October 2026)", description: "Cross-checked codes, rewards, and redeem steps.", url: "/codes/", type: "article", images: ["/game-icon.png"] },
  twitter: { card: "summary_large_image", title: "Keep the Door Locked Codes (October 2026)", description: "Cross-checked codes, rewards, and redeem steps.", images: ["/game-icon.png"] },
};

const active = [
  ["Cash", "5,000 Cash"],
  ["HideCloset", "7,500 Cash"],
  ["TheMaze", "7,500 Cash"],
];

const disputed = ["NewVA!", "Wawa", "Moth", "FREESKIN", "ROOMCUSTOM", "ENDING5", "NEWUISOON"];
const expired = ["MEDAL_QUEST", "BLOODMOON!", "ROOM!", "FREECASH", "VISITS8MIL", "FIRST_CODE"];

const faqs: [string, string][] = [
  ["What are the newest Keep the Door Locked codes?", "Cash, HideCloset and TheMaze are listed as working by two independent code trackers checked on October 11, 2026."],
  ["Are Keep the Door Locked codes case-sensitive?", "Yes. Type each code exactly as shown, including capital letters and punctuation such as the ! in NewVA!."],
  ["Why is my code not working?", "It may have expired, or your server may be running an older version. Check the spelling, then join a fresh server and try again."],
  ["Do codes unlock endings?", "No. Codes give Cash or skin spins. Endings are tied to official Roblox badges and must be earned in a run."],
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export default function CodesPage() {
  return (
    <ArticleShell eyebrow="Codes · checked October 11, 2026" title="Keep the Door Locked codes" description="Only codes that at least two independent trackers list as working appear in the active table. Conflicting codes are shown separately.">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="wrap article-layout">
        <aside className="article-toc"><strong>On this page</strong><a href="#active">Active codes</a><a href="#maybe">May be expired</a><a href="#redeem">How to redeem</a><a href="#expired">Expired</a><a href="#codes-faq">FAQ</a></aside>
        <article className="article-content">
          <section id="active"><p className="section-kicker">Working now</p><h2>Active Keep the Door Locked codes</h2><div className="badge-table" aria-label="Active codes"><div><strong>Code</strong><strong>Reward</strong></div>{active.map(([code, reward]) => <div key={code}><span><code>{code}</code></span><span>{reward}</span></div>)}</div><p>Cross-checked against <a href="https://www.pcgamesn.com/keep-the-door-locked-codes" target="_blank" rel="noreferrer">PCGamesN</a> (updated September 28, 2026) and <a href="https://www.gamesradar.com/games/survival/keep-the-door-locked-codes/" target="_blank" rel="noreferrer">GamesRadar+</a> (updated October 2, 2026). No new code has been announced since late September.</p></section>
          <section id="maybe"><p className="section-kicker">Sources disagree</p><h2>Codes that may be expired</h2><p>These still appear as active on some lists but as expired on others. They are worth one try each: {disputed.map((c, i) => <span key={c}><code>{c}</code>{i < disputed.length - 1 ? ", " : "."}</span>)}</p></section>
          <section id="redeem"><p className="section-kicker">Redeem</p><h2>How to redeem codes</h2><ol className="plain-steps"><li>Launch Keep the Door Locked on Roblox and wait in the lobby.</li><li>Open the codes (coupon) button.</li><li>Type the code exactly — codes are case-sensitive.</li><li>Press redeem. If it fails, join a fresh server and retry.</li></ol><Tip label="Spend it well"><p>Cash buys upgrades and room items. It will not skip nights, so keep using the <Link href="/gameplay-loop/">door-check loop</Link>.</p></Tip></section>
          <section id="expired"><p className="section-kicker">Archive</p><h2>Expired codes</h2><p>{expired.map((c, i) => <span key={c}><code>{c}</code>{i < expired.length - 1 ? ", " : ""}</span>)}</p></section>
          <section id="codes-faq"><p className="section-kicker">Codes FAQ</p><h2>Common code questions</h2><div className="faq-list">{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><div>{a}</div></details>)}</div></section>
          <NextGuide eyebrow="Next: endings" title="See all five endings" text="Codes will not unlock endings. Use the official badge clues instead, including the Blood Moon ending." href="/endings/" />
        </article>
      </div>
    </ArticleShell>
  );
}
