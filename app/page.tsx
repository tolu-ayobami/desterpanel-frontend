import Alltool from "./tools/alltools";
import Softaculous from "./tools/softaculous";
import Backup from "./tools/backup";

export default function Home() {
	return (
		<main className="mt-[130px]">
			<Alltool />
			<Softaculous />
			<Backup />
		</main>
	);
}
