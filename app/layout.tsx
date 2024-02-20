import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Sidebar from "@/components/common/Sidebar";

const poppins = Poppins({
	subsets: ["latin"],
	variable: "--font-poppins",
	weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
	title: {
		template: "%s | dPanel",
		default: "Desterhost Admin Panel", // default
	},
	description: "Desterhost Admin Panel",
	icons: {
		icon: [
			{ url: "/favicon.png" },
			{ url: "/favicon.png", media: "(prefers-color-scheme: dark)" },
		],
		shortcut: ["/favicon.png.png"],
		apple: [
			{ url: "/apple-touch-icon.png" },
			{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
		],
		other: [
			{
				rel: "icon",
				url: "/favicon-16x16.png",
				sizes: "16x16",
				type: "image/png",
			},
			{
				rel: "icon",
				url: "/android-chrome-32x32.png",
				sizes: "32x32",
				type: "image/png",
			},
			{
				rel: "icon",
				url: "/android-chrome-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				rel: "icon",
				url: "/android-chrome-512x512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
	},
	manifest: "/site.webmanifest",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${poppins.variable} bg-dashboard font-poppins overflow-x-hidden`}
			>
				<Navbar />
				<div className="grid grid-flow-col ">
					<Sidebar />
					<section className="lg:ml-[279px] grid">
						{children}
						<Footer />
					</section>
				</div>
			</body>
		</html>
	);
}
