const { default: Image } = require("next/image")

const Images=()=>{
    return(
        <div className="container mx-auto">
        <div className="text-center my-6">
            <h1 className="text-4xl my-5"> Images</h1>
        <div className="flex justify-around max-lg:flex-col max-lg:items-center ">
			<Image className="object-cover mx-4 rounded max-lg:m-2 w-[350px]" width={250} height={200} src="/city1.jpg" alt="city1" />
			<Image className="object-cover mx-4 rounded max-lg:m-2 w-[350px]" width={250} height={200}  src="/city2.jpeg" alt="city2" />
			<Image className="object-cover mx-4 rounded max-lg:m-2 w-[350px]" width={250} height={200}  src="/city3.jpg" alt="city3" />
		</div>
        </div>
        </div>
    )
}
export default Images