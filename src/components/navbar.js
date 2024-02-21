"use client"
import Link from "next/link";
import Image from 'next/image'
import { useState } from "react";
// .navbar{
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
// }
const Navbar=()=>{
    const [show, setShow] = useState(false);
    const toggleShow = () => {
        setShow(prevShow => !prevShow);
    };

    return (
        
        <nav className="bg-[#333] p-[12px]" >
            <div className="container mx-auto">
            <div className="flex justify-between items-center relative">
                <div >
                    <Link href="#"><Image src="/logo.jpg" alt=" Logo" width={50} height={50}/></Link>
                </div>
                <button id="burger-btn" className="  block text-white lg:hidden" onClick={toggleShow}>&#9776;</button>
                <ul className={`flex justify-center  max-lg:flex-col max-lg:${!show ? 'hidden' : 'block'}   max-lg:absolute max-lg:top-10 max-lg:left-0 max-lg:bg-[#555] max-lg:w-[100%] px-[40px] max-lg:z-50`}>                
				<li className="max-lg:text-center  lg:inline-block lg:mr-[10px]"><Link className="text-white py-10 px-[10px] hover:text-[#333]" href="#">Home</Link></li>
				<li className=" max-lg:text-center lg:inline-block lg:mr-[10px]"><Link className="text-white py-5 px-[10px] hover:text-[#333]" href="#">About</Link></li>
				<li className="max-lg:text-center lg:inline-block lg:mr-[10px]"><Link className="text-white py-5 px-[10px] hover:text-[#333]" href="#">Contact</Link></li>
			</ul>
            
        </div>
        </div>

		</nav>
    )
}
export default Navbar;