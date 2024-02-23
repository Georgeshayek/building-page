import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const ImageSwiper = () => {
	const images = [
		{ imageurl: "/city1.jpg", title: "city1" },
		{ imageurl: "/city2.jpeg", title: "city2" },
		{ imageurl: "/city3.jpg", title: "city3" },
		{ imageurl: "/city3.jpg", title: "city4" },
		{ imageurl: "/city2.jpeg", title: "city5" },
		{ imageurl: "/city1.jpg", title: "city6" },
	];
	return (
		<div className="container mx-auto">
			<div className="text-center my-6">
				<h1 className="text-4xl my-5"> Images</h1>
				<div className="flex justify-around max-lg:flex-col max-lg:items-center ">
					<Swiper
						modules={[Navigation, Pagination, A11y]}
						spaceBetween={50}
						slidesPerView={3}
						navigation
						pagination={{ clickable: true }}
						onSwiper={(swiper) => console.log(swiper)}
						onSlideChange={() => console.log("slide change")}
					>
						{images.map((img, i) => (
                            <SwiperSlide>
							<div className="flex flex-col">
								<Image
									className="object-cover mx-4 rounded max-lg:m-2 h-[250px] w-[350px]"
									width={250}
									height={200}
									src={img.imageurl}
									alt={`city${i + 1}`}
								/>
								<h4>{img.title}</h4>
							</div>
                            </SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	);
};
export default ImageSwiper;
