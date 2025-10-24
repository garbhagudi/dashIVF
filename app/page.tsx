import type { Metadata } from "next"
import Image from "next/image"
import { Hero } from "@/components/hero"
import { LeadForm } from "@/components/lead-form"
import TreatmentsGrid from "@/components/treatments-grid"
import { DoctorsCarousel } from "@/components/doctors-carousel"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Header } from "@/components/site-header"
import { Footer } from "@/components/site-footer"
import { CiPercent, CiMedicalCase } from 'react-icons/ci';
import { BsBuildings, BsCurrencyRupee } from 'react-icons/bs';
import { GiMeditation } from 'react-icons/gi';
import { ImLab } from 'react-icons/im';
import SalesIQ from "@/components/SalesIQ"
import RelatedSearches  from "@/components/related-searches"
import VideoTestimonialsCarousel from "@/components/video-testimonials-carousel"
import { FloatingCallButton } from "@/components/floating-call-button"

export const metadata: Metadata = {
  title: "GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India",
  description:
    "GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art infrastructure and cutting-edge technology to address this ever-increasing infertility problem.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India",
    description:
      "GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art infrastructure and cutting-edge technology to address this ever-increasing infertility problem.",
    images: [{ url: "https://res.cloudinary.com/garbhagudiivf/image/upload/w_256,h_56/v1751352018/GG_New-Hori_Logo_ziwur1.svg", width: 1561, height: 768 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India",
    description:
      "GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art infrastructure and cutting-edge technology to address this ever-increasing infertility problem.",
    images: ["https://res.cloudinary.com/garbhagudiivf/image/upload/w_256,h_56/v1751352018/GG_New-Hori_Logo_ziwur1.svg"],
  },
  robots: { index: true, follow: true },
}

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
                images={[
                  { src: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1760101158/1-02_yyxrvi.webp", alt: "Family with newborn at IVF Centre" },
                  { src: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1760445537/Davanagere-02-02-1_s55l10.webp", alt: "Joyful couple celebrates pregnancy" },
                  { src: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1760177306/01-02_s8m5oa.webp", alt: "Joyful couple celebrates pregnancy" },
                ]}
              />
            </div>
            <aside className="lg:col-span-2">
              <LeadForm />
            </aside>
          </div>
        </section>

        {/* Trust banner */}
        <section className="p-3">
          <div className="container mx-auto px-4 bg-gg-500 rounded-md py-2 md:px-6 text-center">
            <p className="text-pretty text-white text-[13px] font-semibold ">Best IVF & Fertility Clinic – Affordable IVF Treatment</p>
          </div>
        </section>

        {/* Feature text + cards */}
        <section className="container mx-auto px-4 md:px-6 py-10 md:py-14">
          <header className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-balance tracking-tight text-center text-2xl font-bold leading-8 text-brandDark underline sm:text-3xl">
              What makes GarbhaGudi IVF Centre special?
            </h2>
          </header>
          <div className='mt-5 flex flex-col gap-1.5 text-center mx-auto'>
            <Image
              src={'https://res.cloudinary.com/garbhagudiivf/image/upload/v1738903030/WebIcon-01_ywi7q3.webp'.replace(
                '/upload/',
                '/upload/f_auto,q_auto,w_730,h_420,c_fill/',
              )}
              alt='Banner Image'
              width={360}
              height={400}
              className='mx-auto w-full object-contain lg:w-3/5'
            />
            <strong>Best IVF centre in Bangalore</strong>
            <p className='text-justify'>
              GarbhaGudi IVF Centre has been awarded as the{' '}
              <strong>Best IVF centre in Bangalore</strong> by multiple
              organizations and trusted by thousands of couples. GarbhaGudi is
              your trusted partner in the journey to parenthood. We provide
              advanced fertility treatments at an affordable price, making your
              dreams of having a baby come true. Our transparent{' '}
              <strong>IVF cost in Bangalore</strong> and personalized care plans
              ensure you get the best treatment without hidden expenses. If you’re
              searching for a reliable fertility centre close to you or a leading
              IVF centre in your area, GarbhaGudi stands out with high success
              rates, compassionate doctors, and world-class facilities. Begin your
              journey today with GarbhaGudi – where hope meets happiness.
            </p>
          </div>
           <div className='sm:py-18 relative bg-white py-6' id='features'>
      <div className='mx-auto max-w-md sm:max-w-3xl lg:max-w-7xl'>
        <h2 className='mt-2 text-center font-heading text-2xl font-bold text-brandDark sm:text-3xl'>
          Our Versatile Approach
        </h2>
        <div className='mx-auto max-w-7xl'>
          <div className='py-3 lg:pt-8'>
            <div>
              <div className='pb-2 text-justify'>
                GarbhaGudi IVF Centre stands as the epitome of excellence,
                making it the{' '}
                <span className='font-bold'>
                  {' '}
                  Best Fertility Hospital in Bangalore
                </span>
                . We take pride in offering a comprehensive range of{' '}
                <span className='font-bold'> Infertility treatments</span> to
                cater to diverse needs, ensuring that every couple receives
                personalized care and attention.
              </div>{' '}
              <div className='pb-2 text-justify'>
                As a prominent{' '}
                <span className='font-bold'>
                  {' '}
                  Infertility Hospital in Bangalore
                </span>
                , our facility houses state-of-the-art infrastructure and
                cutting-edge technologies. Our dedicated team of fertility
                experts brings together years of experience and expertise to
                provide the highest level of care.
              </div>{' '}
              <div className='pb-2 text-justify'>
                With a commitment to excellence, compassionate care, and a high
                success rate, GarbhaGudi IVF Centre has rightfully earned its
                reputation as the{' '}
                <span className='font-bold'>
                  {' '}
                  Best Fertility Hospital in Bangalore
                </span>
                . Trust us to accompany you on your journey to parenthood and
                make your dreams of a complete family a reality.
              </div>
            </div>
          </div>
        </div>
        <div className='mt-8'>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {features?.map((feature) => (
              <div className='group mx-auto max-w-sm pt-3' key={feature?.id}>
                <div className='shadow-3xl h-full overflow-hidden rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl'>
                  <div className='grid h-full grid-cols-6'>
                    <div className='col-span-1 flex h-full items-center justify-center bg-brandPink'>
                      <div className='text-4xl font-bold text-white'>
                        {feature?.icon}
                      </div>
                    </div>
                    <div className='col-span-5 flex flex-col rounded-br-lg rounded-tr-lg border-2 border-brandPink px-2'>
                      <h3 className='mt-3 font-heading text-base font-semibold tracking-tight text-brandDark md:text-lg'>
                        {feature?.name}
                      </h3>
                      <p className='mt-2 pb-3 text-sm md:text-base'>
                        {feature?.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
        </section>

        <div className='mx-auto max-w-4xl'>
          <div className='mx-auto max-w-3xl text-center font-bold'>
            <h3 className='text-2xl font-bold text-brandDark sm:text-3xl'>
              Trusted by over{' '}
              <span className='bg-gradient-to-r from-brandPink to-brandPurpleDark bg-clip-text text-transparent'>
                15000+ couples{' '}
              </span>
              across the world for over{' '}
              <span className='bg-gradient-to-r from-brandPink to-brandPurpleDark bg-clip-text text-transparent'>
                15 Years{' '}
              </span>
            </h3>
          </div>
        </div>
        <section className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <header className="text-center mb-10">
            <h2 className="text-balance px-2 pb-8 text-center text-2xl font-bold text-brandDark sm:text-3xl lg:pb-10">Infertility Treatment Options at GarbhaGudi IVF Centre</h2>
          </header>
          <TreatmentsGrid />
        </section>

        <section className="bg-gradient-to-br from-pink-300 to-purple-100 py-8 md:py-12">
          <div className="mx-auto px-4 md:px-6 ">
            <header className="text-center mb-8">
              <h2 className="text-balance text-2xl font-bold text-brandDark sm:text-3xl">Meet our Fertility Specialists</h2>
              <p className="mt-2 text-muted-foreground max-w-2xl mx-auto  text-sm md:text-base">
                Our team of fertility specialists have been known for their extensive clinical experience and research contributions, as well as for their success in treating the most challenging fertility cases.
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
              <h2 className="text-2xl md:text-3xl font-bold text-brandDark">Frequently asked questions</h2>
            </header>
            <FAQ />
          </div>
        </section>
        <RelatedSearches />
      </main>

      <Footer />
         <FloatingCallButton />
      <SalesIQ/>
    </>
  )
}


const features = [
  {
    id: 1,
    name: 'High Success Rate',
    icon: <CiPercent />,
    content:
      'GarbhaGudi has one of the highest IVF treatments success rates in the industry.',
    link: '/features/success-rates-of-ivf',
  },
  {
    id: 2,
    name: 'World Class Fertility Care',
    icon: <BsBuildings />,
    content:
      'GarbhaGudi is Proud to have played a key role in bringing more than 15,000+ babies into the world since 2011.',
    link: '/features/world-class-fertility-care',
  },
  {
    id: 3,
    name: 'Top Fertility Specialists',
    icon: <CiMedicalCase />,
    content:
      'Team of fertility specialists like gynecologists, embryologists, technicians and staff to help you conceive.',
    link: '/fertility-experts',
  },
  {
    id: 4,
    name: 'Affordable Treatments',
    icon: <BsCurrencyRupee />,
    content:
      'GarbhaGudi offers Affordable Infertility treatment without any compromise on service or quality of medicines or services',
    link: '/features/affordable-treatments',
  },
  {
    id: 7,
    name: 'Holistic Approach',
    icon: <GiMeditation />,
    content:
      'At GarbhaGudi we are committed to Treating infertility through the holistic mind-body-soul programs.',
    link: '/features/holistic-approach',
  },
  {
    id: 9,
    name: 'Best in Class Facilities',
    icon: <ImLab />,
    content:
      'Our IVF Centers in Bangalore are equipped to handle the most challenging cases with state of the art technology at our disposal',
    link: '/features/best-in-class-facilities',
  },
];