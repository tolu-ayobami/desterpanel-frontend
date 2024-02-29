
import ManageEmailContent from "../../../components/email-manage-accounts-components/manage-email-content";
import Sidecontent from "../../../components/email-manage-accounts-components/sidecontent";
import Manageaccount from "../../../components/email-manage-accounts-components/manage-account";





const page = () => {

	 


  return (
	/*	<main className="">
			<h1 className="text-[26px] font-bold w-full mb-[10px] lg:mb-[20px]">
				Email Account
			</h1>
		</main>*/
       


		<div className="">
		 <Manageaccount />
		 <div className="flex align-center gap-[70px] max-md:flex-col">
			<ManageEmailContent/>
			<Sidecontent />
		</div>
		</div>

		

	
	);
}

export default page