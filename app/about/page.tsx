import type { Metadata } from "next";
import { SiteHeader } from "../SiteHeader";
import { noteWordCounts, readingTime } from "../readingTime";

const title = "How I Found My Way to Security | Note 000 | Gwendolyn Chu";
const description = "How a personal interest in privacy led me to cybersecurity and shaped the way I approach the work today.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, images: [] },
  twitter: { title, description, images: [] },
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <SiteHeader activePage="about" />

      <article className="about-article">
        <div className="article-margin" aria-hidden="true" />
        <header className="about-header">
          <div className="article-kicker"><span>NOTE / 000</span><span>ABOUT</span><span>{readingTime(noteWordCounts.about).toUpperCase()}</span></div>
          <h1>How I Found<br />My Way to Security.</h1>
        </header>

        <div className="about-layout">
          <aside className="margin-note first-note"><p>It started with a personal question:</p><strong>Who has my information, and how did they get it?</strong></aside>

          <div className="about-body">
            <section>
              <p className="section-label">01 / THE BEGINNING</p>
              <p className="lead-paragraph">I first became interested in cybersecurity while studying computer science at Fordham University. What drew me in initially was personal privacy. I wanted to better understand how my own information was collected, exposed, and protected online.</p>
              <p>That curiosity grew into a broader interest in security, especially when I learned it could be a career. I became increasingly interested in how systems are attacked, how organizations manage risk, and the decisions that go into protecting people and data at scale. By my sophomore year, I knew I wanted to pursue security more seriously, which led me to continue at Fordham and earn my master’s degree in cybersecurity.</p>
            </section>

            <section>
              <p className="section-label">02 / THE WORK</p>
              <p>Much of my work involves collaborating with teams across the business: from engineers and infrastructure teams to application owners, governance teams, and leadership. I enjoy the work of bringing those perspectives together: understanding technical risk, figuring out what’s practical, establishing shared priorities, and helping teams make better security decisions.</p>
            </section>

            <section>
              <p className="section-label">03 / WHAT I KEEP RETURNING TO</p>
              <p>That’s also shaped how I think about security more broadly. I’m increasingly interested in the intersection of technical security, risk, governance, and strategy and in how emerging technologies like AI change both the problems we need to solve and the way we solve them.</p>
            </section>

            <section>
              <p className="section-label">04 / WHY FIELD NOTES</p>
              <p>I created these field notes as a place to document what I’m learning, questions I’m thinking through, and lessons from building security programs in practice. It’s also for fun and a creative outlet for myself.</p>
            </section>

            <section>
              <p className="section-label">05 / THE FOUR AREAS</p>
              <p>Most of what I write about falls into four areas: vulnerability management, security programs, risk &amp; governance, and AI &amp; security.</p>
            </section>
          </div>

          <aside className="about-sidebar">
            <div className="taped-list">
              <span className="small-tape" aria-hidden="true" />
              <p className="sidebar-label">THE FOUR AREAS</p>
              <ol>
                <li><span>01</span>Vulnerability management</li>
                <li><span>02</span>Security programs</li>
                <li><span>03</span>Risk &amp; governance</li>
                <li><span>04</span>AI &amp; security</li>
              </ol>
            </div>
          </aside>
        </div>

        <footer className="about-connect">
          <div><p className="section-label">06 / CONNECT</p><h2>Connect</h2></div>
          <div><p>I’m always interested in connecting with others.</p><a href="https://www.linkedin.com/in/gwendolynchu/" target="_blank" rel="noreferrer">Find me on LinkedIn <span>↗</span></a></div>
        </footer>
      </article>
    </main>
  );
}
