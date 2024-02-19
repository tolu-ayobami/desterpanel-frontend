import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

import "../globals.css";

import { Separator } from "@/components/ui/separator";

import review from "../datas/backupdata";

import Link from "next/link";
import Image from "next/image";

const Backup = () => {
	return (
		<div className="">
			<div className="w-[100%]">
				<Accordion
					type="single"
					collapsible
					className="shadow-md border-[1px] bg-white mb-[20px]  rounded-[15px]"
				>
					<AccordionItem value="item-1" className="border-b-0">
						<AccordionTrigger className="text-blue-800 px-[10px] ">
							<div className="flex gap-[15px] align-center">
								<Image
									src="../home_panel_icons/backup_admin_icons/backup-administration.svg"
									className="my-[auto]"
									alt="image"
									width={25}
									height={25}
								/>
								<p className="text-black text-[16px] md:text-[18px]">Backup Administration</p>
							</div>
						</AccordionTrigger>

						<Separator className="w-[100%]" />

						<AccordionContent className="grid grid-cols-2 max-md:grid-cols-1 gap-[30px] px-[10px] mt-[20px] w-[85%] ">
							{review.map((rev, index) => {
								return (
									<Link href={rev.url} key={index}>
										<div
											className="flex  align-center gap-[15px] "
											key={rev.id}
										>
											<Image
												src={rev.image}
												alt={rev.test}
												width={25}
												height={25}
											/>
											<p className="text-blue-800 text-[14px] md:text-[16px] font-bold my-[auto]">
												{rev.test}
											</p>
										</div>
									</Link>
								);
							})}
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
};

export default Backup;
