import React from "react";
import Image from "next/image";

const Sidebar = () => {
	return (
		<div
			id="sidebar"
			className="w-[279px] flex flex-col justify-between items-start bg-primary-blue max-h-[700px] p-[30px]"
		>
			<div>
				<span className="text-white text-[18px] font-bold">Account</span>
				<div className="grid gap-3 mt-5">
					<div className="flex items-center gap-[20px]">
						<div className="bg-white flex justify-center items-center p-2 rounded-full">
							<Image
								width={20}
								height={20}
								alt=""
								src="/home_panel_icons/tools.svg"
							/>
						</div>
						<span className="text-white leading-[126%]">Tools</span>
					</div>
					<div className="flex items-center gap-[20px]">
						<div className="bg-white flex justify-center items-center p-2 rounded-full">
							<Image
								width={20}
								height={20}
								alt=""
								src="/home_panel_icons/wordpress-manager.svg"
							/>
						</div>
						<span className="text-white leading-[126%]">Wordpress Manager</span>
					</div>
				</div>
			</div>

			<div className="grid gap-[20px]">
				<div className="flex gap-5 items-center">
					<Image
						width={20}
						height={20}
						alt=""
						src="/home_panel_icons/support.svg"
					/>
					<span className="text-white font-bold">Support</span>
				</div>
				<div className="flex gap-5 items-center">
					<Image
						width={20}
						height={20}
						alt=""
						src="/home_panel_icons/log-out.svg"
					/>
					<span className="text-white font-bold">Logout</span>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
