import type { Metadata } from "next";
import Link from "next/link";
import { NextGuide, Tip } from "../_components/GuideComponents";
import { ArticleShell } from "../_components/SiteChrome";

export const metadata: Metadata = {
  title: "Beginner Guide: Survive Your First Night",
  description: "A verified step-by-step first-night guide for Keep the Door Locked [Anomaly], covering door checks, the curtain, breaker, and sleeping safely.",
  alternates: { canonical: "/beginner-guide/" },
  openGraph: { title: "Keep the Door Locked Beginner Guide", description: "The verified first-night rules, in the order you need them.", url: "/beginner-guide/", type: "article", images: ["/game-icon.png"] },
  twitter: { card: "summary_large_image", title: "Keep the Door Locked Beginner Guide", description: "The verified first-night rules, in the order you need them.", images: ["/game-icon.png"] },
};

const steps = [
  {
    title: "Read the room before the first knock",
    body: "Locate the door check, the window curtain, the bed, and your route into the hall. The first-night briefing refers to both a peephole and a small camera, so use whichever interaction the current room presents.",
  },
  {
    title: "Leave the door locked while you check",
    body: "A knock begins an inspection. Look first and listen to the visitor. The briefing specifically warns that strange speech is evidence the visitor is not a normal person.",
  },
  {
    title: "Keep suspicious visitors outside",
    body: "If the visitor or their story fails your check, do not open. The briefing's instruction is to keep the door shut and wait the event out.",
  },
  {
    title: "Treat window tapping as urgent",
    body: "Keep the curtain closed. If tapping begins, check the window quickly rather than continuing another task and hoping it clears on its own.",
  },
  {
    title: "Reset a power cut from the hall",
    body: "When the lights trip, leave the room and turn left. A later front-desk call in the walkthrough identifies the breaker box in the hall. Reset it promptly, then return to your room routine.",
  },
  {
    title: "Do not sleep by yourself",
    body: "The first-night briefing warns about something in the bathroom and tells players to wait for the others, then sleep together. Make sure the room is full before the group ends the night.",
  },
];

export default function BeginnerGuidePage() {
  return (
    <ArticleShell eyebrow="Beginner guide" title="Your first-night survival plan" description="Six verified actions turn the opening night from a panic test into a repeatable routine. Keep this page open until the room layout feels automatic.">
      <div className="wrap article-layout">
        <aside className="article-toc">
          <strong>On this page</strong>
          <a href="#plan">First-night plan</a><a href="#priority">Priority order</a><a href="#after-night-one">After night one</a>
        </aside>
        <article className="article-content">
          <section id="plan">
            <p className="section-kicker">First-night plan</p>
            <h2>Do these six things in order</h2>
            <ol className="numbered-steps">
              {steps.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.body}</p></div></li>)}
            </ol>
          </section>

          <Tip label="What the game confirms">
            <p>The Roblox description confirms the main test: watch the cameras, follow the rules, and decide who gets inside. The room actions above come from the spoken first-night briefing captured in a full walkthrough; camera checks, window response, and group sleep were cross-checked again in an August 18 guide.</p>
          </Tip>

          <section id="priority">
            <p className="section-kicker">When two things happen</p>
            <h2>Use a simple priority order</h2>
            <div className="priority-list">
              <div><span>1</span><h3>Immediate room cue</h3><p>Respond to window tapping or a power cut promptly; both receive urgency in the in-game briefing.</p></div>
              <div><span>2</span><h3>Locked-door check</h3><p>Never shortcut the peephole or camera step because another event distracted you.</p></div>
              <div><span>3</span><h3>Group sleep</h3><p>End the night only after the others are together in the room.</p></div>
            </div>
          </section>

          <section id="after-night-one">
            <p className="section-kicker">After night one</p>
            <h2>Expect pressure to increase</h2>
            <p>A second-night front-desk call in the verified walkthrough says the same door rule continues and that the situation gets worse the longer you stay. Keep the routine unchanged even when new distractions arrive.</p>
            <ul className="check-list">
              <li>Reconfirm the room layout at the start of each day.</li>
              <li>Use the same observe–check–decide order at every knock.</li>
              <li>Pick one later goal instead of chasing every badge at once.</li>
            </ul>
          </section>

          <Tip label="Version note" tone="warning">
            <p>The game is actively updated. Roblox data was checked on August 19, 2026; gameplay guidance was checked against August 5 and August 18 recordings. If the current briefing contradicts a line here, follow the in-game rule.</p>
          </Tip>

          <p className="source-line">Want the evidence behind each claim? <Link href="/sources/">See sources and verification notes.</Link></p>
          <NextGuide eyebrow="Next: make it automatic" title="Learn the gameplay loop" text="Turn the first-night checklist into a short decision cycle you can repeat under pressure." href="/gameplay-loop/" />
        </article>
      </div>
    </ArticleShell>
  );
}
