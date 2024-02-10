import { Skeleton } from "../ui/skeleton";

const Statistics = () => {
	const sidebarSkeletons = 4;
	return (
		<div className="w-[300px] rounded-20 p-8 bg-white flex flex-col gap-[40px] shadow-sm">
			<span className="text-[18px] font-medium text-black">Statistics</span>
			{Array.from({ length: sidebarSkeletons }, (_, index) => (
				<div key={index} className="grid gap-5">
					<Skeleton className="h-7 w-[100px]" />
					<Skeleton className="h-7 w-full" />
				</div>
			))}
		</div>
	);
};

export default Statistics;
