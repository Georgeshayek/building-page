const { default: Image } = require("next/image")
const { default: Link } = require("next/link")

const Footer=()=>{
    return(
        <footer className="pt-3 pb-3 text-white bg-[#333]">
        <div className="container mx-auto">
        <div className="flex justify-between items-center p-2 mx-2">
            <div class="logo">
                <Link href="#"><Image src="/logo.jpg" width={50} height={50} alt="Company Logo"/></Link>
            </div>
            <div className="flex max-lg:flex-col">
                <Link className="text-white mr-4" href="/">Home</Link>
                <Link className="text-white mr-4" href="/about">About</Link>
                <Link className="text-white mr-4" href="/contact">Contact</Link>
            </div>
            <div className="flex">
                <Link className="mr-2" href="#"><Image src="/linkedin.png" width={30} height={30} alt="linkedin"/></Link>
                <Link className="mr-2" href="#"><Image src="/twitter.png" width={30} height={30} alt="X"/></Link>
                <Link className="mr-2" href="#"><Image src="/instagram.png" width={30} height={30} alt="Instagram"/></Link>
            </div>
        </div>
    </div>
    </footer>
    )
}
export default Footer