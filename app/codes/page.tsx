import type { Metadata } from "next";
import Link from "next/link";
import { NextGuide, Tip } from "../_components/GuideComponents";
import { ArticleShell } from "../_components/SiteChrome";

export const metadata: Metadata = {
  title: { absolute: "Keep the Door Locked Codes (November 2026): H4ppyHalloween!! & Cash" },
  description: "Keep the Door Locked codes rechecked 17 November 2026: MoreCash, H4ppyHalloween!!, DigitalJester, Cash, HideCloset and TheMaze are listed working by two sources. Other strings remain disputed or expired.",
  alternates: { canonical: "/codes/" },
  openGraph: { title: "Keep the Door Locked Codes (November 2026)", description: "Cross-checked codes, rewards, and redeem steps, including H4ppyHalloween!!.", url: "/codes/", type: "article", images: ["/game-icon.png"] },
  twitter: { card: "summary_large_image", title: "Keep the Door Locked Codes (November 2026)", description: "Cross-checked codes, rewards, and redeem steps, including H4ppyHalloween!!.", images: ["/game-icon.png"] },
};

const active = [
  ["MoreCash", "7,500 Cash"],
  ["H4ppyHalloween!!", "Free Spin"],
  ["DigitalJester", "2,000 Cash and 1 Jumpscare Token"],
  ["Cash", "5,000 Cash"],
  ["HideCloset", "7,500 Cash"],
  ["TheMaze", "7,500 Cash"],
];

const disputed = [
  ["Wawa", "10,000 Cash (both sources). GamesRadar+ (2 November 2026) still lists it as active; Roblox Den (17 November 2026) marks it Check."],
  ["NewVA!", "5,000 Cash. GamesRadar+ lists it as active; Roblox Den marks it Check."],
  ["Moth", "Reward wording disagrees: GamesRadar+ lists Free Spin; Roblox Den lists 1 Random Set. GamesRadar+ lists it as active; Roblox Den marks it Check."],
  ["FREESKIN", "GamesRadar+: Free Spin, listed active. Roblox Den: Free Spin for a random Skin, marked Check."],
  ["ROOMCUSTOM", "15,000 Cash. GamesRadar+ lists it as active; Roblox Den marks it Check."],
  ["ENDING5", "5,000 Cash. GamesRadar+ lists it as active; Roblox Den marks it Check."],
  ["NEWUISOON", "5,000 Cash. GamesRadar+ lists it as active; Roblox Den marks it Check."],
  ["MEDAL_QUEST", "1,000 Cash. GamesRadar+ lists it in its expired section; Roblox Den marks it Check. Not treated as confirmed expired."],
  ["BLOODMOON!", "10,000 Cash and 1 Jumpscare Token. GamesRadar+ lists it as expired; Roblox Den marks it Check. Not treated as confirmed expired."],
  ["BLOODMOON", "Roblox Den marks this spelling as Check. GamesRadar+’s expired list shows BLOODMOON! with the exclamation mark, so the two strings are not collapsed."],
];

const expired = ["ROOM!", "FREECASH", "VISITS8MIL", "FIRST_CODE"];

const faqs: [string, string][] = [
  ["What are the newest Keep the Door Locked codes?", "As of 17 November 2026, the newest strings listed as working by both GamesRadar+ (updated 2 November 2026) and Roblox Den (last checked 17 November 2026) are MoreCash (7,500 Cash), H4ppyHalloween!! (Free Spin) and DigitalJester (2,000 Cash and 1 Jumpscare Token). Cash, HideCloset and TheMaze are also in both working lists."],
  ["Is there a Keep the Door Locked Halloween code?", "Yes. H4ppyHalloween!! is listed as working by both GamesRadar+ and Roblox Den, with a Free Spin reward. This page does not treat a Halloween code as tested in-game."],
  ["Are Keep the Door Locked codes case-sensitive?", "GamesRadar+ says codes are now case-sensitive, so type each string exactly, including capital letters and punctuation such as the !! in H4ppyHalloween!! and the ! in NewVA!."],
  ["Why is my code not working?", "It may have expired, already been redeemed, or been typed with the wrong spelling or spacing. Check the working, disputed and expired sections on this page, then join a fresh server and try again. We did not playtest redemptions."],
  ["Do codes unlock endings?", "No public source used for this page says codes unlock endings. Endings on this site are still treated as in-run goals tied to official Roblox badges."],
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export default function CodesPage() {
  return (
    <ArticleShell eyebrow="Codes · checked 17 November 2026" title="Keep the Door Locked codes" description="Only codes that at least two independent November sources list as working appear in the active table. Conflicting or single-source statuses are shown separately. Compiled by the Editorial Team; we did not playtest redemptions.">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="wrap article-layout">
        <aside className="article-toc"><strong>On this page</strong><a href="#active">Active codes</a><a href="#maybe">Sources disagree</a><a href="#redeem">How to redeem</a><a href="#expired">Expired</a><a href="#codes-faq">FAQ</a></aside>
        <article className="article-content">
          <section id="active"><p className="section-kicker">Working now</p><h2>Active Keep the Door Locked codes</h2><div className="badge-table" aria-label="Active codes"><div><strong>Code</strong><strong>Reward</strong></div>{active.map(([code, reward]) => <div key={code}><span><code>{code}</code></span><span>{reward}</span></div>)}</div><p>Listed as working by both <a href="https://www.gamesradar.com/games/survival/keep-the-door-locked-codes/" target="_blank" rel="noreferrer">GamesRadar+</a> (last updated 2 November 2026) and <a href="https://robloxden.com/game-codes/keep-the-door-locked" target="_blank" rel="noreferrer">Roblox Den</a> (last checked 17 November 2026, 8:12 PM ET). The official Roblox listing still has no code table. Rewards are copied from those two lists where they agree. We did not playtest redemptions.</p></section>
          <section id="maybe"><p className="section-kicker">Sources disagree</p><h2>Codes the November sources do not both confirm</h2><div className="badge-table" aria-label="Disputed codes"><div><strong>Code</strong><strong>Status and reward notes</strong></div>{disputed.map(([code, note]) => <div key={code}><span><code>{code}</code></span><span>{note}</span></div>)}</div><p>None of these is written here as confirmed working or confirmed expired, because GamesRadar+ (2 November 2026) and Roblox Den (17 November 2026) disagree on status, reward wording, or spelling.</p></section>
          <section id="redeem"><p className="section-kicker">Redeem</p><h2>How to redeem codes</h2><ol className="plain-steps"><li>Launch Keep the Door Locked on Roblox and wait in the lobby.</li><li>Open the codes (coupon) button.</li><li>Type the code exactly — codes are case-sensitive.</li><li>Press redeem. If it fails, join a fresh server and retry.</li></ol><Tip label="Spend it well"><p>Cash buys upgrades and room items. It will not skip nights, so keep using the <Link href="/gameplay-loop/">door-check loop</Link>.</p></Tip></section>
          <section id="expired"><p className="section-kicker">Archive</p><h2>Expired codes</h2><p>These four strings appear in GamesRadar+’s expired section (2 November 2026) and are also marked Expired by Roblox Den (17 November 2026): {expired.map((c, i) => <span key={c}><code>{c}</code>{i < expired.length - 1 ? ", " : ""}</span>)}.</p></section>
          <section id="codes-faq"><p className="section-kicker">Codes FAQ</p><h2>Common code questions</h2><div className="faq-list">{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><div>{a}</div></details>)}</div></section>
          <NextGuide eyebrow="Next: endings" title="See all five endings" text="Codes will not unlock endings. Use the official badge clues instead, including the Blood Moon ending." href="/endings/" />
        </article>
      </div>
    </ArticleShell>
  );
}
