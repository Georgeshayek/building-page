"use client"
import Image from "next/image";

const ImageHero=(props)=>{
       return(
           
        <Image src={props.imageUrl} width={1000}
  height={50} className=" w-full h-full min-h-64"  alt="Hero Image "/>
    
    
    )
}
export default ImageHero