"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import faqs from "@/db/faqs"

export function FAQ() {
  return (
    <div id="faq" className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible defaultValue="item-0">
        {faqs.map((it, idx) => (
          <AccordionItem key={it.id} value={`item-${idx}`}>
            <AccordionTrigger className="text-left ">{it.Question}</AccordionTrigger>
            <AccordionContent>{it.Answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

