import React from "react";
import { Skeleton } from "../ui/skeleton";

const dashboard = () => {
	return (
		<div className="grid">
         <div className="flex gap-[0px]">
            <div id="sidebar"></div>
            <div id="mainDash" className="flex justify-between p-[60px]">
               <div>
                  <Skeleton className="h-[60px] w-[260px]" />
                  <Skeleton className="h-[60px] w-[260px]" />
                  <Skeleton className="h-[60px] w-[260px]" />
               </div>
               <div>
                  <div>
                     <Skeleton className="h-10 w-10" />
                     <Skeleton className="h-16 w-[100px]" />
                  </div>
                  <div>
                     <Skeleton className="h-10 w-10" />
                     <Skeleton className="h-16 w-[100px]" />
                  </div>
                  <div>
                     <Skeleton className="h-10 w-10" />
                     <Skeleton className="h-16 w-[100px]" />
                  </div>
               </div>
            </div>
         </div>
		</div>
	);
};

export default dashboard;
