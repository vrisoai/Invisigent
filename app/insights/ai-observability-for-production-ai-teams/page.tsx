import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FooterSection, InvisigentLogoSection } from '@/app/components';
import Breadcrumb from '@/app/components/Breadcrumb';

const SLUG = 'ai-observability-for-production-ai-teams';
const CANONICAL = `https://invisigent.ai/insights/${SLUG}`;
const OG_IMAGE = 'https://invisigent.ai/blog-ai-observability-production-teams.svg';
const PUBLISHED = '2026-07-07T10:00:00.000Z';
const TITLE =
  'How Production AI Teams Prevent Hallucinations, Control Costs, and Debug AI Systems With Observability';
const DESCRIPTION =
  'AI observability has quietly become one of the most important parts of building a reliable AI product. Why engineering teams are investing in it, and how to build an observability stack that actually scales with you.';

export const metadata: Metadata = {
  title: `${TITLE} | Invisigent`,
  description: DESCRIPTION,
  keywords: [
    'AI observability',
    'LLM observability',
    'AI agent observability',
    'RAG observability',
    'production AI monitoring',
    'AI observability platform',
    'Langfuse',
    'LangSmith',
    'Arize Phoenix',
    'Braintrust evaluations',
    'Helicone',
    'AI cost monitoring',
    'AI hallucination monitoring',
    'AI trace explorer',
    'OpenTelemetry AI',
    'AI evaluation pipeline',
    'AI observability USA',
    'AI observability UK',
    'AI observability Australia',
    'AI observability India',
    'Invisigent AI consulting',
  ],
  authors: [{ name: 'Invisigent Research', url: 'https://invisigent.ai' }],
  creator: 'Invisigent',
  publisher: 'Invisigent',
  category: 'AI Observability',
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
      'Why production AI teams treat observability as core infrastructure, the platforms worth comparing, and the architecture that makes AI systems debuggable, measurable, and trustworthy.',
    url: CANONICAL,
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: ['https://invisigent.ai'],
    section: 'AI Observability',
    tags: [
      'AI observability',
      'LLM observability',
      'RAG observability',
      'AI agent observability',
      'AI cost monitoring',
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
      'AI observability has quietly become one of the most important parts of building a reliable AI product. Here is how to build a stack that scales with you.',
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
    'article:section': 'AI Observability',
    'article:tag': 'AI observability,LLM observability,RAG observability,AI agent observability,production AI monitoring',
    'revisit-after': '7 days',
    rating: 'general',
    language: 'en',
    coverage: 'Worldwide',
    distribution: 'global',
    target: 'all',
    audience: 'developers, AI engineers, technical founders, enterprise teams',
    'DC.coverage': 'United States, United Kingdom, Australia, India',
    'DC.language': 'en',
    'DC.subject': 'AI observability, LLM observability, RAG observability, production AI monitoring',
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
    caption: 'AI observability architecture showing instrumentation, storage and processing, dashboards, and alerting layers for production AI systems',
  },
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  wordCount: 4300,
  timeRequired: 'PT17M',
  author: { '@type': 'Organization', name: 'Invisigent Research', url: 'https://invisigent.ai' },
  publisher: {
    '@type': 'Organization',
    name: 'Invisigent',
    url: 'https://invisigent.ai',
    logo: { '@type': 'ImageObject', url: 'https://invisigent.ai/logo.png' },
    address: { '@type': 'PostalAddress', addressLocality: 'Jaipur', addressRegion: 'Rajasthan', addressCountry: 'IN' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL },
  articleSection: 'AI Observability',
  articleBody:
    'AI observability closes the gap traditional monitoring leaves behind: it tells engineering teams why an AI system behaved the way it did, not just whether the request succeeded. Covers why AI systems fail quietly rather than loudly, the six questions every production team should be able to answer, a comparison of Langfuse, LangSmith, Phoenix, Braintrust, and Helicone, a four-layer observability architecture (instrumentation, storage and processing, dashboards, alerting), a six-step implementation guide, five mistakes that limit AI reliability, a production debugging example, and a readiness checklist for shipping AI systems that can be traced, measured, and improved over time.',
  keywords:
    'AI observability, LLM observability, AI agent observability, RAG observability, production AI monitoring, Langfuse, LangSmith, Arize Phoenix, Braintrust, Helicone, AI cost monitoring, AI hallucination monitoring, OpenTelemetry AI, AI evaluation pipeline, AI trace explorer',
  inLanguage: 'en',
  isPartOf: {
    '@type': 'Blog',
    '@id': 'https://invisigent.ai/insights#blog',
    name: 'AI Infrastructure Insights',
    publisher: { '@type': 'Organization', name: 'Invisigent' },
  },
  about: [
    { '@type': 'Thing', name: 'AI observability' },
    { '@type': 'Thing', name: 'LLM observability' },
    { '@type': 'Thing', name: 'RAG observability' },
    { '@type': 'Thing', name: 'AI agent observability' },
  ],
  mentions: [
    { '@type': 'SoftwareApplication', name: 'Langfuse', applicationCategory: 'AI Observability' },
    { '@type': 'SoftwareApplication', name: 'LangSmith', applicationCategory: 'AI Observability' },
    { '@type': 'SoftwareApplication', name: 'Phoenix', applicationCategory: 'AI Observability' },
    { '@type': 'SoftwareApplication', name: 'Braintrust', applicationCategory: 'AI Evaluation' },
    { '@type': 'SoftwareApplication', name: 'Helicone', applicationCategory: 'AI Monitoring' },
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

const monoLabelStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.625rem',
  letterSpacing: '0.12em',
  textTransform: 'uppercase' as const,
  color: 'var(--color-trust-amber)',
  marginBottom: '0.3rem',
};

const SIX_QUESTIONS = [
  {
    n: '01',
    q: 'Can we trace every request?',
    a: 'When a customer reports a bad response, your team should be able to reconstruct the whole workflow, not just the final answer, from retrieval through prompt construction through tool execution.',
  },
  {
    n: '02',
    q: 'Do we know where the money is going?',
    a: 'AI costs get hard to manage fast without visibility. Good platforms break spend down by customer, feature, model, team, and environment, which makes optimization far more tractable than staring at a monthly cloud invoice.',
  },
  {
    n: '03',
    q: 'Can we measure response quality?',
    a: "A fast answer isn't the same as a good one. Track groundedness, hallucination rate, task completion, user feedback, and evaluation scores. Quality needs to be a production metric, not something checked on occasionally.",
  },
  {
    n: '04',
    q: 'Can we debug AI agents?',
    a: "Most modern AI systems aren't a single LLM call. They involve retrieval, planning, tool execution, memory, and external APIs. Observability should make each of those steps visible on its own.",
  },
  {
    n: '05',
    q: 'Can we compare prompts and models?',
    a: 'Prompt engineering never really stops, and neither does model selection. Your platform should let you compare prompt versions, model versions, cost, latency, and quality without manually digging through logs.',
  },
  {
    n: '06',
    q: 'Can the platform grow with us?',
    a: "This isn't just about today's project. It's about whether it will still hold up as your architecture gets more sophisticated.",
  },
];

const PLATFORMS = [
  { name: 'Langfuse', bestFor: 'Production AI products', why: 'Strong tracing, prompt management, evaluations, self-hosting, OpenTelemetry support' },
  { name: 'LangSmith', bestFor: 'LangChain ecosystems', why: 'Excellent visibility into agent workflows and LangGraph applications' },
  { name: 'Phoenix', bestFor: 'RAG-heavy applications', why: 'Deep insight into retrieval quality and grounding performance' },
  { name: 'Braintrust', bestFor: 'Evaluation-first teams', why: 'Powerful automated testing and model benchmarking' },
  { name: 'Helicone', bestFor: 'Rapid implementation', why: 'Proxy-based setup with immediate cost and latency visibility' },
];

const FOUR_LAYERS = [
  {
    n: '01',
    title: 'Instrumentation',
    body: 'Every request should get a unique trace that follows the workflow from start to finish. The goal is not to log everything. It is to capture enough that an engineer can reconstruct exactly what happened on any given request.',
    details: [
      'User request, prompt version, and retrieved documents',
      'Selected model, tool executions, and external API calls',
      'Token usage, final response, and evaluation results',
    ],
  },
  {
    n: '02',
    title: 'Storage & Processing',
    body: "Once you're collecting telemetry, it needs somewhere sensible to live. Most production teams split data across systems rather than dumping it all in one place, giving each system a clear job.",
    details: [
      'Langfuse for traces, prompts, and evaluations',
      'PostgreSQL for application metadata, object storage for larger payloads',
      'Prometheus for metrics, Grafana for infrastructure and AI performance side by side',
    ],
  },
  {
    n: '03',
    title: 'Dashboards',
    body: 'A good dashboard lets an engineer understand what is happening in production within a few minutes. Focus on the handful your team will actually use, not a dozen nobody opens.',
    details: [
      'Reliability: request success rate, timeouts, provider failures, retry rates',
      'Performance: retrieval, prompt construction, inference, and tool execution time broken out by stage',
      'Cost: cost per request, per customer, per feature, and token consumption',
      'Quality: groundedness, hallucination rate, task completion, safety violations, evaluation scores',
    ],
  },
  {
    n: '04',
    title: 'Alerting',
    body: 'Dashboards help you analyze the past. Alerts help you respond right now. The most useful alerts focus on customer impact, not just infrastructure health.',
    details: [
      'Hallucination rate crossing a threshold, retrieval relevance declining',
      'Evaluation scores dropping, cost per request spiking',
      'Agent failure rate climbing, average latency breaking your service objective',
    ],
  },
];

const IMPLEMENTATION_STEPS = [
  {
    n: 'Step 1',
    title: 'Define Success Metrics',
    body: 'Before writing any code, figure out what questions your observability stack actually needs to answer.',
    details: [
      'Which feature has the highest latency, which prompts produce the best outcomes',
      'Which customers generate the highest AI costs, which workflows fail most',
      'Which model gives the best quality-to-cost ratio',
    ],
  },
  {
    n: 'Step 2',
    title: 'Instrument Every Workflow',
    body: 'Create a trace for every request, and record spans for each major stage.',
    details: [
      'Retrieval, prompt construction, model inference, tool execution',
      'Response formatting and evaluation',
      'This structure makes debugging far easier than digging through isolated log lines',
    ],
  },
  {
    n: 'Step 3',
    title: 'Capture Business Context',
    body: 'Technical metrics only tell half the story. Every request should carry metadata too.',
    details: [
      'Customer ID, organization, environment, feature name',
      'Subscription tier, region, prompt version, model version',
      'That context lets engineers answer questions infrastructure metrics alone cannot',
    ],
  },
  {
    n: 'Step 4',
    title: 'Track Cost Continuously',
    body: 'Every request burns tokens, and every token costs something. Calculate it in real time rather than reviewing spend at month end.',
    details: [
      'Aggregate by customer, feature, team, environment, and model',
      'Continuous visibility beats reactive cost-cutting every time',
    ],
  },
  {
    n: 'Step 5',
    title: 'Measure Quality',
    body: 'Reliable systems track more than latency. Build automated evaluations into production and treat them like any other production signal.',
    details: [
      'Groundedness, faithfulness, helpfulness, safety, task completion',
      'If quality drops after a deploy, your platform should catch it immediately',
    ],
  },
  {
    n: 'Step 6',
    title: 'Connect AI and Infrastructure Monitoring',
    body: 'AI observability does not replace traditional monitoring, it extends it.',
    details: [
      'Keep watching CPU utilization, memory, database performance, network latency, API availability',
      'Correlate those signals with AI-specific telemetry for faster root-cause analysis during an incident',
    ],
  },
];

const MISTAKES = [
  {
    title: 'Monitoring infrastructure instead of AI',
    body: 'Plenty of organizations already have mature application monitoring. They know when a server is overloaded or a database is slow. Customers still say the AI is getting worse, because infrastructure monitoring measures whether systems are up, while AI observability measures whether they are producing useful outcomes.',
  },
  {
    title: 'Treating the model as the entire product',
    body: "When a response is bad, the model gets blamed first. Usually it is just one step in a longer chain, and the real issue is outdated retrieval data, poor prompt construction, a slow external API, a failed tool call, or missing context. Observability shows you where problems actually start.",
  },
  {
    title: 'Measuring speed instead of success',
    body: 'Fast responses make a good first impression. Accurate ones build trust that lasts. Track task completion, groundedness, user satisfaction, safety, evaluation scores, and escalation rates. They paint a much clearer picture of business value than response time alone.',
  },
  {
    title: 'Ignoring cost until finance notices',
    body: 'AI costs rarely spike overnight, they creep. Prompts get bigger, retrieval returns more documents, agent workflows grow more elaborate. Monitoring cost by request, feature, customer, and model turns optimization into routine engineering work instead of a fire drill.',
  },
  {
    title: 'Assuming production quality is permanent',
    body: "One good deployment does not guarantee the next one holds up. Models evolve, knowledge bases change, expectations rise. Continuous evaluation is what catches a quality regression before customers do.",
  },
];

const PRACTICES = [
  { title: 'Version everything', body: 'Prompts, models, evaluation datasets, retrieval pipelines, agent workflows. If it can change, version it. That is what makes regressions easy to spot and roll back.' },
  { title: 'Measure business outcomes', body: 'Infrastructure metrics tell you how the system performs. Business metrics tell you whether it is creating value: task completion, customer satisfaction, support ticket reduction, revenue influenced, cost per successful interaction.' },
  { title: 'Standardize observability across projects', body: 'Define shared standards for trace structure, metadata, prompt naming, evaluation datasets, and alert thresholds. It cuts operational complexity and makes it easier for teams to share what they learn.' },
  { title: 'Build observability into development, not after launch', body: 'Instrument workflows while they are still being built, so engineers can inspect traces as easily as they would check application logs. The earlier a problem is visible, the cheaper it is to fix.' },
  { title: 'Review AI systems regularly', body: 'Schedule regular reviews of cost trends, prompt performance, evaluation scores, retrieval quality, agent reliability, and user feedback. These reviews tend to surface optimization opportunities before customers notice a dip.' },
];

const CHECKLIST = [
  'Can we trace every request from start to finish?',
  'Do we know exactly how much each interaction costs?',
  'Are prompts and models version-controlled?',
  'Can we compare model and prompt performance over time?',
  'Are quality evaluations running automatically?',
  'Can engineers explain why a specific response was generated?',
  'Are alerts configured for quality, cost, and latency regressions?',
  'Can we identify failures without relying on customer reports?',
];

const FAQS = [
  {
    q: 'What is AI observability?',
    a: 'AI observability is the practice of monitoring, tracing, and evaluating AI systems throughout their entire lifecycle. It provides visibility into prompts, model responses, retrieval pipelines, agent workflows, token usage, latency, costs, and response quality. Unlike traditional application monitoring, it helps engineering teams understand not just whether a request succeeded, but why it behaved the way it did.',
  },
  {
    q: 'Why is AI observability important?',
    a: 'Production AI systems are significantly more complex than traditional software applications. A single user request may involve multiple LLM calls, vector databases, external APIs, tool execution, and business logic. Without observability, it is difficult to diagnose rising AI costs, hallucinations, poor retrieval quality, slow responses, agent failures, or prompt regressions before they impact customers.',
  },
  {
    q: 'How is AI observability different from traditional application monitoring?',
    a: 'Traditional monitoring platforms focus on infrastructure health: CPU usage, memory consumption, request latency, server errors. AI observability extends beyond infrastructure by monitoring AI-specific signals, including prompt versions, model versions, token usage, retrieval quality, tool execution, agent reasoning, evaluation scores, and cost per request.',
  },
  {
    q: 'What metrics should I monitor in a production AI system?',
    a: 'A combination of technical, operational, and business metrics: response latency (P50, P95, P99), token usage, cost per request and per customer, prompt versions, model versions, retrieval relevance, hallucination rate, groundedness, task completion rate, tool success rate, user feedback, and evaluation scores. Focusing only on latency or uptime gives an incomplete view of system performance.',
  },
  {
    q: 'What is LLM observability?',
    a: 'LLM observability focuses specifically on monitoring interactions with large language models: prompts, responses, latency, token consumption, costs, and model performance. When applications include retrieval, memory, external tools, or autonomous agents, teams typically expand to broader AI observability practices that cover the entire workflow.',
  },
  {
    q: 'What is AI agent observability?',
    a: 'AI agent observability provides visibility into autonomous workflows where agents make decisions, call tools, retrieve information, and complete multi-step tasks. Rather than monitoring a single model response, it tracks the entire execution process, making it far easier to debug complex agent behavior and optimize workflow performance.',
  },
  {
    q: 'What is RAG observability?',
    a: 'RAG (Retrieval-Augmented Generation) observability focuses on monitoring the retrieval pipeline that supplies context to language models. It helps teams answer whether the correct documents were retrieved, whether the retrieved context was relevant, whether poor retrieval reduced answer quality, and which retrieval step caused increased latency.',
  },
  {
    q: 'Which AI observability platform should I choose?',
    a: 'It depends on your architecture and requirements. Langfuse suits production AI applications needing tracing, evaluations, and self-hosting. LangSmith works well for LangChain and LangGraph ecosystems. Phoenix is a strong choice for retrieval-heavy RAG systems. Braintrust specializes in evaluation pipelines and benchmarking. Helicone offers a lightweight proxy approach for monitoring usage and costs.',
  },
  {
    q: 'When should I implement AI observability?',
    a: 'Ideally before your AI application reaches production. It becomes especially important once your application serves real customers, uses RAG, includes AI agents, executes tool calls, has multiple prompts or models, or generates meaningful infrastructure costs. Adding it early makes future debugging, optimization, and scaling significantly easier.',
  },
  {
    q: 'Can AI observability reduce infrastructure costs?',
    a: 'Yes. By monitoring token consumption, prompt size, retrieval behavior, and model usage, observability helps teams identify unnecessary costs. Many organizations reduce AI spending by optimizing prompts, reducing unnecessary context, choosing more cost-effective models, improving retrieval quality, and eliminating redundant model calls.',
  },
  {
    q: 'Do small AI projects need observability?',
    a: 'Not always. For prototypes, hackathons, or internal experiments, structured logging is usually sufficient. As applications become customer-facing or business-critical, observability becomes increasingly important for maintaining reliability, controlling costs, and supporting ongoing improvements.',
  },
  {
    q: 'What are the biggest mistakes teams make when implementing AI observability?',
    a: 'Logging only the final model response, ignoring prompt versioning, monitoring latency but not quality, failing to measure AI costs, not collecting business metadata, skipping automated evaluations, and waiting until production issues appear before adding observability. Addressing these early helps teams build more reliable AI systems from the start.',
  },
  {
    q: 'Can OpenTelemetry be used for AI observability?',
    a: 'Yes. Many modern AI observability platforms support OpenTelemetry, allowing organizations to combine traditional application telemetry with AI-specific traces. This creates a unified view of infrastructure health and AI workflow performance, making production debugging and root cause analysis much more efficient.',
  },
  {
    q: 'What does a production AI observability dashboard typically include?',
    a: 'A comprehensive dashboard usually combines operational, financial, and quality metrics in one place: request traces, response latency, token usage, cost analytics, prompt history, model comparisons, evaluation results, retrieval quality, agent execution timelines, error rates, and alerts and incident history.',
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
      <Breadcrumb
        items={[
          { label: 'Insights', href: '/insights' },
          { label: TITLE },
        ]}
      />
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
            src="/blog-ai-observability-production-teams.svg"
            alt="AI observability architecture showing instrumentation, storage and processing, dashboards, and alerting layers for production AI systems"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
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
              AI Observability
            </span>
            <span
              className="font-mono"
              style={{
                fontSize: '0.625rem',
                letterSpacing: '0.12em',
                color: 'var(--color-text-tertiary)',
              }}
            >
              17 min read
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
            How Production AI Teams Prevent Hallucinations, Control Costs, and Debug AI Systems
            With Observability
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
            AI observability is not extra tooling bolted onto a finished product. It is the
            difference between guessing why your AI failed and knowing.
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

          {/* Body — Intro */}
          <div
            className="font-serif"
            style={{
              fontSize: 'clamp(0.9375rem, 1.8vw, 1.0625rem)',
              lineHeight: 1.8,
              color: 'var(--color-text-secondary)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <h2 className="font-serif" style={h2Style}>
              Building an AI feature is easy. Operating one is hard.
            </h2>

            <p>
              Over the last two years, thousands of companies have launched AI powered products:
              customer support assistants, internal copilots, sales agents, knowledge search,
              document processing, code assistants. For most teams, the first demo goes shockingly
              well. The model answers correctly, the workflow feels fast, and stakeholders walk
              away impressed.
            </p>

            <p>
              Then the application reaches production, and a few weeks later the questions start.
              Why are responses suddenly slower? Why did AI costs double this month? Why is one
              customer getting better answers than another? Which prompt caused yesterday&apos;s
              quality drop? Why did the agent fail halfway through its workflow?
            </p>

            <p>
              Infrastructure dashboards usually have nothing to say about any of this. Servers are
              healthy, databases are responding, the API isn&apos;t throwing errors. From an
              infrastructure standpoint, everything looks fine. But users are having a completely
              different experience.
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
                This is the gap that AI observability exists to close.
              </p>
            </blockquote>

            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              Traditional monitoring stops where AI problems begin
            </h2>

            <p>
              Tools like Grafana, Datadog, and Prometheus are still essential. They tell you
              whether your application is running. AI observability tells you whether your AI is
              actually working, and that&apos;s a different question entirely.
            </p>

            <p>
              Say a customer asks your assistant, &quot;Can I upgrade my subscription?&quot;
              Behind that one message, your application might search a vector database, retrieve
              documentation, build a prompt, call an LLM, execute billing APIs, validate the
              response, and finally return an answer. Traditional monitoring logs one successful
              request. AI observability records every decision along the way: which documents got
              retrieved, which prompt version ran, which model generated the answer, token usage,
              latency, tool calls, cost, and the evaluation score.
            </p>

            <p>
              The difference shows up in the question you&apos;re able to ask afterward. Instead of
              asking whether the request succeeded, you get to ask why it behaved the way it did.
            </p>

            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              Why AI systems fail differently
            </h2>

            <p>
              Traditional software tends to fail loudly. Servers crash, requests time out,
              databases disconnect. AI systems rarely stop working overnight. Instead they get
              quietly worse: retrieval quality drifts down, a prompt update introduces a subtle
              regression, a model&apos;s behavior shifts, token usage creeps up, and costs climb
              without anyone noticing. Customers lose trust in the product well before any
              infrastructure monitor picks up on a problem.
            </p>

            <p>
              That&apos;s the reason a lot of engineering leaders now treat AI observability as
              core production infrastructure rather than a nice-to-have debugging tool.
            </p>

            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              What every production team should be able to answer
            </h2>

            <p>
              Regardless of platform, a production AI system should be able to answer six
              questions.
            </p>
          </div>

          {/* Six Questions Cards */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              margin: '2rem 0',
            }}
          >
            {SIX_QUESTIONS.map(({ n, q, a }) => (
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

          <div
            className="font-serif"
            style={{
              fontSize: 'clamp(0.9375rem, 1.8vw, 1.0625rem)',
              lineHeight: 1.8,
              color: 'var(--color-text-secondary)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              Comparing the leading platforms
            </h2>

            <p>
              The first question most teams ask is which platform to use. The honest answer: it
              depends less on the platform and more on the architecture underneath it. Most
              observability tools are solving the same core problem, helping you understand what
              happened during a request, but they differ in where they focus. Picking the right
              one starts with knowing what you actually need visibility into.
            </p>
          </div>

          {/* Platform comparison table */}
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
                  {['Platform', 'Best suited for', 'Why teams choose it'].map((h) => (
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
                {PLATFORMS.map(({ name, bestFor, why }, i) => (
                  <tr key={name} style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}>
                    <td
                      className="font-serif"
                      style={{
                        padding: '0.875rem 1rem',
                        fontWeight: 700,
                        color: 'var(--color-text-primary)',
                        fontSize: '0.9375rem',
                        borderBottom: '1px solid rgba(255,255,255,0.06)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {name}
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
                      {bestFor}
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
                      {why}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            className="font-serif"
            style={{
              fontSize: 'clamp(0.9375rem, 1.8vw, 1.0625rem)',
              lineHeight: 1.8,
              color: 'var(--color-text-secondary)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <p>Rather than chasing a single &quot;best&quot; platform, pick the one that matches your architecture and priorities.</p>

            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              Our take
            </h2>

            <p>
              If you&apos;re building a production AI application today, we&apos;d start with
              Langfuse in most cases. Not because it&apos;s universally the best, but because it
              balances flexibility, self-hosting, prompt management, evaluations, and OpenTelemetry
              compatibility better than most alternatives. If your stack leans heavily on
              LangChain, LangSmith is a natural fit. If retrieval quality is your main worry,
              Phoenix has specialized capabilities that are hard to match elsewhere.
            </p>

            <p>
              Which platform you install matters less than making observability part of your
              engineering process from day one. Teams that wait until problems show up in
              production usually find that retrofitting observability afterward is a lot harder
              than designing for it up front.
            </p>

            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              Building an AI observability architecture that scales
            </h2>

            <p>
              Picking a platform matters. Designing the architecture around it matters more.
              We&apos;ve seen teams spend weeks integrating an observability tool, only to discover
              months later they still can&apos;t answer basic production questions. Why did this
              response take 14 seconds? Which prompt version caused the regression? Why did token
              costs jump 40% last week? Which tool call made the agent fail? Why are enterprise
              customers seeing different answers than free users?
            </p>

            <p>
              The problem was never the platform. It was that observability got treated as a
              logging exercise instead of an engineering discipline. A good architecture should
              surface every stage of an AI workflow, from the moment a request arrives to the
              moment a response goes out.
            </p>

            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              Think beyond the model
            </h2>

            <p>
              One of the more common misconceptions in AI engineering is that the model is where
              everything happens. In practice it&apos;s often just one piece in a much bigger
              workflow. A typical AI application might include user authentication, intent
              classification, retrieval from a vector database, prompt construction, multiple LLM
              calls, tool execution, external APIs, business logic, response validation, and
              evaluation pipelines. If you&apos;re only watching the LLM call, you&apos;re missing
              most of the system. Observability needs to cover the whole workflow, not just the
              model.
            </p>

            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              A reference architecture for production AI systems
            </h2>

            <p>Every organization&apos;s setup looks a little different, but most production AI systems follow roughly this pattern:</p>
          </div>

          {/* Reference architecture diagram */}
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
{`                   User Request
                          |
                          v
                  API / AI Gateway
                          |
                          v
                 Create Request Trace
                          |
        +-----------------+-----------------+
        v                 v                 v
   Authentication     Business Logic    Rate Limiting
                          |
                          v
                 Vector Database Search
                          |
                          v
                  Prompt Construction
                          |
                          v
                    LLM Inference
                          |
                          v
                  Agent Tool Calls
                          |
                          v
                 Response Validation
                          |
                          v
               Automated Evaluations
                          |
                          v
              Dashboards & Alerting`}
          </div>

          <div
            className="font-serif"
            style={{
              fontSize: 'clamp(0.9375rem, 1.8vw, 1.0625rem)',
              lineHeight: 1.8,
              color: 'var(--color-text-secondary)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <p>
              Every stage in that chain should generate telemetry. That telemetry is what
              debugging, optimization, and ongoing improvement actually run on.
            </p>

            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              The four layers of AI observability
            </h2>

            <p>Instead of one dashboard, think of observability as four connected layers.</p>
          </div>

          {/* Four Layers Cards */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              margin: '2rem 0',
            }}
          >
            {FOUR_LAYERS.map(({ n, title, body, details }) => (
              <div
                key={n}
                style={{
                  background: 'var(--color-bg-card)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '0.75rem',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: 'clamp(1rem, 2.5vw, 1.25rem) clamp(1rem, 2.5vw, 1.5rem)',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
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
                      flexShrink: 0,
                    }}
                  >
                    {n}
                  </span>
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
                    {title}
                  </p>
                </div>

                <div
                  style={{
                    padding: 'clamp(1rem, 2.5vw, 1.5rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  <p
                    className="font-serif"
                    style={{
                      fontSize: 'clamp(0.875rem, 1.6vw, 1rem)',
                      color: 'var(--color-text-secondary)',
                      margin: 0,
                      lineHeight: 1.75,
                    }}
                  >
                    {body}
                  </p>

                  <ul
                    className="font-serif"
                    style={{
                      paddingLeft: '1.1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.45rem',
                      fontSize: 'clamp(0.8125rem, 1.5vw, 0.9375rem)',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div
            className="font-serif"
            style={{
              fontSize: 'clamp(0.9375rem, 1.8vw, 1.0625rem)',
              lineHeight: 1.8,
              color: 'var(--color-text-secondary)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              Implementing AI observability
            </h2>

            <p>
              Once the architecture is in place, rolling it out gets a lot simpler. Rather than
              instrumenting everything at once, do it in stages.
            </p>
          </div>

          {/* Implementation Steps Cards */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              margin: '2rem 0',
            }}
          >
            {IMPLEMENTATION_STEPS.map(({ n, title, body, details }) => (
              <div
                key={n}
                style={{
                  background: 'var(--color-bg-card)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '0.75rem',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: 'clamp(1rem, 2.5vw, 1.25rem) clamp(1rem, 2.5vw, 1.5rem)',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
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
                      flexShrink: 0,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {n}
                  </span>
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
                    {title}
                  </p>
                </div>

                <div
                  style={{
                    padding: 'clamp(1rem, 2.5vw, 1.5rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  <p
                    className="font-serif"
                    style={{
                      fontSize: 'clamp(0.875rem, 1.6vw, 1rem)',
                      color: 'var(--color-text-secondary)',
                      margin: 0,
                      lineHeight: 1.75,
                    }}
                  >
                    {body}
                  </p>

                  <ul
                    className="font-serif"
                    style={{
                      paddingLeft: '1.1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.45rem',
                      fontSize: 'clamp(0.8125rem, 1.5vw, 0.9375rem)',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div
            className="font-serif"
            style={{
              fontSize: 'clamp(0.9375rem, 1.8vw, 1.0625rem)',
              lineHeight: 1.8,
              color: 'var(--color-text-secondary)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              Design for continuous improvement
            </h2>

            <p>
              The strongest AI teams don&apos;t reach for observability only when something&apos;s
              on fire. They use it every day, comparing prompt versions, reviewing evaluation
              trends, watching costs, measuring business outcomes, refining workflows. Over time,
              observability stops being a debugging tool and becomes the feedback loop the whole
              system runs on.
            </p>

            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              Five mistakes that limit AI reliability
            </h2>

            <p>
              The same patterns show up again and again as teams move from prototype to
              production. Avoiding them won&apos;t guarantee success, but it will cut down
              significantly on time spent diagnosing issues later.
            </p>
          </div>

          {/* Mistakes Cards */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              margin: '1.5rem 0 2rem',
            }}
          >
            {MISTAKES.map(({ title, body }) => (
              <div
                key={title}
                style={{
                  background: 'rgba(239,68,68,0.04)',
                  border: '1px solid rgba(239,68,68,0.14)',
                  borderRadius: '0.5rem',
                  padding: 'clamp(1rem, 2.5vw, 1.25rem)',
                }}
              >
                <p
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(0.9375rem, 1.7vw, 1.0625rem)',
                    fontWeight: 700,
                    color: 'var(--color-text-primary)',
                    margin: '0 0 0.5rem',
                    lineHeight: 1.4,
                  }}
                >
                  {title}
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
                  {body}
                </p>
              </div>
            ))}
          </div>

          <div
            className="font-serif"
            style={{
              fontSize: 'clamp(0.9375rem, 1.8vw, 1.0625rem)',
              lineHeight: 1.8,
              color: 'var(--color-text-secondary)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              A production example
            </h2>

            <p>
              Say your company launches an AI customer support assistant. During testing, responses
              average three seconds and feedback is good. A month later, response times creep up to
              ten seconds and support starts reporting inconsistent answers. Traditional monitoring
              shows healthy servers, stable databases, no infrastructure alerts. Everything looks
              fine.
            </p>

            <p>
              The trace tells a different story. A recent deployment bumped the number of retrieved
              documents from five to twenty five. That extra context inflated prompt size, which
              increased both latency and token usage, and the additional irrelevant information
              actually made responses worse, not better. Nothing was technically broken, the
              workflow had just become inefficient. Because every stage of the pipeline was
              visible, engineers found the root cause in minutes instead of hours of log diving.
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
                That&apos;s the real value of observability: it shortens the distance between
                spotting a problem and fixing it.
              </p>
            </blockquote>

            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              Building an engineering culture around observability
            </h2>

            <p>
              Technology alone doesn&apos;t make AI systems reliable, engineering practices matter
              just as much. A few habits show up consistently among teams that ship dependable AI
              products.
            </p>
          </div>

          {/* Practices list */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              margin: '1.5rem 0 2rem',
            }}
          >
            {PRACTICES.map(({ title, body }, i) => (
              <div
                key={title}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '1rem 0',
                  borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.625rem',
                    color: 'var(--color-trust-amber)',
                    flexShrink: 0,
                    paddingTop: '0.2rem',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p
                    className="font-serif"
                    style={{
                      fontSize: 'clamp(0.9375rem, 1.7vw, 1.0625rem)',
                      fontWeight: 700,
                      color: 'var(--color-text-primary)',
                      margin: '0 0 0.4rem',
                      lineHeight: 1.4,
                    }}
                  >
                    {title}
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
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="font-serif"
            style={{
              fontSize: 'clamp(0.9375rem, 1.8vw, 1.0625rem)',
              lineHeight: 1.8,
              color: 'var(--color-text-secondary)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              When you don&apos;t need a full observability platform
            </h2>

            <p>
              Not every AI project needs enterprise-grade observability. If you&apos;re
              experimenting with prompts, validating an idea, or building a small internal
              prototype, structured logging is probably enough. But as complexity grows, so does
              the need for visibility. Once your application includes retrieval, multiple models,
              tool calling, autonomous agents, or real customers, observability stops being
              optional.
            </p>

            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              A simple production readiness checklist
            </h2>

            <p>Before launching an AI application, ask yourself:</p>
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

          <div
            className="font-serif"
            style={{
              fontSize: 'clamp(0.9375rem, 1.8vw, 1.0625rem)',
              lineHeight: 1.8,
              color: 'var(--color-text-secondary)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <p>
              If several of these are hard to answer, strengthening your observability setup
              should be near the top of your engineering priorities.
            </p>

            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              Final thoughts
            </h2>

            <p>
              As AI becomes core to modern software, reliability is what will separate the
              products that last from the ones that don&apos;t. A more capable model can improve
              performance. Better prompts can improve responses. Neither one solves the
              operational problems that show up once an application hits production.
            </p>

            <p>
              The organizations getting lasting value out of AI are investing in something
              broader: systems they can actually observe, understand, and improve. That&apos;s
              what observability gives you. It turns AI from a pile of prompts and models into an
              engineering system you can measure, optimize, and trust over time, and for teams
              building production AI, that visibility isn&apos;t optional anymore. It&apos;s part
              of the architecture.
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
              Build AI Systems You Can Operate With Confidence
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
              What makes an AI product succeed was never the model it runs on.
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
              At Invisigent, we help startups and growing businesses move past AI prototypes into
              production-ready systems that hold up. Whether you&apos;re building AI agents, RAG,
              internal copilots, or intelligent automation, the focus stays the same: reliable,
              measurable, and scalable from day one.
            </p>
            <Link
              href="/contact"
              className="btn-accent"
              style={{ textDecoration: 'none', marginTop: '0.5rem' }}
            >
              Talk to Us About Your AI Architecture →
            </Link>
          </div>
        </article>
      </main>

      <InvisigentLogoSection />
      <FooterSection />
    </>
  );
}
