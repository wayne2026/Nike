
export default function Button({label,iconURL,fullwidth}) {
  return (
    <div>
      <button className={`flex justify-center items-center gap-2 px-7 py-4 border border-coral-red font-montserrat text-lg leading-none bg-coral-red rounded-full text-white ${label==="Learn more"? "bg-white  border-black text-gray-950":''} ${fullwidth && "w-full"}`}>
        {label}
        {iconURL&&<img src={iconURL} alt="button image" className="ml-2 rounded-full w-5 h-5"/>}
      </button>
    </div>
  )
}

