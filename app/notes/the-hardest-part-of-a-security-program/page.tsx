import type { Metadata } from "next";
import { SiteHeader } from "../../SiteHeader";
import { noteWordCounts, readingTime } from "../../readingTime";

const title = "The Hardest Part of a Security Program Isn’t Finding the Problems | Note 004";
const description = "A practical look at why strong security programs depend less on finding problems and more on clear ownership, communication, accountability, and getting teams to take action.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, images: [] },
  twitter: { title, description, images: [] },
};

export default function Note004Page() {
  return (
    <main className="about-page note-page">
      <SiteHeader />

      <article className="about-article">
        <div className="article-margin" aria-hidden="true" />
        <header className="about-header note-header note-004-header">
          <div className="article-kicker"><span>NOTE / 004</span><span>SECURITY PROGRAMS</span><span>{readingTime(noteWordCounts.note004).toUpperCase()}</span></div>
          <h1>The Hardest Part of a Security Program Isn’t Finding the Problems</h1>
        </header>

        <div className="note-layout">
          <aside className="margin-note note-callout"><p>The real output</p><strong>The real output of the program is <em>action</em>.</strong></aside>

          <div className="about-body note-body">
            <p className="lead-paragraph">Finding vulnerabilities is the easy part.</p>

            <p>Most vulnerability management tools are very good at telling you what’s wrong. They can identify missing patches, outdated software, insecure configurations, exposed services, and thousands of other issues across an environment.</p>

            <p>The hard part is getting someone to actually fix them.</p>

            <p>A mature vulnerability management program is less about scanning and more about <strong>ownership, prioritization, communication, and remediation</strong>. You can have perfect scan coverage and great tooling, but if findings sit in a dashboard with no clear owner or path to remediation, you don’t really have a vulnerability management program. You have a vulnerability inventory.</p>

            <section>
              <h2>Ownership is usually the first problem</h2>

              <p>One of the most common questions in vulnerability management is also one of the simplest:</p>

              <blockquote className="question-block">Who owns this asset?</blockquote>

              <p>It sounds easy until you’re dealing with thousands of assets across different business units, cloud environments, applications, infrastructure teams, and vendors.</p>

              <p>Asset ownership data is often incomplete, outdated, or defined differently depending on who you ask.</p>

              <p>And without ownership, remediation stalls.</p>

              <p>Security can identify the vulnerability, but we usually aren’t the team installing the patch, upgrading the application, changing the configuration, or taking the system offline.</p>

              <p>That means the program depends heavily on having a reliable way to map findings back to the people who can actually do something about them.</p>

              <p>Some of the most useful ownership data includes:</p>

              <ul>
                <li>Application owner</li>
                <li>Technical owner</li>
                <li>Business owner</li>
                <li>Supporting infrastructure team</li>
                <li>Environment</li>
                <li>Business unit</li>
                <li>Asset criticality</li>
              </ul>

              <p>The better this data is, the less time the vulnerability team spends tracking people down instead of managing risk.</p>
            </section>

            <section>
              <h2>Not everything can be fixed at once</h2>

              <p>The next challenge is prioritization.</p>

              <p>A large environment can generate tens or hundreds of thousands of findings. Sending every critical and high vulnerability to remediation teams and telling them everything is urgent usually doesn’t work.</p>

              <p>If everything is a priority, nothing is.</p>

              <p>CVSS is useful, but severity alone doesn’t tell you which vulnerability creates the most risk to your organization.</p>

              <p>I generally think about prioritization as a combination of:</p>

              <div className="context-grid">
                <div>
                  <h3>Vulnerability context</h3>
                  <ul>
                    <li>Severity</li>
                    <li>Exploitability</li>
                    <li>Known exploitation</li>
                    <li>Availability of public exploit code</li>
                    <li>Age of the vulnerability</li>
                  </ul>
                </div>
                <div>
                  <h3>Asset context</h3>
                  <ul>
                    <li>Internet exposure</li>
                    <li>Asset criticality</li>
                    <li>Application sensitivity</li>
                    <li>Environment</li>
                    <li>Data stored or processed</li>
                    <li>Compensating controls</li>
                  </ul>
                </div>
              </div>

              <p>A critical vulnerability on an isolated test server and a critical vulnerability on an internet-facing production system should not necessarily be treated the same.</p>

              <p>The goal isn’t to create the most complicated scoring model possible. It’s to give remediation teams a defensible way to understand <strong>what needs attention first and why</strong>.</p>
            </section>

            <section>
              <h2>Security doesn’t own remediation</h2>

              <p>This is probably the biggest mindset shift in vulnerability management.</p>

              <p>Security owns the vulnerability management <strong>process</strong>, but remediation is usually distributed across the organization.</p>

              <p>Infrastructure teams patch servers. Endpoint teams manage workstations. Application teams upgrade dependencies. Cloud teams fix configurations. Business owners approve downtime and accept risk.</p>

              <p>That makes vulnerability management an inherently cross-functional program.</p>

              <p>A lot of the work becomes figuring out how to make remediation easier for those teams.</p>

              <p>Instead of sending someone a spreadsheet with 5,000 findings, give them something they can act on:</p>

              <ul>
                <li>What systems are affected?</li>
                <li>What needs to be fixed?</li>
                <li>Why does it matter?</li>
                <li>How urgent is it?</li>
                <li>What is the expected remediation date?</li>
                <li>Is there a known fix or workaround?</li>
                <li>Who can help if there’s a question?</li>
              </ul>

              <p>The less interpretation required from the remediation team, the more likely the issue is to move.</p>
            </section>

            <section>
              <h2>Communication matters more than people think</h2>

              <p>A large part of vulnerability management is translating security information for different audiences.</p>

              <p>An engineer may want the exact CVE, affected package, version, and remediation instructions.</p>

              <p>A manager may want to know which systems are overdue and what is blocking remediation.</p>

              <p>Leadership may care about trends, risk exposure, SLA performance, and whether the organization is getting better or worse over time.</p>

              <p>Those are three different conversations.</p>

              <p>One mistake I see is using the same vulnerability report for every audience.</p>

              <p>A scanner export might be useful to the vulnerability team, but it usually isn’t an effective way to communicate risk to leadership or even remediation teams.</p>

              <p>Good vulnerability management reporting should answer the question the audience actually has.</p>

              <div className="audience-questions">
                <div><span>For remediation teams:</span><strong>What do you need me to fix?</strong></div>
                <div><span>For managers:</span><strong>Where are we falling behind?</strong></div>
                <div><span>For leadership:</span><strong>Are we reducing risk?</strong></div>
              </div>
            </section>

            <section>
              <h2>Sometimes remediation really is difficult</h2>

              <p>It’s also important to acknowledge that an overdue vulnerability does not automatically mean a team is ignoring security.</p>

              <p>There can be legitimate blockers:</p>

              <ul>
                <li>Patches break applications</li>
                <li>Vendors haven’t released a fix</li>
                <li>Systems require coordinated downtime</li>
                <li>Legacy technology can’t be upgraded easily</li>
                <li>Business-critical applications have limited maintenance windows</li>
                <li>A remediation requires a larger migration or architecture change</li>
              </ul>

              <p>This is where vulnerability management needs to move beyond simply saying, “This is overdue.”</p>

              <p>If something can’t be remediated within the expected timeframe, the conversation becomes:</p>

              <blockquote className="question-block">What is preventing remediation, what can we do in the meantime, and who is accepting the remaining risk?</blockquote>

              <p>That could mean applying a compensating control, restricting network access, disabling a vulnerable feature, increasing monitoring, or formally documenting a risk exception.</p>

              <p>The important part is that the vulnerability doesn’t quietly disappear into a backlog.</p>
            </section>

            <section className="action-section">
              <h2>The program is really about creating action</h2>

              <p>The technical part of vulnerability management is important. You need accurate scanning, good detection, reliable asset data, and a way to understand risk.</p>

              <p>But those things are inputs.</p>

              <p>The real output of the program is <strong>action</strong>.</p>

              <p>Can we consistently identify the right owner?</p>

              <p>Can we explain why something matters?</p>

              <p>Can teams understand what they need to do?</p>

              <p>Can we identify and escalate blockers?</p>

              <p>Can leadership see where risk is accumulating?</p>

              <p>And ultimately, are vulnerabilities actually getting remediated?</p>

              <p>That’s why I think the hardest part of vulnerability management has very little to do with finding vulnerabilities.</p>

              <p>Finding them is where the process starts.</p>

              <p>Getting the organization to do something about them is the actual job.</p>
            </section>
          </div>

          <aside className="about-sidebar note-sidebar">
            <div className="taped-list">
              <span className="small-tape" aria-hidden="true" />
              <p className="sidebar-label">PROGRAM MECHANICS</p>
              <ol>
                <li><span>01</span>Ownership</li>
                <li><span>02</span>Prioritization</li>
                <li><span>03</span>Communication</li>
                <li><span>04</span>Action</li>
              </ol>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
