import Image from "next/image";
import React from "react";
import { Skeleton } from "../ui/skeleton";

const Navbar = () => {
	return (
		<div className="bg-navbar-gray h-[70px] w-full flex justify-between items-center p-[20px]">
			<Image
				width={100}
				height={100}
				alt="Desterhost admin panel"
				src="/d-panel-logo.svg"
			/>

			<div className="flex gap-10 items-center justify-center">
				<Skeleton className="h-10 w-[300px]" />
				<Skeleton className="h-10 w-10 rounded-full" />
				<Skeleton className="h-10 w-10 rounded-full" />
				<Skeleton className="h-[45px] w-[120px] rounded-md" />
			</div>
		</div>
	);
};

export default Navbar;
