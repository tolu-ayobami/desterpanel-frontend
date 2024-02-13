
import { review }  from "../datas/all";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";


import { Separator } from "@/components/ui/separator"
import Link from "next/link";
import Image from "next/image";


const Alltool = () =>{




    return(

        <div className="">

<div className="w-[48%]  max-md:w-[90%] m-[auto]">
{Object.keys(review).map((category) =>{
	const categories = review[category as keyof typeof review];
	return(
			<Accordion type="single" key={category} collapsible className="shadow-md border-[1px]  mt-[20px]  rounded-[15px]">
				
        <AccordionItem value="item-1" className="border-b-0">
		
          <AccordionTrigger className="text-blue-800 px-[10px] "><div className="flex gap-[15px] align-center">
		  <Image src={categories.logo} className="my-[auto]" alt={category} width={25} height={25} />
		    <p className="text-black">{category}</p>
			</div>
			</AccordionTrigger>

			
			<Separator className="w-[100%]"/>

		  <AccordionContent className="grid grid-cols-2 max-md:grid-cols-1  gap-[30px] px-[10px] mt-[20px] w-[85%]" >
		 {categories.tools.map((tool) => {
			return(
				<Link href={tool.url}>
				<div className="flex align-center gap-[15px] " key={tool.id}>
        <Image src={tool.image} alt={tool.test} width={25} height={25}/>
					<p className="text-blue-800 font-bold my-[auto]">{tool.test}</p>
					</div>
					</Link>
			)
		  })}
		      </AccordionContent>
			    
        </AccordionItem>
      </Accordion>
	  	)
	}
	  )}
	  </div>

        </div>
    )
}

export default Alltool;