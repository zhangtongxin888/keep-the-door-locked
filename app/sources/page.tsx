import type { Metadata } from "next";
import { NextGuide, Tip } from "../_components/GuideComponents";
import { ArticleShell } from "../_components/SiteChrome";
import { sourceLinks } from "../lib/site";

export const metadata: Metadata = {
  title: "Sources and Verification Policy",
  description: "See the Roblox APIs, game page, gameplay walkthrough, timestamps, and evidence limits used by the Keep the Door Locked Wiki.",
  alternates: { canonical: "/sources/" },
  openGraph: { title: "Keep the Door Locked Sources", description: "Every source and evidence limit behind the guide.", url: "/sources/", type: "article", images: ["/game-icon.png"] },
  twitter: { card: "summary_large_image", title: "Keep the Door Locked Sources", description: "Every source and evidence limit behind the guide.", images: ["/game-icon.png"] },
};

export default function SourcesPage() {
  return (
    <ArticleShell eyebrow="Sources" title="What we checked—and what we did not assume" description="Game facts age quickly. This page makes the source, date, and strength of every important claim easy to audit.">
      <div className="wrap article-layout">
        <aside className="article-toc"><strong>On this page</strong><a href="#primary">Primary data</a><a href="#gameplay">Gameplay evidence</a><a href="#limits">Limits</a></aside>
        <article className="article-content">
          <section id="primary"><p className="section-kicker">First-party</p><h2>Roblox sources</h2><div className="source-list"><a href={sourceLinks.roblox} target="_blank" rel="noreferrer"><span>Official experience page</span><strong>Game identity and public description ↗</strong></a><a href={sourceLinks.gameApi} target="_blank" rel="noreferrer"><span>Roblox game API</span><strong>Creator, max players, dates, genre, and IDs ↗</strong></a><a href={sourceLinks.badges} target="_blank" rel="noreferrer"><span>Roblox badges API</span><strong>Ending and encounter badge descriptions ↗</strong></a></div><p>These endpoints were checked on <strong>August 19, 2026</strong>. Universe ID: <code>10232686472</code>. Root place ID: <code>124338404742585</code>.</p></section>
          <section id="gameplay"><p className="section-kicker">Reproducible walkthroughs</p><h2>First-night briefing and current room events</h2><p>The spoken tutorial and front-desk calls were checked against <a href={sourceLinks.walkthrough} target="_blank" rel="noreferrer">TheKacperosEN’s full walkthrough</a>, published August 5, 2026. It supports the peephole/camera check, strange-speech warning, closed curtain, tapping window response, left-hall breaker route, group sleep rule, and ten-day structure shown in that run.</p><p>Because Roblox’s API says the experience was updated on August 18, camera checks, the staged window threat, and the safe-guest sleep rule were cross-checked again against an <a href={sourceLinks.recentGuide} target="_blank" rel="noreferrer">August 18 anomaly guide</a>. The left-hall breaker route remains versioned to the August 5 in-game front-desk call.</p><Tip label="Evidence strength"><p>A video is evidence for what appeared in that recorded version. It is not a promise that every server or future update behaves identically; the current in-game briefing takes priority.</p></Tip></section>
          <section id="limits"><p className="section-kicker">Explicit limits</p><h2>Claims this wiki does not make</h2><ul className="check-list negative"><li>No complete anomaly roster without reproducible evidence.</li><li>No invented spawn locations or exact special-ending routes.</li><li>No code rewards or redemption steps from conflicting third-party lists.</li><li>No claim that a badge description fully explains its mechanic.</li><li>No guarantee that August 2026 rules survive a later game update.</li></ul></section>
          <NextGuide eyebrow="Back to the main path" title="Start the beginner guide" text="Use the verified facts in the order the opening night presents them." href="/beginner-guide/" />
        </article>
      </div>
    </ArticleShell>
  );
}
