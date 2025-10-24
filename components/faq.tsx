"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"



export function FAQ() {
  return (
    <div id="faq" className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible defaultValue="item-0">
        {data.map((it, idx) => (
          <AccordionItem key={it.id} value={`item-${idx}`}>
            <AccordionTrigger className="text-left ">{it.Question}</AccordionTrigger>
            <AccordionContent>{it.Answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

const data = [
  {
    id: 1,
    Question: 'How much does IVF treatment cost in Bangalore?',
    Answer:
      'The cost of IVF treatment in Bangalore may vary depending on individual circumstances and treatment requirements. At GarbhaGudi IVF Centre, we offer various IVF packages starting from INR 1,60,000.',
  },
  {
    id: 2,
    Question: 'Which IVF clinic has the highest success rate in Bangalore?',
    Answer:
      "GarbhaGudi IVF Centre has a high success rate, with many of our patients achieving successful pregnancies. However, it's important to note that success rates can vary depending on individual factors.",
  },
  {
    id: 3,
    Question: 'Does GarbhaGudi Hospital provide fertility treatment?',
    Answer:
      'Yes, GarbhaGudi IVF Centre is part of GarbhaGudi Hospital, which offers a wide range of fertility treatments.',
  },
  {
    id: 4,
    Question: 'Why choose GarbhaGudi Hospital to get IVF treatment?',
    Answer:
      'GarbhaGudi IVF Centre offers advanced infertility treatments using state-of-the-art technology.  Our experienced expert doctors provide personalised care to each patient and give the best possible outcomes.',
  },
  {
    id: 5,
    Question: 'Who is the best infertility doctor in Bangalore?',
    Answer:
      'At GarbhaGudi IVF Centre, we have a team of highly experienced infertility specialist who are dedicated to providing the best possible care to our patients. We do not single out any one doctor as the "best" as all of our doctors are highly skilled and experienced in their fields.',
  },
  {
    id: 6,
    Question: 'Is IVF 100% accurate?',
    Answer:
      "IVF is a highly accurate and effective fertility treatment, but it's important to note that success rates can vary depending on individual factors.",
  },
  {
    id: 7,
    Question: 'Does insurance cover IVF cost in India?',
    Answer:
      "In India, insurance coverage for IVF treatment can vary depending on the policy and insurance provider. It's best to check with your insurance provider to see if IVF treatment is covered under your policy. At GarbhaGudi IVF Centre, we also offer various financing options to help make IVF treatment more affordable and accessible for our patients.",
  },
];
