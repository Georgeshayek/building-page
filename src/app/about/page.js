"use client"
const { default: HeroImage } = require("@/components/heroImage");
import Aboutus from "@/components/about";
import ImageSwiper from "@/components/imageSwiper";
const About = () => {
	return (
		<>
			<HeroImage
				imageUrl="/city1.jpg"
				title="More About us"
				paragraph=" Welcome to the website we are excited to have you."
			/>
			<Aboutus
				imageUrl="/city3.jpg"
				paragraph="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,"
			/>
			<ImageSwiper/>
		</>
	);
};
export default About;
