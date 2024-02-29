"use client";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";


import { FaRegEye } from "react-icons/fa";

import { FaRegEyeSlash } from "react-icons/fa";

import { FaTimes } from "react-icons/fa";

import { TiArrowSortedUp } from "react-icons/ti";

import { TiArrowSortedDown } from "react-icons/ti";

import { radio } from "@/lib/data/manage-email-account-data/manage-email-account-data";



const ManageEmailContent= () =>{

    const [togglepass, setTogglepass] = useState(false);

	const [toggledrop, setToggledrop] = useState(false);

const generateRandomPassword = (passwordLength:any, uppercase:any, lowercase:any, numbers:any, symbol:any) =>{
let charset ="";
if(uppercase)
charset+="ABCDEFGHIJKLMNOPQRSTWXYZ";
if(lowercase)
charset+="abcdefghijklmnopqrstuvwxyz";
if(numbers)
charset+="0123456789";
if(symbol)
charset+="!@#$%^&*()_+";

let password = "";

for (let i = 0; i < passwordLength; i++){
    const randomIndex = Math.floor(Math.random() * charset.length);
    password+= charset[randomIndex];
}
return password;
};


const calculatePasswordStrength = (password:any) =>{
    let strength = 0;
    const regex = {
        uppercase: /[A-Z]/,
        lowercase: /[a-z]/,
        numbers: /[0-9]/,
        symbol: /[!@#$%^&*()_+]/

    };

    if (regex.uppercase.test(password)) strength++;
    if (regex.lowercase.test(password)) strength++;
    if (regex.numbers.test(password)) strength++;
    if (regex.symbol.test(password)) strength++;
    
    return strength;

}
    const [passwordData, setPasswordData] = useState({
        passwordLength:8,
        lowercase:true,
        uppercase:true,
        numbers:true,
        symbol:true, 
        password:""
    })



     const handleGeneratePassword = () => {
        const { passwordLength, lowercase, uppercase, numbers, symbol} = passwordData;
        setPasswordData({
            ...passwordData,
            password:  generateRandomPassword(passwordLength,uppercase, lowercase, numbers, symbol)
        })
  

     }


     const handleInputChange = (e:any) =>{
        const {name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        setPasswordData({
            ...passwordData,
            [name]:newValue,
            password:e.target.value
        });
     }


     const passwordStrength = calculatePasswordStrength (passwordData.password)
     let strengthColor = "";

     switch (passwordStrength){
            case 1:
            strengthColor = "red";
            break;
            case 2:
            strengthColor = "orange";
            break;
            case 3:
            strengthColor = "yellow";
             break;
             case 4:
            strengthColor = "green";
             break;
             default:
            strengthColor = "green";
            break;
           
     }

     const strengthBarstyle = {
        width:`${(passwordStrength / 4) * 80}%`,
        backgroundColor:strengthColor,
        height:"13px",
        borderRadius:"10px"
     }


    return(

        <div className="">
        <div className="rounded-t-[15px] max-md:w-[97%]  max-md:m-[auto] max-md:mt-[30px]  bg-white mt-[20px] shadow-lg max-md:pb-[40px] pb-[70px] ">
        <div className="flex max-md:flex-col max-md:gap-[5px] align-center justify-between p-[18px] ">
           <h1 className="font-bold my-[auto]">MANAGE AN EMAIL ADDRESS</h1>
           <div className="bg-[#EEEEEE] w-fit my-[auto] p-[5px] rounded-[10px] flex align-center gap-[5px] shadow-md ">
               <p className="my-[auto]">Show/Hide Help</p>
               <Image src="/email_account_icons/show-hide-help.svg" alt="image" width={15} height={15}/>
           </div>
        </div>

        <Separator className="w-[100%] border-[1px]"/>
       <div className="p-[17px]">

        <div className="flex flex-col gap-[5px]">

        <h2 className="font-bold">Email Account</h2>

        <p className="text-[#626262]">adekunle@adesther.com.ng</p>
         
       

        <Link href="/check-email" className="flex align-center gap-[5px]">
        <Image src="/email_account_icons/external-link.svg"  alt="image"  width={13} height={13}/>
        <p className="text-blue-700 font-bold">Check Email</p>
        </Link>

        </div>




          {/*PASSWORD   SECTION */}

        <div className="mt-[10px] flex flex-col gap-[10px]">

           
        <div className="mt-[20px] flex flex-col gap-[7px]">
           <h1 className="font-bold">SECURITY</h1>
           <Separator className="w-[95%] border-[1px]"/>
        </div>

           <p>New Password</p>

           <div className="flex">
           <input type={togglepass? "text" : "password"} value={passwordData.password} onChange={handleInputChange} placeholder="Enter Password"  className="border-[2px] outline-0 rounded-s-lg p-[5px] w-[50%]" />
           
           <div onClick={() => setTogglepass(!togglepass)} className="border-[2px] cursor-pointer bg-[#EEEEEE] p-[5px] w-[50px] flex  align-center justify-center">
              {togglepass? <FaRegEye className="my-[auto] text-[20px]" /> : 
              <FaRegEyeSlash className="my-[auto] text-[20px]" />}
           </div>
           
           <div className="border-[2px] bg-[#EEEEEE] p-[5px] cursor-pointer  font-bold flex justify-center">
           <p onClick={handleGeneratePassword}>Generate</p>
           </div>


           <div onClick={() => setToggledrop(!toggledrop)} className="border-[2px] rounded-e-md  cursor-pointer bg-[#EEEEEE] p-[5px] w-[50px] flex justify-center">
           {toggledrop?  <TiArrowSortedUp className="my-[auto]" /> : 
           <TiArrowSortedDown  className="my-[auto]"/>}
           </div>

           </div>

           {toggledrop && <div className="w-[80%] border p-[20px]">
               <p>Select the length and characters to use when generating a password:</p>
               
               <div className="flex align-center mt-[20px] justify-between">

               <div className="flex align-center gap-[20px]">
               <input type="number" value={passwordData.passwordLength} placeholder="0" className="border p-[3px] w-[50px] outline-0" />

               <input type="range" name="passwordLength" value={passwordData.passwordLength} max="20" min="4" onChange={handleInputChange} className="outline-0"/>
               </div>
               <FaTimes className="my-[auto] cursor-pointer" onClick={() => setToggledrop(false)} />

               </div>

                <div className="">
               <p>password settings</p>

                  <div className=" grid grid-cols-1 gap-[10px] mt-[20px]">

                           <label className=" flex gap-[5px]">
                           <input type="checkbox" name="uppercase" checked={passwordData.uppercase} onChange={handleInputChange} />
                          <p>Uppercase (A-Z)</p>
                             </label>

                        <label className=" flex gap-[5px]">
                           <input type="checkbox" name="lowercase" checked={passwordData.lowercase} onChange={handleInputChange}/>
                          <p>Lowercase (a-z)</p>
                             </label>

                             <label className=" flex gap-[5px]">
                           <input type="checkbox"  name="numbers" checked={passwordData.numbers}  onChange={handleInputChange}/>
                          <p>Number (1-20)</p>
                             </label>

                             <label className=" flex gap-[5px]">
                           <input type="checkbox" name="symbol" checked={passwordData.symbol} onChange={handleInputChange}/>
                          <p>Symbol (!@#.)</p>
                             </label>

                             </div>
                      


              </div>
               
               </div>}

               <div className="flex gap-[10px]">

               <div style={strengthBarstyle}></div>
               </div>
           
           </div>


              {/*STORAGE   SECTION */}

              <div className="mt-[30px] flex flex-col gap-[7px]">
               <h1 className="font-bold">STORAGE</h1>
               <Separator className="w-[100%] border-[1px]" />
               <p className="font-bold">Current storage usage</p>
               <p className="font-bold">110.95KB/1GB /0.01%</p>
               <Progress value={50} className=" w-[85%]  h-[10px] border-[1px] rounded-lg"/>
               <div className=" flex align-center gap-[5px]">
                   <p className="font-bold">Allocated Storage Space </p>
                   <Image src="/email_account_icons/show-hide-help.svg" alt="image" width={15} height={15} />
               </div>
               
               <div className="flex gap-[5px]">
                   <label>
                   <input type="radio" name="radio"/>
                   </label>
               
                   <div className=" flex">
                   <input type="number" placeholder="1024" className="w-[150px] border outline-0 rounded-s-md p-[2px]  "/>
               
               <div className="bg-[#EEEEEE] rounded-e-md outline-0 border-0">
              <Select>
              <SelectTrigger className="w-full">
               <SelectValue placeholder="MB" />
             </SelectTrigger>
               <SelectContent>
               <SelectGroup>
                   
                   <SelectItem value="jupiter">MB</SelectItem>
                   <SelectItem value="saturn">GB</SelectItem>
                   <SelectItem value="default">TB</SelectItem>
                   <SelectItem value="nostalgic">PB</SelectItem>
               </SelectGroup>
               </SelectContent>
               </Select>
               </div>

                   </div>
                   
               </div>

               <label className=" font-bold flex gap-[5px]">
                   <input type="radio" name="radio"/>
                   Unlimited
               </label>

               </div>
       
       




            {/*RESTRICTION   SECTION */}





              <div className="mt-[10px] ">

               <h1 className="font-bold">RESTRICTIONS</h1>
               <Separator className="w-[100%] border-[1px] mt-[10px]" />

              <div className="flex gap-[5px] mt-[10px] flex-col">
               {radio.map((radio, index) =>{

                   if(index === 1){
                       return(
                           <div key={radio.id} className=" flex flex-col gap-[4px]">				
               <p className=" font-bold">{radio.text}</p>
               <div className=" flex gap-[5px] ">

               <label className=" flex gap-[5px]">
                   <input type="radio" name={radio.name} />
                   {radio.label1}
               </label>

               <label className=" flex gap-[5px]">
                   <input type="radio" name={radio.name} />
                   {radio.label2}
               </label>

                   <label className=" flex gap-[5px]">
                   <input type="radio" name={radio.name} />
                   {radio.label3}
               </label>
               
               </div>
               </div>
                       )
                   } else {
                   return(
               <div key={radio.id} className="flex flex-col gap-[4px]">				
               <p className=" font-bold">{radio.text}</p>
               <div className=" flex gap-[5px] ">
               <label className=" flex gap-[5px]">
                   <input type="radio" name={radio.name}/>
                   {radio.label1}
               </label>

               <label className=" flex gap-[5px]">
                   <input type="radio" name={radio.name} />
                   {radio.label2}
               </label>
               </div>
               </div>
                   )
                   }
               })}
           
           </div>
           </div>



             {/*PLUS ADDRESSING   SECTION */}                     


           <div className="mt-[30px]">

               <div className="flex flex-col gap-[5px]">
               <h1 className="font-bold">PLUS ADDRESSING</h1>
               <Separator className="w-[100%] border-[1px]"/>
               </div>

            

               <div className="mt-[10px]  flex align-center gap-[5px]">
                   <p className="font-bold">Automatically Create Folders for Plus Addressing </p>
                   <Image src="/email_account_icons/show-hide-help.svg" alt="image" width={15} height={15} />
               </div>

               <div className="flex  flex-col gap-[5px] mt-[10px]">

               <label className=" flex gap-[5px]">
                   <input type="radio" name="folder" />
                   Automatically Create Folders
               </label>

               <label className=" flex gap-[5px]">
                   <input type="radio" name="folder"/>
                   Do not Automatically Create Folders
               </label>
               </div>

           </div>

        </div>
        </div>

        
            {/*UPDATE EMAIL   SECTION */}

         <div className=" max-md:w-[95%] max-md:m-[auto] max-md:bg-blue-700">

		 <div className="p-[17px] border-[3px] bg-[#EEEEEE] rounded-b-[15px]">

		  <div className="flex flex-col gap-[7px] ">
		       <label className=" flex gap-[5px]">
					<input type="checkbox" name="folder" className="w-[17px]"/>
					<p className="flex flex-wrap">Stay on this page after i click <span className="italic">Update Email Settings</span> </p>
				</label>
				<Separator className="w-[100%] border-[1px] border-slate-300" />

	         </div>

			 <div className="mt-[20px]   flex-wrap flex justify-between ">

			 <Link href="/update-email-settings" className="p-[10px] rounded-lg bg-blue-500 text-white gap-[10px] flex align-center my-[auto]">
			 <Image src="/email_account_icons/update-email-settings.svg" alt="image" className="my-[auto] " width={15} height={15} />
			<p>Update Email Settings </p>
			 </Link>

			 <Link href="/go-back" className="text-blue-200 max-md:mt-[10px] flex align-center justify-center gap-[4px]">
			  <Image src="/email_account_icons/back.svg" alt="image" className="my-[auto] " width={15} height={15} />
			  <p className="text-blue-700 my-[auto]">Go Back</p>
			 </Link>

		    </div>

		</div>


		<div className="border-red-300 border font-bold p-[20px] mt-[40px] flex flex-col gap-[20px] rounded-[15px] ">
			<h1>DELETE EMAIL ACCOUNT</h1>
			<p>Are you sure? When you delete an email account, we permanently delete all of the account data. </p>
			
			<Link href="/delete-email-account" className="p-[10px] rounded-lg border-blue-500 w-fit border text-white gap-[10px] flex align-center my-[auto]">
			 <Image src="/email_account_icons/delete.svg" alt="image" className="my-[auto] " width={15} height={15} />
			<p className="text-blue-700">Delete Email Account</p>
			 </Link>

		</div>
		
		</div>
        </div>

    )
}
export default ManageEmailContent
