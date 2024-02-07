import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";
import GeneralInfo from "./GeneralInfo";
import Statistics from "./Statistics";

const Dashboard = () => {
	const toolSkeletons = 2;
	const tools = 4;
	return (
		<main className="bg-dashboard h-full w-screen p-[20px] lg:p-[50px]">
			<h1 className="text-[32px] font-bold mb-5">Tools</h1>
			<div className=" flex justify-between flex-col lg:flex-row">
				<section className="flex flex-col gap-[30px] min-w-[600px]">
					{Array.from({ length: toolSkeletons }, (_, index) => (
						<div key={index} className="grid gap-[40px]">
							<div className="h-fit rounded-20 bg-white">
								{/* Header */}
								<div className="flex item-center gap-[10px] w-full border-b-[3px] border-b-gray p-5">
									<Image
										width={30}
										height={30}
										alt=""
										src="/home_panel_icons/email_icons/email.svg"
									/>
									<span className="text-[22px] text-black]">Email</span>
								</div>

								{/* Links */}
								<div className="px-5 py-10 grid grid-cols-2 gap-10 justify-start items-center">
									{Array.from({ length: tools }, (_, index) => (
										<Link href="/" key={index} className="flex gap-[20px]">
											<Image
												width={30}
												height={30}
												alt=""
												src="/home_panel_icons/email_icons/email-accounts.svg"
											/>
											<span className="text-[22px] text-primary-blue">
												Email account
											</span>
										</Link>
									))}
								</div>
							</div>
						</div>
					))}
				</section>

				<section className="grid gap-[30px]">
					<GeneralInfo />
					<Statistics />
				</section>
			</div>
		</main>
	);
};

export default Dashboard;
