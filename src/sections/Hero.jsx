import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"
import { shoes, statistics } from "../constants"
import ShoeCard from '../components/ShoeCard'
import {useState} from 'react'
export default function Hero() {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)
  return (
    <section id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative flex justify-center items-start flex-col
       xl:w-2/5  w-full max-xl:padding-x pt-[120px]">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span> <br />
          <span className="text-coral-red inline-block mt-3">Nike</span>Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm ">
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        </p>
        <Button label="Shop Me" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-[38px] gap-16 ">
          {statistics.map((items) => (
            <div key={items.label}>
              <p className="text-4xl font-palanquin font-bold">{items.value}</p>
              <p className="font-montserrat leading-7 text-slate-gray">{items.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoeImg} alt="" width={610} height={500} className="object-conatin relative z-10" />
        <div className="flex absolute sm:gap-6 gap-4 -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((items)=>(
            <div key={items.bigShoe}>
              <ShoeCard
                imgURL={items}
                changeBigShoeImage={(items)=>setbigShoeImg(items)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
