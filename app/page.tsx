import Alltool from "./tools/alltools";
import Softaculous from "./tools/softaculous";
import Backup from "./tools/backup";
import Sidebar from "@/components/common/Sidebar";
import GeneralInfo from "@/components/dashboard/GeneralInfo";
import Statistics from "@/components/dashboard/Statistics";

export default function Home() {
	return (
		<main className="mt-[100px] lg:pr-10 flex gap-[50px] z-30">
			<Sidebar />

			<div className="lg:pt-[50px] w-[100%] max-w-[640px] md:max-w-[900px] mx-auto px-4 rounded">
				<h1 className="text-[26px] font-bold w-full mb-[10px] lg:mb-[20px]">
					Tools
				</h1>
				<div className="flex flex-col md:flex-row justify-between w-[100%] gap-[50px] md:gap-[30px]">
					<section className="dashboard md:w-[60%]">
						<Alltool />
						<Softaculous />
						<Backup />
					</section>
					<section className="flex flex-col gap-[30px] md:w-[40%] ">
						<GeneralInfo />
						<Statistics />
					</section>
				</div>
			</div>
		</main>
	);
}
