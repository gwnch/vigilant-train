import type { Metadata } from "next";
import { SiteHeader } from "../../SiteHeader";
import { noteWordCounts, readingTime } from "../../readingTime";

const title = "Where AI Actually Helps in Security Workflows | Note 006";
const description = "Where AI can make security work more efficient, where human judgment still matters, and why using AI responsibly is part of the security problem itself.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, images: [] },
  twitter: { title, description, images: [] },
};

export default function Note006Page() {
  return (
    <main className="about-page note-page">
      <SiteHeader />

      <article className="about-article">
        <div className="article-margin" aria-hidden="true" />
        <header className="about-header note-header">
          <div className="article-kicker"><span>NOTE / 006</span><span>AI &amp; SECURITY</span><span>{readingTime(noteWordCounts.note006).toUpperCase()}</span></div>
          <h1>Where AI Actually Helps<br />in Security Workflows</h1>
        </header>

        <div className="note-layout">
          <aside className="margin-note note-callout"><p>The distinction that matters</p><strong>The goal, at least for me, isn’t to automate judgment. It’s to spend less time getting to the point where judgment is required.</strong></aside>

          <div className="about-body note-body">
            <p className="lead-paragraph">AI gets talked about in security like it’s either going to replace half the industry or introduce an entirely new category of risk.</p>

            <p>My experience has been much less dramatic (so far).</p>

            <p>The most useful applications I’ve found for AI aren’t replacing security decisions. They’re removing some of the repetitive work that happens <strong>before</strong> those decisions get made.</p>

            <p>That distinction matters.</p>

            <p>Security teams spend a surprising amount of time gathering information, cleaning it up, summarizing it, rewriting it for different audiences, and documenting what happened. Those are necessary parts of the job, but they’re also areas where AI can make the workflow significantly faster.</p>

            <p>The goal, at least for me, isn’t to automate judgment.</p>

            <p>It’s to spend less time getting to the point where judgment is required.</p>

            <section>
              <h2>Research and information synthesis</h2>

              <p>Security work often starts with gathering context.</p>

              <p>A new vulnerability is disclosed. A control needs to be evaluated. Someone asks whether a particular technology introduces risk. An assessment produces a long list of findings.</p>

              <p>The information usually exists somewhere. The problem is getting through all of it.</p>

              <p>AI is useful for taking large amounts of information and helping organize the pieces that matter.</p>

              <p>For example, instead of manually reading through several sources and starting from a blank document, I can use AI to help pull together:</p>

              <ul>
                <li>What happened?</li>
                <li>What systems or technologies are affected?</li>
                <li>What conditions are required for exploitation?</li>
                <li>What mitigations are available?</li>
                <li>What questions still need to be answered?</li>
              </ul>

              <p>That gives me a starting point.</p>

              <p>It doesn&apos;t mean I automatically trust the output.</p>

              <p>If the information is going to influence a security decision, I still go back to the original sources and validate the important details.</p>

              <p>AI accelerates the research process. It doesn&apos;t replace verification.</p>
            </section>

            <section>
              <h2>Turning technical information into something people can use</h2>

              <p>One of the harder parts of security is communicating the same issue to different audiences.</p>

              <p>An engineer may need technical remediation details.</p>

              <p>A program owner may need to understand impact, ownership, and timelines.</p>

              <p>Leadership may only need to know the risk, whether we&apos;re exposed, and what we&apos;re doing about it.</p>

              <p>AI is particularly useful here.</p>

              <p>I can start with technical information and use AI to help restructure it for the audience I&apos;m trying to reach.</p>

              <p>The important word is <strong>restructure</strong>.</p>

              <p>I don&apos;t want AI deciding what the risk means to the organization. That still requires context it may not have: architecture, business criticality, compensating controls, risk appetite, and sometimes organizational history.</p>

              <p>But once I know what I want to communicate, AI can make it much faster to turn that information into something clear.</p>
            </section>

            <section>
              <h2>Documentation</h2>

              <p>Documentation is probably one of the least exciting answers to &quot;How are you using AI in cybersecurity?&quot;</p>

              <p>It&apos;s also one of the most useful.</p>

              <p>Security programs generate a lot of documentation:</p>

              <ul>
                <li>Procedures</li>
                <li>Control narratives</li>
                <li>Assessment notes</li>
                <li>Meeting summaries</li>
                <li>Risk statements</li>
                <li>Remediation guidance</li>
                <li>Leadership updates</li>
                <li>Evidence descriptions</li>
              </ul>

              <p>A lot of that work starts with information that already exists somewhere else.</p>

              <p>AI can help organize rough notes, identify gaps, create an initial structure, or turn technical language into something easier to understand.</p>

              <p>That doesn&apos;t mean copying an AI-generated procedure into production.</p>

              <p>It means starting at 40% instead of 0%.</p>

              <p>The security professional still needs to determine whether the process described is actually how the organization operates.</p>
            </section>

            <section>
              <h2>Finding patterns in messy information</h2>

              <p>Another area where I think AI has a lot of potential is helping security teams make sense of information spread across different systems.</p>

              <p>Security programs rarely have one perfect source of truth.</p>

              <p>You might have vulnerability data in one platform, asset information somewhere else, exceptions in a GRC tool, tickets in another system, and supporting context sitting in documentation or email.</p>

              <p>Before you can make a decision, someone often has to connect those pieces manually.</p>

              <p>AI can help with that synthesis.</p>

              <p>The interesting part isn&apos;t asking AI, &quot;Is this risky?&quot;</p>

              <p>It&apos;s asking it to help surface relationships or inconsistencies that a human should investigate.</p>

              <div className="investigation-questions">
                <p>Why does this asset appear in one inventory but not another?</p>
                <p>Why are these findings repeatedly missing SLA?</p>
                <p>Do these risk exceptions have anything in common?</p>
                <p>Which teams are encountering the same remediation blocker?</p>
              </div>

              <p>Those questions start moving AI from a writing assistant toward something more useful for security program management.</p>
            </section>

            <section>
              <h2>Where I wouldn&apos;t rely on it</h2>

              <p>There are also areas where I think the boundaries should be pretty clear.</p>

              <p>I wouldn&apos;t rely on AI alone to:</p>

              <ul>
                <li>Determine whether an organization should accept a risk</li>
                <li>Assign business criticality</li>
                <li>Make a final vulnerability prioritization decision</li>
                <li>Interpret a control without understanding the environment</li>
                <li>Approve security architecture</li>
                <li>Produce evidence without verifying the underlying source</li>
                <li>Make consequential security decisions without human review</li>
              </ul>

              <p>The common thread is context.</p>

              <p>AI can process a lot of information, but it doesn&apos;t automatically understand why a particular system matters to your organization, what your risk tolerance is, or what tradeoffs the business is willing to make.</p>

              <p>Those are security and business decisions.</p>
            </section>

            <section>
              <h2>There is also a security problem to solve</h2>

              <p>Of course, using AI introduces its own set of questions.</p>

              <ul>
                <li>What data are employees allowed to put into the model?</li>
                <li>Is the information retained?</li>
                <li>Can the provider use it for training?</li>
                <li>What happens when sensitive security information is included in a prompt?</li>
                <li>Which AI tools are approved?</li>
                <li>How are AI-generated outputs validated?</li>
                <li>What happens when someone builds an entire workflow around a model and nobody understands how it works?</li>
              </ul>

              <p>Security teams shouldn&apos;t prevent people from using AI simply because it introduces risk.</p>

              <p>But we should understand how it&apos;s being used and put reasonable boundaries around it.</p>

              <p>In many ways, this is the same problem security has dealt with for years: enabling new technology without pretending the risk doesn&apos;t exist.</p>
            </section>

            <section className="action-section ai-closing-section">
              <h2>AI should make the security professional more effective</h2>

              <p>The way I think about AI today is pretty simple.</p>

              <p>I don&apos;t want it making the security decision for me.</p>

              <p>I want it to help me get to the decision faster.</p>

              <p>If AI can reduce the time spent gathering information, organizing data, drafting documentation, and translating technical issues for different audiences, that creates more time for the parts of security that actually require experience and judgment.</p>

              <p>Understanding context.</p>

              <p>Challenging assumptions.</p>

              <p>Talking to stakeholders.</p>

              <p>Making tradeoffs.</p>

              <p>And deciding what we&apos;re actually going to do about the risk.</p>

              <p>That&apos;s where I think AI is most useful in security right now: not replacing the person doing the work, but removing some of the friction around the work that person actually needs to do.</p>
            </section>
          </div>

          <aside className="about-sidebar note-sidebar">
            <div className="taped-list">
              <span className="small-tape" aria-hidden="true" />
              <p className="sidebar-label">USEFUL BOUNDARY</p>
              <ol>
                <li><span>01</span>Gather</li>
                <li><span>02</span>Organize</li>
                <li><span>03</span>Verify</li>
                <li><span>04</span>Decide</li>
              </ol>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
