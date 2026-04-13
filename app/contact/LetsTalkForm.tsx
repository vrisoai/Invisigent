'use client';

import { useState, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Field = {
  name: string;
  email: string;
  company: string;
  brief: string;
};

type Errors = Partial<Record<keyof Field, string>>;

function validate(f: Field): Errors {
  const err: Errors = {};
  if (!f.name.trim()) err.name = 'Name is required.';
  if (!f.email.trim()) {
    err.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) {
    err.email = 'Enter a valid email address.';
  }
  return err;
}

export function LetsTalkForm() {
  const uid = useId();
  const [fields, setFields] = useState<Field>({
    name: '',
    email: '',
    company: '',
    brief: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const set = (key: keyof Field) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFields(prev => ({ ...prev, [key]: e.target.value }));
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error('Server error');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <AnimatePresence mode="wait">
      {status === 'success' ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="lets-talk-success glass-card flex flex-col items-center justify-center gap-6 px-8 py-16 text-center"
        >
          {/* Animated checkmark ring */}
          <motion.div
            className="lets-talk-success-icon"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
              <circle cx="28" cy="28" r="27" stroke="var(--color-action-accent)" strokeWidth="1.5" opacity="0.3" />
              <motion.circle
                cx="28" cy="28" r="27"
                stroke="var(--color-action-accent)"
                strokeWidth="1.5"
                strokeDasharray={2 * Math.PI * 27}
                strokeDashoffset={2 * Math.PI * 27}
                animate={{ strokeDashoffset: 0 }}
                transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
                fill="none"
              />
              <motion.path
                d="M18 28.5l7 7 13-14"
                stroke="var(--color-action-accent)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="30"
                strokeDashoffset="30"
                animate={{ strokeDashoffset: 0 }}
                transition={{ delay: 0.65, duration: 0.4, ease: 'easeOut' }}
              />
            </svg>
          </motion.div>

          <div className="flex flex-col gap-2">
            <p className="font-mono text-xs tracking-[0.2em] text-text-tertiary uppercase">Brief Received</p>
            <h3 className="font-serif text-2xl font-semibold text-text-primary">
              We&apos;ll be in touch.
            </h3>
            <p className="mt-1 font-display text-sm leading-relaxed text-text-secondary">
              Expect a response within 24 hours. We review every submission personally — no autoresponders.
            </p>
          </div>

          <button
            onClick={() => { setStatus('idle'); setFields({ name: '', email: '', company: '', brief: '' }); }}
            className="btn-primary mt-2 text-sm"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="lets-talk-form glass-card"
        >
          {/* Form header */}
          <div className="lets-talk-form-header">
            <p className="font-mono text-[0.6875rem] tracking-[0.2em] text-text-tertiary uppercase">
              New enquiry
            </p>
          </div>

          {/* Row: Name + Email */}
          <div className="lets-talk-row">
            <div className="lets-talk-field">
              <label htmlFor={`${uid}-name`} className="lets-talk-label">
                <span className="lets-talk-label-index font-mono">01</span>
                Name
              </label>
              <input
                id={`${uid}-name`}
                type="text"
                autoComplete="name"
                placeholder="Your full name"
                value={fields.name}
                onChange={set('name')}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? `${uid}-name-err` : undefined}
                className={`lets-talk-input${errors.name ? ' lets-talk-input--error' : ''}`}
              />
              {errors.name && (
                <p id={`${uid}-name-err`} role="alert" className="lets-talk-error">{errors.name}</p>
              )}
            </div>

            <div className="lets-talk-field">
              <label htmlFor={`${uid}-email`} className="lets-talk-label">
                <span className="lets-talk-label-index font-mono">02</span>
                Email
              </label>
              <input
                id={`${uid}-email`}
                type="email"
                autoComplete="email"
                placeholder="Your Email"
                value={fields.email}
                onChange={set('email')}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? `${uid}-email-err` : undefined}
                className={`lets-talk-input${errors.email ? ' lets-talk-input--error' : ''}`}
              />
              {errors.email && (
                <p id={`${uid}-email-err`} role="alert" className="lets-talk-error">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Company */}
          <div className="lets-talk-field">
            <label htmlFor={`${uid}-company`} className="lets-talk-label">
              <span className="lets-talk-label-index font-mono">03</span>
              Company
              <span className="lets-talk-optional">optional</span>
            </label>
            <input
              id={`${uid}-company`}
              type="text"
              autoComplete="organization"
              placeholder="Your company or project"
              value={fields.company}
              onChange={set('company')}
              className="lets-talk-input"
            />
          </div>

          {/* Brief */}
          <div className="lets-talk-field">
            <label htmlFor={`${uid}-brief`} className="lets-talk-label">
              <span className="lets-talk-label-index font-mono">05</span>
              What are you building?
            </label>
            <p className="lets-talk-hint">
              Describe the system, workflow, or problem you&apos;re trying to solve. The more context, the better.
            </p>
            <textarea
              id={`${uid}-brief`}
              rows={4}
              placeholder="We need an AI system that…"
              value={fields.brief}
              onChange={set('brief')}
              className="lets-talk-input lets-talk-textarea"
            />
          </div>

          {/* Error banner */}
          {status === 'error' && (
            <p role="alert" className="lets-talk-banner-error">
              Something went wrong. Please try again or email us directly at hello@vriso.ai
            </p>
          )}

          {/* Submit */}
          <div className="lets-talk-actions">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-accent lets-talk-submit"
            >
              {status === 'sending' ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
                    style={{ display: 'inline-block', width: 14, height: 14, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%' }}
                    aria-hidden
                  />
                  Sending…
                </>
              ) : (
                'Send Message →'
              )}
            </button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
