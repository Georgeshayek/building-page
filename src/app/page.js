import Image from "next/image";
import Navbar from "../components/navbar";
import HeroImage from "@/components/heroImage";
import Images from "@/components/images";
import FormInputs from "@/components/forminput";
import Footer from "@/components/footer";
import Aboutus from "@/components/about";
export default function Home() {
	return (
		<>
			<HeroImage
				imageUrl="/hero.jpg"
				title="Welcome to the website"
				paragraph=" This is a simple hero image and some text that describes what this site is about."
			/>
			<Images />
			<Aboutus
				imageUrl="/city1.jpg"
				paragraph="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. "
				placement={true}
			/>
			<FormInputs />
		</>
	);
}
