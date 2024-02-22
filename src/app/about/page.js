const { default: HeroImage } = require("@/components/heroImage");

const About = () => {
    return(
	<HeroImage
			imageUrl="/city1.jpg"
			title="More About us"
			paragraph=" Welcome to the website we are excited to have you."
		/>
    )
};
export default About;
