
import ManageEmailContent from "../../../../components/email-manage-accounts-components/manage-email-content";
import Sidecontent from "../../../../components/email-manage-accounts-components/sidecontent";
import Manageaccount from "../../../../components/email-manage-accounts-components/manage-account";

export const Manage = () => {

    return(
            
		<div className="">
		 <Manageaccount />
		 <div className="flex align-center gap-[70px] max-md:flex-col">
			<ManageEmailContent/>
			<Sidecontent />
		</div>
		</div>    

    );
}