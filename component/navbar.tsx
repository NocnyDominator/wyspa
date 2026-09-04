"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

const navLinks = [
    { label: "Strona główna", href: "/", icon: "/3d.png", match: "/" },
    { label: "Sklep", href: "/#wybierz-tryb", icon: "/3d.png", match: "/sklep" }
];

const socialLinks = [
    { href: "https://discord.gg/", icon: "/social/discord_icon_bg.png", alt: "Discord" },
    { href: "https://tiktok.com/", icon: "/social/tiktok_icon_bg.png", alt: "TikTok" },
    { href: "https://youtube.com/", icon: "/social/youtube_icon_bg.png", alt: "YouTube" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    const toggleMenu = useCallback(() => {
        setMobileOpen((prev) => !prev);
    }, []);

    return (
        <header className="top-0 z-40 w-full flex justify-center px-6">
            <div className="w-full max-w-[1480px] h-[88px] relative flex items-center justify-between">

                <nav className="hidden md:flex items-center gap-8 flex-1">
                    {navLinks.map((link) => {
                        const isActive = link.match === "/" ? pathname === "/" : pathname.startsWith(link.match);

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`flex items-center gap-2.5 font-bold text-[15px] transition-all hover:-translate-y-0.5 ${isActive
                                    ? "text-[#009900]"
                                    : "text-[#1a1a1a] hover:text-[#009900]"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center">
                    <Link href="/" className="">
                        <Image
                            src="/logo_main.png"
                            alt="Logo"
                            width={160}
                            height={160}
                            className="object-contain"
                            unoptimized
                        />
                    </Link>
                </div>

                <div className="flex items-center justify-end gap-6 flex-1">

                    <div className="hidden lg:flex items-center gap-2.5">
                        {socialLinks.map((social) => (
                            <Link
                                key={social.alt}
                                href={social.href}
                                className="hover:-translate-y-1 transition-transform"
                            >
                                <Image
                                    src={social.icon}
                                    alt={social.alt}
                                    width={38}
                                    height={38}
                                    unoptimized
                                />
                            </Link>
                        ))}
                    </div>


                    <button
                        onClick={toggleMenu}
                        className="md:hidden relative z-50 flex flex-col justify-center items-center w-10 h-10 gap-[5px] group"
                        aria-label={mobileOpen ? "Zamknij menu" : "Otwórz menu"}
                        aria-expanded={mobileOpen}
                    >
                        <span
                            className={`block w-6 h-[2.5px] bg-[#1a1a1a] rounded-full transition-all duration-300 ease-in-out origin-center ${mobileOpen ? "rotate-45 translate-y-[7.5px]" : ""
                                }`}
                        />
                        <span
                            className={`block w-6 h-[2.5px] bg-[#1a1a1a] rounded-full transition-all duration-300 ease-in-out ${mobileOpen ? "opacity-0 scale-x-0" : "opacity-100"
                                }`}
                        />
                        <span
                            className={`block w-6 h-[2.5px] bg-[#1a1a1a] rounded-full transition-all duration-300 ease-in-out origin-center ${mobileOpen ? "-rotate-45 -translate-y-[7.5px]" : ""
                                }`}
                        />
                    </button>

                </div>
            </div>


            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-30 transition-opacity duration-300 md:hidden ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setMobileOpen(false)}
                aria-hidden="true"
            />


            <div
                className={`fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-xl md:hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-full opacity-0"
                    }`}
            >
                <div className="pt-24 pb-8 px-6">
                    <nav className="flex flex-col gap-1">
                        {navLinks.map((link, index) => {
                            const isActive = link.match === "/" ? pathname === "/" : pathname.startsWith(link.match);

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl font-bold text-[16px] transition-all duration-200 ${isActive
                                        ? "bg-[#009900]/10 text-[#009900]"
                                        : "text-[#1a1a1a] hover:bg-[#f5f5f5] active:bg-[#eee]"
                                        }`}
                                    style={{
                                        transitionDelay: mobileOpen ? `${index * 50 + 100}ms` : "0ms",
                                        opacity: mobileOpen ? 1 : 0,
                                        transform: mobileOpen ? "translateX(0)" : "translateX(-12px)",
                                    }}
                                >
                                    <Image
                                        src={link.icon}
                                        alt=""
                                        width={24}
                                        height={24}
                                        unoptimized
                                        className="flex-shrink-0"
                                    />
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="mt-6 pt-6 border-t border-[#e5e5e5]">
                        <div
                            className="flex items-center justify-center gap-4"
                            style={{
                                transitionDelay: mobileOpen ? `${navLinks.length * 50 + 150}ms` : "0ms",
                                opacity: mobileOpen ? 1 : 0,
                                transform: mobileOpen ? "translateY(0)" : "translateY(8px)",
                                transition: "opacity 300ms ease, transform 300ms ease",
                            }}
                        >
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.alt}
                                    href={social.href}
                                    className="hover:scale-110 active:scale-95 transition-transform"
                                >
                                    <Image
                                        src={social.icon}
                                        alt={social.alt}
                                        width={42}
                                        height={42}
                                        unoptimized
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}