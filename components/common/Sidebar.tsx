"use client";

import React from "react";
import Image from "next/image";

const Sidebar = () => {
	return (
		<div
			id="sidebar"
			className="hidden lg:flex fixed h-screen w-[279px] flex-col justify-between items-start bg-primary-blue p-[24px] pt-[80px] md:pt-[120px]"
		>
			<div>
				<span className="text-white text-[18px] font-bold uppercase">
					Account
				</span>
				<div className="grid gap-[13px] mt-5">
					<div className="flex items-center gap-[16px]">
						<div className="bg-white flex justify-center items-center p-2 rounded-full">
							<Image
								width={24}
								height={24}
								alt=""
								src="/home_panel_icons/tools.svg"
							/>
						</div>
						<span className="text-white text-[18px] leading-[126%]">Tools</span>
					</div>
					<div className="flex items-center gap-[16px]">
						<div className="bg-white flex justify-center items-center p-2 rounded-full">
							<Image
								width={24}
								height={24}
								alt=""
								src="/home_panel_icons/wordpress-manager.svg"
							/>
						</div>
						<span className="text-white text-[18px] leading-[126%]">
							Wordpress Manager
						</span>
					</div>
				</div>

				<div className="text-white text-[16px] mt-5">by Desterhost</div>
			</div>

			<div className="grid gap-[20px]">
				<div className="flex gap-5 items-center">
					<Image
						width={20}
						height={20}
						alt=""
						src="/home_panel_icons/support.svg"
					/>
					<span className="text-white text-[16px]">Support</span>
				</div>
				<div className="flex gap-5 items-center">
					<Image
						width={20}
						height={20}
						alt=""
						src="/home_panel_icons/log-out.svg"
					/>
					<span className="text-white text-[16px]">Logout</span>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
