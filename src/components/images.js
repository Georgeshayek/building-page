"use client"
const { default: Image } = require("next/image")

const Images=()=>{
    const images=[{imageurl:'/city1.jpg',title:'city1'},{imageurl:'/city2.jpeg',title:'city2'},{imageurl:'/city3.jpg',title:'city3'}]
    return(
        <div className="container mx-auto">
        <div className="text-center my-6">
            <h1 className="text-4xl my-5"> Images</h1>
        <div className="flex justify-around max-lg:flex-col max-lg:items-center ">
            {images.map((img,i)=><div className="flex flex-col"><Image className="object-cover mx-4 rounded max-lg:m-2 h-[250px] w-[350px]" width={250} height={200} src={img.imageurl} alt={`city${i+1}`} /><h4>{img.title}</h4></div>)}
			
		</div>
        </div>
        </div>
    )
}
export default Images