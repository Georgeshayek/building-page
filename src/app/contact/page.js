"use client"
import Aboutus from "@/components/about";
import DefAccordion from "@/components/accordion";
import ImageFiltering from "@/components/imageFiltering";

const { default: HeroImage } = require("@/components/heroImage");

const Contact = () => {
	return (
		<>
			<HeroImage
				imageUrl="/city3.jpg"
				title="Contact us"
				paragraph=" Please contact us for any emergency."
			/>
			<Aboutus paragraph="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus," />
			<DefAccordion/>
			<ImageFiltering/>
		</>
	);
};
export default Contact;
