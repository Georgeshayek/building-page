import Image from "next/image";

const HeroImage=()=>{
    return(
        <div className="relative">
        <Image src="/hero.jpg" width={1000}
  height={50} className=" w-full h-auto"  alt="Hero Image "/>
        <div className="container mx-auto">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-2 ">
            <h1 className="text-3xl mb-4 max-lg:text-[1rem]">Welcome to our website</h1>
            <p className="text-2xl max-lg:text-[0.75rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        </div>
    </div>
    )
}
export default HeroImage;