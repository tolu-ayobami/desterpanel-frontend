

import Image from "next/image"
import Link from "next/link";





const Footer = () =>{
    return(
        <div id="footer" className="m-[auto] w-[81%] max-md:w-[90%] flex align-center justify-around max-md:flex-col gap-[20px]  mt-[50px]">

         <div className=" flex flex-col gap-[7px]">

		<div className="flex align-center gap-[5px]">
		<Image src="./d-panel-logo.svg" alt="image" width={100} height={100}/>
		<p className="my-[auto]">v1.0.0.0</p>
		</div>

		<div className="">
			<p>All rights reserved</p>
		</div>

		</div>


		<div className="text-blue-800  font-bold flex gap-[15px]  flex-wrap my-[auto]">
			<Link href="/Home">Home</Link>
			<Link href="/Trademark">Trademark</Link>
			<Link href="/Privacy policy">Privacy policy</Link>
			<Link href="/Documentation">Documentation</Link>
			<Link href="/Trademark">Give Feedback</Link>

		</div>

        </div>
    )
}

export default Footer;