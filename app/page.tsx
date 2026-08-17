"use client";

import { useMemo, useState } from "react";
import { SiteHeader } from "./SiteHeader";
import { noteWordCounts, readingTime } from "./readingTime";

const categories = ["All notes", "Vulnerability Management", "Cloud Security", "Security Programs", "Risk & Governance", "AI & Security"];
const notes = [
  { code: "NOTE-000", category: "About", title: "How I Found My Way to Security", excerpt: "How a personal interest in privacy led me to cybersecurity and shaped the way I approach the work today.", read: readingTime(noteWordCounts.about), color: "about", mark: "00", href: "/about" },
  { code: "NOTE-001", category: "Vulnerability Management", title: "Vendor-Native vs. Vendor-Agnostic Vulnerability Prioritization", excerpt: "A practical look at when to use vendor-native, vendor-agnostic, or hybrid vulnerability prioritization and the tradeoffs between speed, control, and explainability.", read: readingTime(noteWordCounts.note001), color: "coral", mark: "01", href: "/notes/vendor-native-vs-vendor-agnostic" },
  { code: "NOTE-002", category: "Vulnerability Management", title: "What Security Teams Are Still Asking About Vulnerability Prioritization", excerpt: "Reflections from a customer panel on prioritization, automation, and why vulnerability programs often need better context (not more findings).", read: readingTime(noteWordCounts.note002), color: "coral", mark: "02", href: "/notes/what-security-teams-are-still-asking" },
  { code: "NOTE-003", category: "Risk & Governance", title: "Vulnerability Metrics That Actually Drive Action", excerpt: "A practical look at the vulnerability management metrics that help teams make better decisions.", read: readingTime(noteWordCounts.note003), color: "gold", mark: "03", href: "/notes/vulnerability-metrics-that-actually-drive-action" },
  { code: "NOTE-004", category: "Security Programs", title: "The Hardest Part of a Security Program Isn’t Finding the Problems", excerpt: "A practical look at why strong security programs depend less on finding problems and more on clear ownership, communication, accountability, and getting teams to take action.", read: readingTime(noteWordCounts.note004), color: "lilac", mark: "04", href: "/notes/the-hardest-part-of-a-security-program" },
  { code: "NOTE-005", category: "Cloud Security", title: "What the CCSK v5 Is Actually Good For", excerpt: "A practical look at who the CCSK helps, where it falls short, and when hands-on cloud experience may be the better investment.", read: readingTime(noteWordCounts.note005), color: "blue", mark: "05", href: "/notes/what-the-ccsk-v5-is-actually-good-for" },
  { code: "NOTE-006", category: "AI & Security", title: "Where AI Actually Helps in Security Workflows", excerpt: "Where AI can make security work more efficient, where human judgment still matters, and why using AI responsibly is part of the security problem itself.", read: readingTime(noteWordCounts.note006), color: "ai", mark: "06", href: "/notes/where-ai-actually-helps-in-security-workflows" },
];

export default function Home() {
  const [active, setActive] = useState("All notes");
  const visibleNotes = useMemo(() => active === "All notes" ? notes : notes.filter((note) => note.category === active), [active]);
  return (
    <main>
      <SiteHeader />
      <section className="hero" id="top">
        <div className="binding" aria-hidden="true" />
        <div className="hero-copy"><p className="eyebrow">CYBERSECURITY · RISK · GOVERNANCE · SYSTEMS</p><h1>Notes from the space<br />between risk and reality.</h1><p className="intro">Exploring how vulnerabilities become risk, how controls become programs, and how security decisions scale across an enterprise.</p><a className="read-latest" href="#index">Browse the notebook <span>↘</span></a></div>
        <aside className="hero-note" aria-label="Editor note"><div className="tape" aria-hidden="true" /><p className="scribble">Question I keep asking:</p><p>How do we make the right security action the easiest one to take?</p><span className="tiny-arrow">↳</span></aside>
      </section>
      <section className="index" id="index">
        <div className="section-heading"><div><p className="section-number">INDEX / 01</p><h2>Field Notes</h2></div></div>
        <div className="category-tabs" role="group" aria-label="Filter notes by topic">{categories.map((category) => <button type="button" key={category} className={active === category ? "active" : ""} onClick={() => setActive(category)}>{category}</button>)}</div>
        <div className="note-grid">{visibleNotes.map((note) => <article className={`note-card ${note.color}`} key={note.code}><div className="card-topline"><span>{note.code}</span><span className="paperclip" aria-hidden="true">⌁</span></div><p className="card-category">{note.category}</p><h3>{note.title}</h3><p className="card-excerpt">{note.excerpt}</p><a href={note.href} aria-label={`Read ${note.title}`}>Open note <span>→</span></a><span className="read-time">{note.read}</span></article>)}</div>
      </section>
      <section className="about-strip" id="about"><p>SIGNAL / CONTEXT / DECISION / ACTION</p><p>Field notes on security, risk, and the work between them.</p></section>
    </main>
  );
}
