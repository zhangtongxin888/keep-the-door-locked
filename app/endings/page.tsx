import type { Metadata } from "next";
import Link from "next/link";
import { NextGuide, Tip } from "../_components/GuideComponents";
import { ArticleShell } from "../_components/SiteChrome";

export const metadata: Metadata = {
  title: "All 5 Endings and Badge Clues (Blood Moon Included)",
  description: "All five Keep the Door Locked ending clues confirmed by official Roblox badges, with no invented walkthrough steps.",
  alternates: { canonical: "/endings/" },
  openGraph: { title: "Keep the Door Locked Endings", description: "Five official badge clues and what they safely confirm.", url: "/endings/", type: "article", images: ["/game-icon.png"] },
  twitter: { card: "summary_large_image", title: "Keep the Door Locked Endings", description: "Five official badge clues and what they safely confirm.", images: ["/game-icon.png"] },
};

const endings = [
  ["ENDING 1", "You got through 10 days!", "A complete ten-day survival run is tied to the first ending badge."],
  ["ENDING 2", "You found the golden skeleton!", "A golden skeleton discovery is tied to the second ending badge; the official data does not reveal its location."],
  ["ENDING 3", "You accepted strange key from a strange grandma.", "Accepting a key from the grandma is tied to the third ending badge; timing and prerequisites are not stated."],
  ["ENDING 4", "Trust a man with his katana. But something was already standing there, watching you, waiting to run.", "Trusting the katana-carrying man is the official clue. Roblox's badge text does not provide a safe step-by-step route."],
  ["ENDING 5", "Blood Moon Ending", "Added on August 21, 2026. It is tied to the Blood Moon event; the badge text gives no further route details."],
];

export default function EndingsPage() {
  return (
    <ArticleShell eyebrow="Endings" title="Five endings, five verified clues" description="These are the exact directions Roblox's public badge data supports. Anything more specific would need fresh, reproducible gameplay evidence.">
      <div className="wrap article-layout">
        <aside className="article-toc"><strong>On this page</strong><a href="#ending-clues">Ending clues</a><a href="#other-badges">Other badges</a><a href="#route">Suggested route</a></aside>
        <article className="article-content">
          <section id="ending-clues"><p className="section-kicker">Official badge data</p><h2>What each ending badge confirms</h2><div className="ending-grid">{endings.map(([name, clue, meaning], index) => <article key={name}><span>0{index + 1}</span><div><p>{name}</p><h3>“{clue}”</h3><small>{meaning}</small></div></article>)}</div></section>
          <Tip label="Spoiler boundary"><p>Badge descriptions are clues, not complete solutions. This page intentionally does not invent spawn locations, day requirements, dialogue options, or item routes that Roblox’s data does not state.</p></Tip>
          <section id="other-badges"><p className="section-kicker">Confirmed encounters</p><h2>Useful goals outside the five endings</h2><div className="badge-table" aria-label="Other verified badges"><div><strong>Badge</strong><strong>Official clue</strong></div>{[["Three Strikes", "Checked the window while the window anomaly is on stage 3."],["Caught You Looking", "Spotted the room hider for the first time."],["Door Held", "Survived the door breaker."],["Not Today", "Banished the shadow figure."],["Losing It", "Let your sanity hit 0 for the first time."],["The Dream Room", "Entered the Dream Room for the first time."]].map(([name, clue]) => <div key={name}><span>{name}</span><span>{clue}</span></div>)}</div></section>
          <section id="route"><p className="section-kicker">Suggested progression</p><h2>Pick the lowest-guesswork goal first</h2><ol className="plain-steps"><li>Stabilize your first nights with the <Link href="/beginner-guide/">beginner guide</Link>.</li><li>Target the ten-day Ending 1 badge.</li><li>Use visible encounter badges to learn one threat at a time.</li><li>Investigate the special endings only when you can reproduce their clue safely.</li></ol></section>
          <NextGuide eyebrow="Next: quick answers" title="Open the FAQ" text="Check multiplayer limits, game ownership, codes, data freshness, and what this wiki can and cannot confirm." href="/faq/" />
        </article>
      </div>
    </ArticleShell>
  );
}
