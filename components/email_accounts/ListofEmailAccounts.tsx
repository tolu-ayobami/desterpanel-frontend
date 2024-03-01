import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const ListofEmailAccounts = () => {
	return (
		<div>
			{/* table */}
			<div className="">
				{/* header */}
				<div className="hidden lg:flex md:border-t-2 md:border-b-2 border-black py-3 lg:ps-[38px] p-3">
					<div className="flex gap-1 items-center text-[13px] lg:me-[75px]">
						<span className="text-light-blue">Account</span>@
						<span className="text-light-blue">Domain</span>
					</div>

					<div className="flex text-[13px]">
						<div className="lg:me-[70px]">
							<span className="text-light-blue">Restrictions</span>
						</div>

						<div className="flex gap-1 items-center">
							Storage:
							<span className="text-light-blue">Used</span>/
							<span className="text-light-blue">Allocated</span>/
							<span className="text-light-blue">%</span>
						</div>
					</div>

					<div className=""></div>
				</div>

				{/* body */}
				<div className="flex flex-wrap gap-2 md:gap-[10px] items-center p-1 py-3 overflow-hidden border-b border-b-grey md:border-0 lg:flex-nowrap">
					<div className="flex items-center w-full py-3 lg:py-0 lg:w-fit">
						{/* checkbox and chevron */}
						<div className="md:flex md:justify-between md:items-center md:gap-6 me-3 lg:me-0">
							<input
								type="checkbox"
								name="check"
								id=""
								className="hidden lg:block"
							/>

							<div>
								<Image
									src="/email_account_icons/chevron-right.svg"
									width={10}
									height={10}
									alt=""
									className="w-[12px] h-[12px] block lg:hidden"
								/>
							</div>
						</div>

						{/* domain name */}
						<div className="text-[12px] sm:text-[14px] lg:text-[13px] me-auto lg:me-0 w-[175px] overflow-hidden text-ellipsis">
							<span>adekunle@adesther.com.ng</span>
						</div>

						<Button
							asChild
							type="button"
							size="default"
							variant="emailAccountBtn"
							className="lg:hidden"
						>
							<Link href="/email-accounts/manage-account">
								<Image
									src="/email_account_icons/manage.svg"
									width={10}
									height={10}
									alt=""
								/>
								Manage
							</Link>
						</Button>
					</div>

					<div className="ps-10 flex flex-wrap sm:justify-between gap-3 w-full lg:ps-0 lg:flex-nowrap">
						<div className="flex flex-wrap justify-between sm:gap-[50px] gap-3 lg:flex-nowrap">
							<div className="w-full sm:w-fit">
								{/* restriction */}
								<span className="font-bold lg:hidden">Restrictions</span>
								<div className="flex gap-2 items-center text-[12px] sm:text-[14px] lg:text-[13px]">
									<Image
										src="/email_account_icons/green-tick.svg"
										width={10}
										height={10}
										alt=""
									/>
									<span>Unrestricted</span>
								</div>
							</div>

							<div className="w-full sm:w-fit text-[12px] sm:text-[14px]">
								{/* space allocation */}
								<div className="flex gap-1 items-center lg:hidden">
									<span className="font-bold">Storage:</span>
									<span className="text-light-blue">Used</span>/
									<span className="text-light-blue">Allocated</span>/
									<span className="text-light-blue">%</span>
								</div>
								<div className=" text-[12px] sm:text-[14px] lg:text-[13px] ">
									<span>183.45 KB</span>&nbsp;/&nbsp;<span>1 GB</span>
									&nbsp;/&nbsp;<span>0.02%</span>
								</div>
							</div>
						</div>

						{/* Buttons */}
						<div className="flex flex-wrap gap-x-4 gap-y-3 justify-start lg:justify-end">
							<Button type="button" size="default" variant="emailAccountBtn">
								<Image
									src="/email_account_icons/external-link.svg"
									width={12}
									height={12}
									alt=""
								/>
								Check Email
							</Button>

							<Button
								asChild
								type="button"
								size="default"
								variant="emailAccountBtn"
								className="hidden lg:flex"
							>
								<Link href="/email-accounts/manage-account">
									<Image
										src="/email_account_icons/manage.svg"
										width={10}
										height={10}
										alt=""
									/>
									Manage
								</Link>
							</Button>

							<Button type="button" size="default" variant="emailAccountBtn">
								<Image
									src="/email_account_icons/connect-devices.svg"
									width={10}
									height={10}
									alt=""
								/>
								<span className="hidden lg:block">Connect</span>
								Devices
							</Button>
							<Button type="button" size="default" variant="emailAccountBtn">
								<Image
									src="/email_account_icons/delete.svg"
									width={10}
									height={10}
									alt=""
								/>
								Delete
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ListofEmailAccounts;
