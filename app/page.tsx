import type { Metadata } from "next";
import Link from "next/link";
import { GuideCard, LoopSteps, SourceNote } from "./_components/GuideComponents";
import { SiteFooter, SiteHeader } from "./_components/SiteChrome";
import { SITE_URL } from "./lib/site";

export const metadata: Metadata = {
  title: { absolute: "Keep the Door Locked Wiki: Codes, 5 Endings & Survival Guide" },
  description:
    "Keep the Door Locked guide for October 2026: working codes, all five endings including Blood Moon, the door-check routine, and common mistakes.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Keep the Door Locked — Beginner Survival Guide",
    description:
      "A fact-checked first-night path: rules, cameras, decisions, and survival priorities.",
    url: SITE_URL,
    images: [{ url: "/og.png", width: 1730, height: 909, alt: "Keep the Door Locked beginner survival guide" }],
  },
};

const guideCards = [
  {
    number: "01",
    title: "Beginner guide",
    description:
      "Learn the verified first-night rules in the order the game teaches them.",
    href: "/beginner-guide/",
    label: "Start here",
  },
  {
    number: "02",
    title: "Gameplay loop",
    description:
      "Turn every knock into the same calm observe–check–decide routine.",
    href: "/gameplay-loop/",
    label: "Learn the loop",
  },
  {
    number: "03",
    title: "Common mistakes",
    description:
      "Avoid the rushed choices and missed room events that end new runs.",
    href: "/mistakes/",
    label: "Fix your run",
  },
  {
    number: "04",
    title: "All 5 endings",
    description:
      "Official badge clues for every ending, including the Blood Moon ending.",
    href: "/endings/",
    label: "Plan the next goal",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="ambient-door" aria-hidden="true">
            <span className="door-light" />
            <span className="door-number">10</span>
            <span className="peephole" />
            <span className="door-handle" />
          </div>
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Fan-made, fact-checked guide</p>
              <h1 id="hero-title">Keep the Door Locked guide: survive every night, find all 5 endings.</h1>
              <p className="hero-lede">
                Keep the door locked, verify every visitor, and handle room
                events before they escalate. This path starts with the rules the
                game actually teaches.
              </p>
              <div className="button-row">
                <Link className="button button-primary" href="/beginner-guide/">
                  Start the beginner guide <span aria-hidden="true">→</span>
                </Link>
                <Link className="button button-secondary" href="#quick-start">
                  See the 60-second plan
                </Link>
              </div>
              <div className="trust-row" aria-label="Guide scope">
                <span>Roblox data checked October 11, 2026</span>
                <span>Game ID 124338404742585</span>
              </div>
            </div>

            <aside className="start-path" aria-labelledby="path-title">
              <div className="path-heading">
                <span className="status-dot" aria-hidden="true" />
                <h2 id="path-title">Your reading path</h2>
              </div>
              <ol>
                {guideCards.map((card, index) => (
                  <li key={card.href} className={index === 0 ? "active" : ""}>
                    <Link href={card.href}>
                      <span>{card.number}</span>
                      <strong>{card.title}</strong>
                      <small>{index === 0 ? "Start here" : "Next"}</small>
                    </Link>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </section>

        <section className="section compact-section" id="updates" aria-labelledby="updates-title">
          <div className="wrap">
            <SourceNote>
              <div>
                <p className="eyebrow">October 2026 status</p>
                <h2 id="updates-title">What changed recently</h2>
                <ul className="check-list">
                  <li>Roblox shows the last game update on September 9, 2026; the game still has 2,000+ players online.</li>
                  <li>New codes <strong>Cash</strong>, <strong>HideCloset</strong> and <strong>TheMaze</strong> arrived in September — see the <Link href="/codes/">codes page</Link>.</li>
                  <li>ENDING 5 (Blood Moon Ending) was added on August 21, bringing the total to five endings — see <Link href="/endings/">all endings</Link>.</li>
                  <li>The developers say more content is coming, with no date announced yet.</li>
                </ul>
              </div>
              <Link href="/codes/">Get the codes →</Link>
            </SourceNote>
          </div>
        </section>

        <section className="section" id="quick-start" aria-labelledby="quick-title">
          <div className="wrap">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">60-second orientation</p>
                <h2 id="quick-title">The first rule is a process, not a hunch.</h2>
              </div>
              <p>
                The official description is simple: strangers knock, some lie,
                and one bad decision may be your last. Slow the moment down.
              </p>
            </div>
            <LoopSteps />
            <div className="inline-next">
              <div>
                <span>Ready to use the loop?</span>
                <strong>Walk through the first-night rules in order.</strong>
              </div>
              <Link href="/beginner-guide/">Open the beginner guide →</Link>
            </div>
          </div>
        </section>

        <section className="section section-muted" aria-labelledby="guides-title">
          <div className="wrap">
            <div className="section-heading">
              <p className="eyebrow">Guide library</p>
              <h2 id="guides-title">Follow one clear route through the hotel.</h2>
              <p>
                Each guide ends with a next step, so you can keep moving without
                opening six tabs or reading unverified anomaly lists.
              </p>
            </div>
            <div className="guide-grid">
              {guideCards.map((card) => (
                <GuideCard key={card.href} {...card} />
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="advanced-title">
          <div className="wrap two-column">
            <div className="section-heading sticky-heading">
              <p className="eyebrow">Progression route</p>
              <h2 id="advanced-title">Build consistency before chasing secrets.</h2>
              <p>
                The experience has official badges for surviving ten days,
                special endings, threat encounters, and the Dream Room. Treat
                them as later goals, not first-run chores.
              </p>
              <Link className="text-link" href="/endings/">
                See verified ending clues →
              </Link>
            </div>
            <ol className="route-list">
              <li>
                <span>Phase 1</span>
                <div>
                  <h3>Learn the room</h3>
                  <p>Find the peephole or camera, curtain, bed, and the route to the hall breaker.</p>
                </div>
              </li>
              <li>
                <span>Phase 2</span>
                <div>
                  <h3>Standardize every knock</h3>
                  <p>Keep the door shut while you observe, listen, compare, and decide.</p>
                </div>
              </li>
              <li>
                <span>Phase 3</span>
                <div>
                  <h3>Layer in room events</h3>
                  <p>Respond to window tapping and power cuts without abandoning your door routine.</p>
                </div>
              </li>
              <li>
                <span>Phase 4</span>
                <div>
                  <h3>Choose a badge goal</h3>
                  <p>After your runs are stable, use the official badge clues to pick one ending or encounter.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="section compact-section" aria-labelledby="sources-title">
          <div className="wrap">
            <SourceNote>
              <div>
                <p className="eyebrow">Evidence policy</p>
                <h2 id="sources-title">No invented anomaly rules.</h2>
                <p>
                  Core facts come from Roblox’s public game and badge APIs. The
                  gameplay rules are cross-checked against an August 5 full run
                  and an August 18 anomaly guide. Where the evidence stops, this
                  guide says so.
                </p>
              </div>
              <Link href="/sources/">Review the sources →</Link>
            </SourceNote>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
