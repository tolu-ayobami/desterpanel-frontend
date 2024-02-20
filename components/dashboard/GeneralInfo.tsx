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
<<<<<<< HEAD
		<div className="w-[100%] rounded-20 p-8 bg-white flex flex-col gap-[25px] h-max shadow-sm">
=======
		<div className="w-[300px] rounded-20 p-8 bg-white flex flex-col gap-[25px] h-max shadow-sm">
>>>>>>> 7e90dd404e8e54fb9fc93c49e2d270fbdc73f56c
			<span className="text-[18px] font-medium text-black">
				General Information
			</span>

			<div className="flex flex-col gap-[40px]">
				<div className="flex flex-col gap-[10px]">
<<<<<<< HEAD
					<span className="font-bold text-[14px] md:text-[16px] text-gray leading-none">
=======
					<span className="font-bold text-[16px] text-gray leading-none">
>>>>>>> 7e90dd404e8e54fb9fc93c49e2d270fbdc73f56c
						Current User
					</span>
					<div className="text-[18px] text-gray ">{currentUser}</div>
				</div>

				<div className="flex flex-col gap-[10px]">
<<<<<<< HEAD
					<span className="font-bold text-[14px] md:text-[16px] text-gray leading-none">
=======
					<span className="font-bold text-[16px] text-gray leading-none">
>>>>>>> 7e90dd404e8e54fb9fc93c49e2d270fbdc73f56c
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
<<<<<<< HEAD
					<span className="font-bold text-[14px] md:text-[16px] text-gray leading-none">
=======
					<span className="font-bold text-[16px] text-gray leading-none">
>>>>>>> 7e90dd404e8e54fb9fc93c49e2d270fbdc73f56c
						Shared IP Address
					</span>
					<div className="text-[18px] text-gray ">{sharedIpAddress}</div>
				</div>

				<div className="flex flex-col gap-[10px]">
<<<<<<< HEAD
					<span className="font-bold text-[14px] md:text-[16px] text-gray leading-none">
=======
					<span className="font-bold text-[16px] text-gray leading-none">
>>>>>>> 7e90dd404e8e54fb9fc93c49e2d270fbdc73f56c
						Home Directory
					</span>
					<div className="text-[18px] text-gray ">{homeDirectory}</div>
				</div>

				<div className="flex flex-col gap-[10px]">
<<<<<<< HEAD
					<span className="font-bold text-[14px] md:text-[16px] text-gray leading-none">
=======
					<span className="font-bold text-[16px] text-gray leading-none">
>>>>>>> 7e90dd404e8e54fb9fc93c49e2d270fbdc73f56c
						Last IP Address
					</span>
					<div className="text-[18px] text-gray ">{lastIpAddress}</div>
				</div>
				<div className="flex flex-col gap-[10px]">
<<<<<<< HEAD
					<span className="font-bold text-[14px] md:text-[16px] text-gray leading-none">
=======
					<span className="font-bold text-[16px] text-gray leading-none">
>>>>>>> 7e90dd404e8e54fb9fc93c49e2d270fbdc73f56c
						Theme
					</span>
					<SelectBox />
				</div>
				<Link href="/" className="flex justify-between gap-[10px]">
<<<<<<< HEAD
					<span className=" text-[16px] text-primary-blue  hover:border-b hover:border-b-primary-blue">
=======
					<span className="text-[18px] text-primary-blue  hover:border-b hover:border-b-primary-blue">
>>>>>>> 7e90dd404e8e54fb9fc93c49e2d270fbdc73f56c
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
		</div>
	);
};

export default GeneralInfo;
