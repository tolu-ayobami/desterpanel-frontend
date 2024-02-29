import Image from "next/image";





export const Manage = () => {

    return(
        <div className="">
            <div className="">

                <div className="">
                <h2>Email Accounts</h2>
                <p><span className="text-blue-700">List of Email Accounts/</span> Manage an Email Account</p>
                </div>

                <p>Use this page to manage your email accounts. Want to learn more? Read our <span>documentation? <Image src="/email_account_icons/create.svg"  alt="image"  width={25} height={25}/> </span></p>

                </div>

         </div>

    );
}