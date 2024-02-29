import React from "react";
import { Button } from "../ui/button";
import { Icon } from "@radix-ui/react-select";
import Image from "next/image";

const ListofEmailAccounts = () => {
	return (
		<div>
			{/* action buttons */}
			<div className="flex justify-between mb-3">
				<div className="flex gap-5">
					<Button variant={"ghost"} size={"sm"}>
						0
					</Button>
					<Button variant={"outline"} size={"sm"}>
						delete
					</Button>
				</div>

				<div className="flex gap-5">
					<Button variant={"outline"} size={"sm"}>
						0
					</Button>
					<Button variant={"secondary"} size={"sm"}>
						delete
					</Button>
				</div>
			</div>

			{/* table */}
			<div>
				{/* header */}
				<div className="flex border-t-2 border-b-2 border-black py-3 gap-[72px] ps-[75px]">
					<div className="flex gap-1 items-center">
						<span className="text-light-blue">Account</span>@
						<span className="text-light-blue">Domain</span>
               </div>

               <div className="flex gap-[55px]">
                  <div>
                     <span className="text-light-blue">Restrictions</span>
                  </div>

                  <div className="flex gap-1 items-center">
                     Storage:
                     <span className="text-light-blue">Used</span>/
                     <span className="text-light-blue">Allocated</span>/
                     <span className="text-light-blue">%</span>
                  </div>
               </div>

				</div>

				{/* body */}
				<div className="flex gap-[30px] items-center py-3">
					<div className="flex justify-between items-center gap-6">
						<input type="checkbox" name="check" id="" />

						<Image
							src="/email_account_icons/chevron-right.svg"
							width={10}
							height={10}
							alt=""
							className="w-[10px] h-[10px]"
						/>
					</div>

					<span>adekunle@adesther.com.ng</span>

					<div className="flex gap-2 justify-center items-center">
						<Image
							src="/email_account_icons/green-tick.svg"
							width={10}
							height={10}
							alt=""
						/>
						<span>Unrestricted</span>
					</div>

					<div className="flex gap-1 justify-center items-center">
						<span>183.45 KB</span>/<span>1 GB</span>/<span>0.02%</span>
					</div>

					<div className="flex gap-4 justify-end">
						<Button type="button" size="default" variant="emailAccountBtn">
							<Image
								src="/email_account_icons/external-link.svg"
								width={10}
								height={10}
								alt=""
							/>
							Check Email
						</Button>
						<Button type="button" size="default" variant="emailAccountBtn">
							<Image
								src="/email_account_icons/manage.svg"
								width={10}
								height={10}
								alt=""
							/>
							Manage
						</Button>
						<Button type="button" size="default" variant="emailAccountBtn">
							<Image
								src="/email_account_icons/connect-devices.svg"
								width={10}
								height={10}
								alt=""
							/>
							Connect Devices
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ListofEmailAccounts;
