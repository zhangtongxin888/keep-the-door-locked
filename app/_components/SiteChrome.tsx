import Link from "next/link";
import { navItems } from "../lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link className="brand" href="/" aria-label="Keep the Door Locked Wiki home">
          <span className="brand-lock" aria-hidden="true"><i /></span>
          <span><strong>Keep the Door Locked</strong><small>Survival Wiki</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <Link className="header-cta" href="/beginner-guide/">Start guide</Link>
        <details className="mobile-nav">
          <summary aria-label="Open navigation"><span /><span /><span /></summary>
          <div>{navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Link className="brand footer-brand" href="/">
            <span className="brand-lock" aria-hidden="true"><i /></span>
            <span><strong>Keep the Door Locked</strong><small>Survival Wiki</small></span>
          </Link>
          <p>A fan-made guide focused on verified rules and a calmer first run.</p>
        </div>
        <div><strong>Start here</strong><Link href="/beginner-guide/">Beginner guide</Link><Link href="/gameplay-loop/">Gameplay loop</Link><Link href="/mistakes/">Common mistakes</Link></div>
        <div><strong>Reference</strong><Link href="/endings/">Ending clues</Link><Link href="/faq/">FAQ</Link><Link href="/sources/">Sources & verification</Link></div>
      </div>
      <div className="wrap footer-bottom"><span>Updated August 19, 2026</span><span>Not affiliated with Roblox or Hotel Room Services.</span></div>
    </footer>
  );
}

export function ArticleShell({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children: React.ReactNode; }) {
  return (
    <>
      <SiteHeader />
      <main>
        <header className="article-hero">
          <div className="wrap article-hero-inner">
            <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>{eyebrow}</span></nav>
            <p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{description}</p>
          </div>
        </header>
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
