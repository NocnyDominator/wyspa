import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Script from "next/script";

const outfit = Outfit({
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "WYSPA.GG",
    description: "najlepszy serwis",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="pl" className="h-full antialiased">
        <body
            className={`min-h-full flex flex-col ${outfit.className}`}
            style={{ backgroundImage: "url('/bg.png')", backgroundRepeat: "repeat" }}
        >
        <Script src="https://vishop.pl/pay.js" strategy="afterInteractive" />

        <div className="w-full bg-gradient-to-r from-[#008200] to-[#00aa00] text-white py-2.5 px-4 flex items-center justify-center gap-3 shadow-md z-50 relative shrink-0">
                    <span className="font-medium text-[14px] tracking-wide">
                        Trwa wielka letnia wyprzedaż! Odbierz zniżkę <span className="font-bold">-20%</span> na cały asortyment z kodem: <span className="bg-white/20 px-2 py-0.5 rounded-md font-bold ml-1">CHUNKY20</span>
                    </span>
        </div>

        <Navbar />

        <main className="flex-1 flex flex-col min-w-0 px-4 sm:px-6 max-w-[1600px] mx-auto w-full pt-8 pb-12">
            <div className="w-full flex-1">
                {children}
            </div>
        </main>

        <Footer />
        </body>
        </html>
    );
}
