"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";


export function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];

  return (
    <Card
      aria-label="Patient testimonials"
      className="bg-transparent rounded-none border-0 shadow-none relative"
    >
      <CardContent className="text-center">
        <div className="mx-auto mb-4 h-10 w-10 relative ">
          <Image
            src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1761206765/Google__G__logo.svg_vlwoou.webp"
            alt="Google reviews"
            fill
            className="object-contain"
            sizes="40px"
          />
        </div>
          <div className='text-center text-sm md:text-base font-bold text-brandDark mb-6'>
        Reviews
      </div>
        <p className="mx-auto max-w-3xl  text-center text-base font-normal tracking-tight text-gray-800  md:text-lg">"{t.review}"</p>
        <hr className="my-6 border-primary/50 w-full mx-auto  rounded-lg" />
        <p className="font-medium  text-gray-900">{t.name}</p>
      <div className="absolute inset-y-0 left-2  items-center hidden md:flex">
            <Button
              variant="secondary"
              size="icon"
              onClick={() =>
                setI((i + TESTIMONIALS.length - 1) % TESTIMONIALS.length)
              }
              aria-label="Previous slide"
              className="rounded-full h-11 w-11 text-4xl bg-brandPink"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
          </div>

          <div className="absolute inset-y-0 right-2 items-center hidden md:flex">
            <Button
              variant="secondary"
              size="icon"
              onClick={() => setI((i + 1) % TESTIMONIALS.length)}
              aria-label="Next slide"
              className="rounded-full h-11 w-11 text-4xl bg-brandPink"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
      </CardContent>
    </Card>
  );
}

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Anjali Shivarkar',
    review:
      'GarbhaGudi is a hope to any couple. They provide the best service. Doctors are very well-experienced and truly amazing in their work. Very well-maintained center. Staffs are well trained and they are very supportive throughout the treatment journey with constant follow-up calls. highly recommended. Keep up the same spirit.',
  },
  {
    id: 2,
    name: 'Kavitha G',
    review:
      'I am very happy that I visited garbhagudi hospital, they provided the best treatment.. Doctors are very supportive in my treatment she explained all medical details, she is to friendly and took at most care and responsibility towards my pregnancy, all sister and staff took good responsibility and supported us very well we got positive results from IVF treatment and waiting for a lifetime gift that we received from GarbhaGudi team .... We wholeheartedly are very thankful to Dr Asha mam, Dr. Anitha mam and the entire team of GARBHAGUDI 🙏❤️',
  },
  {
    id: 3,
    name: 'Anjali Khadtare',
      review:
      'The service at garbhagudi IVF Centre was very good. All staffs and Doctor were ready to assist at anytime. We are very pleased and thankful for the help, assistance and support provided by the Doctor and their staff. Wonderful efforts of them resulted in us for a joyful and successful life. Thanks to all.',
  },
  {
    id: 4,
    name: 'Afreen Khan',
    review:
      "When I googled about the best Hospital, I got to see many and later reading the reviews and many comments, I chose the best one of all. I have no words to feel how good and talented the Doctor is. And you also the staff, all are very friendly and yes they also help you to understand all the problems you are going through. Overall I'm happy that I selected this place for our treatment and yes I'm happy with the result.",
  },
  {
    id: 5,
    name: 'Sharifa Begum',
    review:
      'Received great response from all the staff members, Doctor give us sufficient time to listen and explain in details of what had happened and what need to do... Overall it was a good experience to visit GarbaGudi.. You people are doing a very good job by creating happiness and igniting light in the dark life... of a couple.. I wish u all the best .. Thank you ...',
  },
  {
    id: 6,
    name: 'Sonal Thorat',
    review:
      'I cannot express how much thankful I am to the entire team of GarbhaGudi hospital. We got positive results in the first visit itself. Front desk staff nurses and doctors all are very cooperative. I request to visit this branch once if you are struggling with infertility issues. And one of the best things is the front desk team will follow up with you give reminders for all visits and scans.. overall 10/10 !!!',
  },
];