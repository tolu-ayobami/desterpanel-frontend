

import Image from "next/image"
import Link from "next/link";





const Footer = () =>{


	const link = [
		{
			id:"1",
			test:"Home",
			url:"/", 
		
		  },

		  {
			id:"2",
			test:"Trademark",
			url:"/Trademark", 
		
		  },

		  {
			id:"3",
			test:"Privacy policy",
			url:"/Privacy Policy", 
		
		  },

		  {
			id:"4",
			test:"Documentation",
			url:"/Documentation", 
		
		  },

		  {
			id:"5",
			test:"Give Feedback",
			url:"/Give feedback", 
		
		  },
	]

    return(
        <div  className="m-[auto] flex-wrap text-wrap w-[81%] max-md:w-[90%] flex align-center justify-around max-md:flex-col gap-[20px]  mt-[50px]">

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
			{link.map((link) =>{
				return <Link href={link.url} key={link.id}>{link.test}</Link>
			})}

		</div>

        </div>
    )
}

export default Footer;