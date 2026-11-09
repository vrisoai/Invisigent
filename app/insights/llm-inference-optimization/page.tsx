import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FooterSection, InvisigentLogoSection } from '@/app/components';
import Breadcrumb from '@/app/components/Breadcrumb';

const SLUG = 'llm-inference-optimization';
const CANONICAL = `https://invisigent.ai/insights/${SLUG}`;
const OG_IMAGE = 'https://invisigent.ai/blog-llm-inference-optimization.png';
const PUBLISHED = '2026-11-09T10:00:00.000Z';
const TITLE = 'LLM Inference, Explained: Why Your Model Is Slow and How to Fix It';
const DESCRIPTION =
  'A practical guide to LLM inference optimization: prefill vs decode, the KV cache, continuous batching, PagedAttention and vLLM, quantization, speculative decoding, and the metrics that tell you whether any of it worked.';

export const metadata: Metadata = {
  title: 'LLM Inference Optimization: Why Your Model Is Slow',
  description:
    'Prefill vs decode, KV cache, continuous batching, PagedAttention, quantization, and speculative decoding. A practical guide to faster, cheaper LLM inference.',
  keywords: [
    'LLM inference',
    'LLM inference optimization',
    'LLM serving',
    'KV cache',
    'KV cache memory',
    'prefill vs decode',
    'continuous batching',
    'in-flight batching',
    'PagedAttention',
    'vLLM',
    'speculative decoding',
    'assisted generation',
    'quantization LLM',
    'FP8 inference',
    'INT4 quantization',
    'grouped-query attention',
    'FlashAttention',
    'tensor parallelism',
    'time to first token',
    'TTFT',
    'tokens per second',
    'LLM latency',
    'LLM throughput',
    'GPU inference cost',
    'LLM decoding strategies',
    'self-hosted LLM',
    'Invisigent AI consulting',
  ],
  authors: [{ name: 'Invisigent Research', url: 'https://invisigent.ai' }],
  creator: 'Invisigent',
  publisher: 'Invisigent',
  category: 'AI Engineering',
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
      'Most slow LLM deployments are not short on compute. They are short on memory bandwidth and wasting KV cache. Here is what actually moves latency and cost.',
    url: CANONICAL,
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: ['https://invisigent.ai'],
    section: 'AI Engineering',
    tags: ['LLM inference', 'vLLM', 'KV cache', 'speculative decoding', 'quantization', 'GPU'],
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: TITLE, type: 'image/png' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@invisigent_ai',
    creator: '@invisigent_ai',
    title: TITLE,
    description:
      'Prefill, decode, KV cache, PagedAttention, speculative decoding. The short version: your GPU is mostly waiting on memory.',
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
    'article:section': 'AI Engineering',
    'article:tag': 'LLM inference,vLLM,KV cache,speculative decoding,quantization,GPU',
    'revisit-after': '7 days',
    rating: 'general',
    language: 'en',
    coverage: 'Worldwide',
    distribution: 'global',
    target: 'all',
    audience: 'AI engineers, ML platform teams, CTOs, engineering leaders',
    'DC.coverage': 'United States, United Kingdom, Australia, India',
    'DC.language': 'en',
    'DC.subject':
      'LLM inference, KV cache, continuous batching, PagedAttention, speculative decoding, quantization',
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
      'LLM inference pipeline: a compute-bound prefill pass fills a paged KV cache, then memory-bound decode steps generate tokens, sped up by continuous batching and speculative decoding',
  },
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  wordCount: 3100,
  timeRequired: 'PT13M',
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
  articleSection: 'AI Engineering',
  articleBody:
    'A practical guide to LLM inference optimization. Explains the prefill and decode phases, why decode is limited by memory bandwidth, how the KV cache grows, static versus continuous batching, PagedAttention and vLLM, grouped-query attention and FlashAttention, weight and KV cache quantization, speculative decoding, tensor parallelism, decoding settings, and the metrics (TTFT, inter-token latency, throughput, cost per token) teams should track.',
  keywords:
    'LLM inference, KV cache, continuous batching, PagedAttention, vLLM, speculative decoding, quantization, TTFT, LLM serving',
  inLanguage: 'en',
  isPartOf: {
    '@type': 'Blog',
    '@id': 'https://invisigent.ai/insights#blog',
    name: 'AI Infrastructure Insights',
    publisher: { '@type': 'Organization', name: 'Invisigent' },
  },
  about: [
    { '@type': 'Thing', name: 'Large language model inference' },
    { '@type': 'Thing', name: 'KV cache' },
    { '@type': 'Thing', name: 'Speculative decoding' },
    { '@type': 'SoftwareApplication', name: 'vLLM', applicationCategory: 'LLM serving engine' },
  ],
  mentions: [
    { '@type': 'SoftwareApplication', name: 'Transformers' },
    { '@type': 'SoftwareApplication', name: 'TensorRT-LLM' },
  ],
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', 'blockquote'] },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invisigent.ai' },
    { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://invisigent.ai/insights' },
    { '@type': 'ListItem', position: 3, name: TITLE, item: CANONICAL },
  ],
};

const FAQS = [
  {
    q: 'What is LLM inference?',
    a: 'Inference is the part where a trained model is actually used: it takes a prompt and produces output tokens. For a decoder-only LLM that happens in two phases. Prefill reads the whole prompt in one parallel pass, and decode then generates the answer one token at a time, with each new token depending on the ones before it.',
  },
  {
    q: 'Why is LLM inference slow?',
    a: 'Mostly because of the decode phase. To produce each token, the GPU has to stream the full set of model weights (and the KV cache) out of memory, but it only does a small amount of math per byte it reads. So at small batch sizes the chip spends most of its time waiting on memory bandwidth, not computing.',
  },
  {
    q: 'What is the KV cache?',
    a: 'During generation, the attention layers need the key and value vectors of every previous token. Instead of recomputing them at every step, the server stores them in GPU memory. That store is the KV cache. It grows linearly with sequence length and batch size, and on long-context workloads it often takes more memory than the model weights.',
  },
  {
    q: 'What is continuous batching?',
    a: 'Static batching waits for every request in a batch to finish before starting new ones, so short replies sit idle behind long ones. Continuous (or in-flight) batching schedules work at the level of individual decode steps: finished sequences leave the batch and queued ones join immediately. It is the default in modern serving engines like vLLM and TensorRT-LLM.',
  },
  {
    q: 'What does PagedAttention do?',
    a: 'PagedAttention, introduced with vLLM, stores the KV cache in small fixed-size blocks that do not need to sit next to each other in memory, similar to virtual memory pages in an operating system. That removes most of the fragmentation and over-reservation that older systems suffered from, so more requests fit on the same GPU. In practice that often means several times more throughput on the same hardware.',
  },
  {
    q: 'How does speculative decoding work?',
    a: 'A small, fast draft model guesses the next several tokens. The large target model then checks all of those guesses in a single forward pass and keeps the ones it agrees with. Thanks to a careful acceptance rule, the output distribution is exactly the same as running the large model alone, just with fewer slow steps. On predictable text, 2 to 3 times faster generation is common.',
  },
  {
    q: 'Does quantization hurt model quality?',
    a: 'It can, but usually less than people fear. 8-bit weights (INT8 or FP8) are close to lossless for most modern models. 4-bit methods save more memory and bandwidth but deserve a proper evaluation on your own tasks, because small regressions tend to show up in reasoning, code, and non-English text first.',
  },
  {
    q: 'Which metrics should I track for LLM serving?',
    a: 'Time to first token (driven mainly by prefill and queueing), inter-token latency or time per output token (driven by decode), total throughput in tokens per second across all users, and cost per million tokens. Always look at percentiles such as p50 and p95, not just averages.',
  },
  {
    q: 'Should I use vLLM or plain Transformers for serving?',
    a: 'Transformers and its generate() method are great for experiments, evaluation, and research code. For a production API with many concurrent users, a dedicated serving engine such as vLLM is usually the better fit, because it adds continuous batching, paged KV cache management, prefix caching, and an OpenAI-compatible server out of the box.',
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

const h2Style = {
  fontSize: 'clamp(1.125rem, 2.5vw, 1.4rem)',
  fontWeight: 700,
  color: 'var(--color-text-primary)',
  marginBottom: '-0.25rem',
} as const;

const h3Style = {
  fontSize: 'clamp(1.05rem, 2.2vw, 1.2rem)',
  fontWeight: 700,
  color: 'var(--color-text-primary)',
  marginBottom: '-0.5rem',
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

const listStyle = {
  margin: 0,
  paddingLeft: '1.25rem',
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '0.6rem',
};

const cellStyle = {
  padding: '0.75rem 0.9rem',
  borderBottom: '1px solid rgba(255,255,255,0.07)',
  textAlign: 'left' as const,
  verticalAlign: 'top' as const,
};

const linkStyle = { color: 'var(--color-link)', textDecoration: 'underline' };

const strong = { color: 'var(--color-text-primary)' };

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

const PHASES = [
  ['What it does', 'Reads the whole prompt in one pass', 'Produces one new token per step'],
  ['Parallelism', 'High: every prompt token at once', 'Low: each token waits on the last'],
  ['Bottleneck', 'GPU compute (matrix math)', 'Memory bandwidth'],
  ['Shows up as', 'Time to first token', 'Time between tokens'],
  ['Main levers', 'Chunked prefill, prefix caching', 'Batching, quantization, speculation'],
];

const LEVERS = [
  ['Continuous batching', 'Throughput', 'Low (built into vLLM, TGI, TensorRT-LLM)'],
  ['Paged KV cache', 'Throughput, max concurrency', 'Low if you use an engine that has it'],
  ['Prefix caching', 'TTFT on repeated prompts', 'Low, one flag'],
  ['FP8 / INT8 weights', 'Latency, memory, cost', 'Medium, needs an eval pass'],
  ['4-bit weights', 'Memory, cost', 'Medium to high, check quality carefully'],
  ['KV cache quantization', 'Concurrency, long context', 'Medium'],
  ['Speculative decoding', 'Per-user latency', 'Medium, needs a good draft model'],
  ['Tensor parallelism', 'Fitting big models, latency', 'High, needs fast GPU interconnect'],
];

export default function BlogPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
            src="/blog-llm-inference-optimization.svg"
            alt="LLM inference pipeline: a compute-bound prefill pass fills a paged KV cache, then memory-bound decode steps generate tokens, sped up by continuous batching and speculative decoding"
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
              AI Engineering
            </span>
            <span
              className="font-mono"
              style={{
                fontSize: '0.625rem',
                letterSpacing: '0.12em',
                color: 'var(--color-text-tertiary)',
              }}
            >
              13 min read
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
            LLM Inference, Explained: Why Your Model Is Slow and How to Fix It
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
            Your GPU is probably not short on compute. It is waiting on memory.
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
            <div
              style={{
                background: 'var(--color-bg-card)',
                border: '1px solid rgba(251,191,36,0.15)',
                borderRadius: '0.75rem',
                padding: 'clamp(1.25rem, 3vw, 1.75rem)',
              }}
            >
              <p
                className="font-mono"
                style={{
                  fontSize: '0.625rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--color-trust-amber)',
                  margin: '0 0 0.85rem',
                }}
              >
                Quick Answer
              </p>
              <p style={{ margin: 0 }}>
                LLM inference runs in two phases. <strong style={strong}>Prefill</strong> reads your
                prompt in one parallel pass and is limited by compute.{' '}
                <strong style={strong}>Decode</strong> writes the reply one token at a time and is
                limited by how fast the GPU can read weights and the{' '}
                <strong style={strong}>KV cache</strong> from memory. Nearly every serious speed-up
                attacks decode: batch more users together (continuous batching), waste less KV
                memory (PagedAttention), move fewer bytes (quantization, grouped-query attention),
                or run fewer slow steps (speculative decoding).
              </p>
            </div>

            <p>
              Here is a pattern we see a lot. A team gets a model working in a notebook, wraps it
              in a small API, and ships it. With five internal users it feels fine. Then real
              traffic shows up, replies start crawling, and the first instinct is to ask for a
              bigger GPU.
            </p>
            <p>
              Sometimes that is the right call. More often, the GPU they already have is sitting
              mostly idle, stuck waiting on memory reads, holding KV cache space that nobody is
              using, and processing requests in an order that makes short answers wait behind
              long ones. You can usually get a 2 to 5x improvement before spending anything on
              hardware, if you understand where the time actually goes.
            </p>
            <p>
              This post walks through where that time goes and what to do about it, in roughly
              the order we tackle it on real projects.
            </p>

            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              Two Phases, Two Different Problems
            </h2>

            <p>
              When you send a prompt to a decoder-only model like Llama, Qwen, or Mistral, the
              server does two quite different jobs.
            </p>
            <p>
              <strong style={strong}>Prefill</strong> comes first. The model looks at every token
              in your prompt at the same time, which turns into large matrix multiplications.
              GPUs love this kind of work. A 2,000-token prompt does not take 2,000 times longer
              than a one-token prompt; the tokens are processed side by side.
            </p>
            <p>
              <strong style={strong}>Decode</strong> comes next, and this is where things slow
              down. The model generates the first output token, appends it, generates the next
              one, and so on. Token 50 cannot start until token 49 exists. Each step is a full
              pass through the network for a tiny amount of new input.
            </p>

            <div style={{ overflowX: 'auto' }}>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: 'clamp(0.8125rem, 1.6vw, 0.9375rem)',
                  lineHeight: 1.55,
                }}
              >
                <thead>
                  <tr style={{ color: 'var(--color-text-primary)' }}>
                    <th style={cellStyle}></th>
                    <th style={cellStyle}>Prefill</th>
                    <th style={cellStyle}>Decode</th>
                  </tr>
                </thead>
                <tbody>
                  {PHASES.map(([aspect, prefill, decode]) => (
                    <tr key={aspect}>
                      <td style={{ ...cellStyle, ...strong, fontWeight: 600 }}>{aspect}</td>
                      <td style={cellStyle}>{prefill}</td>
                      <td style={cellStyle}>{decode}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              Once you see the split, a lot of confusing behaviour makes sense. Long prompts hurt
              the wait before anything appears. Long answers hurt total response time. They are
              different knobs, and they need different fixes.
            </p>

            <h2 className="font-serif" style={h2Style}>
              Why Decode Is Memory-Bound
            </h2>

            <p>
              Take a 7-billion-parameter model stored in 16-bit precision. That is about 14 GB of
              weights. To generate a single token, the GPU has to read essentially all of those
              weights from its high-bandwidth memory into the compute units.
            </p>
            <p>
              A data-center GPU in the A100 class moves roughly 2 TB of data per second. Do the
              division and you get about 7 milliseconds per token just to read the weights once,
              before any clever tricks, and no matter how many teraflops the card advertises. The
              arithmetic itself is cheap. The reading is not.
            </p>

            <Quote>
              At batch size one, a modern GPU spends most of its decode time moving bytes, not
              doing math.
            </Quote>

            <p>
              This is the single most useful mental model for inference work. If you remember
              nothing else, remember that decode speed is mostly a function of{' '}
              <em>bytes moved per token</em>. Every technique below either shares those bytes
              across more users, shrinks them, or reduces how many times you have to move them.
            </p>

            <h2 className="font-serif" style={h2Style}>
              The KV Cache: Where Your Memory Actually Goes
            </h2>

            <p>
              Attention needs the key and value vectors of every earlier token. Recomputing them
              at each step would be absurdly wasteful, so the server keeps them in GPU memory.
              That is the KV cache, and it grows with every token of every active request.
            </p>
            <p>A rough way to size it:</p>

            <pre className="font-mono" style={codeBlockStyle}>{`KV bytes per token =
  2 (key + value) × layers × kv_heads × head_dim × bytes_per_value

Llama 2 7B, FP16:
  2 × 32 × 32 × 128 × 2 bytes  ≈ 0.5 MB per token
  × 4,096 tokens               ≈ 2 GB per sequence
  × 16 concurrent users         ≈ 32 GB of KV cache`}</pre>

            <p>
              Look at that last line. Sixteen users with long contexts need more memory for their
              KV cache than the model weights themselves. On most production setups, the KV cache,
              not the model, is what decides how many people you can serve at once.
            </p>

            <h3 className="font-serif" style={h3Style}>
              Shrinking it at the architecture level
            </h3>
            <p>
              Newer models fight this directly. <strong style={strong}>Multi-query attention</strong>{' '}
              (MQA) lets all attention heads share one set of keys and values.{' '}
              <strong style={strong}>Grouped-query attention</strong> (GQA) is the middle ground
              most current open models use: small groups of heads share KV. Llama 3 8B, for
              example, has 8 KV heads instead of 32, which cuts KV memory by four times compared
              with the older formula above. When you pick a model for serving, the number of KV
              heads is worth checking alongside the parameter count.
            </p>
            <p>
              <strong style={strong}>FlashAttention</strong> tackles a related problem. It
              restructures the attention computation into tiles that fit in the GPU&apos;s fast
              on-chip memory, so the large intermediate attention matrix is never written out to
              slower memory. Same result, far less memory traffic. Most serving engines use it or
              something like it by default now.
            </p>

            <h2 className="font-serif" style={h2Style}>
              Batching: Sharing the Cost of Reading Weights
            </h2>

            <p>
              If reading the weights is the expensive part, the obvious move is to read them once
              and use them for many requests. That is batching. Process 32 sequences in one decode
              step and you pay the weight-reading cost once instead of 32 times.
            </p>
            <p>
              The naive version, <strong style={strong}>static batching</strong>, groups requests
              and runs them together until the whole group is done. The problem is that answers
              have wildly different lengths. A 20-token reply finishes early and then its slot
              sits empty while a 900-token reply keeps going. New requests wait in the queue the
              entire time.
            </p>
            <p>
              <strong style={strong}>Continuous batching</strong> (also called in-flight batching)
              fixes this by making scheduling decisions at every decode step. The moment a
              sequence finishes, it leaves, and a waiting request takes its place. The GPU stays
              busy, and short requests stop paying for long ones. We treat this as a baseline
              requirement. If your serving stack does not do it, that
              is the first thing to change.
            </p>

            <h2 className="font-serif" style={h2Style}>
              PagedAttention and vLLM
            </h2>

            <p>
              Continuous batching created a new headache. If requests come and go every step, how
              do you manage their KV caches? Earlier systems reserved one contiguous chunk of
              memory per request, sized for the maximum possible output length. Most requests
              never got close to that maximum, so most of the reserved space went unused.
            </p>
            <p>
              In practice, a large share of KV cache memory in those older setups never held a
              single token. It was lost to over-reservation and fragmentation, and that lost
              space translated directly into fewer users per GPU.
            </p>
            <p>
              <strong style={strong}>PagedAttention</strong> fixes this by borrowing an old idea from operating systems. Split the KV cache into small,
              fixed-size blocks, and keep a table that maps each sequence&apos;s logical positions
              to whatever physical blocks happen to be free. Blocks are handed out only as tokens
              are produced, and they do not have to be next to each other. Waste drops to the
              last, partly filled block of each sequence.
            </p>

            <pre className="font-mono" style={codeBlockStyle}>{`Request A  →  [blk 7] [blk 2] [blk 9] [blk 4·partial]
Request B  →  [blk 1] [blk 5·partial]
Request C  →  [blk 3] [blk 8] [blk 6·partial]

blocks allocated on demand · no max-length reservation
shared prompt prefix?  point two requests at the same blocks`}</pre>

            <p>
              That last line matters more than it looks. Because blocks are referenced through a
              table, two requests with the same system prompt can point at the same physical
              blocks, and only copy them if one of them diverges. The same trick makes parallel
              sampling and beam search much cheaper.
            </p>
            <p>
              PagedAttention is the core idea behind vLLM, which has become one of the default
              open-source choices for serving, with continuous batching, prefix caching, quantized model support, and
              an OpenAI-compatible API server.
            </p>

            <pre className="font-mono" style={codeBlockStyle}>{`# OpenAI-compatible server in one command
vllm serve Qwen/Qwen2.5-7B-Instruct \\
  --max-model-len 8192 \\
  --gpu-memory-utilization 0.90 \\
  --enable-prefix-caching

# then hit it like any OpenAI endpoint
curl http://localhost:8000/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{"model": "Qwen/Qwen2.5-7B-Instruct",
       "messages": [{"role": "user", "content": "Hello"}]}'`}</pre>

            <p>
              Two of those flags are worth understanding rather than copying.{' '}
              <code>--max-model-len</code> caps context length; set it to what your app actually
              needs, because a huge value reduces how many sequences fit.{' '}
              <code>--gpu-memory-utilization</code> controls how much of the card vLLM claims, and
              everything left after the weights becomes KV cache. Flags change between releases,
              so check the docs for the version you install.
            </p>

            <h2 className="font-serif" style={h2Style}>
              Quantization: Moving Fewer Bytes
            </h2>

            <p>
              Back to the core rule: decode speed tracks bytes moved per token. Quantization
              attacks that directly by storing numbers with fewer bits. Weights in 8-bit take half
              the space of 16-bit weights, so each decode step reads half as much.
            </p>
            <ul style={listStyle}>
              <li>
                <strong style={strong}>8-bit (INT8 or FP8):</strong> close to lossless for most
                current models, and on recent data-center GPUs FP8 is natively supported. Usually
                the first quantization step we try.
              </li>
              <li>
                <strong style={strong}>4-bit (AWQ, GPTQ and similar):</strong> roughly a quarter
                of the original size. This is how a 70B model ends up on far fewer GPUs. The
                trade-off is more noticeable, so test it.
              </li>
              <li>
                <strong style={strong}>KV cache quantization:</strong> storing the cache in 8 bits
                instead of 16 roughly doubles how many tokens you can keep in memory, which helps
                long-context and high-concurrency workloads.
              </li>
            </ul>
            <p>
              Our honest advice: do not trust a general benchmark to tell you whether a quantized
              model is good enough. Run your own eval set. Quality drops tend to hide in the
              places generic leaderboards skip, such as multi-step reasoning, structured output,
              code, and languages other than English.
            </p>

            <h2 className="font-serif" style={h2Style}>
              Speculative Decoding: Guess Ahead, Check in Bulk
            </h2>

            <p>
              Batching helps total throughput, but it does not make any single user&apos;s answer
              arrive faster. For that, you want to cut the number of slow sequential steps.
              Speculative decoding does exactly that.
            </p>
            <p>
              The idea is pleasantly simple. A much smaller draft model, which is cheap to run,
              guesses the next few tokens. The big model then checks all of those guesses in one
              forward pass, which costs about the same as generating a single token, since decode
              is memory-bound anyway. It keeps the guesses it agrees with, fixes the first one it
              does not, and the cycle repeats.
            </p>

            <pre className="font-mono" style={codeBlockStyle}>{`draft model    →  "the"  "cat"  "sat"  "on"  "a"
target model   →  ✓      ✓      ✓      ✓     ✗ → "the"
result         →  5 tokens from 1 big-model pass`}</pre>

            <p>
              The clever part is the acceptance rule. Draft tokens are accepted or rejected in a
              way that keeps the final output on exactly the same distribution as the large model
              running on its own. No approximation, no quality loss. On the right workloads that
              works out to 2 to 3 times faster generation with identical outputs.
            </p>
            <p>
              How much you gain depends on how often the draft model guesses right. Predictable
              text such as code, structured data, or answers that quote the prompt sees big wins.
              Creative writing at high temperature, less so. And because verification adds work,
              speculative decoding helps most when the GPU has spare capacity, which means low to
              moderate batch sizes.
            </p>

            <h3 className="font-serif" style={h3Style}>
              Trying it in Transformers
            </h3>
            <p>
              Transformers calls this <strong style={strong}>assisted generation</strong>, and you
              enable it by passing a second model to <code>generate()</code>. The draft model must
              share the main model&apos;s tokenizer, so a small sibling from the same family is the
              easy choice:
            </p>

            <pre className="font-mono" style={codeBlockStyle}>{`from transformers import AutoModelForCausalLM, AutoTokenizer

tok = AutoTokenizer.from_pretrained("Qwen/Qwen2.5-7B-Instruct")
model = AutoModelForCausalLM.from_pretrained(
    "Qwen/Qwen2.5-7B-Instruct", torch_dtype="auto", device_map="auto")
draft = AutoModelForCausalLM.from_pretrained(
    "Qwen/Qwen2.5-0.5B-Instruct", torch_dtype="auto", device_map="auto")

inputs = tok("Explain the KV cache in two sentences.",
             return_tensors="pt").to(model.device)

out = model.generate(**inputs,
                     assistant_model=draft,
                     max_new_tokens=200)
print(tok.decode(out[0], skip_special_tokens=True))`}</pre>

            <p>
              A related trick, <em>prompt lookup decoding</em>, skips the draft
              model entirely and guesses by copying n-grams from the prompt. It is surprisingly
              effective for summarisation and document Q&amp;A, where answers reuse the input text.
            </p>

            <h2 className="font-serif" style={h2Style}>
              Decoding Settings Cost Something Too
            </h2>

            <p>
              It is easy to forget that the way you generate text has a price. The main decoding
              strategies each cost something different:
            </p>
            <ul style={listStyle}>
              <li>
                <strong style={strong}>Greedy and sampling</strong> keep one sequence per request.
                Cheapest.
              </li>
              <li>
                <strong style={strong}>Beam search</strong> keeps several candidate sequences
                alive. Four beams means roughly four times the KV cache and decode work. Rarely
                worth it for chat, sometimes worth it for translation.
              </li>
              <li>
                <strong style={strong}>max_new_tokens</strong> is a cost control, not just a
                safety net. Unbounded outputs are the most common source of runaway latency we see.
              </li>
            </ul>

            <h2 className="font-serif" style={h2Style}>
              When One GPU Is Not Enough
            </h2>

            <p>
              Some models simply do not fit on one card. <strong style={strong}>Tensor
              parallelism</strong> splits each layer&apos;s matrices across several GPUs that work
              on every token together. It cuts per-token latency, but the GPUs need to talk
              constantly, so it really wants fast links like NVLink inside a single server.{' '}
              <strong style={strong}>Pipeline parallelism</strong> gives each GPU a slice of the
              layers instead. It needs less communication, but you need enough requests in flight
              to keep every stage busy.
            </p>
            <p>
              A practical note: before reaching for multiple GPUs, see whether a quantized version
              of the model fits on one. A single card with no interconnect overhead is simpler to
              run and frequently cheaper.
            </p>

            <h2 className="font-serif" style={h2Style}>
              Measure the Right Things
            </h2>

            <p>
              None of this is useful if you cannot tell whether it worked. These are the four
              numbers we put on every inference dashboard:
            </p>
            <ul style={listStyle}>
              <li>
                <strong style={strong}>Time to first token (TTFT):</strong> how long the user
                stares at nothing. Driven by queueing and prefill.
              </li>
              <li>
                <strong style={strong}>Inter-token latency:</strong> how smoothly the reply
                streams. Driven by decode and batch size.
              </li>
              <li>
                <strong style={strong}>Throughput:</strong> total output tokens per second across
                all users. This is what pays the GPU bill.
              </li>
              <li>
                <strong style={strong}>Cost per million tokens:</strong> the number finance will
                eventually ask you about.
              </li>
            </ul>
            <p>
              Watch p95 and p99, not averages. And accept up front that latency and throughput pull
              against each other: bigger batches serve more people but make each person wait a bit
              longer per token. The right balance depends on your product. A coding assistant and
              an overnight document-processing job want very different settings. If you are
              building out monitoring, our post on{' '}
              <Link href="/insights/ai-observability-for-production-ai-teams" style={linkStyle}>
                AI observability for production teams
              </Link>{' '}
              covers the wider picture.
            </p>

            <h2 className="font-serif" style={h2Style}>
              Which Lever to Pull First
            </h2>

            <div style={{ overflowX: 'auto' }}>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: 'clamp(0.8125rem, 1.6vw, 0.9375rem)',
                  lineHeight: 1.55,
                }}
              >
                <thead>
                  <tr style={{ color: 'var(--color-text-primary)' }}>
                    <th style={cellStyle}>Technique</th>
                    <th style={cellStyle}>Mainly improves</th>
                    <th style={cellStyle}>Effort</th>
                  </tr>
                </thead>
                <tbody>
                  {LEVERS.map(([technique, improves, effort]) => (
                    <tr key={technique}>
                      <td style={{ ...cellStyle, ...strong, fontWeight: 600 }}>{technique}</td>
                      <td style={cellStyle}>{improves}</td>
                      <td style={cellStyle}>{effort}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>If we were walking into a slow deployment tomorrow, this is the order we would go in:</p>

            <ol style={{ ...listStyle, gap: '0.85rem' }}>
              <li>
                <strong style={strong}>Measure first.</strong> Get TTFT, inter-token latency and
                throughput at p50 and p95 under realistic traffic. Guessing wastes weeks.
              </li>
              <li>
                <strong style={strong}>Move to a real serving engine.</strong> If you are serving
                from a hand-rolled loop around <code>generate()</code>, switching to vLLM or
                something similar is usually the biggest single win.
              </li>
              <li>
                <strong style={strong}>Turn on prefix caching</strong> if your requests share a
                long system prompt or RAG template. Many do.
              </li>
              <li>
                <strong style={strong}>Right-size context length.</strong> Do not reserve 128K
                tokens of room for a product that never goes past 8K.
              </li>
              <li>
                <strong style={strong}>Try FP8 or INT8 weights</strong> and check quality on your
                own evals.
              </li>
              <li>
                <strong style={strong}>Add speculative decoding</strong> if per-user latency still
                matters more than raw throughput.
              </li>
              <li>
                <strong style={strong}>Only then</strong> think about more GPUs.
              </li>
            </ol>

            <h2 className="font-serif" style={h2Style}>
              Final Takeaway
            </h2>

            <p>
              LLM inference looks like a compute problem and mostly behaves like a memory problem.
              Once that clicks, the toolbox stops looking like a random list of tricks. Batching
              shares the bytes you read. PagedAttention stops you wasting the memory you have.
              Quantization and GQA shrink the bytes. Speculative decoding reduces how many times
              you have to read them at all.
            </p>
            <p>
              None of these require a research team. Most are a configuration change in a mature
              open-source engine, plus the discipline to measure before and after. For a broader
              look at the stack around the model, see{' '}
              <Link href="/insights/ai-infrastructure-for-businesses-in-2026" style={linkStyle}>
                AI infrastructure for businesses in 2026
              </Link>
              .
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
            <h2
              className="font-mono"
              style={{
                fontSize: '0.625rem',
                fontWeight: 400,
                lineHeight: 1.6,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--color-text-tertiary)',
                marginBottom: '1.5rem',
              }}
            >
              Frequently Asked Questions
            </h2>

            {FAQS.map(({ q, a }, i) => (
              <div
                key={i}
                style={{
                  borderTop: '1px solid rgba(255,255,255,0.07)',
                  padding: '1.25rem 0',
                }}
              >
                <h3
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
                </h3>
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
              Faster, Cheaper Inference
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
              Paying for GPUs that spend their time waiting?
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
              At Invisigent, we profile LLM serving stacks, find where latency and cost actually
              come from, and tune batching, caching, quantization and hardware to fit your
              workload.
            </p>
            <Link
              href="/contact"
              className="btn-accent"
              style={{ textDecoration: 'none', marginTop: '0.5rem' }}
            >
              Talk to Us About Inference Optimization &rarr;
            </Link>
          </div>
        </article>
      </main>

      <InvisigentLogoSection />
      <FooterSection />
    </>
  );
}
