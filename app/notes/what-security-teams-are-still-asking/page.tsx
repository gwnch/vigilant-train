import type { Metadata } from "next";
import { SiteHeader } from "../../SiteHeader";
import { noteWordCounts, readingTime } from "../../readingTime";

const title = "What Security Teams Are Still Asking About Vulnerability Prioritization | Note 002";
const description = "Reflections from a customer panel on prioritization, automation, and why vulnerability programs often need better context (not more findings).";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, images: [] },
  twitter: { title, description, images: [] },
};

export default function Note002Page() {
  return (
    <main className="about-page note-page">
      <SiteHeader />

      <article className="about-article">
        <div className="article-margin" aria-hidden="true" />
        <header className="about-header note-header note-002-header">
          <div className="article-kicker"><span>NOTE / 002</span><span>VULNERABILITY MANAGEMENT</span><span>{readingTime(noteWordCounts.note002).toUpperCase()}</span></div>
          <h1>What Security Teams Are Still Asking About Vulnerability Prioritization</h1>
        </header>

        <div className="note-layout">
          <aside className="margin-note note-callout"><p>What stood out to me most</p><strong>Security teams usually do not have a shortage of findings. They have a shortage of context.</strong></aside>

          <div className="about-body note-body">
            <p className="lead-paragraph">I joined a customer panel hosted by a security vendor my team works closely with. The audience included practitioners across vulnerability management, cloud security, and GRC from both public and private sector organizations.</p>

            <p>The conversation focused on something I spend a lot of time thinking about: how security teams move from having more data to actually making better decisions with it.</p>

            <p>A few of the topics I covered were:</p>

            <ul>
              <li>what I learned early in my career from manually working through 10,000+ rows of vulnerability data, and why that kind of manual work still exists in a lot of organizations</li>
              <li>how automation can improve the remediation lifecycle, from prioritization through stakeholder communication</li>
              <li>the tradeoffs between vendor-native and vendor-agnostic prioritization</li>
              <li>how making your prioritization process more transparent can create better collaboration across security, IT, engineering, and leadership</li>
            </ul>

            <p>What stood out to me most was the Q&amp;A.</p>

            <p>A lot of the questions were variations of the same thing:</p>

            <blockquote className="question-block">What inputs should we use? How do we decide what matters most? How do we choose weights? Where do we even start when everything feels urgent?</blockquote>

            <p>None of those questions are particularly new, but hearing them repeatedly across different organizations reinforced something I see often.</p>

            <p>Security teams usually do not have a shortage of findings. They have a shortage of context.</p>

            <p>A scanner can tell you that something is Critical. It cannot always tell you how important that vulnerability is to your specific environment, what should be addressed before it, or how to explain that decision to the teams responsible for remediation.</p>

            <p>That is where prioritization becomes less about scoring vulnerabilities and more about creating a repeatable decision-making process.</p>

            <section>
              <h2>What I took away from the conversation</h2>

              <p>One thing I would bring into a similar conversation in the future is a simple starting point.</p>

              <p>Not a complicated scoring formula, but something practical that shows how a team might combine a few signals like exploitability, asset criticality, exposure, and compensating controls.</p>

              <p>I would also spend more time showing the workflow around the score.</p>

              <p>For example:</p>

              <p className="workflow-line">Finding → context → prioritization → remediation → measurement</p>

              <p>The prioritization model matters, but so does everything around it. Where does the context come from? Who owns remediation? Where can automation remove manual work? How do you know whether the process is actually improving outcomes?</p>

              <p>I would also introduce the vendor-native versus vendor-agnostic tradeoff earlier.</p>

              <p>Sometimes the prioritization built into your platform is completely sufficient. Other times, the organization needs more transparency, customization, or consistency across multiple tools.</p>

              <p>The important part is understanding what problem you are actually trying to solve before building something more complicated.</p>
            </section>

            <section>
              <h2>The bigger takeaway</h2>

              <p>If a vulnerability program is struggling to consistently meet SLAs, the answer is not always to ask remediation teams to move faster.</p>

              <p>Sometimes the bigger opportunity is improving the decisions that happen before the ticket ever reaches them.</p>

              <p>Start with a small number of signals you trust. Make the logic understandable. Get feedback from the teams doing the remediation. Then automate the parts of the process that are repetitive or difficult to scale.</p>

              <p>The goal is not perfect scoring.</p>

              <p>It is creating a prioritization process that people understand, trust, and can improve over time.</p>
            </section>
          </div>

          <aside className="about-sidebar note-sidebar">
            <div className="taped-list">
              <span className="small-tape" aria-hidden="true" />
              <p className="sidebar-label">PANEL THEMES</p>
              <ol>
                <li><span>01</span>Prioritization</li>
                <li><span>02</span>Automation</li>
                <li><span>03</span>Transparency</li>
                <li><span>04</span>Context</li>
              </ol>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
