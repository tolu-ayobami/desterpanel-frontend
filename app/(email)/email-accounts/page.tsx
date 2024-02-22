import NextBreadcrumb from "@/components/common/Breadcrumbs";

const page = () => {
	return (
		<main className="">
			<h1 className="text-[26px] font-bold w-full mb-[10px] lg:mb-[20px]">
				Email Account
			</h1>
				<NextBreadcrumb
					homeElement={"Home"}
					separator={<span> &gt; </span>}
					activeClasses="text-primary-blue"
					containerClasses="flex py-5"
					listClasses="hover:underline mx-2"
					capitalizeLinks
				/>
		</main>
	);
};

export default page;
