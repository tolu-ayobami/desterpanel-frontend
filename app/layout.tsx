import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
<<<<<<< HEAD
import Header from "./component/header";
import Footer from "./component/footer";
=======
import Sidebar from "@/components/common/Sidebar";
import Navbar from "@/components/common/Navbar";
>>>>>>> a2ddff61c6810b033268c5b5b317f238c9b4c1a4

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

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
<<<<<<< HEAD
			<body className={`${inter.variable} bg-dashboard font-inter`}>
				<Header />
				{children}
				<Footer />
=======
			<body className={inter.className}>
				<Navbar />
				<div className="flex font-inter">
					<Sidebar />
					{children}
				</div>
>>>>>>> a2ddff61c6810b033268c5b5b317f238c9b4c1a4
			</body>
		</html>
	);
}
