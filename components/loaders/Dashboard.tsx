import React from "react";
import { Skeleton } from "../ui/skeleton";
import Sidebar from "../common/Sidebar";

const dashboard = () => {
	const sidebarSkeletons = 4;
	const toolSkeletons = 2;
	const tools = 4;
	return (
		<div className="grid">
			<div className="flex gap-[0px]">
				<Sidebar/>

				<div id="mainDash" className="p-[50px]">
					<h1 className="text-[30px] font-bold mb-5">Tools</h1>

					<div className="flex justify-between w-[100%] gap-[50px]">
						<div className="grid gap-[50px] min-w-[550px]">
							{Array.from({ length: toolSkeletons }, (_, index) => (
								<div key={index} className="grid gap-[40px]">
									<div className="h-fit rounded-20 bg-white">
										{/* Header */}
										<div className="flex gap-[20px] w-full border-b border-b-white p-5">
											<Skeleton className="rounded-md h-10 w-10" />
											<Skeleton className="h-10 w-[120px]" />
										</div>
										{/* Links */}
										<div className="p-5 grid grid-cols-2 gap-10 justify-center items-center">
											{Array.from({ length: tools }, (_, index) => (
												<div key={index} className="flex gap-[20px]">
													<Skeleton className="rounded-md h-10 w-10" />
													<Skeleton className="h-10 w-[120px]" />
												</div>
											))}
										</div>
									</div>
								</div>
							))}
						</div>

						<div className="w-[300px] rounded-20 p-8 bg-white flex flex-col gap-[40px] shadow-sm">
							{Array.from({ length: sidebarSkeletons }, (_, index) => (
								<div key={index} className="grid gap-5">
									<Skeleton className="h-10 w-[100px]" />
									<Skeleton className="h-10 w-full" />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default dashboard;
