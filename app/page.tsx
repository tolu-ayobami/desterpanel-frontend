  
import Email from "./tools/Email";
import File from "./tools/File";
import Seo from "./tools/seo";
import Database from "./tools/database";
import Domain from "./tools/domain";
import Metric from "./tools/metrics";
import Security from "./tools/security";
import Software from "./tools/software";
import Advanced from "./tools/advanced";
import Preference from "./tools/preference";
import Softaculous from "./tools/softaculous";
import Backup from "./tools/backup";
import "./globals.css"

import { Separator } from "@/components/ui/separator"


import Link from "next/link";
import Image from "next/image";


export default function Home() {
	return (
		<main className="">

	  <div className="mt-[130px]">
	  <Email />
	  <File />
	  <Seo />
	  <Database />
	  <Domain />
	  <Metric />
	  <Security />
	  <Software />
	  <Advanced />
	  <Preference />
	  <Softaculous/>
	  <Backup />
	
	  </div>

	  
		</main>
	);
}
