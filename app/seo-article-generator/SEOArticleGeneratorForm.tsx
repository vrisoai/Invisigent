'use client';

import { useCallback, useId, useState } from 'react';

export function SEOArticleGeneratorForm() {
  const formId = useId();
  const [keyword, setKeyword] = useState('');
  const [pending, setPending] = useState(false);

  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No API - just demo
    setPending(true);
    setTimeout(() => {
      setPending(false);
      alert('Article generated! (Demo mode)');
    }, 1500);
  }, []);

  return (
    <form
      id={formId}
      className="seo-article-generator-form"
      onSubmit={onSubmit}
      noValidate
    >
      <div className="seo-article-generator-field">
        <label
          htmlFor={`${formId}-keyword`}
          className="seo-article-generator-field-label"
        >
          Keyword or topic
        </label>
        <p className="seo-article-generator-field-hint">
          Enter your main keyword or topic (e.g. &ldquo;enterprise AI consulting&rdquo;)
        </p>
        <input
          id={`${formId}-keyword`}
          name="keyword"
          type="text"
          className="seo-article-generator-input"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="e.g. AI infrastructure, SEO strategy, cloud computing"
          disabled={pending}
          required
          autoComplete="off"
        />
      </div>

      <div className="seo-article-generator-actions">
        <button
          type="submit"
          className="btn-primary w-full sm:w-auto"
          disabled={!keyword.trim() || pending}
        >
          {pending ? 'Generating…' : 'Generate Article'}
        </button>
      </div>
    </form>
  );
}
