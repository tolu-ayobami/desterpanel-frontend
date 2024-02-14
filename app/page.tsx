import Alltool from "./tools/alltools";
import Softaculous from "./tools/softaculous";
import Backup from "./tools/backup";
import Sidebar from "@/components/common/Sidebar";
import GeneralInfo from "@/components/dashboard/GeneralInfo";
import Statistics from "@/components/dashboard/Statistics";

export default function Home() {
	return (
		<main className="mt-[86px] pr-10 flex gap-[50px] ">
			<Sidebar />
			<div className="pt-[50px] w-[100%]">
				<h1 className="text-[30px] font-bold w-full mb-[20px]">Tools</h1>
				<div className="flex w-[100%] gap-[50px]">
					<section className="dashboard w-[70%]">
						<Alltool />
						<Softaculous />
						<Backup />
					</section>
					<section className="flex flex-col gap-[30px]">
						<GeneralInfo />
						<Statistics />
					</section>
				</div>
			</div>
		</main>
	);
}
