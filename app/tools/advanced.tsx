
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";

  import "../globals.css"

  import { Separator } from "@/components/ui/separator"
  
  import review from "../datas/advanceddata";

  import Link from "next/link";
import Image from "next/image";


  const Advanced = () =>{
    return(
        <div className="">

           <div className="w-[48%] max-md:w-[90%] shadow-md  border-[1px] m-[auto] mt-[20px] accordionall">
	
			<Accordion type="single" collapsible className="">
				
        <AccordionItem value="item-1" className="accordionitem">
          <AccordionTrigger className="text-blue-800 px-[10px] "><div className="flex gap-[15px] align-center">
			<Image src="../home_panel_icons/advanced_icons/advanced.svg" className="my-[auto]" alt="image" width={25} height={25} />
		    <p className="text-black my-[auto]">Advanced</p>
			</div>
			</AccordionTrigger>

			<Separator className="w-[100%]"/>

		  <AccordionContent className="grid grid-cols-2 max-md:grid-cols-1 gap-[30px] px-[10px]  mt-[20px] w-[85%] " >
		  {review.map((rev) =>{
			return(
				<Link href={rev.url}>
				<div className="flex  align-center gap-[15px] " key={rev.id}>
					<Image src={rev.image} alt={rev.test} width={25} height={25}/>
					<p className="text-blue-800 font-bold my-[auto]">{rev.test}</p>
					</div>
					</Link>
			)
		  })}
		      </AccordionContent>
        </AccordionItem>
      </Accordion>
	  </div>

        </div>
    )
  }

  export default Advanced;