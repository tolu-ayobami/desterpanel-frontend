import NextBreadcrumb from "@/components/common/Breadcrumbs";
import { Input } from "@/components/ui/input";
import { Pagination } from "@/components/ui/pagination";
import Image from "next/image";
import Link from "next/link";

const page = () => {
	return (
		<main className="">
			<h1 className="text-[26px] font-bold w-full">Email Account</h1>
			<span className="py-3">List of Email accounts</span>

			<div className="flex justify-between items-center">
				<div className="flex flex-col gap-[50px] h-fit">
					<p className="flex">
						This feature lets you create and manage email accounts. Want to
						learn more? Read our{" "}
						<Link href="/" className="flex gap-2 text-primary">
							documentation{" "}
							<Image
								src="/email_account_icons/external-link.svg"
								width={14}
								height={14}
								alt=""
							/>
						</Link>
					</p>

					<div id="searchbox">
						<Input
							placeholder="Search"
							type="search"
							className="w-[400px] h-[41px] border border-accent-blue rounded-[14px] drop-shadow-search-box placeholder:text-grey placeholder:text-[16px]"
						/>
					</div>
				</div>

				<div id="email-use_pagination">
					<div className="flex bg-white w-fit py-3 px-4 rounded-[17px]">
						<div className="flex justify-center items-center gap-3 px-4 border-r border-black">
							<span className="font-bold text-[28px]">4</span>
							<span className="text-[18px]">Available</span>
						</div>
						<div className="flex justify-center items-center gap-3 px-4">
							<span className="font-bold text-[28px]">6</span>
							<span className="text-[18px]">Used</span>
						</div>
               </div>

               <div>
                  <Pagination />
               </div>
				</div>
			</div>
		</main>
	);
};

export default page;
