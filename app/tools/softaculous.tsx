
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";

  import "../globals.css"

 
  
  import { scripts, categories } from "../datas/softaculousdata";

  import Link from "next/link";
import Image from "next/image";


  const Softaculous = () =>{



  console.log(scripts)
    return(
        <div className="">

           <div className="w-[48%] max-md:w-[90%] shadow-md  border-[1px] m-[auto] mt-[20px] accordionall">
	
			<Accordion type="single" collapsible className="">
				
        <AccordionItem value="item-1" className="accordionitem">
          <AccordionTrigger className="text-blue-800 px-[10px] "><div className="flex gap-[15px] align-center">
			<Image src="../home_panel_icons/softaculous_app_icons/softaculous-apps-installer.svg" className="my-[auto]" alt="image" width={25} height={25} />
		    <p className="text-black my-[auto]">Softaculous Apps Installer</p>
			</div>
			</AccordionTrigger>

      

		  <AccordionContent className="w-[100%]" >
		  <div className="scriptcontent">
      <p className="scripts font-bold">Scripts:</p>
     <div className="flex justify-between align-center px-[10px] overflow-x-scroll w-[100%] gap-[50px] ">
      {scripts.map((rev) =>{
			return(
				<Link href={rev.url} key={rev.id}>
				<div className="softacontent">
        <Image src={rev.image} alt={rev.test} width={25} height={25}/>
					<p className="text-blue-800 font-bold my-[auto]">{rev.test}</p>

					</div>
					</Link>
			)
		  })}
      </div>
      </div>
		      </AccordionContent>


          <AccordionContent className="w-[100%]" >
		  <div className="scriptcontent">
      <p className="scripts font-bold">Categories:</p>
     <div className="flex justify-between align-center px-[10px] overflow-x-scroll w-[100%] gap-[50px] ">
      {categories.map((rev) =>{
			return(
				<Link href={rev.url} key={rev.id}>

				<div className="softacontent" >
        <Image src={rev.image} alt={rev.test} width={25} height={25}/>
					<p className="text-blue-800 font-bold my-[auto] text-wrap">{rev.test}</p>
					</div>

					</Link>
			)
		  })}
      </div>
      </div>
		      </AccordionContent>

        </AccordionItem>
      </Accordion>
	  </div>

        </div>
    )
  }

  export default Softaculous;