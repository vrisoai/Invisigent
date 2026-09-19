import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FooterSection, InvisigentLogoSection } from '@/app/components';
import Breadcrumb from '@/app/components/Breadcrumb';

const SLUG = 'ai-agent-harness';
const CANONICAL = `https://invisigent.ai/insights/${SLUG}`;
const OG_IMAGE = 'https://invisigent.ai/blog-ai-agent-harness.svg';
const PUBLISHED = '2026-09-20T14:00:00.000Z';
const TITLE = 'AI Agent Harness: What It Is, How It Works, and Why It Matters for Production AI';
const DESCRIPTION =
  'An AI agent harness is the system around the model — tools, context, memory, permissions, feedback, and observability — that turns reasoning into controlled action. How harness engineering differs from prompts, sandboxes, and runtimes.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'AI agent harness',
    'agent harness',
    'harness engineering',
    'AI agent architecture',
    'model plus harness',
    'agent tools and permissions',
    'agent context management',
    'agent memory and state',
    'agent guardrails',
    'agent feedback loops',
    'feedforward feedback controls',
    'AI agent observability',
    'agent sandbox vs harness',
    'production AI agents',
    'LangChain agent harness',
    'Martin Fowler harness engineering',
    'Databricks AI agent harness',
    'Microsoft agent harness',
    'AI agent harness USA',
    'AI agent harness UK',
    'AI agent harness Australia',
    'AI agent harness India',
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
      'Agent = Model + Harness. Why the surrounding system — tools, context, state, permissions, and feedback — often determines whether a production agent actually works.',
    url: CANONICAL,
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: ['https://invisigent.ai'],
    section: 'AI Agents',
    tags: [
      'AI agent harness',
      'harness engineering',
      'agent architecture',
      'agent guardrails',
      'agent observability',
      'production AI',
    ],
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: TITLE, type: 'image/svg+xml' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@invisigent_ai',
    creator: '@invisigent_ai',
    title: TITLE,
    description:
      'The model reasons. The harness turns that reasoning into controlled, repeatable work. How production teams should evaluate agents as systems, not just models.',
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
      'AI agent harness,harness engineering,agent architecture,agent guardrails,agent observability,production AI',
    'revisit-after': '7 days',
    rating: 'general',
    language: 'en',
    coverage: 'Worldwide',
    distribution: 'global',
    target: 'all',
    audience: 'AI engineers, agent platform teams, technical founders, enterprise architects',
    'DC.coverage': 'United States, United Kingdom, Australia, India',
    'DC.language': 'en',
    'DC.subject':
      'AI agent harness, harness engineering, agent architecture, tools, context, guardrails, observability',
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
      'AI agent harness architecture showing the reason-act-observe loop, model-plus-harness framing, and infrastructure-sandbox-harness-runtime-model stack',
  },
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  wordCount: 5200,
  timeRequired: 'PT20M',
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
    'An AI agent harness is the software and system layer surrounding a model that manages tools, context, state, execution, permissions, and feedback. Covers why the model alone is not enough, the reason-act-observe loop, harness components, sandbox vs harness vs runtime, feedforward and feedback controls, computational vs inferential checks, harness engineering, observability, governance, common mistakes, and a practical production architecture.',
  keywords:
    'AI agent harness, harness engineering, agent architecture, agent tools, context management, guardrails, feedback loops, observability, production AI agents',
  inLanguage: 'en',
  isPartOf: {
    '@type': 'Blog',
    '@id': 'https://invisigent.ai/insights#blog',
    name: 'AI Infrastructure Insights',
    publisher: { '@type': 'Organization', name: 'Invisigent' },
  },
  about: [
    { '@type': 'Thing', name: 'AI agent harness' },
    { '@type': 'Thing', name: 'Harness engineering' },
    { '@type': 'Thing', name: 'AI agent architecture' },
    { '@type': 'Thing', name: 'Production AI agents' },
  ],
  mentions: [
    { '@type': 'Organization', name: 'LangChain' },
    { '@type': 'Organization', name: 'Microsoft' },
    { '@type': 'Organization', name: 'Databricks' },
    { '@type': 'Organization', name: 'Red Hat' },
    { '@type': 'Person', name: 'Martin Fowler' },
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

const FAQS = [
  {
    q: 'What is an AI agent harness?',
    a: 'An AI agent harness is the software and system layer surrounding a model that manages information, tools, state, execution, permissions, and feedback so the model can complete a task. The model provides reasoning; the harness gives that reasoning an environment in which it can become useful, controlled work.',
  },
  {
    q: 'How is an agent different from a model?',
    a: 'A useful mental model is Agent = Model + Harness. A language model can reason about an action and propose a tool call, but something else must execute that call, retrieve files, apply code changes, run tests, and return results. Without the harness, you mostly have text generation — not a production agent.',
  },
  {
    q: 'What components typically live inside an agent harness?',
    a: 'Common components include tools, context management, memory and durable state, workspace and execution environments, guardrails and permissions, verification/feedback loops, and observability. Different agent types emphasize different pieces, but they all solve the same problem: turning model output into controlled, repeatable action.',
  },
  {
    q: 'What is the core agent loop?',
    a: 'Most production agents follow a reason → act → observe → repeat cycle. The model receives context and decides what to do, the harness executes the tool call, results are fed back into context, and the model continues until a stopping condition is reached. It is not a simple prompt-to-answer flow.',
  },
  {
    q: 'How is a harness different from a sandbox?',
    a: 'A sandbox primarily limits the damage an agent can cause — what it is allowed to touch. A harness primarily helps the agent perform the task effectively and controllably by providing context, tools, instructions, tests, and feedback. Sandboxing is subtractive; harness engineering is additive. They work together but solve different problems.',
  },
  {
    q: 'How is a harness different from an agent runtime?',
    a: 'The terms are sometimes used interchangeably, but a useful distinction is that the runtime drives the agent loop — taking model output, executing tools, and updating context — while the harness is the enablement layer engineered around that loop. Ask which component executes the loop and which components make that loop effective and safe.',
  },
  {
    q: 'What are feedforward and feedback controls in harness engineering?',
    a: 'Feedforward controls guide the model before it acts: coding conventions, system instructions, documentation, AGENTS.md, skills, and architectural rules. Feedback controls inspect what happened after the model acted: tests, linters, type checkers, logs, static analysis, browser checks, and AI review. Strong systems need both.',
  },
  {
    q: 'Why can more tools make an agent worse?',
    a: 'Capability does not increase linearly with tool count. Too many poorly described tools create a tool-selection problem: the model must understand which tool exists, when to use it, what arguments it needs, and whether another tool would be better. Give agents the right tools with clear interfaces, permissions, and context — not every available capability by default.',
  },
  {
    q: 'Why can the same model behave differently across teams?',
    a: 'Because agent capability is a model-plus-harness configuration. The same underlying model can perform poorly with vague instructions, messy tools, no state, and no verification — or much better with curated context, clean tool interfaces, persistence, deterministic checks, approval boundaries, and observability.',
  },
  {
    q: 'What is harness engineering?',
    a: 'Harness engineering is the iterative practice of improving the system around the model when agents repeatedly fail. Instead of only asking humans to fix each mistake manually, you strengthen feedforward and feedback controls — guides, tests, linters, skills, permissions — so future failures become less likely. It is broader than prompt engineering.',
  },
  {
    q: 'Why does observability matter for agent harnesses?',
    a: 'Production agents are hard to operate if you only see the final answer. You need to reconstruct what context the agent received, which tools it called, what those tools returned, what state changed, which permissions were exercised, where the workflow failed, and whether it retried. Without traces, the agent becomes a black box.',
  },
  {
    q: 'How should teams evaluate agent harnesses?',
    a: 'Evaluate the whole configuration users interact with — model, context, tools, memory, execution, guardrails, and feedback — not only model benchmarks. When you change prompts, tools, memory, permissions, or verification, agent behavior changes. Without evaluation, harness changes become guesswork.',
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

const SOURCES = [
  {
    label: 'Red Hat — What even is the harness in AI?',
    href: 'https://www.redhat.com/en/blog/what-even-harness-ai',
    note: 'Infrastructure, sandbox, harness, runtime, and model; additive vs subtractive framing.',
  },
  {
    label: 'Martin Fowler — Harness engineering for coding agent users',
    href: 'https://martinfowler.com/articles/harness-engineering.html',
    note: 'Feedforward/feedback controls, computational vs inferential controls, steering loop.',
  },
  {
    label: 'LangChain — The Anatomy of an Agent Harness',
    href: 'https://www.langchain.com/blog/the-anatomy-of-an-agent-harness',
    note: 'Model-plus-harness framing; tools, state, execution, and orchestration.',
  },
  {
    label: 'Parallel — What is an AI harness?',
    href: 'https://parallel.ai/articles/what-is-an-agent-harness',
    note: 'Tools, memory, context management, and long-running task continuity.',
  },
  {
    label: 'MindStudio — What Is a Harness?',
    href: 'https://www.mindstudio.ai/blog/what-is-an-ai-harness-infrastructure-for-agents',
    note: 'Execution loop, permissions, observability, coding-agent examples.',
  },
  {
    label: 'Bright Data — What Is an AI Harness?',
    href: 'https://brightdata.com/blog/ai/what-is-an-ai-harness',
    note: 'Architectural view separating infrastructure, sandbox, harness, and runtime.',
  },
  {
    label: 'Databricks — What is an AI Agent Harness?',
    href: 'https://www.databricks.com/blog/ai-harness',
    note: 'Tools, memory, workspaces, guardrails, feedback loops, observability.',
  },
  {
    label: 'Microsoft Learn — Agent Harness',
    href: 'https://learn.microsoft.com/en-us/agent-framework/concepts/harness',
    note: 'Context providers, tools, approvals, observability, looping, background agents.',
  },
  {
    label: 'Atlan — What Is an Agent Harness?',
    href: 'https://atlan.com/know/what-is-an-agent-harness/',
    note: 'Guides/sensors framing, state, tools, guardrails, context layer.',
  },
  {
    label: 'Cobus Greyling — Agent = Model + Harness',
    href: 'https://cobusgreyling.medium.com/agent-model-harness-0d018f3d5014',
    note: 'Model-harness relationship and execution-alignment perspective.',
  },
  {
    label: 'Harnesses.sh — AI Agent Harness Directory',
    href: 'https://www.harnesses.sh/',
    note: 'Ecosystem-level view of different harness and agent implementations.',
  },
  {
    label: 'BoringBot — AI Agent Harnesses Explained',
    href: 'https://boringbot.substack.com/p/ai-agent-harnesses-explained-architecture',
    note: 'Execution, permissions, multi-user isolation, auditability, governance.',
  },
  {
    label: 'DEV Community — Building a Production-Ready AI Agent Harness',
    href: 'https://dev.to/apssouza22/building-a-production-ready-ai-agent-harness-2570',
    note: 'Auth, memory, persistence, guardrails, metrics, MCP, evaluation.',
  },
];

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

const codeBlockStyle = {
  margin: '0.25rem 0',
  background: 'var(--color-bg-card)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '0.75rem',
  padding: 'clamp(1.25rem, 3vw, 1.75rem)',
  overflowX: 'auto' as const,
  fontSize: 'clamp(0.6875rem, 1.4vw, 0.8125rem)',
  lineHeight: 1.7,
  color: 'var(--color-text-secondary)',
  whiteSpace: 'pre' as const,
};

function Quote({ children }: { children: ReactNode }) {
  return (
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
        {children}
      </p>
    </blockquote>
  );
}

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
      <Breadcrumb items={[{ label: 'Insights', href: '/insights' }, { label: TITLE }]} />
      <main style={{ background: 'var(--color-bg-primary)', minHeight: '100vh' }}>
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
            src="/blog-ai-agent-harness.svg"
            alt="AI agent harness architecture showing the reason-act-observe loop, model-plus-harness framing, and infrastructure-sandbox-harness-runtime-model stack"
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

        <article
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            padding: 'clamp(2.5rem, 6vw, 4rem) clamp(1.25rem, 5vw, 2rem)',
          }}
        >
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
              20 min read
            </span>
          </div>

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
            AI Agent Harness: What It Is, How It Works, and Why It Matters for Production AI
          </h1>

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
            The model reasons. The harness turns that reasoning into controlled, repeatable work.
          </p>

          <div
            style={{
              height: '1px',
              background: 'linear-gradient(90deg, rgba(251,191,36,0.3), transparent)',
              marginBottom: '2rem',
            }}
            aria-hidden
          />

          <div className="font-serif" style={bodyStyle}>
            <p>
              AI agents are often described as if the model is doing everything. Give an AI agent a
              task, and it can search the web, read documents, write code, call APIs, update
              databases, run tests, remember previous work, and sometimes even delegate tasks to
              other agents.
            </p>
            <p>It is tempting to look at all of this and think:</p>
            <Quote>The model has become that capable.</Quote>
            <p>But that explanation misses an important part of the architecture.</p>
            <p>
              A language model can reason about an action, but reasoning about an action is not the
              same thing as actually performing it. A model can generate a tool call. Something else
              has to execute that call. A model can decide that it needs a file. Something else has
              to retrieve that file. A model can propose a code change. Something has to apply it,
              run the tests, collect the results, and give those results back to the model.
            </p>
            <p>
              That surrounding system is where the idea of an{' '}
              <strong style={{ color: 'var(--color-text-primary)' }}>AI agent harness</strong>{' '}
              comes in.
            </p>

            <Quote>Agent = Model + Harness</Quote>

            <p>
              LangChain uses this framing to describe the harness as the code, configuration, and
              execution logic surrounding the model, while Martin Fowler uses &quot;harness&quot; as
              a broad term for the parts of an agent other than the model itself. The exact boundary
              varies between implementations, but the underlying idea is remarkably consistent:
            </p>

            <Quote>
              The model provides reasoning capability. The harness gives that reasoning an
              environment in which it can become useful work.
            </Quote>

            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              What Is an AI Agent Harness?
            </h2>

            <p>
              An AI agent harness is the software and system layer surrounding a model that manages
              the information, tools, state, execution, permissions, and feedback needed for the
              model to complete a task.
            </p>
            <p>
              Microsoft describes an agent harness as runtime scaffolding that drives model and tool
              calls, manages conversation state and context, applies approval policies, and can keep
              an agent progressing through a multi-step task. LangChain takes a broader view: if the
              model is excluded, the remaining code, configuration, tools, infrastructure,
              orchestration logic, and deterministic hooks can be considered part of the harness.
              Databricks similarly describes the model as the reasoning component and the harness as
              the surrounding system that provides tools, memory, workspace, guardrails, and other
              capabilities required for reliable operation.
            </p>
            <p>
              There is therefore no single universal checklist that defines every harness. A coding
              agent, a customer-support agent, and a research agent may have very different
              harnesses. But they tend to solve the same fundamental problem:
            </p>

            <Quote>How do we turn model output into controlled, repeatable action?</Quote>

            <h2 className="font-serif" style={h2Style}>
              Why Isn&apos;t the Model Enough?
            </h2>

            <p>Consider a simple request:</p>
            <Quote>
              Find the authentication bug in this application, fix it, and verify that the tests
              pass.
            </Quote>
            <p>
              A language model can reason about the problem. It might know what authentication bugs
              commonly look like. It might even produce a plausible patch. But by itself, a model
              doesn&apos;t automatically have access to your repository, filesystem, database,
              production APIs, browser, terminal, test runner, application logs, or internal
              documentation.
            </p>
            <p>
              A raw model fundamentally operates on the inputs provided to it and produces outputs.
              It doesn&apos;t spontaneously reach into your computer and change a file. LangChain
              highlights several capabilities that a model does not provide on its own, including
              durable state, code execution, real-time knowledge access, and environment setup.
              MindStudio makes the same distinction: the model can generate text and reason about a
              problem, but it cannot independently open a file, execute a terminal command, send an
              email, or verify whether CI passed.
            </p>
            <p>That is the gap the harness fills.</p>

            <h2 className="font-serif" style={h2Style}>
              Think of the Model as the Reasoning Engine
            </h2>

            <p>
              Imagine giving a highly capable engineer a problem but putting them in an empty room.
              They can think, plan, and explain what should happen. But without source code,
              documentation, a terminal, a database, a testing environment, or company policies,
              their ability to complete the job is severely limited.
            </p>
            <p>
              Now give that engineer a computer, repository access, documentation, a terminal,
              testing tools, relevant APIs, project rules, a workspace, permissions, and feedback
              when something fails. The engineer hasn&apos;t suddenly become more intelligent.
            </p>

            <Quote>The environment around them has become more useful.</Quote>

            <p>
              That is roughly the role of an agent harness. The model remains the reasoning engine.
              The harness provides the environment in which that reasoning can operate.
            </p>

            <h2 className="font-serif" style={h2Style}>
              The Core Agent Loop
            </h2>

            <p>
              One of the easiest ways to understand a harness is to follow a single agent action.
              Suppose a coding agent receives: &quot;Fix the login bug.&quot;
            </p>

            <pre className="font-mono" style={codeBlockStyle}>{`User request
     ↓
Model receives context
     ↓
Model decides what to do
     ↓
Tool call
     ↓
Harness executes the tool
     ↓
Result comes back
     ↓
Model observes the result
     ↓
Model decides what to do next
     ↓
...`}</pre>

            <p>
              Databricks describes this as a{' '}
              <strong style={{ color: 'var(--color-text-primary)' }}>
                reason → act → observe → repeat
              </strong>{' '}
              cycle. MindStudio describes a similar loop: the harness sends context to the model,
              receives the response, determines whether a tool should be called, executes it, adds
              the result back to context, and continues until a stopping condition is reached.
            </p>
            <p>This is important because the agent isn&apos;t simply Prompt → Answer. It is closer to:</p>

            <pre className="font-mono" style={codeBlockStyle}>{`Context → Reason → Act → Observe → Update context → Reason again`}</pre>

            <p>The harness is deeply involved in that loop.</p>

            <h2 className="font-serif" style={h2Style}>
              What Actually Lives Inside an Agent Harness?
            </h2>

            <p>
              Different systems draw the boundary differently, but several components appear
              repeatedly across the literature and implementations.
            </p>

            <h3
              className="font-serif"
              style={{
                fontSize: 'clamp(1.05rem, 2.2vw, 1.2rem)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                marginBottom: '-0.5rem',
              }}
            >
              1. Tools
            </h3>

            <p>
              Tools are one of the most visible parts of a harness. The model might decide it needs
              to inspect a database, search the web, or modify a file. The harness exposes those
              capabilities, receives structured requests, and decides whether and how they should be
              executed.
            </p>
            <p>
              Parallel describes the tool integration layer as the mechanism connecting a model to
              external tools and APIs. MindStudio describes the same basic mechanism: define
              available tools, present them to the model, receive tool calls, execute the underlying
              functions, and return results.
            </p>

            <Quote>
              The model can request an action. The harness can perform and control that action.
            </Quote>

            <h3
              className="font-serif"
              style={{
                fontSize: 'clamp(1.05rem, 2.2vw, 1.2rem)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                marginBottom: '-0.5rem',
              }}
            >
              2. Context Management
            </h3>

            <p>
              Giving an agent access to information doesn&apos;t mean giving it everything. Dumping
              every document, tool result, conversation message, and database record into every model
              call can make the system worse. The harness therefore manages which instructions,
              files, previous actions, tool results, summaries, and retrieved information should be
              present for a given step.
            </p>
            <p>
              Parallel describes this as context engineering, including isolation, reduction, and
              retrieval. Databricks describes context compaction: as a task becomes longer, the
              system can summarize or trim older information so the model isn&apos;t overwhelmed.
            </p>

            <Quote>More context is not automatically better context.</Quote>

            <h3
              className="font-serif"
              style={{
                fontSize: 'clamp(1.05rem, 2.2vw, 1.2rem)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                marginBottom: '-0.5rem',
              }}
            >
              3. Memory and State
            </h3>

            <p>
              What happens when a task lasts longer than one conversation, the context window fills
              up, or the agent needs to resume work tomorrow? The harness can provide persistence.
              Databricks describes filesystem and durable storage as a way for agents to preserve
              code, notes, plans, intermediate work, and progress across sessions. Parallel
              similarly separates working context, session state, and long-term memory.
            </p>

            <pre className="font-mono" style={codeBlockStyle}>{`Monday: Agent investigates payment failures
        Stores files, hypotheses, tests, unresolved issues

Tuesday: Agent resumes
         Loads relevant state
         Continues investigation`}</pre>

            <p>
              Without this layer, the agent may repeatedly rediscover the same information. With it,
              the system can maintain continuity.
            </p>

            <h3
              className="font-serif"
              style={{
                fontSize: 'clamp(1.05rem, 2.2vw, 1.2rem)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                marginBottom: '-0.5rem',
              }}
            >
              4. Workspace and Execution Environment
            </h3>

            <p>
              An agent needs somewhere to work. For a coding agent that might be a repository,
              filesystem, terminal, container, sandbox, dependencies, build tools, and test runners.
              For a research agent it might be a document workspace, search services, databases,
              browser access, and structured notes.
            </p>
            <p>
              LangChain specifically identifies filesystem access, sandboxing, browsers, logs,
              screenshots, and test runners as important primitives. Saying an agent &quot;writes
              code&quot; can be misleading: the model generates the proposed change; the harness
              provides the environment in which that change can actually be applied and tested.
            </p>

            <h3
              className="font-serif"
              style={{
                fontSize: 'clamp(1.05rem, 2.2vw, 1.2rem)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                marginBottom: '-0.5rem',
              }}
            >
              5. Guardrails and Permissions
            </h3>

            <p>
              This is where the harness becomes particularly important for production systems.
              Should an agent with database access read every record, modify customer information,
              delete records, issue refunds, send emails, or deploy code? These capabilities
              shouldn&apos;t all be treated equally.
            </p>
            <p>
              MindStudio gives a simple example: a coding agent might be permitted to read and write
              within a project directory while being blocked from arbitrary shell operations; a
              customer-support agent might retrieve order information but require additional
              controls before issuing large refunds. Databricks describes permissions, policies,
              approvals, monitoring, and human-in-the-loop checkpoints as harness-level controls.
            </p>

            <Quote>
              The model should not be the final authority on what it is allowed to do.
            </Quote>

            <h2 className="font-serif" style={h2Style}>
              Harness vs Sandbox: They Are Not the Same Thing
            </h2>

            <p>
              A <strong style={{ color: 'var(--color-text-primary)' }}>sandbox</strong> is primarily
              about limiting the damage an agent can cause. A{' '}
              <strong style={{ color: 'var(--color-text-primary)' }}>harness</strong> is primarily
              about helping the agent perform its task effectively and controllably.
            </p>
            <p>Red Hat&apos;s proposed architecture separates:</p>

            <pre className="font-mono" style={codeBlockStyle}>{`Infrastructure
      ↓
Sandbox
      ↓
Agent Harness
      ↓
Runtime
      ↓
Model`}</pre>

            <p>
              The sandbox answers: &quot;What is the agent allowed to touch?&quot; The harness
              answers more like: &quot;What does the agent need to do the job well?&quot; Red Hat
              characterizes sandboxing as a subtractive control and harness engineering as more
              additive. Bright Data makes a similar distinction between infrastructure, sandbox,
              harness, and runtime. These layers work together, but they solve different problems.
            </p>

            <h2 className="font-serif" style={h2Style}>
              Harness vs Runtime
            </h2>

            <p>
              The terms are sometimes used interchangeably. They don&apos;t always mean exactly the
              same thing. Red Hat argues for a distinction in which the runtime drives the agent
              loop, while the harness is the enablement layer around it. Bright Data similarly
              describes the runtime as the execution engine that takes model output, executes tool
              calls, collects results, and feeds updated context back into the model.
            </p>
            <p>
              Microsoft&apos;s implementation shows how closely these pieces can be composed: its
              harness combines a chat client, pipeline, context providers, middleware, approvals,
              observability, looping, and user-facing interaction. Rather than obsessing over one
              universal definition, ask:
            </p>

            <Quote>
              Which component is executing the loop, and which components are being deliberately
              engineered to make that loop effective and safe?
            </Quote>

            <h2 className="font-serif" style={h2Style}>
              The Most Important Part: Feedback
            </h2>

            <p>Giving an agent tools is not enough. The agent also needs to know whether its actions worked.</p>

            <pre className="font-mono" style={codeBlockStyle}>{`Without verification:
Model → Edit code → "Done."

With feedback:
Model → Edit code → Run tests → Fail → Analyze → Fix → Retest → Pass`}</pre>

            <p>
              Databricks identifies feedback loops and self-verification as core harness
              capabilities. Martin Fowler takes this further with feedforward and feedback controls.
            </p>
            <p>
              <strong style={{ color: 'var(--color-text-primary)' }}>Feedforward controls</strong>{' '}
              guide the model before it acts: coding conventions, system instructions, project
              documentation, <code>AGENTS.md</code>, skills, and architectural rules. Their purpose
              is to reduce the probability of a bad first attempt.
            </p>
            <p>
              <strong style={{ color: 'var(--color-text-primary)' }}>Feedback controls</strong>{' '}
              inspect what happened after the model acted: tests, linters, type checkers, logs,
              static analysis, browser checks, and AI-based code review. Their purpose is to detect
              problems and provide signals that allow correction.
            </p>

            <Quote>
              You need both. Instructions without feedback miss failures; feedback without guidance
              can mean repeating the same mistakes.
            </Quote>

            <h2 className="font-serif" style={h2Style}>
              Computational vs Inferential Feedback
            </h2>

            <p>
              Fowler separates harness controls into computational and inferential mechanisms.
              Computational controls — tests, linters, type checkers, structural analysis — are
              deterministic or comparatively predictable and can often run quickly and repeatedly.
              Inferential controls — AI code review, LLM-as-judge evaluation, semantic analysis —
              capture more nuanced issues but are typically slower, more expensive, and themselves
              probabilistic.
            </p>

            <pre className="font-mono" style={codeBlockStyle}>{`Agent changes code
       ↓
Unit tests → Type checker → Linter → AI review → Final validation`}</pre>

            <p>
              The point isn&apos;t to check everything with another LLM. It is to use the cheapest
              reliable mechanism that can catch a particular class of error.
            </p>

            <h2 className="font-serif" style={h2Style}>
              Why More Tools Can Make an Agent Worse
            </h2>

            <p>
              It is easy to assume that agent capability increases linearly with the number of tools.
              It doesn&apos;t necessarily. At some point the model has a tool-selection problem: which
              tool exists, what it does, when to use it, what arguments it needs, what result it
              returns, and whether another tool would be better.
            </p>

            <Quote>
              The better lesson is not &quot;give agents fewer tools.&quot; It is: give agents the
              right tools, with clear interfaces, appropriate permissions, and useful context.
            </Quote>

            <h2 className="font-serif" style={h2Style}>
              Why the Same Model Can Behave Differently
            </h2>

            <p>
              Imagine two teams use the same underlying model. Team A gives it poor context, vague
              instructions, dozens of poorly described tools, no persistent state, no tests, no
              useful feedback, and broad permissions. Team B gives it carefully selected context,
              structured instructions, a clean tool interface, a persistent workspace, deterministic
              verification, clear approval boundaries, and strong observability.
            </p>
            <p>The model hasn&apos;t changed. The surrounding system has.</p>
            <p>
              Databricks explicitly argues that memory, tool orchestration, feedback loops, and
              guardrails can substantially affect agent performance. Agent capability should
              increasingly be considered at the{' '}
              <strong style={{ color: 'var(--color-text-primary)' }}>
                model + harness configuration
              </strong>{' '}
              level rather than attributed to the model alone.
            </p>

            <Quote>
              Instead of asking only &quot;Which model are you using?&quot; also ask &quot;What
              environment is that model operating inside?&quot;
            </Quote>

            <h2 className="font-serif" style={h2Style}>
              Harness Engineering: Designing the System Around the Model
            </h2>

            <p>
              Once you accept that the surrounding system matters, a new engineering problem appears.
              You don&apos;t just need to build an agent. You need to engineer the harness around
              it. Martin Fowler describes this as an iterative steering process.
            </p>
            <p>
              When an agent repeatedly violates a project architecture rule, you can add an explicit
              architectural guide, a structural test, a linter, a relevant skill, and a review check.
              Now the system has both a mechanism for preventing the mistake and a mechanism for
              detecting it if it happens anyway.
            </p>

            <pre className="font-mono" style={codeBlockStyle}>{`Instead of:
Agent fails → Human fixes → Agent fails again → Human fixes again

You want:
Agent fails → Understand why → Improve harness → Failures become less likely`}</pre>

            <p>That is the essence of harness engineering.</p>

            <h2 className="font-serif" style={h2Style}>
              Context Engineering and Harness Engineering
            </h2>

            <p>
              These concepts overlap, but they are not identical. Prompt engineering asks what you
              should tell the model. Context engineering asks what information the model should
              receive at this point. Harness engineering asks how the entire system around the model
              should operate.
            </p>

            <pre className="font-mono" style={codeBlockStyle}>{`Prompt      → Instructions
Context     → Information
Harness     → Information + Tools + State + Execution
              + Permissions + Feedback + Observability`}</pre>

            <p>
              The distinction is useful because it prevents teams from trying to solve every agent
              problem by rewriting the prompt. Sometimes the missing test runner, context policy,
              tool interface, permission model, or observability is the real problem.
            </p>

            <h2 className="font-serif" style={h2Style}>
              Observability: Knowing What the Agent Actually Did
            </h2>

            <p>
              Production agents are difficult to operate if you can only see the final answer. You
              need to know what context the agent received, which tools it called, what those tools
              returned, what state changed, which permissions were exercised, where the workflow
              failed, how long each step took, whether the model retried, and what eventually
              produced the final result.
            </p>
            <p>
              Databricks identifies logs, traces, dashboards, and audit trails as important parts of
              production harnesses. Microsoft&apos;s harness architecture also includes
              observability as a configurable capability. Without this information, an agent becomes
              a black box.
            </p>
            <p>
              For a deeper production view of this layer, see our guide on{' '}
              <Link
                href="/insights/ai-observability-for-production-ai-teams"
                style={{ color: 'var(--color-link)', textDecoration: 'underline' }}
              >
                AI observability for production AI teams
              </Link>
              .
            </p>

            <h2 className="font-serif" style={h2Style}>
              Authentication, State, Guardrails, and Deployment
            </h2>

            <p>
              A production agent has concerns that are easy to forget when building a prototype: who
              the user is, what they can access, where state is stored, what happens on crashes or
              tool timeouts, how tool calls are logged, how unauthorized actions are prevented, how
              harness changes are evaluated, and how multiple agents share infrastructure.
            </p>

            <pre className="font-mono" style={codeBlockStyle}>{`                 Shared Harness
        ┌─────────────────────────┐
        │ Auth / Memory / State   │
        │ Guardrails / Evals      │
        │ Observability / Tools   │
        └─────────────────────────┘
              ↓        ↓       ↓
          Research   Support   Coding
           Agent      Agent     Agent`}</pre>

            <p>
              The agents remain task-specific. The infrastructure becomes reusable. That separation
              lets the agent focus on the task instead of repeatedly rebuilding infrastructure.
            </p>

            <h2 className="font-serif" style={h2Style}>
              The Human Still Matters
            </h2>

            <p>
              A harness is not an attempt to remove humans from the system entirely. In many
              production workflows, the harness determines where human judgment should remain in the
              loop — for example, requiring approval before deleting production data or issuing large
              refunds.
            </p>

            <Quote>
              Automate what can be automated, and create explicit control points where human
              judgment is still necessary.
            </Quote>

            <p>
              That design pattern sits close to how we think about{' '}
              <Link
                href="/insights/self-healing-ai-agents"
                style={{ color: 'var(--color-link)', textDecoration: 'underline' }}
              >
                self-healing AI agents
              </Link>
              : automate diagnosis and proposals, keep humans in the approval path for consequential
              changes.
            </p>

            <h2 className="font-serif" style={h2Style}>
              Harness Architecture Is Also a Governance Problem
            </h2>

            <p>
              As agents move from experiments into organizations, someone has to decide which tools
              are available, who can add a tool, which tools require approval, what information can
              enter context, where memory can be stored, who can modify shared instructions, how long
              logs are retained, and how agent changes are evaluated.
            </p>
            <p>
              Multi-user agent systems make these questions particularly important because
              permissions, memory scope, and auditability have to remain separated between users. An
              agent may be autonomous in its execution while still operating inside policies
              established by people.
            </p>

            <h2 className="font-serif" style={h2Style}>
              There Isn&apos;t One Universal Agent Harness
            </h2>

            <p>
              Harnesses.sh maintains a directory covering different agent systems, from IDE-based
              agents to cloud coding agents and other agentic environments. The diversity itself
              illustrates an important point: &quot;harness&quot; is not one product or one fixed
              architecture.
            </p>
            <p>
              One system may emphasize local execution and explicit user approval. Another may
              emphasize isolated cloud environments, background execution, and persistent workspaces.
              Another may focus on research, browser interaction, document processing, or multi-agent
              delegation. The underlying principle remains the same:
            </p>

            <Quote>
              The model needs a surrounding system that translates reasoning into controlled action.
            </Quote>

            <h2 className="font-serif" style={h2Style}>
              A Practical Architecture for a Production Agent Harness
            </h2>

            <pre className="font-mono" style={codeBlockStyle}>{`USER / APPLICATION
        ↓
   Agent API
        ↓
 Context Layer (instructions, memory, retrieval, state)
        ↓
      MODEL (reason, plan, select tools)
        ↓
  Tool request
        ↓
 Harness Control (validation, permissions, routing, policies)
        ↓
 Search / APIs / Execution
        ↓
 Results / State
        ↓
 Verification (tests, validators, evals, human approval)
        ↓
 Back to model`}</pre>

            <p>
              Not every agent needs every component. The right architecture depends on task
              complexity, risk, duration, tool access, data sensitivity, required autonomy, cost
              constraints, and reliability requirements.
            </p>

            <h2 className="font-serif" style={h2Style}>
              How to Build a Better Harness
            </h2>

            <p>A useful development process is to work backward from failures.</p>
            <ol
              style={{
                margin: 0,
                paddingLeft: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
              }}
            >
              <li>
                <strong style={{ color: 'var(--color-text-primary)' }}>Start with the task</strong>{' '}
                — what does the agent actually need to accomplish?
              </li>
              <li>
                <strong style={{ color: 'var(--color-text-primary)' }}>
                  Identify missing capabilities
                </strong>{' '}
                — information, actions, systems, durable state, approvals.
              </li>
              <li>
                <strong style={{ color: 'var(--color-text-primary)' }}>
                  Add only the necessary tools
                </strong>{' '}
                — a clear capability surface, not your entire infrastructure.
              </li>
              <li>
                <strong style={{ color: 'var(--color-text-primary)' }}>
                  Establish permissions
                </strong>{' '}
                — who can use each tool, with what arguments, against which resources, and when
                approval is required.
              </li>
              <li>
                <strong style={{ color: 'var(--color-text-primary)' }}>Add verification</strong> —
                how will the agent know it succeeded?
              </li>
              <li>
                <strong style={{ color: 'var(--color-text-primary)' }}>Add observability</strong> —
                reconstruct what the agent saw, decided, called, changed, and why it stopped.
              </li>
              <li>
                <strong style={{ color: 'var(--color-text-primary)' }}>
                  Evaluate the harness itself
                </strong>{' '}
                — changes to prompts, tools, memory, permissions, and verification change behavior.
                Evaluate the whole configuration.
              </li>
            </ol>

            <h2 className="font-serif" style={h2Style}>
              Common Mistakes When Building Agent Harnesses
            </h2>

            <ul
              style={{
                margin: 0,
                paddingLeft: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              <li>Treating the model as the entire agent</li>
              <li>Solving everything with prompts when a deterministic check would catch the error</li>
              <li>Giving the model unrestricted access</li>
              <li>Ignoring state for long-running work</li>
              <li>No verification / feedback loop</li>
              <li>No observability</li>
              <li>Measuring only the model instead of the full configuration</li>
            </ul>

            <h2 className="font-serif" style={h2Style}>
              The Real Shift: From Model-Centric to System-Centric AI
            </h2>

            <p>
              For years, much of the AI conversation centered around which model is smarter. That
              question still matters. But when models become capable enough to perform multi-step
              work, another set of questions becomes equally important: what can the model see, what
              can it do, what is it allowed to do, how does it maintain state, how does it recover
              from failure, how does it verify its work, how do we observe its behavior, and how do
              we improve the system when it repeatedly fails?
            </p>

            <Quote>Those are harness questions. And they are production engineering questions.</Quote>

            <h2 className="font-serif" style={h2Style}>
              Final Takeaway
            </h2>

            <p>
              An AI agent isn&apos;t simply a model with a fancy prompt. A useful agent is a system
              in which model reasoning is connected to tools, context, state, execution, permissions,
              and feedback.
            </p>

            <pre className="font-mono" style={codeBlockStyle}>{`MODEL + HARNESS = AGENT`}</pre>

            <p>
              The model provides the reasoning capability. The harness provides the environment that
              lets that reasoning become action. And in production, the difference between a demo
              that looks intelligent and a system that can reliably perform useful work often comes
              down to everything surrounding the model.
            </p>
            <p>So the next time you evaluate an AI agent, don&apos;t stop at which model is underneath it. Also ask:</p>
            <ul
              style={{
                margin: 0,
                paddingLeft: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              <li>What does it see?</li>
              <li>What can it do?</li>
              <li>What is it allowed to do?</li>
              <li>How does it remember?</li>
              <li>How does it verify its work?</li>
              <li>And what happens when it gets something wrong?</li>
            </ul>
            <p>
              Those questions take you from thinking about an AI model to thinking about an{' '}
              <strong style={{ color: 'var(--color-text-primary)' }}>AI system</strong>. And that is
              where agent engineering really begins.
            </p>
          </div>

          <div
            style={{
              height: '1px',
              background: 'linear-gradient(90deg, rgba(251,191,36,0.3), transparent)',
              margin: '3rem 0',
            }}
            aria-hidden
          />

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

          <div
            style={{
              height: '1px',
              background: 'linear-gradient(90deg, rgba(251,191,36,0.3), transparent)',
              margin: '3rem 0',
            }}
            aria-hidden
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
            <div
              className="font-mono"
              style={{
                fontSize: '0.625rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--color-text-tertiary)',
              }}
            >
              Sources and Further Reading
            </div>
            <p
              className="font-serif"
              style={{
                fontSize: 'clamp(0.875rem, 1.6vw, 0.9375rem)',
                lineHeight: 1.7,
                color: 'var(--color-text-secondary)',
                margin: 0,
              }}
            >
              This article synthesizes the following references, with the strongest technical
              emphasis on Microsoft Learn, Databricks, Martin Fowler, and LangChain:
            </p>
            <ul
              style={{
                margin: 0,
                paddingLeft: '1.15rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
              }}
            >
              {SOURCES.map(({ label, href, note }) => (
                <li
                  key={href}
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(0.8125rem, 1.5vw, 0.875rem)',
                    lineHeight: 1.65,
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--color-link)', textDecoration: 'underline' }}
                  >
                    {label}
                  </a>
                  {' — '}
                  {note}
                </li>
              ))}
            </ul>
          </div>

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
              Build Agents as Systems
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
              Reliable agents are harness problems, not just model problems.
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
              At Invisigent, we help teams design production agent systems with clear tool surfaces,
              permission boundaries, durable state, verification loops, and observability designed
              in from the start.
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
