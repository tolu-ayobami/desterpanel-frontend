import Dashboard from "@/components/loaders/Dashboard";
import Navbar from "@/components/loaders/Navbar";

export default function Home() {
	return (
		<main className="bg-dashboard h-screen w-screen">
			<Navbar />
			<Dashboard />
		</main>
	);
}
