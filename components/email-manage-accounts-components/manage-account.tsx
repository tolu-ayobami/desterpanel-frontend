

import Link from "next/link";

import Image from "next/image";



const Manageaccount = () =>{



    return(
		<div className="w-[70%] max-md:w-[95%] max-md:m-[auto]  flex  flex-wrap flex-col">
		<div className="">
		<h1 className=" font-bold">Email Accounts</h1>
		<p><Link href="/list-of-email-accounts" className="text-blue-700">List of Email Accounts</Link> / Manage an Email Account</p>
		</div>

        <div className="flex gap-[4px] mt-[13px] flex-wrap ">
		  <p className="my-[auto]">Use this page to manage your email accounts. Want to learn more? Read our </p>
			<Link href="/documentation" className="text-blue-700 flex gap-[4px] underline">
			<p>documentation</p>
		    <Image src="/email_account_icons/external-link.svg"  alt="image"  width={13} height={13}/>
		  </Link>
         

		 </div>
		 </div>


    )
    }


    export default Manageaccount;