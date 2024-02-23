import ListofEmailAccounts from "@/components/email_accounts/ListofEmailAccounts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";

import Image from "next/image";
import Link from "next/link";

const page = () => {
	return (
		<main className="">
			<h1 className="text-[26px] font-bold w-full">Email Account</h1>
			<span className="py-3 text-grey lg:text-[14px]">
				List of Email accounts
			</span>

			<div className="flex flex-col sm:flex-row gap-5 lg:gap-0 justify-between items-center mt-5">
				<p className="lg:text-[14px]">
					This feature lets you create and manage email accounts. Want to learn
					more? Read our &nbsp;
					<Link href="/" className="inline-flex gap-2 text-primary">
						documentation
						<Image
							src="/email_account_icons/external-link.svg"
							width={14}
							height={14}
							alt=""
						/>
					</Link>
				</p>

				<div
					id="email-usage-stat"
					className="flex bg-white w-full md:w-fit py-3 px-4 rounded-md md:rounded-lg"
				>
					<div className="flex justify-center items-center gap-3 px-4 border-r border-black w-1/2">
						<span className="font-bold text-[28px] leading-none">4</span>
						<span className="text-[14px]">Available</span>
					</div>
					<div className="flex justify-center items-center gap-3 px-4 w-1/2">
						<span className="font-bold text-[28px] leading-none">6</span>
						<span className="text-[14px]">Used</span>
					</div>
				</div>
			</div>

			<div className="mt-5 flex flex-col gap-[20px] md:flex-row flex-wrap md:justify-between">
				<div id="searchbox_and_filters">
					<Input
						placeholder="Search"
						type="search"
						className="sm:w-[400px] h-[41px] border border-accent-blue rounded-[14px] drop-shadow-search-box placeholder:text-grey placeholder:text-[16px]"
					/>

					<div className="email-filters mt-3">
						<span className="font-bold text-[16px]">Filter:</span>

						<div className="btn_group mt-3 flex flex-wrap gap-3">
							<Button type="button" size="default" variant="activeFilterBtn">
								All
							</Button>
							<Button type="button" size="default" variant="ghostFilterBtn">
								Restricted
							</Button>
							<Button type="button" size="default" variant="ghostFilterBtn">
								System Account
							</Button>
							<Button type="button" size="default" variant="ghostFilterBtn">
								Exceeded Storage
							</Button>
						</div>
					</div>
				</div>

				<div id="pagination" className="grid gap-[3px] h-fit">
					<Pagination className="me-0 w-fit">
						<PaginationContent>
							<PaginationItem>
								<PaginationPrevious href="#" />
							</PaginationItem>

							<PaginationItem>
								<PaginationLink href="#">1</PaginationLink>
							</PaginationItem>

							<PaginationItem>
								<PaginationLink href="#">2</PaginationLink>
							</PaginationItem>

							<PaginationItem>
								<PaginationLink href="#">3</PaginationLink>
							</PaginationItem>

							<PaginationItem>
								<PaginationEllipsis />
							</PaginationItem>

							<PaginationItem>
								<PaginationNext href="#" />
							</PaginationItem>
						</PaginationContent>
					</Pagination>

					<div className="text-end px-[6px] text-grey">
						<span>1</span>&nbsp; out of &nbsp;<span>2</span>
					</div>
            </div>

            <div id="email-account-table" className="w-full">
               <ListofEmailAccounts />
            </div>
			</div>

		</main>
	);
};

export default page;
