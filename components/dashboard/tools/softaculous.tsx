import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

import "@/app/globals.css";

import { scripts, categories } from "@/lib/data/softaculousdata";

import Link from "next/link";
import Image from "next/image";

const Softaculous = () => {
	return (
		<div className="">
			<div className="w-[100%] m-[auto] ">
				<Accordion
					type="single"
					collapsible
					className="shadow-md border-[1px] bg-white mb-[20px]  rounded-[15px]"
				>
					<AccordionItem value="item-1" className="border-b-0">
						<AccordionTrigger className="text-blue-800 px-[10px] ">
							<div className="flex gap-[15px] align-center">
								<Image
									src="../home_panel_icons/softaculous_app_icons/softaculous-apps-installer.svg"
									className="my-[auto]"
									alt="image"
									width={25}
									height={25}
								/>
								<p className="text-black text-[16px] lg:text-[18px] my-[auto]">
									Softaculous Apps Installer
								</p>
							</div>
						</AccordionTrigger>

						<AccordionContent className="w-[100%]">
							<div className="flex flex-col gap-[10px]">
								<p className="p-[6px] bg-gray-200 font-bold">Scripts:</p>
								<div className="flex justify-between align-center px-[10px] overflow-x-scroll w-[100%] gap-[50px] pb-3 ">
									{scripts.map((rev) => {
										return (
											<Link href={rev.url} key={rev.id}>
												<div className="flex flex-col align-center items-center gap-[10px] ">
													<Image
														src={rev.image}
														alt={rev.test}
														width={25}
														height={25}
													/>
													<p className="text-blue-800 font-bold text-center text-[14px] my-[auto]">
														{rev.test}
													</p>
												</div>
											</Link>
										);
									})}
								</div>
							</div>
						</AccordionContent>

						<AccordionContent className="w-[100%]">
							<div className="flex flex-col gap-[10px]">
								<p className="p-[6px] bg-gray-200 font-bold">Categories:</p>
								<div className="flex justify-between align-center px-[10px] overflow-x-scroll w-[100%] gap-[50px] pb-3 ">
									{categories.map((rev) => {
										return (
											<Link href={rev.url} key={rev.id}>
												<div className="flex flex-col align-center items-center gap-[10px] ">
													<Image
														src={rev.image}
														alt={rev.test}
														width={25}
														height={25}
													/>
													<p className="text-blue-800 font-bold text-center text-[14px] my-[auto]">
														{rev.test}
													</p>
												</div>
											</Link>
										);
									})}
								</div>
							</div>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
};

export default Softaculous;
