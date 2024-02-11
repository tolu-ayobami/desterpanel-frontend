"use client"


import Image from "next/image";
import { useState } from "react";




const Header = () =>{

    const[show, setShow] = useState(true);

    const toggle = () =>{
        setShow(!show)
    }



    return(

        <div className="">

            <div className="bg-white p-[22px] flex justify-between align-center fixed top-0 shadow-md w-[100%]">
                
            <Image src="./d-panel-logo.svg" alt="image" className="max-md:w-[80px]" width={120} height={120}/>

         {show ? <div className="flex gap-[20px] justify-end align-item w-[100%]">
         
            <div className="border max-md:hidden rounded-lg p-[10px]  w-[35%]">

                <div className="flex justify-end align-center gap-[10px]">
                <input type="text" placeholder="Search Tools" className="w-[100%]  text-right border-none outline-[0px] "/>
                <Image src="./home_panel_icons/search-tools.svg" alt="image" className="max-md:flex max-md:w-[18px]" width={20} height={20}/>
                </div>
               
            </div>
            <Image src="./home_panel_icons/search-tools.svg" alt="image" onClick={toggle} className="max-md:flex hidden cursor-pointer max-md:w-[18px]" width={20} height={20}/>

            <div className="flex align-center gap-[20px]">
                <Image src="./home_panel_icons/refresh.svg" alt="image" className="cursor-pointer max-md:w-[18px]" width={20} height={20} />
              
                <div className="flex gap-[10px] align-center">
                <Image src="./home_panel_icons/profile-icon.svg" alt="image" className="max-md:w-[18px] my-[auto]" width={20} height={20} />
                <div className="my-[auto]">
                    <p className="font-bold text-[14px] max-md:text-[12px]">John Doe</p>
                    <p className="text-[14px] max-md:text-[12px]">System Admin</p>
                </div>
                </div>
            </div>

            </div>
            :
            <div className=" flex align-center gap-[5px]">
                
               <p onClick={toggle} className="my-[auto] cursor-pointer">back</p>

            <div className="border hidden  max-md:flex  rounded-lg p-[8px]  w-[100%]">
            <div className="flex justify-end  align-center gap-[10px]">
            <input type="text" placeholder="Search Tools" className="w-[100%] text-[13px]  text-right border-none outline-[0px] "/>
            <Image src="./home_panel_icons/search-tools.svg" alt="image" className="max-md:flex max-md:w-[18px]" width={20} height={20}/>
            </div>
           
        </div>
        </div> }

                </div>

               



            </div>
    )
}

export default Header;
