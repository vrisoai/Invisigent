'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';

type Role = 'user' | 'assistant';

type ChatMessage = { id: string; role: Role; content: string };

const WELCOME_MESSAGE: ChatMessage = {
  id: 'welcome',
  role: 'assistant',
  content:
    "Welcome — I'm your shopping assistant. Ask for product ideas, order help, sizing, or anything in our catalog.",
};

const DEMO_REPLY =
  "Thanks for your message. In production, this bot would connect to your store, orders, and policies to answer with real data.";

function makeId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function EcommerceAssistantChat() {
  const formId = useId();
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [draft, setDraft] = useState('');
  const [pending, setPending] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    const el = logRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = draft.trim();
    if (!text || pending) return;

    const userMsg: ChatMessage = { id: makeId(), role: 'user', content: text };
    setDraft('');
    setMessages((m) => [...m, userMsg]);
    setPending(true);

    fetch('/api/ecommerce-chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text }),
    }).catch(() => {});

    await new Promise((r) => setTimeout(r, 600 + Math.random() * 400));
    setMessages((m) => [...m, { id: makeId(), role: 'assistant', content: DEMO_REPLY }]);
    setPending(false);
  }

  return (
    <div className="ecommerce-assistant-chat">
      <div className="ecommerce-assistant-chat-head">
        <h2 className="text-card-title font-serif font-semibold text-text-primary">Shopping assistant chat</h2>
        <p className="text-body mt-1 text-text-tertiary">Demo conversation — responses are simulated.</p>
      </div>

      <div
        ref={logRef}
        className="ecommerce-assistant-chat-log"
        role="log"
        aria-relevant="additions"
        aria-label="Shopping assistant conversation"
      >
        <ul className="ecommerce-assistant-chat-list">
          {messages.map((msg) => (
            <li
              key={msg.id}
              className={
                msg.role === 'user'
                  ? 'ecommerce-assistant-chat-row ecommerce-assistant-chat-row--user'
                  : 'ecommerce-assistant-chat-row ecommerce-assistant-chat-row--assistant'
              }
            >
              <div
                className={
                  msg.role === 'user'
                    ? 'ecommerce-assistant-bubble ecommerce-assistant-bubble--user'
                    : 'ecommerce-assistant-bubble ecommerce-assistant-bubble--assistant'
                }
              >
                <span className="sr-only">{msg.role === 'user' ? 'You: ' : 'Assistant: '}</span>
                {msg.content}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <form id={formId} className="ecommerce-assistant-chat-composer" onSubmit={onSubmit}>
        <label htmlFor={`${formId}-input`} className="sr-only">
          Message to shopping assistant
        </label>
        <textarea
          id={`${formId}-input`}
          className="ecommerce-assistant-chat-input"
          rows={2}
          value={draft}
          onChange={(ev) => setDraft(ev.target.value)}
          onKeyDown={(ev) => {
            if (ev.key === 'Enter' && !ev.shiftKey) {
              ev.preventDefault();
              ev.currentTarget.form?.requestSubmit();
            }
          }}
          placeholder="e.g. Do you have this jacket in size M? When will my order ship?"
          disabled={pending}
          autoComplete="off"
        />
        <button
          type="submit"
          className="btn-primary ecommerce-assistant-chat-send"
          disabled={pending || !draft.trim()}
        >
          {pending ? 'Sending…' : 'Send'}
        </button>
      </form>
    </div>
  );
}
