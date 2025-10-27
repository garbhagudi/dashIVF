import featuresData from '@/db/featuresData'
import Image from 'next/image'

const Features = () => {
  return (
            <section className="container mx-auto px-4 md:px-6 py-10 md:py-14">
          <header className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-balance tracking-tight text-center text-2xl font-bold leading-8 text-brandDark underline sm:text-3xl">
              What makes GarbhaGudi IVF Centre special?
            </h2>
          </header>
          <div className="mt-5 flex flex-col gap-1.5 text-center mx-auto">
            <Image
              src={"https://res.cloudinary.com/garbhagudiivf/image/upload/v1738903030/WebIcon-01_ywi7q3.webp".replace(
                "/upload/",
                "/upload/f_auto,q_auto,w_730,h_420,c_fill/"
              )}
              alt="Banner Image"
              width={360}
              height={400}
              className="mx-auto w-full object-contain lg:w-3/5"
            />
            <strong>Best IVF centre in Bangalore</strong>
            <p className="text-justify">
              GarbhaGudi IVF Centre has been awarded as the{" "}
              <strong>Best IVF centre in Bangalore</strong> by multiple
              organizations and trusted by thousands of couples. GarbhaGudi is
              your trusted partner in the journey to parenthood. We provide
              advanced fertility treatments at an affordable price, making your
              dreams of having a baby come true. Our transparent{" "}
              <strong>IVF cost in Bangalore</strong> and personalized care plans
              ensure you get the best treatment without hidden expenses. If
              you’re searching for a reliable fertility centre close to you or a
              leading IVF centre in your area, GarbhaGudi stands out with high
              success rates, compassionate doctors, and world-class facilities.
              Begin your journey today with GarbhaGudi – where hope
              meets happiness.
            </p>
          </div>
          <div className="sm:py-18 relative bg-white py-6" id="features">
            <div className="mx-auto max-w-md sm:max-w-3xl lg:max-w-7xl">
              <h2 className="mt-2 text-center font-heading text-2xl font-bold text-brandDark sm:text-3xl">
                Our Versatile Approach
              </h2>
              <div className="mx-auto max-w-7xl">
                <div className="py-3 lg:pt-8">
                  <div>
                    <div className="pb-2 text-justify">
                      GarbhaGudi IVF Centre stands as the epitome of excellence,
                      making it the{" "}
                      <span className="font-bold">
                        {" "}
                        Best Fertility Hospital in Bangalore
                      </span>
                      . We take pride in offering a comprehensive range of{" "}
                      <span className="font-bold">
                        {" "}
                        Infertility treatments
                      </span>{" "}
                      to cater to diverse needs, ensuring that every couple
                      receives personalized care and attention.
                    </div>{" "}
                    <div className="pb-2 text-justify">
                      As a prominent{" "}
                      <span className="font-bold">
                        {" "}
                        Infertility Hospital in Bangalore
                      </span>
                      , our facility houses state-of-the-art infrastructure and
                      cutting-edge technologies. Our dedicated team of fertility
                      experts brings together years of experience and expertise
                      to provide the highest level of care.
                    </div>{" "}
                    <div className="pb-2 text-justify">
                      With a commitment to excellence, compassionate care, and a
                      high success rate, GarbhaGudi IVF Centre has rightfully
                      earned its reputation as the{" "}
                      <span className="font-bold">
                        {" "}
                        Best Fertility Hospital in Bangalore
                      </span>
                      . Trust us to accompany you on your journey to parenthood
                      and make your dreams of a complete family a reality.
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {featuresData?.map((feature) => (
                    <div
                      className="group mx-auto max-w-sm pt-3"
                      key={feature?.id}
                    >
                      <div className="shadow-3xl h-full overflow-hidden rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl">
                        <div className="grid h-full grid-cols-6">
                          <div className="col-span-1 flex h-full items-center justify-center bg-brandPink">
                            <div className="text-4xl font-bold text-white">
                              {feature?.icon}
                            </div>
                          </div>
                          <div className="col-span-5 flex flex-col rounded-br-lg rounded-tr-lg border-2 border-brandPink px-2">
                            <h3 className="mt-3 font-heading text-base font-semibold tracking-tight text-brandDark md:text-lg">
                              {feature?.name}
                            </h3>
                            <p className="mt-2 pb-3 text-sm md:text-base">
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
  )
}

export default Features