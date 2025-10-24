
import treatments from "@/db/treatments";
import Image from "next/image";
import Link from "next/link";

const TreatmentsGrid=()=> {
  return (
    <div id="treatments" className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-6">
              {treatments?.map((items) => (
          <div
            key={items?.id}
            className='flex flex-col items-center justify-between rounded-2xl border border-brandPink transition-all duration-300 hover:-translate-y-2 hover:bg-pink-50 hover:shadow-2xl'
          >
            <div className='mx-auto -mt-10 flex items-center justify-center rounded-full md:-mt-12 md:h-24 md:w-24'>
              <Image
                src={items?.image}
                alt={items?.treatent}
                width={80}
                height={80}
                className='w-20'
                loading='lazy'
                quality={10}
              />
            </div>
            <div className='flex flex-col items-center justify-center py-2'>
              <div className='pb-2 text-center font-heading text-base font-bold text-brandDark md:text-xl'>
                {items?.treatent}
              </div>
              <div className='px-3 text-center text-sm md:text-base'>
                {items?.desc}
              </div>
            </div>
            <div className='w-full rounded-b-2xl border bg-brandPink py-1 text-center'>
              <Link href={items?.link} className='font-bold text-white'>
                Learn More
              </Link>
            </div>
          </div>
        ))}
    </div>
  )
}

export default TreatmentsGrid;