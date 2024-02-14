<<<<<<< HEAD
import Image from "next/image";
import SelectBox from "../common/SelectBox";
import Link from "next/link";

const GeneralInfo = () => {
	const [
		currentUser,
		primaryDomain,
		sharedIpAddress,
		homeDirectory,
		lastIpAddress,
	] = [
		"Joloo",
		"jolomitee.com",
		"67.225.139.250",
		"/home/joloo",
		"197.211.58.54",
	];
	return (
		<div className="w-[300px] rounded-20 p-8 bg-white flex flex-col gap-[25px] h-max shadow-sm">
			<span className="text-[18px] font-medium text-black">
				General Information
			</span>

			<div className="flex flex-col gap-[40px]">
				<div className="flex flex-col gap-[10px]">
					<span className="font-bold text-[16px] text-gray leading-none">
						Current User
					</span>
					<div className="text-[18px] text-gray ">{currentUser}</div>
				</div>

				<div className="flex flex-col gap-[10px]">
					<span className="font-bold text-[16px] text-gray leading-none">
						Primary Domain
					</span>
					<div className="text-[18px] text-primary-blue flex gap-2">
						<Image
							width={10}
							height={10}
							alt=""
							src="/home_panel_icons/domain-lock.svg"
						/>
						{primaryDomain}
					</div>
				</div>

				<div className="flex flex-col gap-[10px]">
					<span className="font-bold text-[16px] text-gray leading-none">
						Shared IP Address
					</span>
					<div className="text-[18px] text-gray ">{sharedIpAddress}</div>
				</div>

				<div className="flex flex-col gap-[10px]">
					<span className="font-bold text-[16px] text-gray leading-none">
						Home Directory
					</span>
					<div className="text-[18px] text-gray ">{homeDirectory}</div>
				</div>

				<div className="flex flex-col gap-[10px]">
					<span className="font-bold text-[16px] text-gray leading-none">
						Last IP Address
					</span>
					<div className="text-[18px] text-gray ">{lastIpAddress}</div>
				</div>
				<div className="flex flex-col gap-[10px]">
					<span className="font-bold text-[16px] text-gray leading-none">
						Theme
					</span>
					<SelectBox />
				</div>
				<Link href="/" className="flex justify-between gap-[10px]">
					<span className="text-[18px] text-primary-blue  hover:border-b hover:border-b-primary-blue">
						Server Information
					</span>
					<Image
						width={9}
						height={9}
						src="/home_panel_icons/right-caret.svg"
						alt=""
					/>
				</Link>
			</div>
=======
import { Skeleton } from "../ui/skeleton";

const GeneralInfo = () => {
	const sidebarSkeletons = 4;
	return (
		<div className="w-[300px] rounded-20 p-8 bg-white flex flex-col gap-[40px] shadow-sm">
			<span className="text-[18px] font-medium text-black">
				General Information
			</span>
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

export default GeneralInfo;
