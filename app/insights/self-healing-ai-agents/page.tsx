import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FooterSection, InvisigentLogoSection } from '@/app/components';
import Breadcrumb from '@/app/components/Breadcrumb';

const SLUG = 'self-healing-ai-agents';
const CANONICAL = `https://invisigent.ai/insights/${SLUG}`;
const OG_IMAGE = 'https://invisigent.ai/blog-self-healing-ai-agents.svg';
const PUBLISHED = '2026-08-30T10:00:00.000Z';
const TITLE = 'Self-Healing AI Agents: When Agents Learn to Fix Themselves';
const DESCRIPTION =
  'Self-healing AI agents detect their own failures, diagnose the root cause, and propose fixes with a human still approving what ships. How the detect-diagnose-isolate-repair-learn loop works, what context engineering it demands, and how to tell real self-healing from a retry loop.';

export const metadata: Metadata = {
  // The root layout applies the `%s | Invisigent` template, so no brand suffix here.
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'self-healing AI agents',
    'self-healing agents',
    'autonomous agent repair',
    'AI agent reliability',
    'agent failure diagnosis',
    'prompt optimization agents',
    'AI agent observability',
    'human in the loop AI',
    'multi-agent systems',
    'agentic AI operations',
    'context engineering',
    'LLM production failures',
    'AI agent debugging',
    'AgentOps',
    'LangSmith',
    'Langfuse',
    'Adaptive open source agent',
    'self-healing AI USA',
    'self-healing AI UK',
    'self-healing AI Australia',
    'self-healing AI India',
    'Invisigent AI consulting',
  ],
  authors: [{ name: 'Invisigent Research', url: 'https://invisigent.ai' }],
  creator: 'Invisigent',
  publisher: 'Invisigent',
  category: 'AI Agents',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: CANONICAL,
    languages: {
      'en-US': CANONICAL,
      'en-GB': CANONICAL,
      'en-AU': CANONICAL,
      'en-IN': CANONICAL,
    },
  },
  openGraph: {
    type: 'article',
    locale: 'en_US',
    siteName: 'Invisigent',
    title: TITLE,
    description:
      'A self-healing AI agent detects its own failures, diagnoses why they happened, and corrects itself. Here is what that actually looks like in production, and where the human still belongs in the loop.',
    url: CANONICAL,
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: ['https://invisigent.ai'],
    section: 'AI Agents',
    tags: [
      'self-healing AI agents',
      'AI agent reliability',
      'agentic AI',
      'prompt optimization',
      'human in the loop',
      'context engineering',
    ],
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: TITLE, type: 'image/svg+xml' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@invisigent_ai',
    creator: '@invisigent_ai',
    title: TITLE,
    description:
      'Self-healing agents remove humans from the tedious part of the loop, not the judgment part. How the detect-diagnose-repair cycle actually works in production.',
    images: [{ url: OG_IMAGE, alt: TITLE }],
  },
  other: {
    'geo.region': 'IN-RJ',
    'geo.placename': 'Jaipur, Rajasthan, India',
    'geo.position': '26.9124;75.7873',
    ICBM: '26.9124, 75.7873',
    'og:locale:alternate': 'en_GB,en_AU,en_IN',
    'article:published_time': PUBLISHED,
    'article:modified_time': PUBLISHED,
    'article:author': 'https://invisigent.ai',
    'article:section': 'AI Agents',
    'article:tag':
      'self-healing AI agents,AI agent reliability,agentic AI,prompt optimization,human in the loop,context engineering',
    'revisit-after': '7 days',
    rating: 'general',
    language: 'en',
    coverage: 'Worldwide',
    distribution: 'global',
    target: 'all',
    audience: 'developers, AI engineers, technical founders, enterprise teams',
    'DC.coverage': 'United States, United Kingdom, Australia, India',
    'DC.language': 'en',
    'DC.subject':
      'self-healing AI agents, AI agent reliability, agentic AI operations, prompt optimization, human-in-the-loop AI',
    'DC.publisher': 'Invisigent',
    'theme-color': '#0d0d0d',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': `${CANONICAL}#article`,
  headline: TITLE,
  description: DESCRIPTION,
  image: {
    '@type': 'ImageObject',
    url: OG_IMAGE,
    width: 1200,
    height: 675,
    caption:
      'Self-healing AI agent architecture showing the detect, diagnose, isolate, repair and learn loop feeding a human approval gate that reviews the proposed prompt diff',
  },
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  wordCount: 2600,
  timeRequired: 'PT11M',
  author: { '@type': 'Organization', name: 'Invisigent Research', url: 'https://invisigent.ai' },
  publisher: {
    '@type': 'Organization',
    name: 'Invisigent',
    url: 'https://invisigent.ai',
    logo: { '@type': 'ImageObject', url: 'https://invisigent.ai/logo.png' },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jaipur',
      addressRegion: 'Rajasthan',
      addressCountry: 'IN',
    },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL },
  articleSection: 'AI Agents',
  articleBody:
    'A self-healing AI agent detects its own failures, diagnoses why they happened, and corrects itself with minimal human hand-holding. Covers the five-stage loop of detect, diagnose, isolate, repair and learn; why manual prompt fixes stop scaling past a handful of agents; a walkthrough of the open-source Adaptive project and its Insights, Evolution and Routing agents; the human approval gate that separates self-healing from self-mutating; the context engineering that keeps an analysis agent from drowning in trace data; the four layers where self-healing shows up across the industry; and the questions that separate genuine diagnosis from a dressed-up retry loop.',
  keywords:
    'self-healing AI agents, AI agent reliability, autonomous agent repair, agent failure diagnosis, prompt optimization agents, human in the loop AI, multi-agent systems, context engineering, AI agent observability, AgentOps',
  inLanguage: 'en',
  isPartOf: {
    '@type': 'Blog',
    '@id': 'https://invisigent.ai/insights#blog',
    name: 'AI Infrastructure Insights',
    publisher: { '@type': 'Organization', name: 'Invisigent' },
  },
  about: [
    { '@type': 'Thing', name: 'Self-healing AI agents' },
    { '@type': 'Thing', name: 'AI agent reliability' },
    { '@type': 'Thing', name: 'Agentic AI operations' },
    { '@type': 'Thing', name: 'Human-in-the-loop AI' },
  ],
  mentions: [
    { '@type': 'SoftwareApplication', name: 'Adaptive', applicationCategory: 'AI Agent Optimization' },
    { '@type': 'SoftwareApplication', name: 'LangSmith', applicationCategory: 'AI Observability' },
    { '@type': 'SoftwareApplication', name: 'Langfuse', applicationCategory: 'AI Observability' },
  ],
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', 'blockquote'] },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invisigent.ai' },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://invisigent.ai/insights' },
      { '@type': 'ListItem', position: 3, name: TITLE, item: CANONICAL },
    ],
  },
};

const h2Style = {
  fontSize: 'clamp(1.125rem, 2.5vw, 1.4rem)',
  fontWeight: 700,
  color: 'var(--color-text-primary)',
  marginBottom: '-0.25rem',
} as const;

const bodyStyle = {
  fontSize: 'clamp(0.9375rem, 1.8vw, 1.0625rem)',
  lineHeight: 1.8,
  color: 'var(--color-text-secondary)',
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '1.5rem',
};

const STAGES = [
  {
    n: '01',
    title: 'Detect',
    body: 'Continuously watch for anomalies, errors, or degraded performance. Not a single threshold alarm, but a running read on whether the agent is behaving the way it did last week.',
  },
  {
    n: '02',
    title: 'Diagnose',
    body: 'Trace the failure to its root cause. This is where genuine self-healing separates itself from a retry loop: telling the difference between a tool that timed out, a prompt that is ambiguous, and a model losing context in long conversations.',
  },
  {
    n: '03',
    title: 'Isolate',
    body: 'Stop the problem from cascading into other parts of the system. A malformed response that breaks the next step in a pipeline is one incident. The same response silently corrupting downstream state is several.',
  },
  {
    n: '04',
    title: 'Repair',
    body: 'Apply a fix suited to the actual cause, whether that is a config change, a different retry strategy, or a rewritten prompt. The fix has to match the diagnosis, not just the symptom.',
  },
  {
    n: '05',
    title: 'Learn',
    body: 'Feed the incident back in so the same failure is less likely next time. Without this stage you have automated firefighting, not healing.',
  },
];

const AGENTS = [
  {
    name: 'The Insights Agent',
    role: 'Reads production reality',
    body: 'Connects to observability platforms like LangSmith or Langfuse, pulls execution traces, and analyzes them: error frequency, tool-usage patterns, reasoning quality, and where multi-step workflows tend to bottleneck. It carries memory across sessions, so it is not re-deriving the same findings every time someone asks a question.',
  },
  {
    name: 'The Evolution Agent',
    role: 'Turns findings into edits',
    body: 'Takes those findings and turns them into concrete action. It reads the actual prompt files and code structure, drafts specific edits, and checks that the proposed changes do not quietly break the agent’s intent.',
  },
  {
    name: 'The Routing Agent',
    role: 'Decides how far to go',
    body: 'A smaller and faster model that decides whether a given question just needs analysis, or whether the findings are serious enough to warrant an actual optimization pass. Cheap triage in front of expensive work.',
  },
];

const CONTEXT_TACTICS = [
  'Summarizing conversation history once it grows past a threshold, instead of keeping every message',
  'Condensing lengthy tool outputs while preserving the essential facts in separate storage',
  'Using semantic memory search to pull in only the historical context relevant to the current question, rather than replaying the whole conversation',
  'Pruning verbose tool-call artifacts that add tokens without adding signal',
];

const LANDSCAPE = [
  {
    layer: 'Orchestration-level healing',
    scope: 'Runtime control',
    what: 'Treats agent reliability as a runtime problem: catching tool timeouts, malformed arguments, stale context, and retry loops before they cascade.',
  },
  {
    layer: 'Infrastructure-level healing',
    scope: 'SRE and platform',
    what: 'The more traditional pattern of auto-restarting services or scaling resources, now increasingly handled by agents with graduated levels of autonomy rather than a strict manual-versus-automatic switch.',
  },
  {
    layer: 'Prompt and behavior optimization',
    scope: 'Agent instructions',
    what: 'Agents that improve other agents by analyzing how they perform in production and proposing better instructions. This is the category Adaptive belongs to.',
  },
  {
    layer: 'Code-level healing',
    scope: 'Repository',
    what: 'Agents that patch bugs, regenerate broken test snapshots, or fix misconfigured deployment scripts directly.',
  },
];

const EVAL_QUESTIONS = [
  {
    n: '01',
    q: 'Is a human actually reviewing changes before they hit production?',
    a: 'Or is that step technically present, optional, and usually skipped? An approval gate that everyone clicks through without reading is not oversight, it is paperwork.',
  },
  {
    n: '02',
    q: 'Does the system diagnose root causes, or pattern-match to "retry" and "roll back"?',
    a: 'Retry and rollback are useful reflexes. They are not diagnosis. A system that only has those two moves will keep applying them to problems they cannot fix.',
  },
  {
    n: '03',
    q: 'What happens when the diagnosis is wrong?',
    a: 'Is there a rollback path, or does a bad fix just sit there until someone notices that too? Self-healing systems need to fail safely in exactly the way the systems they are healing do.',
  },
];

const CHECKLIST = [
  'Every agent failure produces a trace you could reconstruct the workflow from',
  'Errors are categorized by cause, not just counted by frequency',
  'Prompt changes are versioned, diffable, and attributable to a specific incident',
  'A human sees the diff, the line counts, and the reasoning before anything is applied',
  'Rejected changes are discarded cleanly without leaving the agent in a half-modified state',
  'There is a rollback path for a fix that turns out to be wrong',
  'The analysis agent has context management, so it can reason over a week of traces instead of a few hundred events',
  'Incidents feed back into evaluations, so the same failure gets caught earlier next time',
];

const FAQS = [
  {
    q: 'What is a self-healing AI agent?',
    a: 'A self-healing AI agent is a system that can detect its own failures, work out why they happened, and correct itself with minimal human hand-holding. It goes beyond a retry loop or a fallback script: the goal is genuine diagnosis, distinguishing between a tool that timed out, a prompt that is ambiguous, and a model losing context in long conversations, then applying a fix suited to the actual cause.',
  },
  {
    q: 'How does a self-healing AI agent work?',
    a: 'The pattern generally runs through five stages. Detect: continuously watch for anomalies, errors, or degraded performance. Diagnose: trace the failure to its root cause. Isolate: stop the problem from cascading into other parts of the system. Repair: apply a fix, whether that is a config change, a retry strategy, or a rewritten prompt. Learn: feed the incident back in so the same failure is less likely next time.',
  },
  {
    q: 'Is a self-healing agent the same as an auto-retry or fallback mechanism?',
    a: 'No. A retry mechanism responds to a symptom without understanding it. A self-healing system diagnoses the underlying cause and applies a fix matched to that cause. The term self-healing gets used to describe everything from a basic auto-retry to a genuinely autonomous diagnostic pipeline, and the gap between those two things is enormous, so it is worth asking which one a given system actually is.',
  },
  {
    q: 'Why do self-healing AI agents matter now?',
    a: 'Manual fixes do not scale. Running one agent, a human reviewing logs and adjusting prompts is manageable. Running dozens of agents across different domains, each generating its own stream of observability data, the human effort needed to keep them healthy grows with every agent you add. That puts a hard ceiling on how fast an organization can scale its use of agentic AI.',
  },
  {
    q: 'Do self-healing agents remove humans from the loop?',
    a: 'Not in well-built systems, and arguably not ever entirely. They remove humans from the tedious part of the loop: the hours spent manually sifting through traces to find a pattern a machine could surface in minutes. The judgment about whether a proposed fix is a good idea stays with a person who understands the system and what is at stake if the fix is wrong.',
  },
  {
    q: 'What is the human approval gate in a self-healing system?',
    a: 'It is the checkpoint where the system shows a human exactly what would change before anything is applied: a diff of the proposed edit, the lines added and removed, and the reasoning behind it. In systems like Adaptive, the entire agent execution pauses and waits for explicit approval. Say no and the change is discarded. Say yes and it is applied, then the agent resumes. That single design choice is what separates self-healing from self-mutating.',
  },
  {
    q: 'What is Adaptive and how does it implement self-healing?',
    a: 'Adaptive is an open-source multi-agent project, built by Madhur Prashant, that closes the loop between an agent misbehaving in production and its prompt being fixed. It uses three specialized agents: an Insights Agent that connects to observability platforms and analyzes execution traces, an Evolution Agent that reads prompt files and drafts specific edits, and a smaller Routing Agent that decides whether a question needs analysis or a full optimization pass. Nothing is applied without a human reviewing the diff first.',
  },
  {
    q: 'Why does context engineering matter for self-healing agents?',
    a: 'Observability traces are enormous. Analyzing the last 24 hours of agent errors can mean parsing thousands of individual trace events, and doing that inside a single context window does not work: the model either runs out of room or starts losing track of earlier findings, the classic lost-in-the-middle problem. Layered middleware such as history summarization, tool-output condensing, semantic memory search, and artifact pruning is what makes meaningful analysis possible at all.',
  },
  {
    q: 'What are the different types of self-healing in AI systems?',
    a: 'Four flavors show up across the industry. Orchestration-level healing treats agent reliability as a runtime control problem. Infrastructure-level healing is the SRE-style pattern of auto-restarting services or scaling resources. Prompt and behavior optimization covers agents that improve other agents by analyzing performance and proposing better instructions. Code-level healing covers agents that patch bugs, regenerate broken test snapshots, or fix misconfigured deployment scripts. They share a closed-loop philosophy but operate at very different layers of the stack.',
  },
  {
    q: 'Can self-healing agents fix prompts automatically without approval?',
    a: 'Technically yes, but that is self-mutating rather than self-healing, and it is not how responsible production systems are built today. Full autonomous online optimization, where agents adjust their own behavior in real time without a human checkpoint, is still mostly a stated direction for future work rather than something running unsupervised in production.',
  },
  {
    q: 'What observability data do self-healing agents need?',
    a: 'Execution traces detailed enough to reconstruct a workflow: error frequency and type, tool-usage patterns and failures, reasoning quality, latency by step, and where multi-step workflows bottleneck. Platforms like LangSmith and Langfuse are common sources. Without trace-level data, a self-healing system has nothing to diagnose from and falls back to guessing.',
  },
  {
    q: 'What are the risks of self-healing AI agents?',
    a: 'The main ones are a wrong diagnosis leading to a fix that makes things worse, a change applied without anyone understanding it, no rollback path when the fix fails, and false confidence from a system that only ever pattern-matches to retry and roll back. Each of those is manageable with human review, versioned changes, and a rollback path, and dangerous without them.',
  },
  {
    q: 'How mature is self-healing AI today?',
    a: 'The honest state of the field, even in well-built systems, is offline optimization with human oversight. It automates the grinding analysis work while keeping a person in charge of what actually ships. Real-time autonomous self-correction in production remains largely aspirational.',
  },
  {
    q: 'When should a team invest in self-healing infrastructure?',
    a: 'Once the manual loop starts costing more than it returns. A useful signal is running several agents in production where someone regularly reads logs, forms a hypothesis, and edits a prompt. At that point the analysis work is repetitive enough to automate and valuable enough to be worth automating well.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How a self-healing AI agent loop works',
  description:
    'The five-stage loop a self-healing AI agent runs through to detect, diagnose, isolate, repair, and learn from its own production failures.',
  totalTime: 'PT11M',
  step: STAGES.map(({ title, body }, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: title,
    text: body,
    url: `${CANONICAL}#stage-${title.toLowerCase()}`,
  })),
};

export default function BlogPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Breadcrumb items={[{ label: 'Insights', href: '/insights' }, { label: TITLE }]} />
      <main style={{ background: 'var(--color-bg-primary)', minHeight: '100vh' }}>
        {/* Hero image */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '21/9',
            maxHeight: '520px',
            overflow: 'hidden',
          }}
        >
          <Image
            src="/blog-self-healing-ai-agents.svg"
            alt="Self-healing AI agent architecture showing the detect, diagnose, isolate, repair and learn loop feeding a human approval gate that reviews the proposed prompt diff"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 50%' }}
            priority
            unoptimized
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to bottom, rgba(18,18,18,0) 40%, rgba(18,18,18,0.85) 100%)',
            }}
            aria-hidden
          />
        </div>

        {/* Article */}
        <article
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            padding: 'clamp(2.5rem, 6vw, 4rem) clamp(1.25rem, 5vw, 2rem)',
          }}
        >
          {/* Category + read time */}
          <div
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}
          >
            <span
              className="font-mono"
              style={{
                fontSize: '0.625rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--color-trust-amber)',
                background: 'rgba(251,191,36,0.08)',
                border: '1px solid rgba(251,191,36,0.2)',
                borderRadius: '0.25rem',
                padding: '0.2rem 0.55rem',
              }}
            >
              AI Agents
            </span>
            <span
              className="font-mono"
              style={{
                fontSize: '0.625rem',
                letterSpacing: '0.12em',
                color: 'var(--color-text-tertiary)',
              }}
            >
              11 min read
            </span>
          </div>

          {/* Title */}
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(1.75rem, 4.5vw, 2.75rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              color: 'var(--color-text-primary)',
              marginBottom: '1rem',
            }}
          >
            Self-Healing AI Agents: When Agents Learn to Fix Themselves
          </h1>

          {/* Lead */}
          <p
            className="font-serif"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              lineHeight: 1.7,
              color: 'var(--color-text-secondary)',
              fontStyle: 'italic',
              marginBottom: '2rem',
            }}
          >
            The agent that aced your test cases is not the same agent that meets real users. What
            happens next is usually a human, a log file, and a hopeful prompt edit.
          </p>

          {/* Divider */}
          <div
            style={{
              height: '1px',
              background: 'linear-gradient(90deg, rgba(251,191,36,0.3), transparent)',
              marginBottom: '2rem',
            }}
            aria-hidden
          />

          {/* Intro */}
          <div className="font-serif" style={bodyStyle}>
            <p>
              If you have ever deployed an AI agent into production, you know the uncomfortable
              truth already. The agent that aced your test cases is not the same agent that meets
              real users. It stumbles on phrasing you did not anticipate, times out calling a flaky
              API, or quietly returns malformed JSON that breaks the next step in your pipeline.
              Someone notices. Someone digs through logs. Someone edits a prompt and hopes nothing
              else breaks.
            </p>

            <blockquote
              style={{
                margin: '0.5rem 0',
                padding: '1.25rem 1.5rem',
                background: 'rgba(251,191,36,0.04)',
                borderLeft: '3px solid var(--color-trust-amber)',
                borderRadius: '0 0.5rem 0.5rem 0',
              }}
            >
              <p
                className="font-serif"
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.175rem)',
                  fontStyle: 'italic',
                  color: 'var(--color-text-primary)',
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                That cycle &mdash; deploy, discover, diagnose, patch, repeat &mdash; is exactly the
                problem self-healing AI agents are trying to solve.
              </p>
            </blockquote>

            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              What &quot;self-healing&quot; actually means
            </h2>

            <p>
              A self-healing AI agent is a system that can detect its own failures, work out why
              they happened, and correct itself with minimal human hand-holding. It is not just a
              retry loop or a fallback script. The goal is genuine diagnosis: telling the difference
              between &quot;the tool timed out,&quot; &quot;the prompt is ambiguous,&quot; and
              &quot;the model is losing context in long conversations,&quot; then applying a fix
              suited to the actual cause.
            </p>

            <p>The pattern generally runs through five stages.</p>
          </div>

          {/* Five stages */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              margin: '2rem 0',
            }}
          >
            {STAGES.map(({ n, title, body }) => (
              <div
                key={n}
                id={`stage-${title.toLowerCase()}`}
                style={{
                  background: 'var(--color-bg-card)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '0.75rem',
                  padding: 'clamp(1rem, 2.5vw, 1.5rem)',
                  display: 'flex',
                  gap: '1rem',
                }}
              >
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.625rem',
                    letterSpacing: '0.12em',
                    color: 'var(--color-trust-amber)',
                    background: 'rgba(251,191,36,0.08)',
                    border: '1px solid rgba(251,191,36,0.2)',
                    borderRadius: '0.25rem',
                    padding: '0.25rem 0.5rem',
                    height: 'fit-content',
                    flexShrink: 0,
                  }}
                >
                  {n}
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: 'clamp(0.9375rem, 1.8vw, 1.0625rem)',
                      fontWeight: 700,
                      color: 'var(--color-text-primary)',
                      margin: 0,
                      lineHeight: 1.35,
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    className="font-serif"
                    style={{
                      fontSize: 'clamp(0.8125rem, 1.5vw, 0.9375rem)',
                      color: 'var(--color-text-secondary)',
                      margin: 0,
                      lineHeight: 1.65,
                    }}
                  >
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="font-serif" style={bodyStyle}>
            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              Why this matters now
            </h2>

            <p>
              The case for self-healing agents really comes down to one thing: manual fixes do not
              scale.
            </p>

            <p>
              When you are running one agent, a human reviewing logs and adjusting prompts is
              manageable. When you are running dozens of agents across different domains, each
              generating its own stream of observability data, the human effort required to keep
              them all healthy grows with every agent you add. That puts a hard ceiling on how fast
              an organization can actually scale its use of agentic AI.
            </p>

            <p>
              There is also a quieter cost: risk aversion. Teams that know a prompt change might
              break something they cannot easily test for tend to get conservative. Known issues
              linger, not because nobody noticed, but because touching a working system feels
              riskier than living with a known flaw. Self-healing systems, done well, are meant to
              lower that risk by making changes observable, reversible, and grounded in actual
              production data instead of a hunch.
            </p>

            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              A real example: &quot;Adaptive&quot;
            </h2>

            <p>
              A recent open-source project called <strong>Adaptive</strong>, built by Madhur
              Prashant, is a good illustration of what this looks like in practice, not as a vague
              concept, but as working architecture.
            </p>

            <p>
              Adaptive is a multi-agent system that closes the loop between &quot;the agent is
              misbehaving in production&quot; and &quot;the agent&apos;s prompt has been
              fixed,&quot; using three specialized agents.
            </p>
          </div>

          {/* Three agents */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              margin: '2rem 0',
            }}
          >
            {AGENTS.map(({ name, role, body }) => (
              <div
                key={name}
                style={{
                  background: 'var(--color-bg-card)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '0.75rem',
                  padding: 'clamp(1rem, 2.5vw, 1.5rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem',
                }}
              >
                <div
                  className="font-mono"
                  style={{
                    fontSize: '0.625rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--color-trust-amber)',
                  }}
                >
                  {role}
                </div>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(0.9375rem, 1.8vw, 1.0625rem)',
                    fontWeight: 700,
                    color: 'var(--color-text-primary)',
                    margin: 0,
                    lineHeight: 1.35,
                  }}
                >
                  {name}
                </h3>
                <p
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(0.8125rem, 1.5vw, 0.9375rem)',
                    color: 'var(--color-text-secondary)',
                    margin: 0,
                    lineHeight: 1.65,
                  }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>

          <div className="font-serif" style={bodyStyle}>
            <p>
              What makes this more than a toy demo is the safeguard sitting in the middle of the
              whole flow. Nothing gets applied without a human looking at it first. Before any
              prompt modification lands, the system shows a diff of exactly what would change,
              calculates lines added and removed, and, this is the part worth noting, pauses the
              entire agent execution and waits for explicit approval. Say no, and the change is
              discarded. Say yes, and it is applied, then the agent resumes.
            </p>

            <blockquote
              style={{
                margin: '0.5rem 0',
                padding: '1.25rem 1.5rem',
                background: 'rgba(251,191,36,0.04)',
                borderLeft: '3px solid var(--color-trust-amber)',
                borderRadius: '0 0.5rem 0.5rem 0',
              }}
            >
              <p
                className="font-serif"
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.175rem)',
                  fontStyle: 'italic',
                  color: 'var(--color-text-primary)',
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                That single design choice is what separates &quot;self-healing&quot; from
                &quot;self-mutating.&quot;
              </p>
            </blockquote>

            <p>
              The system automates the expensive, error-prone part &mdash; reading thousands of
              trace events and formulating a hypothesis &mdash; while keeping a human in charge of
              the part that actually matters: deciding what goes into production.
            </p>

            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              The approval gate, in practice
            </h2>

            <p>
              It helps to picture what a human actually sees at that checkpoint. Not a summary
              saying the agent has been improved, but the change itself, at the line level, with
              execution held until someone decides.
            </p>
          </div>

          {/* Approval gate diagram */}
          <div
            className="font-mono"
            style={{
              margin: '1.5rem 0 2rem',
              background: 'var(--color-bg-card)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '0.75rem',
              padding: 'clamp(1.25rem, 3vw, 2rem)',
              overflowX: 'auto',
              fontSize: 'clamp(0.6875rem, 1.4vw, 0.8125rem)',
              lineHeight: 1.7,
              color: 'var(--color-text-secondary)',
              whiteSpace: 'pre',
            }}
          >
{`   Production traces  ->  Insights Agent  ->  findings + memory
                                                    |
                                        Routing Agent decides
                                     (analysis only | optimize)
                                                    |
                                             Evolution Agent
                                          drafts prompt edits
                                                    |
                                        [ EXECUTION PAUSED ]
                                                    |
                            +-----------------------+-----------------------+
                            |                                               |
                     human approves                                  human declines
                            |                                               |
                    change applied,                              change discarded,
                    agent resumes                                 agent resumes
                            |
                    incident feeds back
                    into evaluations`}
          </div>

          <div className="font-serif" style={bodyStyle}>
            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              The unsexy part that makes it work: context engineering
            </h2>

            <p>
              It is tempting to think self-healing agents are mostly about clever diagnosis. In
              practice, a huge share of the engineering effort goes into simply keeping the analysis
              agent from drowning in its own data.
            </p>

            <p>
              Observability traces are enormous. Analyzing &quot;the last 24 hours of agent
              errors&quot; can mean parsing thousands of individual trace events, and doing that
              inside a single context window does not work. The model either runs out of room or
              starts losing track of earlier findings, the classic &quot;lost in the middle&quot;
              problem.
            </p>

            <p>Systems like Adaptive handle this with layered middleware:</p>
          </div>

          {/* Context tactics */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem',
              margin: '1.5rem 0 2rem',
            }}
          >
            {CONTEXT_TACTICS.map((item) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  background: 'var(--color-bg-card)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '0.5rem',
                  padding: '0.75rem 1rem',
                }}
              >
                <span
                  aria-hidden
                  style={{
                    width: '0.4rem',
                    height: '0.4rem',
                    flexShrink: 0,
                    marginTop: '0.55rem',
                    borderRadius: '50%',
                    background: 'var(--color-trust-amber)',
                  }}
                />
                <p
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(0.8125rem, 1.5vw, 0.9375rem)',
                    color: 'var(--color-text-secondary)',
                    margin: 0,
                    lineHeight: 1.55,
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="font-serif" style={bodyStyle}>
            <p>
              None of this is glamorous, but it is the difference between an agent that can
              meaningfully reason about a week&apos;s worth of production data and one that chokes
              on the first few hundred trace events.
            </p>

            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              Where this fits in the broader landscape
            </h2>

            <p>
              Self-healing shows up in a few related but distinct flavors across the industry. They
              share a philosophy of closed-loop detection, diagnosis, and repair, but operate at
              very different layers of the stack.
            </p>
          </div>

          {/* Landscape table */}
          <div
            style={{
              overflowX: 'auto',
              margin: '2rem 0',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '0.75rem',
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '560px' }}>
              <thead>
                <tr style={{ background: 'var(--color-bg-card)' }}>
                  {['Flavor', 'Operates at', 'What it does'].map((h) => (
                    <th
                      key={h}
                      className="font-mono"
                      style={{
                        textAlign: 'left',
                        fontSize: '0.6875rem',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'var(--color-trust-amber)',
                        padding: '0.875rem 1rem',
                        borderBottom: '1px solid rgba(251,191,36,0.2)',
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {LANDSCAPE.map(({ layer, scope, what }, i) => (
                  <tr
                    key={layer}
                    style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}
                  >
                    <td
                      className="font-serif"
                      style={{
                        padding: '0.875rem 1rem',
                        fontWeight: 700,
                        color: 'var(--color-text-primary)',
                        fontSize: '0.9375rem',
                        borderBottom: '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      {layer}
                    </td>
                    <td
                      className="font-serif"
                      style={{
                        padding: '0.875rem 1rem',
                        color: 'var(--color-text-secondary)',
                        fontSize: '0.875rem',
                        borderBottom: '1px solid rgba(255,255,255,0.06)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {scope}
                    </td>
                    <td
                      className="font-serif"
                      style={{
                        padding: '0.875rem 1rem',
                        color: 'var(--color-text-secondary)',
                        fontSize: '0.875rem',
                        borderBottom: '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      {what}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="font-serif" style={bodyStyle}>
            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              What to watch out for
            </h2>

            <p>
              It is worth being honest about where this field actually stands.
              &quot;Self-healing&quot; gets used to describe everything from a basic auto-retry
              mechanism to a genuinely autonomous diagnostic pipeline, and the gap between those two
              things is enormous. A few questions cut through the marketing when you are evaluating
              a system, or building one.
            </p>
          </div>

          {/* Evaluation questions */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              margin: '2rem 0',
            }}
          >
            {EVAL_QUESTIONS.map(({ n, q, a }) => (
              <div
                key={n}
                style={{
                  background: 'var(--color-bg-card)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '0.75rem',
                  padding: 'clamp(1rem, 2.5vw, 1.5rem)',
                  display: 'flex',
                  gap: '1rem',
                }}
              >
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.625rem',
                    letterSpacing: '0.12em',
                    color: 'var(--color-trust-amber)',
                    background: 'rgba(251,191,36,0.08)',
                    border: '1px solid rgba(251,191,36,0.2)',
                    borderRadius: '0.25rem',
                    padding: '0.25rem 0.5rem',
                    height: 'fit-content',
                    flexShrink: 0,
                  }}
                >
                  {n}
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <p
                    className="font-serif"
                    style={{
                      fontSize: 'clamp(0.9375rem, 1.8vw, 1.0625rem)',
                      fontWeight: 700,
                      color: 'var(--color-text-primary)',
                      margin: 0,
                      lineHeight: 1.35,
                    }}
                  >
                    {q}
                  </p>
                  <p
                    className="font-serif"
                    style={{
                      fontSize: 'clamp(0.8125rem, 1.5vw, 0.9375rem)',
                      color: 'var(--color-text-secondary)',
                      margin: 0,
                      lineHeight: 1.65,
                    }}
                  >
                    {a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="font-serif" style={bodyStyle}>
            <p>
              The honest state of the field, even in well-built systems like Adaptive, is offline
              optimization with human oversight. It automates the grinding analysis work while
              keeping a person in charge of what actually ships. Full autonomous &quot;online&quot;
              optimization, where agents adjust their own behavior in real time without a human
              checkpoint, is still mostly a stated direction for future work rather than something
              running unsupervised in production today.
            </p>

            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              A readiness checklist before you build one
            </h2>

            <p>
              If you are considering building a self-healing layer over your own agents, these are
              the properties worth having in place first:
            </p>
          </div>

          {/* Checklist */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem',
              margin: '1.5rem 0 2rem',
            }}
          >
            {CHECKLIST.map((item) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  background: 'var(--color-bg-card)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '0.5rem',
                  padding: '0.75rem 1rem',
                }}
              >
                <span
                  aria-hidden
                  style={{
                    width: '1.1rem',
                    height: '1.1rem',
                    flexShrink: 0,
                    marginTop: '0.15rem',
                    border: '1px solid rgba(251,191,36,0.4)',
                    borderRadius: '0.25rem',
                  }}
                />
                <p
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(0.8125rem, 1.5vw, 0.9375rem)',
                    color: 'var(--color-text-secondary)',
                    margin: 0,
                    lineHeight: 1.55,
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="font-serif" style={bodyStyle}>
            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              The bottom line
            </h2>

            <p>
              Self-healing AI agents are not about removing humans from the loop, at least not yet,
              and arguably not ever entirely. They are about removing humans from the tedious part
              of the loop, the hours spent manually sifting through traces to find a pattern a
              machine could surface in minutes. The judgment about whether a proposed fix is
              actually a good idea stays exactly where it should: with a person who understands the
              system and what is at stake if the fix is wrong.
            </p>

            <p>
              As more organizations run agents at scale, that shift, from humans finding and fixing
              every problem to humans reviewing and approving fixes an agent already found, is
              likely to become less of a novelty and more of a baseline expectation for how
              production AI systems are supposed to work.
            </p>

            <p>
              None of it works without the layer underneath. A self-healing loop is only as good as
              the traces it reads, which is why teams usually get their{' '}
              <Link
                href="/insights/ai-observability-for-production-ai-teams"
                style={{ color: 'var(--color-link)', textDecoration: 'underline' }}
              >
                observability stack
              </Link>{' '}
              in order first, and why so many reliability problems that look like model failures
              turn out to be{' '}
              <Link
                href="/insights/why-enterprise-ai-accuracy-is-an-infrastructure-problem"
                style={{ color: 'var(--color-link)', textDecoration: 'underline' }}
              >
                infrastructure problems
              </Link>{' '}
              instead.
            </p>
          </div>

          {/* Divider */}
          <div
            style={{
              height: '1px',
              background: 'linear-gradient(90deg, rgba(251,191,36,0.3), transparent)',
              margin: '3rem 0',
            }}
            aria-hidden
          />

          {/* FAQ */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            <div
              className="font-mono"
              style={{
                fontSize: '0.625rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--color-text-tertiary)',
                marginBottom: '1.5rem',
              }}
            >
              Frequently Asked Questions
            </div>

            {FAQS.map(({ q, a }, i) => (
              <div
                key={i}
                style={{
                  borderTop: '1px solid rgba(255,255,255,0.07)',
                  padding: '1.25rem 0',
                }}
              >
                <p
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(0.9375rem, 1.8vw, 1rem)',
                    fontWeight: 700,
                    color: 'var(--color-text-primary)',
                    lineHeight: 1.45,
                    marginBottom: '0.625rem',
                  }}
                >
                  {q}
                </p>
                <p
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(0.875rem, 1.6vw, 0.9375rem)',
                    lineHeight: 1.75,
                    color: 'var(--color-text-secondary)',
                    margin: 0,
                  }}
                >
                  {a}
                </p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div
            style={{
              height: '1px',
              background: 'linear-gradient(90deg, rgba(251,191,36,0.3), transparent)',
              margin: '3rem 0',
            }}
            aria-hidden
          />

          {/* CTA block */}
          <div
            style={{
              background: 'var(--color-bg-card)',
              border: '1px solid rgba(251,191,36,0.15)',
              borderRadius: '1rem',
              padding: 'clamp(1.75rem, 4vw, 2.5rem)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <p
              className="font-mono"
              style={{
                fontSize: '0.625rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-text-tertiary)',
              }}
            >
              Build Agents That Tell You When They Break
            </p>
            <h3
              className="font-serif"
              style={{
                fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                maxWidth: '500px',
                lineHeight: 1.3,
                margin: 0,
              }}
            >
              The hard part of agent reliability was never the model.
            </h3>
            <p
              className="font-serif"
              style={{
                fontSize: 'clamp(0.875rem, 1.6vw, 1rem)',
                color: 'var(--color-text-secondary)',
                maxWidth: '480px',
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              At Invisigent, we build agent systems with the diagnosis loop designed in from the
              start: traceable failures, versioned prompts, reversible changes, and a human in the
              approval path where the judgment actually matters.
            </p>
            <Link
              href="/contact"
              className="btn-accent"
              style={{ textDecoration: 'none', marginTop: '0.5rem' }}
            >
              Talk to Us About Your Agent Architecture &rarr;
            </Link>
          </div>
        </article>
      </main>

      <InvisigentLogoSection />
      <FooterSection />
    </>
  );
}
