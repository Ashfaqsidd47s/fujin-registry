"use client"

import * as React from "react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/registry/new-york/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-[450px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern for accordions.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It features soft radii, glassmorphism card surfaces, and subtle visual indicators.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Does it support motion?</AccordionTrigger>
        <AccordionContent>
          Yes. The motion track features elastic spring physics for height expansion and collapse.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
