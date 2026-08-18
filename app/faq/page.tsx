import type { Metadata } from "next";
import Link from "next/link";
import { NextGuide } from "../_components/GuideComponents";
import { ArticleShell } from "../_components/SiteChrome";

export const metadata: Metadata = {
  title: "FAQ: Multiplayer, Codes, Endings, and Updates",
  description: "Verified answers about Keep the Door Locked [Anomaly], including multiplayer capacity, creator, codes, endings, updates, and source freshness.",
  alternates: { canonical: "/faq/" },
  openGraph: { title: "Keep the Door Locked FAQ", description: "Verified answers without rumor or filler.", url: "/faq/", type: "article", images: ["/game-icon.png"] },
  twitter: { card: "summary_large_image", title: "Keep the Door Locked FAQ", description: "Verified answers without rumor or filler.", images: ["/game-icon.png"] },
};

const faqs = [
  ["What do I do first?", <>Keep the door locked and begin with the <Link href="/beginner-guide/">first-night guide</Link>. A knock starts an inspection, not an automatic open.</>],
  ["What is the core objective?", <>The official description says to watch the cameras, follow the rules, and decide who gets inside. The <Link href="/gameplay-loop/">gameplay loop</Link> turns that into four repeatable steps.</>],
  ["Is Keep the Door Locked multiplayer?", <>Yes. Roblox’s public game API listed a maximum of 20 players when checked on August 19, 2026. The in-game first-night briefing also tells players to wait for others before sleeping.</>],
  ["Who made the game?", <>Roblox’s public game API lists the creator as the group <strong>Hotel Room Services</strong>.</>],
  ["How many endings are confirmed?", <>Four ending badges were active in Roblox’s public badge API when checked. See the <Link href="/endings/">verified ending clues</Link>.</>],
  ["Are there working codes?", <>This wiki cannot reliably confirm a code system or current rewards. Public third-party pages conflict, so we do not publish redemption instructions as fact.</>],
  ["What happens when sanity reaches zero?", <>Roblox has a “Losing It” badge for letting sanity hit zero, but the public badge text does not confirm the full penalty. We do not label it a fixed death, currency loss, or restart without stronger evidence.</>],
  ["Will the game get more content?", <>The official game description currently says more content will be added, but it gives no feature list or release date.</>],
  ["Is this an official wiki?", <>No. This is an independent fan guide and is not affiliated with Roblox or Hotel Room Services. Read the <Link href="/sources/">verification policy</Link> for evidence details.</>],
];

export default function FaqPage() {
  return (
    <ArticleShell eyebrow="FAQ" title="Quick answers, with the evidence attached" description="If a public source does not support an answer, this page says so instead of filling the gap with a guess.">
      <div className="wrap article-layout">
        <aside className="article-toc"><strong>On this page</strong><a href="#questions">Questions</a><a href="#still-stuck">Still stuck?</a></aside>
        <article className="article-content">
          <section id="questions"><p className="section-kicker">Frequently asked</p><h2>What players can verify today</h2><div className="faq-list">{faqs.map(([question, answer]) => <details key={question as string}><summary>{question}</summary><div>{answer}</div></details>)}</div></section>
          <section id="still-stuck"><p className="section-kicker">Still stuck?</p><h2>Return to the current decision</h2><p>For a live run, narrow the problem: is it a visitor check, a window cue, a power cut, or the sleep step? Then open the matching part of the <Link href="/beginner-guide/">beginner guide</Link>. Avoid jumping to an unverified all-anomalies list.</p></section>
          <NextGuide eyebrow="See how facts were checked" title="Review sources and scope" text="Open the first-party endpoints, walkthrough evidence, update dates, and explicit limits behind this guide." href="/sources/" />
        </article>
      </div>
    </ArticleShell>
  );
}
