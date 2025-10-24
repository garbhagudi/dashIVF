"use client"

const RelatedSearches=()=> {

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-brandDark mb-10">Related Searches</h2>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {searches.map((search) => (
            <div
              key={search.id}
              className="px-3 py-1.5 bg-brandPurple hover:bg-brandPurpleDark text-white rounded-lg text-xs md:text-sm font-medium transition-colors duration-200 whitespace-nowrap"
            >
              {search.item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default RelatedSearches
const searches = [
  {
    id: 1,
    item: 'Fertility Hospital in Bangalore',
  },
  {
    id: 2,
    item: 'Fertility Doctor in Bangalore',
  },
  {
    id: 3,
    item: 'Infertility Treatment in Bangalore',
  },
  {
    id: 4,
    item: 'Fertility Clinic in Bangalore',
  },
  {
    id: 5,
    item: 'IVF Treatment in Bangalore',
  },
  {
    id: 6,
    item: 'Low Cost IVF Treatment in Bangalore',
  },
  {
    id: 7,
    item: 'Best IVF centre in Bangalore',
  },
  {
    id: 8,
    item: 'IVF cost in Bangalore',
  },
  {
    id: 9,
    item: 'ivf pregnancy',
  },
  {
    id: 10,
    item: 'fertility center near me',
  },
  {
    id: 11,
    item: 'infertility treatment for female',
  },
  {
    id: 12,
    item: 'asthenozoospermia treatment',
  },
];