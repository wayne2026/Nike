import { products } from "../constants"
import PopularProductsCard from "../components/PopularProductsCard"
export default function PopularProducts() {
  return (
    <section id="products" className="max-cobtainer max-sm:mt-12 ">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-bold font-palanquin"><span className="text-coral-red">Popular</span> Products</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="max-sm:justify-center max-sm:flex">
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-6 gap-14 ">
          {products.map((items) => (
            <PopularProductsCard key={items.imgURL} {...items} />
          ))}
        </div>
      </div>

    </section>
  )
}
