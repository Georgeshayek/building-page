import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./swiperss.css"
const ImageSwiper = () => {
	const isMaxLg = useMediaQuery({ maxWidth: 1023 });

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
				<Swiper
					modules={[Navigation, Pagination, A11y]}
					spaceBetween={50}
					slidesPerView={isMaxLg ? 1 : 3}
					navigation
					pagination={{ clickable: true }}
					onSwiper={(swiper) => console.log(swiper)}
					onSlideChange={() => console.log("slide change")}
					className="text-sm text-[#555]"
                    
                      >
				
					{images.map((img, i) => (
						<SwiperSlide>
							<div key={i} className="flex flex-col items-center">
								<Image
									className="object-cover mx-4 rounded max-lg:mx-0  h-[250px] w-[350px] "
									width={250}
									height={200}
									src={img.imageurl}
									alt={`city${i + 1}`}
								/>
								<h4>{img.title}</h4>
								<div className="mt-8">
									<div className="swiper-pagination" />
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};
export default ImageSwiper;
