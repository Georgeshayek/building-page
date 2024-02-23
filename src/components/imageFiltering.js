"use client";
import { useState } from "react";
import Image from "next/image";
const ImageFiltering = () => {
	const category = ["night", "morning", "day"];
	const images = [
		{ imageurl: "/city1.jpg", title: "cityday1", category: "day" },
		{ imageurl: "/city2.jpeg", title: "cityday2", category: "day" },
		{ imageurl: "/city3.jpg", title: "cityday3", category: "day" },
		{ imageurl: "/city1.jpg", title: "citymorning1", category: "morning" },
		{ imageurl: "/city3.jpg", title: "citymorning2", category: "morning" },
		{ imageurl: "/city2.jpeg", title: "citymorning3", category: "morning" },
		{ imageurl: "/city3.jpg", title: "citynight1", category: "night" },
		{ imageurl: "/city2.jpeg", title: "citynight2", category: "night" },
		{ imageurl: "/city1.jpg", title: "citynight3", category: "night" },
	];

	const [cat, setCat] = useState("night");
	const categoryHandlerChang = (e) => {
		setCat(e.target.value);
	};
	const filterImage = images.filter((mov) => mov.category === cat);
	return (
		<div className="container mx-auto">
			<div className="text-center my-6">
				<h1 className="text-4xl my-5"> Images</h1>
				<h2>Select a category:</h2>
				<select value={cat} onChange={categoryHandlerChang}>
					{category.map((mov) => (
						<option value={mov}>{mov}</option>
					))}
				</select>
				<div className="flex justify-around max-lg:flex-col max-lg:items-center ">
					{filterImage.map((img, i) => (
						<div key={i} className="flex flex-col">
							<Image
								className="object-cover mx-4 rounded max-lg:m-2 h-[250px] w-[350px]"
								width={250}
								height={200}
								src={img.imageurl}
								alt={img.title}
							/>
							<h4>{img.title}</h4>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
export default ImageFiltering;
