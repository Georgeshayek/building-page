import Image from "next/image";
import Navbar from "../components/navbar";
import HeroImage from "@/components/heroImage";
import Images from "@/components/images";
import About from "@/components/about";
import FormInputs from "@/components/forminput";
import Footer from "@/components/footer";
export default function Home() {
	return (
		<>
			<HeroImage imageUrl="/hero.jpg"
				title="Welcome to the website"
				paragraph=" This is a simple hero image and some text that describes what this site is about." />
			<Images/>
			<About />
			<FormInputs />
		</>
	);
}
