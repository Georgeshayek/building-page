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
    <Navbar/>
    <HeroImage/>
    <Images/>
    <About/>
    <FormInputs/>
    <Footer/>
    </>
  );
}
