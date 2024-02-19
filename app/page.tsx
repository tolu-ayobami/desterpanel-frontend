import Alltool from "./tools/alltools";
import Softaculous from "./tools/softaculous";
import Backup from "./tools/backup";
import Sidebar from "@/components/common/Sidebar";
import GeneralInfo from "@/components/dashboard/GeneralInfo";
import Statistics from "@/components/dashboard/Statistics";

export default function Home() {
	return (
		<main className="mt-[100px] lg:mt-[85px] flex gap-[50px] lg:gap-0 z-30">
			<Sidebar />

			<div className="lg:pt-[50px] w-[100%] max-w-[640px] md:max-w-[900px] lg:max-w-[100%] mx-auto lg:mx-0 px-4 lg:px-[50px]">
				<h1 className="text-[26px] font-bold w-full mb-[10px] lg:mb-[20px]">
					Tools
				</h1>
				<div className="flex flex-col md:flex-row justify-between w-[100%] gap-[50px] md:gap-[30px] lg:gap-[50px]">
					<section className="dashboard md:w-[60%] lg:w-[100%] lg:max-w-[600px]">
						<Alltool />
						<Softaculous />
						<Backup />
					</section>
					<section className="flex flex-col gap-[30px] md:w-[40%] lg:max-w-[600px]">
						<GeneralInfo />
						<Statistics />
					</section>
				</div>
			</div>
		</main>
	);
}
