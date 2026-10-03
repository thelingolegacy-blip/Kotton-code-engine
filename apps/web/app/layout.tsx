import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Kotton's Code Studio OS", description: "Governed production command center for Kotton's Code." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
