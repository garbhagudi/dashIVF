import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { LeadForm } from "@/components/lead-form";
import TreatmentsGrid from "@/components/treatments-grid";
import { DoctorsCarousel } from "@/components/doctors-carousel";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { Header } from "@/components/site-header";
import { Footer } from "@/components/site-footer";
import SalesIQ from "@/components/SalesIQ";
import RelatedSearches from "@/components/related-searches";
import VideoTestimonialsCarousel from "@/components/video-testimonials-carousel";
import { FloatingCallButton } from "@/components/floating-call-button";
import { Suspense } from "react";
import banners from "@/db/banners";
import Features from "@/components/Features";

export const metadata: Metadata = {
  title: "GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India",
  description:
    "GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art infrastructure and cutting-edge technology to address this ever-increasing infertility problem.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India",
    description:
      "GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art infrastructure and cutting-edge technology to address this ever-increasing infertility problem.",
    images: [
      {
        url: "https://res.cloudinary.com/garbhagudiivf/image/upload/w_256,h_56/v1751352018/GG_New-Hori_Logo_ziwur1.svg",
        width: 1561,
        height: 768,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India",
    description:
      "GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art infrastructure and cutting-edge technology to address this ever-increasing infertility problem.",
    images: [
      "https://res.cloudinary.com/garbhagudiivf/image/upload/w_256,h_56/v1751352018/GG_New-Hori_Logo_ziwur1.svg",
    ],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <>
      <Header />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-primary text-primary-foreground rounded-md px-3 py-2"
      >
        Skip to content
      </a>
      <main id="main">
        {/* Hero with form */}
        <section aria-label="Hero">
          <div className="grid grid-cols-1 lg:grid-cols-6 items-stretch gap-y-2.5">
            <div className="lg:col-span-4">
              <Hero
                images={banners}
              />
            </div>
            <aside className="lg:col-span-2">
              <Suspense
                fallback={
                  <div className="text-center py-10 text-gray-500">
                    Loading form...
                  </div>
                }
              >
                <LeadForm />
              </Suspense>
            </aside>
          </div>
        </section>

        {/* Trust banner */}
        <section className="p-3">
          <div className="container mx-auto px-4 bg-gg-500 rounded-md py-2 md:px-6 text-center">
            <p className="text-pretty text-white text-[13px] font-semibold ">
              Best IVF & Fertility Clinic – Affordable IVF Treatment
            </p>
          </div>
        </section>

        {/* Feature text + cards */}
        <Features/>

        <div className="mx-auto max-w-4xl">
          <div className="mx-auto max-w-3xl text-center font-bold">
            <h3 className="text-2xl font-bold text-brandDark sm:text-3xl">
              Trusted by over{" "}
              <span className="bg-gradient-to-r from-brandPink to-brandPurpleDark bg-clip-text text-transparent">
                15000+ couples{" "}
              </span>
              across the world for over{" "}
              <span className="bg-gradient-to-r from-brandPink to-brandPurpleDark bg-clip-text text-transparent">
                15 Years{" "}
              </span>
            </h3>
          </div>
        </div>
        <section className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <header className="text-center mb-10">
            <h2 className="text-balance px-2 pb-8 text-center text-2xl font-bold text-brandDark sm:text-3xl lg:pb-10">
              Infertility Treatment Options at GarbhaGudi IVF Centre
            </h2>
          </header>
          <TreatmentsGrid />
        </section>

        <section className="bg-gradient-to-br from-pink-300 to-purple-100 py-8 md:py-12">
          <div className="mx-auto px-4 md:px-6 ">
            <header className="text-center mb-8">
              <h2 className="text-balance text-2xl font-bold text-brandDark sm:text-3xl">
                Meet our Fertility Specialists
              </h2>
              <p className="mt-2 text-muted-foreground max-w-2xl mx-auto  text-sm md:text-base">
                Our team of fertility specialists have been known for their
                extensive clinical experience and research contributions, as
                well as for their success in treating the most challenging
                fertility cases.
              </p>
            </header>
            <DoctorsCarousel />
          </div>
        </section>
        <VideoTestimonialsCarousel />

        <section className="px-4 md:px-6 py-12 md:py-16 bg-gradient-to-tr from-brandPink/70 via-brandPurple/50 to-purple-100">
          <Testimonials />
        </section>

        <section className="bg-fuchsia-50 py-8 md:py-12">
          <div className="container mx-auto px-4 md:px-6">
            <header className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-brandDark">
                Frequently asked questions
              </h2>
            </header>
            <FAQ />
          </div>
        </section>
        <RelatedSearches />
      </main>
      <Footer />
      <FloatingCallButton />
      <SalesIQ />
    </>
  );
}


