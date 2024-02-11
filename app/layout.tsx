import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/header"
import Footer from "./component/footer"

const inter = Inter({ subsets: ["latin"] });

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

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
		<head>
			<link rel="icon" href="/favicon.ico" />
		</head>
      <body className={inter.className}>
		<Header />
		
		{children}

		<Footer/>
		</body>
    </html>
  );
}
