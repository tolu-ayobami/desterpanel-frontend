
import Link from "next/link";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";

import { space } from "@/lib/data/manage-email-account-data/sidecontentdata";



const Sidecontent = () =>{



    return(
        	
	     <div className="flex flex-col w-[30%] max-md:w-[95%] max-md:m-[auto] gap-[40px] mt-[20px]">
         {Object.entries(space).map(([category, tools]) =>(	
             <div className="" key={category}>
                 <Separator className="w-[100%] border-[1px] border-black" />
                 <h1 className="mt-[10px] font-bold">{category}</h1>
                 <div className="flex flex-col gap-[5px]">
                 {tools.map((tool:any) =>(
                         <Link href={tool.url} key={category} className="flex align-center text-blue-700 font-bold  gap-[10px]">
                         <Image src={tool.icon}  alt="image" className="my-[auto] " width={15} height={15} />
                        <p>{tool.text}</p>
                         </Link>
                 )
                 )}
                 </div>
                 </div>
         ))}
      </div>

    )
}

export default Sidecontent;