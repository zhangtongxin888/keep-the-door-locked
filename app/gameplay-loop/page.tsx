import type { Metadata } from "next";
import { LoopSteps, NextGuide, Tip } from "../_components/GuideComponents";
import { ArticleShell } from "../_components/SiteChrome";

export const metadata: Metadata = {
  title: "Gameplay Loop: How Every Knock Works",
  description: "Master the core Keep the Door Locked gameplay loop: keep the door shut, observe, compare the rules, decide, and reset for the next event.",
  alternates: { canonical: "/gameplay-loop/" },
  openGraph: { title: "Keep the Door Locked Gameplay Loop", description: "A calm decision loop for every knock and night event.", url: "/gameplay-loop/", type: "article", images: ["/game-icon.png"] },
  twitter: { card: "summary_large_image", title: "Keep the Door Locked Gameplay Loop", description: "A calm decision loop for every knock and night event.", images: ["/game-icon.png"] },
};

export default function GameplayLoopPage() {
  return (
    <ArticleShell eyebrow="Gameplay loop" title="Observe. Check. Decide. Reset." description="The game creates tension by mixing urgent room events with uncertain visitors. A fixed loop keeps those moments separate and manageable.">
      <div className="wrap article-layout">
        <aside className="article-toc"><strong>On this page</strong><a href="#loop">Core loop</a><a href="#reset">Reset step</a><a href="#progress">Progression</a></aside>
        <article className="article-content">
          <section id="loop"><p className="section-kicker">Core loop</p><h2>Use the same four checks every time</h2><LoopSteps /></section>
          <Tip><p>The official game description directly supports this loop: strangers knock, some need help, some lie, and players must watch the cameras, follow the rules, and decide who gets inside.</p></Tip>
          <section id="reset">
            <p className="section-kicker">The missing fifth step</p><h2>Reset your attention after the choice</h2>
            <p>Once a door event ends, immediately re-scan the room state. The first-night briefing establishes two separate urgent cues—window tapping and a power cut—so finishing a visitor check does not mean the room is safe to ignore.</p>
            <div className="mini-grid">
              <div><span>Window</span><h3>Curtain closed</h3><p>Listen for tapping and check it quickly when it begins.</p></div>
              <div><span>Power</span><h3>Lights active</h3><p>If they trip, use the hall breaker reached by turning left.</p></div>
              <div><span>Group</span><h3>Players together</h3><p>Do not start the sleep step alone.</p></div>
            </div>
          </section>
          <section id="progress"><p className="section-kicker">Progression</p><h2>Your first major target is ten days</h2><p>The official <strong>ENDING 1</strong> badge says, “You got through 10 days!” That makes a ten-day survival run the clearest verified baseline goal. The other ending badges point to special discoveries and choices, so save those for a run where the base loop already feels reliable.</p></section>
          <NextGuide eyebrow="Next: remove avoidable losses" title="Fix the common mistakes" text="See where new players break the loop and how to recover without inventing unverified mechanics." href="/mistakes/" />
        </article>
      </div>
    </ArticleShell>
  );
}
