import { memoryUsage } from "process";
import { Skeleton } from "../ui/skeleton";

const Statistics = () => {
	const sidebarSkeletons = 4;
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
<<<<<<< HEAD
		<div className="w-[100%] h-max rounded-20 bg-white flex flex-col shadow-sm">
=======
		<div className="w-[300px] h-max rounded-20 bg-white flex flex-col shadow-sm">
>>>>>>> 7e90dd404e8e54fb9fc93c49e2d270fbdc73f56c
			<span className="text-[18px] font-medium text-black p-8 pb-0">
				Statistics
			</span>

			<div className="flex flex-col ">
				<div className="flex flex-col gap-[10px] border-b-2 border-b-gray p-8">
<<<<<<< HEAD
					<span className="font-bold text-[14px] md:text-[16px] text-gray leading-none">
						Sub Domains
					</span>
					<div className="text-[14px] md:text-[16px] text-gray ">
						{subDomains}
					</div>
				</div>

				<div className="flex flex-col gap-[10px] border-b-2 border-b-gray p-8">
					<span className="font-bold text-[14px] md:text-[16px] text-gray leading-none">
=======
					<span className="font-bold text-[16px] text-gray leading-none">
						Sub Domains
					</span>
					<div className="text-[16px] text-gray ">{subDomains}</div>
				</div>

				<div className="flex flex-col gap-[10px] border-b-2 border-b-gray p-8">
					<span className="font-bold text-[16px] text-gray leading-none">
>>>>>>> 7e90dd404e8e54fb9fc93c49e2d270fbdc73f56c
						Disk Usage
					</span>
					<div className="text-[16px] text-gray ">{diskUsage}</div>
				</div>

				<div className="flex flex-col gap-[10px] border-b-2 border-b-gray p-8">
<<<<<<< HEAD
					<span className="font-bold text-[14px] md:text-[16px] text-gray leading-none">
=======
					<span className="font-bold text-[16px] text-gray leading-none">
>>>>>>> 7e90dd404e8e54fb9fc93c49e2d270fbdc73f56c
						FTP Accounts
					</span>
					<div className="text-[16px] text-gray ">{ftpAccounts}</div>
				</div>

				<div className="flex flex-col gap-[10px] border-b-2 border-b-gray p-8">
<<<<<<< HEAD
					<span className="font-bold text-[14px] md:text-[16px] text-gray leading-none">
=======
					<span className="font-bold text-[16px] text-gray leading-none">
>>>>>>> 7e90dd404e8e54fb9fc93c49e2d270fbdc73f56c
						MySQL Disk Usage
					</span>
					<div className="text-[16px] text-gray ">{sqlUsage}</div>
				</div>

				<div className="flex flex-col gap-[10px] border-b-2 border-b-gray p-8">
<<<<<<< HEAD
					<span className="font-bold text-[14px] md:text-[16px] text-gray leading-none">
=======
					<span className="font-bold text-[16px] text-gray leading-none">
>>>>>>> 7e90dd404e8e54fb9fc93c49e2d270fbdc73f56c
						Email Account
					</span>
					<div className="text-[16px] text-gray ">{emailAccounts}</div>
				</div>

				<div className="flex flex-col gap-[10px] border-b-2 border-b-gray p-8">
<<<<<<< HEAD
					<span className="font-bold text-[14px] md:text-[16px] text-gray leading-none">
=======
					<span className="font-bold text-[16px] text-gray leading-none">
>>>>>>> 7e90dd404e8e54fb9fc93c49e2d270fbdc73f56c
						Bandwidth
					</span>
					<div className="text-[16px] text-gray ">{bandwidth}</div>
				</div>

				<div className="flex flex-col gap-[10px] border-b-2 border-b-gray p-8">
<<<<<<< HEAD
					<span className="font-bold text-[14px] md:text-[16px] text-gray leading-none">
=======
					<span className="font-bold text-[16px] text-gray leading-none">
>>>>>>> 7e90dd404e8e54fb9fc93c49e2d270fbdc73f56c
						Alias Domains
					</span>
					<div className="text-[16px] text-gray ">{alias}</div>
				</div>

				<div className="flex flex-col gap-[10px] border-b-2 border-b-gray p-8">
<<<<<<< HEAD
					<span className="font-bold text-[14px] md:text-[16px] text-gray leading-none">
=======
					<span className="font-bold text-[16px] text-gray leading-none">
>>>>>>> 7e90dd404e8e54fb9fc93c49e2d270fbdc73f56c
						Mailing List
					</span>
					<div className="text-[16px] text-gray ">{mailingList}</div>
				</div>

				<div className="flex flex-col gap-[10px] border-b-2 border-b-gray p-8">
<<<<<<< HEAD
					<span className="font-bold text-[14px] md:text-[16px] text-gray leading-none">
=======
					<span className="font-bold text-[16px] text-gray leading-none">
>>>>>>> 7e90dd404e8e54fb9fc93c49e2d270fbdc73f56c
						Auto Responders
					</span>
					<div className="text-[16px] text-gray ">{autoResponders}</div>
				</div>

				<div className="flex flex-col gap-[10px] border-b-2 border-b-gray p-8">
<<<<<<< HEAD
					<span className="font-bold text-[14px] md:text-[16px] text-gray leading-none">
=======
					<span className="font-bold text-[16px] text-gray leading-none">
>>>>>>> 7e90dd404e8e54fb9fc93c49e2d270fbdc73f56c
						Forwarders
					</span>
					<div className="text-[16px] text-gray ">{forwards}</div>
				</div>

				<div className="flex flex-col gap-[10px] border-b-2 border-b-gray p-8">
<<<<<<< HEAD
					<span className="font-bold text-[14px] md:text-[16px] text-gray leading-none">
=======
					<span className="font-bold text-[16px] text-gray leading-none">
>>>>>>> 7e90dd404e8e54fb9fc93c49e2d270fbdc73f56c
						Email Filters
					</span>
					<div className="text-[16px] text-gray ">{emailFilters}</div>
				</div>

				<div className="flex flex-col gap-[10px] border-b-2 border-b-gray p-8">
<<<<<<< HEAD
					<span className="font-bold text-[14px] md:text-[16px] text-gray leading-none">
=======
					<span className="font-bold text-[16px] text-gray leading-none">
>>>>>>> 7e90dd404e8e54fb9fc93c49e2d270fbdc73f56c
						MySQL Databases
					</span>
					<div className="text-[16px] text-gray ">{sqlDatabases}</div>
				</div>

				<div className="flex flex-col gap-[10px] border-b-2 border-b-gray p-8">
<<<<<<< HEAD
					<span className="font-bold text-[14px] md:text-[16px] text-gray leading-none">
=======
					<span className="font-bold text-[16px] text-gray leading-none">
>>>>>>> 7e90dd404e8e54fb9fc93c49e2d270fbdc73f56c
						CPU Usage
					</span>
					<div className="text-[16px] text-gray ">{cpuUsage}</div>
				</div>

				<div className="flex flex-col gap-[10px] border-b-2 border-b-gray p-8">
<<<<<<< HEAD
					<span className="font-bold text-[14px] md:text-[16px] text-gray leading-none">
=======
					<span className="font-bold text-[16px] text-gray leading-none">
>>>>>>> 7e90dd404e8e54fb9fc93c49e2d270fbdc73f56c
						Entry Processes
					</span>
					<div className="text-[16px] text-gray ">{entryProcesses}</div>
				</div>

				<div className="flex flex-col gap-[10px] border-b-2 border-b-gray p-8">
<<<<<<< HEAD
					<span className="font-bold text-[14px] md:text-[16px] text-gray leading-none">
=======
					<span className="font-bold text-[16px] text-gray leading-none">
>>>>>>> 7e90dd404e8e54fb9fc93c49e2d270fbdc73f56c
						Physical Memory Usage
					</span>
					<div className="text-[16px] text-gray ">{physicalMemUsage}</div>
				</div>

				<div className="flex flex-col gap-[10px] border-b-2 border-b-gray p-8">
<<<<<<< HEAD
					<span className="font-bold text-[14px] md:text-[16px] text-gray leading-none">
=======
					<span className="font-bold text-[16px] text-gray leading-none">
>>>>>>> 7e90dd404e8e54fb9fc93c49e2d270fbdc73f56c
						IOPS
					</span>
					<div className="text-[16px] text-gray ">{iOps}</div>
				</div>

				<div className="flex flex-col gap-[10px] border-b-2 border-b-gray p-8">
<<<<<<< HEAD
					<span className="font-bold text-[14px] md:text-[16px] text-gray leading-none">
=======
					<span className="font-bold text-[16px] text-gray leading-none">
>>>>>>> 7e90dd404e8e54fb9fc93c49e2d270fbdc73f56c
						I/O Usage
					</span>
					<div className="text-[16px] text-gray ">{ioUsage}</div>
				</div>

				<div className="flex flex-col gap-[10px] border-b-2 border-b-gray p-8">
<<<<<<< HEAD
					<span className="font-bold text-[14px] md:text-[16px] text-gray leading-none">
=======
					<span className="font-bold text-[16px] text-gray leading-none">
>>>>>>> 7e90dd404e8e54fb9fc93c49e2d270fbdc73f56c
						Number of Processes
					</span>
					<div className="text-[16px] text-gray ">{processes}</div>
				</div>
			</div>
		</div>
	);
};

export default Statistics;
