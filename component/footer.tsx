import Image from "next/image";
import Link from "next/link";

function DiscordTile() {
    return (
        <Link
            href="https://discord.com/invite/syjCfnEb3t"
            className="relative flex w-[380px] h-[190px] overflow-hidden rounded-[20px] bg-[#6C5CE7] p-6 shrink-0"
        >
            <div className="absolute top-4 right-4 text-white opacity-60 z-20">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                </svg>
            </div>

            <div className="relative z-10 flex flex-col justify-between w-full h-full text-white">
                <div className="flex flex-col gap-0.5">
                    <h3 className="text-[22px] font-black uppercase tracking-tight leading-none">
                        NASZ DISCORD
                    </h3>
                    <p className="text-[#D9D1FF] font-semibold text-[13px] tracking-tight">
                        POZNAJ GRACZY!
                    </p>
                </div>

                <div className="flex items-center gap-2 bg-black/10 px-3 py-1.5 rounded-full backdrop-blur-md w-fit z-20">
                    <div className="flex -space-x-2">
                        <Image src="/head/1.png" width={20} height={20} alt="A1" className="rounded-full border-[1.5px] border-[#8a7df0]" unoptimized />
                        <Image src="/head/2.png" width={20} height={20} alt="A2" className="rounded-full border-[1.5px] border-[#8a7df0]" unoptimized />
                        <Image src="/head/3.png" width={20} height={20} alt="A3" className="rounded-full border-[1.5px] border-[#8a7df0]" unoptimized />
                    </div>
                    <span className="font-bold text-[13px] leading-none mt-0.5">5000+</span>
                </div>
            </div>

            <div className="absolute -right-2 -bottom-6 w-[200px] h-[200px] pointer-events-none z-10">
                <Image
                    src="/rdiscord.png"
                    alt="Discord Pig"
                    fill
                    className="object-contain"
                    unoptimized
                />
            </div>
        </Link>
    );
}

export default function Footer() {
    return (
        <footer className="w-full relative overflow-hidden bg-[#111111] py-12 mt-auto shrink-0 border-t border-white/5">
            <div className="absolute inset-0 pointer-events-none">
                <Image
                    src="/texture.png"
                    alt="pattern"
                    fill
                    unoptimized
                    className="absolute inset-0 z-0 object-cover opacity-[0.12] [image-rendering:pixelated]"
                />
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#000000] to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-[1600px] mx-auto w-full px-6 flex flex-col lg:flex-row justify-between items-center gap-10">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-auto">
                    <h2 className="text-white text-[32px] font-black uppercase tracking-tight mb-1">
                        CHUNKY.PL
                    </h2>
                    <p className="text-[#888] font-medium text-[14px] mb-4">
                        © {new Date().getFullYear()} Wszelkie prawa zastrzeżone.
                    </p>
                    <p className="text-[#555] text-[13px] font-medium max-w-md mb-8">
                        Nie jesteśmy w żaden sposób powiązani z Mojang AB. <br className="hidden md:block" />
                        Minecraft jest znakiem towarowym firmy Mojang AB.
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                        <Link href="/regulamin" className="text-[#aaa] hover:text-[#00aa00] transition-colors font-bold text-[14px]">
                            Regulamin
                        </Link>
                        <Link href="/regulamin" className="text-[#aaa] hover:text-[#00aa00] transition-colors font-bold text-[14px]">
                            Polityka prywatności
                        </Link>
                        <Link href="/kontakt" className="text-[#aaa] hover:text-[#00aa00] transition-colors font-bold text-[14px]">
                            Kontakt
                        </Link>
                    </div>
                </div>

                <div className="w-full lg:w-auto flex justify-center lg:justify-end shrink-0">
                    <DiscordTile />
                </div>
            </div>
        </footer>
    );
}