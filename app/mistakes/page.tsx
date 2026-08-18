import type { Metadata } from "next";
import Link from "next/link";
import { NextGuide, Tip } from "../_components/GuideComponents";
import { ArticleShell } from "../_components/SiteChrome";

export const metadata: Metadata = {
  title: "Common Mistakes and Safer Habits",
  description: "Avoid the most common Keep the Door Locked beginner mistakes: opening too fast, skipping checks, missing room events, and sleeping alone.",
  alternates: { canonical: "/mistakes/" },
  openGraph: { title: "Keep the Door Locked Common Mistakes", description: "Five safer habits for more consistent hotel runs.", url: "/mistakes/", type: "article", images: ["/game-icon.png"] },
  twitter: { card: "summary_large_image", title: "Keep the Door Locked Common Mistakes", description: "Five safer habits for more consistent hotel runs.", images: ["/game-icon.png"] },
};

const mistakes = [
  ["Opening because the story sounds urgent", "The official description says some visitors need help and some are lying. Urgency is not proof.", "Keep the door locked while you check the peephole or camera and compare the visitor with the rules."],
  ["Checking only the face", "The first-night briefing also tells you to listen for strange speech.", "Use both what you see and what you hear before making the choice."],
  ["Leaving the curtain open", "The briefing explicitly says to keep it closed and react when tapping starts.", "Reset the curtain after a check, then keep listening."],
  ["Freezing during a power cut", "A verified front-desk call gives a route: into the hall, then left to the breaker box.", "Learn that turn before pressure begins and return promptly after the reset."],
  ["Starting the sleep step alone", "The briefing warns players to wait for the others and sleep together.", "Count the group in the room before ending the night."],
];

export default function MistakesPage() {
  return (
    <ArticleShell eyebrow="Common mistakes" title="Five habits that quietly break a run" description="Most early losses begin before the final choice: a skipped check, a forgotten curtain, or a group that ends the night too soon.">
      <div className="wrap article-layout">
        <aside className="article-toc"><strong>On this page</strong><a href="#mistakes">Five mistakes</a><a href="#recovery">Recovery routine</a></aside>
        <article className="article-content">
          <section id="mistakes"><p className="section-kicker">Mistake → safer habit</p><h2>Protect the routine, not the guess</h2><div className="mistake-list">{mistakes.map(([title, why, fix], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{why}</p><strong>Do this instead</strong><p>{fix}</p></div></article>)}</div></section>
          <section id="recovery"><p className="section-kicker">Recovery routine</p><h2>When you lose track, return to three facts</h2><ol className="plain-steps"><li>The door stays locked until the check is complete.</li><li>The room can create its own urgent cues.</li><li>The group sleeps together, not one player at a time.</li></ol><p>Do not fill a memory gap with a made-up anomaly rule. Return to the current in-game briefing, then use the <Link href="/beginner-guide/">beginner guide</Link> to rebuild your sequence.</p></section>
          <Tip label="Avoid outdated code lists" tone="warning"><p>Public pages currently disagree about whether the experience has a working code system. This wiki does not publish codes or redemption steps without a reliable in-game or official source.</p></Tip>
          <NextGuide eyebrow="Next: choose a later goal" title="Read the verified ending clues" text="Use Roblox's own badge descriptions to plan what to investigate after your standard run is stable." href="/endings/" />
        </article>
      </div>
    </ArticleShell>
  );
}
