<<<<<<< HEAD
import { memoryUsage } from "process";
=======
>>>>>>> a2ddff61c6810b033268c5b5b317f238c9b4c1a4
import { Skeleton } from "../ui/skeleton";

const Statistics = () => {
	const sidebarSkeletons = 4;
<<<<<<< HEAD
	const [
		subDomains,
		diskUsage,
		ftpAccounts,
		sqlUsage,
		emailAccounts,
		bandwidth,
		alias,
		mailingList,
		autoResponders,
		forwards,
		emailFilters,
		sqlDatabases,
		cpuUsage,
		entryProcesses,
		physicalMemUsage,
		iOps,
		ioUsage,
		processes,
	] = [
		"5/5 (100%)",
		"4.36 GB / 5.86 GB (74.15%)",
		"1/2 (50%)",
		"5 GB / 1.66 GB (8.51%)",
		"6 / 10 (60%)",
		"16.3 MB / 25 GB (0.1%)",
		"1 / 2 (0%)",
		"0 / 10",
		"0 / 10",
		"0 / 10",
		"0 / 10",
		"7 / 10",
		"20%",
		"0 / 20 (0%)",
		"0 bytes / 1 GB (0%)",
		"0 / 1024 (0%)",
		"0 / 100 (0%)",
		"0 / 100 (0%)",
	];
	return (
		<div className="w-[300px] h-max rounded-20 bg-white flex flex-col shadow-sm">
			<span className="text-[18px] font-medium text-black p-8 pb-0">
				Statistics
			</span>

			<div className="flex flex-col ">
				<div className="flex flex-col gap-[10px] border-b-2 border-b-gray p-8">
					<span className="font-bold text-[16px] text-gray leading-none">
						Sub Domains
					</span>
					<div className="text-[16px] text-gray ">{subDomains}</div>
				</div>

				<div className="flex flex-col gap-[10px] border-b-2 border-b-gray p-8">
					<span className="font-bold text-[16px] text-gray leading-none">
						Disk Usage
					</span>
					<div className="text-[16px] text-gray ">{diskUsage}</div>
				</div>

				<div className="flex flex-col gap-[10px] border-b-2 border-b-gray p-8">
					<span className="font-bold text-[16px] text-gray leading-none">
						FTP Accounts
					</span>
					<div className="text-[16px] text-gray ">{ftpAccounts}</div>
				</div>

				<div className="flex flex-col gap-[10px] border-b-2 border-b-gray p-8">
					<span className="font-bold text-[16px] text-gray leading-none">
						MySQL Disk Usage
					</span>
					<div className="text-[16px] text-gray ">{sqlUsage}</div>
				</div>

				<div className="flex flex-col gap-[10px] border-b-2 border-b-gray p-8">
					<span className="font-bold text-[16px] text-gray leading-none">
						Email Account
					</span>
					<div className="text-[16px] text-gray ">{emailAccounts}</div>
				</div>

				<div className="flex flex-col gap-[10px] border-b-2 border-b-gray p-8">
					<span className="font-bold text-[16px] text-gray leading-none">
						Bandwidth
					</span>
					<div className="text-[16px] text-gray ">{bandwidth}</div>
				</div>

				<div className="flex flex-col gap-[10px] border-b-2 border-b-gray p-8">
					<span className="font-bold text-[16px] text-gray leading-none">
						Alias Domains
					</span>
					<div className="text-[16px] text-gray ">{alias}</div>
				</div>

				<div className="flex flex-col gap-[10px] border-b-2 border-b-gray p-8">
					<span className="font-bold text-[16px] text-gray leading-none">
						Mailing List
					</span>
					<div className="text-[16px] text-gray ">{mailingList}</div>
				</div>

				<div className="flex flex-col gap-[10px] border-b-2 border-b-gray p-8">
					<span className="font-bold text-[16px] text-gray leading-none">
						Auto Responders
					</span>
					<div className="text-[16px] text-gray ">{autoResponders}</div>
				</div>

				<div className="flex flex-col gap-[10px] border-b-2 border-b-gray p-8">
					<span className="font-bold text-[16px] text-gray leading-none">
						Forwarders
					</span>
					<div className="text-[16px] text-gray ">{forwards}</div>
				</div>

				<div className="flex flex-col gap-[10px] border-b-2 border-b-gray p-8">
					<span className="font-bold text-[16px] text-gray leading-none">
						Email Filters
					</span>
					<div className="text-[16px] text-gray ">{emailFilters}</div>
				</div>

				<div className="flex flex-col gap-[10px] border-b-2 border-b-gray p-8">
					<span className="font-bold text-[16px] text-gray leading-none">
						MySQL Databases
					</span>
					<div className="text-[16px] text-gray ">{sqlDatabases}</div>
				</div>

				<div className="flex flex-col gap-[10px] border-b-2 border-b-gray p-8">
					<span className="font-bold text-[16px] text-gray leading-none">
						CPU Usage
					</span>
					<div className="text-[16px] text-gray ">{cpuUsage}</div>
				</div>

				<div className="flex flex-col gap-[10px] border-b-2 border-b-gray p-8">
					<span className="font-bold text-[16px] text-gray leading-none">
						Entry Processes
					</span>
					<div className="text-[16px] text-gray ">{entryProcesses}</div>
				</div>

				<div className="flex flex-col gap-[10px] border-b-2 border-b-gray p-8">
					<span className="font-bold text-[16px] text-gray leading-none">
						Physical Memory Usage
					</span>
					<div className="text-[16px] text-gray ">{physicalMemUsage}</div>
				</div>

				<div className="flex flex-col gap-[10px] border-b-2 border-b-gray p-8">
					<span className="font-bold text-[16px] text-gray leading-none">
						IOPS
					</span>
					<div className="text-[16px] text-gray ">{iOps}</div>
				</div>

				<div className="flex flex-col gap-[10px] border-b-2 border-b-gray p-8">
					<span className="font-bold text-[16px] text-gray leading-none">
						I/O Usage
					</span>
					<div className="text-[16px] text-gray ">{ioUsage}</div>
				</div>

				<div className="flex flex-col gap-[10px] border-b-2 border-b-gray p-8">
					<span className="font-bold text-[16px] text-gray leading-none">
						Number of Processes
					</span>
					<div className="text-[16px] text-gray ">{processes}</div>
				</div>
			</div>
=======
	return (
		<div className="w-[300px] rounded-20 p-8 bg-white flex flex-col gap-[40px] shadow-sm">
			<span className="text-[18px] font-medium text-black">Statistics</span>
			{Array.from({ length: sidebarSkeletons }, (_, index) => (
				<div key={index} className="grid gap-5">
					<Skeleton className="h-7 w-[100px]" />
					<Skeleton className="h-7 w-full" />
				</div>
			))}
>>>>>>> a2ddff61c6810b033268c5b5b317f238c9b4c1a4
		</div>
	);
};

export default Statistics;
