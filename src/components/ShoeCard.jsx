
export default function ShoeCard({imgURL,changeBigShoeImage,bigShoeImg}) {
    const handleCLick=()=>{
        if(bigShoeImg!==imgURL.bigShoe){
            changeBigShoeImage(imgURL.bigShoe)
        }
    }
  return (
    <div className={`border-2 rounded-xl ${bigShoeImg===imgURL.bigShoe ? 'border-coral-red': 'border-transparent'} cursor-pointer`}
    onClick={handleCLick}>
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 max-sm:p-4 rounded-xl">
        <img src={imgURL.thumbnail} alt="" width={127} height={103} className="object-conatiner" />
      </div>
    </div>
  )
}
