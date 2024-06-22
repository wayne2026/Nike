import { services } from "../constants"
import ServiceCard from "../components/ServiceCard"
export default function Services() {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((items)=>(
        <ServiceCard key={items.imgURL}{...items} />
      ))}
    </section>
  )
}
