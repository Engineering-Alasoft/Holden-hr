"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { faqs } from "@/lib/content";

export default function FaqList() {
  const [open, setOpen] = useState(() => new Set());

  function toggle(id) {
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="border-t border-line">
      {faqs.map((item) => {
        const isOpen = open.has(item.id);
        const panelId = `faq-${item.id}`;
        const buttonId = `faq-${item.id}-button`;
        return (
          <div key={item.id} className="border-b border-line">
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
              >
                <span className="text-base font-medium text-ink">{item.question}</span>
                {isOpen ? (
                  <Minus className="h-4 w-4 shrink-0 text-action" aria-hidden="true" />
                ) : (
                  <Plus className="h-4 w-4 shrink-0 text-action" aria-hidden="true" />
                )}
              </button>
            </h3>
            {isOpen ? (
              <div id={panelId} role="region" aria-labelledby={buttonId} className="pb-5 pr-8">
                <p className="max-w-3xl text-sm leading-relaxed text-muted">{item.answer}</p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
