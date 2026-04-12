'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';

type Role = 'user' | 'assistant';

type ChatMessage = { id: string; role: Role; content: string };

const WELCOME_MESSAGE: ChatMessage = {
  id: 'welcome',
  role: 'assistant',
  content:
    "Welcome — I'm your virtual concierge. Ask about dining, services, local experiences, or anything else we can help with during your stay.",
};

const DEMO_REPLY =
  "Thanks for your message. In a live deployment, this assistant would be connected to your hotel's systems to complete bookings and requests.";

function makeId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function HotelConciergeChat() {
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

    await new Promise((r) => setTimeout(r, 600 + Math.random() * 400));
    setMessages((m) => [...m, { id: makeId(), role: 'assistant', content: DEMO_REPLY }]);
    setPending(false);
  }

  return (
    <div className="hotel-concierge-chat">
      <div className="hotel-concierge-chat-head">
        <h2 className="text-card-title font-serif font-semibold text-text-primary">Concierge chat</h2>
        <p className="text-body mt-1 text-text-tertiary">Demo conversation — responses are simulated.</p>
      </div>

      <div
        ref={logRef}
        className="hotel-concierge-chat-log"
        role="log"
        aria-relevant="additions"
        aria-label="Concierge conversation"
      >
        <ul className="hotel-concierge-chat-list">
          {messages.map((msg) => (
            <li
              key={msg.id}
              className={
                msg.role === 'user'
                  ? 'hotel-concierge-chat-row hotel-concierge-chat-row--user'
                  : 'hotel-concierge-chat-row hotel-concierge-chat-row--assistant'
              }
            >
              <div
                className={
                  msg.role === 'user'
                    ? 'hotel-concierge-bubble hotel-concierge-bubble--user'
                    : 'hotel-concierge-bubble hotel-concierge-bubble--assistant'
                }
              >
                <span className="sr-only">{msg.role === 'user' ? 'You: ' : 'Concierge: '}</span>
                {msg.content}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <form id={formId} className="hotel-concierge-chat-composer" onSubmit={onSubmit}>
        <label htmlFor={`${formId}-input`} className="sr-only">
          Message to concierge
        </label>
        <textarea
          id={`${formId}-input`}
          className="hotel-concierge-chat-input"
          rows={2}
          value={draft}
          onChange={(ev) => setDraft(ev.target.value)}
          onKeyDown={(ev) => {
            if (ev.key === 'Enter' && !ev.shiftKey) {
              ev.preventDefault();
              ev.currentTarget.form?.requestSubmit();
            }
          }}
          placeholder="e.g. Book a table for two tonight at the hotel restaurant"
          disabled={pending}
          autoComplete="off"
        />
        <button type="submit" className="btn-primary hotel-concierge-chat-send" disabled={pending || !draft.trim()}>
          {pending ? 'Sending…' : 'Send'}
        </button>
      </form>
    </div>
  );
}
