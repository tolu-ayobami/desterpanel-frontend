import { review } from "@/lib/data/all";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";

const Alltool = () => {
	return (
		<div className="">
			<div className="w-[100%]">
				{Object.keys(review).map((category) => {
					const categories = review[category as keyof typeof review];
					return (
						<Accordion 
							type="single"
							key={category}
							collapsible
							className="shadow-md border-[1px] bg-white  mb-[20px]  rounded-[15px]"
							defaultValue={category}
						>
							<AccordionItem value={category} className="border-b-0">
								<AccordionTrigger className="text-blue-800 px-[15px] ">
									<div className="flex gap-[15px] align-center">
										<Image
											src={categories.logo}
											className="my-[auto]"
											alt={category}
											width={25}
											height={25}
										/>
										<p className="text-black text-[16px] md:text-[18px]">
											{category}
										</p>
									</div>
								</AccordionTrigger>

								<Separator className="w-[100%]" />

								<AccordionContent className="grid grid-cols-1 sm:grid-cols-2 gap-[30px] p-[20px] w-[85%]">
									{categories.tools.map((tool, index) => {
										return (
											<Link href={tool.url} key={index}>
												<div
													className="flex align-center gap-[15px] "
													key={tool.id}
												>
													<Image
														src={tool.image}
														alt={tool.test}
														width={25}
														height={25}
													/>
													<p className="text-blue-800 font-bold my-[auto] text-[14px] md:text-[16px]">
														{tool.test}
													</p>
												</div>
											</Link>
										);
									})}
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					);
				})}
			</div>
		</div>
	);
};

export default Alltool;
