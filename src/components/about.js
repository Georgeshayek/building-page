import Image from "next/image";

const Aboutus=(props)=>{
    return(
        <div className="bg-[#333] text-white text-center  pb-3">
            <div className="container mx-auto">
            <h1 className="text-4xl p-6"> About</h1>
			<div className={`flex items-center justify-between max-lg:flex-col p-2`}>

			<p className={`${props.imageUrl?"mx-[5%] text-[1.15rem]":"mx-[15%] text-[1.25rem]"}  max-lg:mx-[7.5%] text-[0.85rem]`}>
				{props.paragraph}
			</p>
			{props.imageUrl&&<Image className={`object-cover self-center m-auto mx-4 rounded max-lg:m-2 ${props.placement?"order-first":"order-last"}`} width={300} height={300} src={props.imageUrl} alt="city1" />}
		</div>
		</div>
        </div>
    )
}
export default Aboutus;