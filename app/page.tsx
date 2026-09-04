import Image from "next/image";
import Link from "next/link";

interface ServerData {
    id: number;
    name: string;
    shop: number;
    ip: string;
    image: string | null;
}

interface PaymentData {
    player: string;
    status: string;
    product_name: string;
    quantity: number;
    server: number;
    created_at: string;
}
interface RichestPlayerData {
    player: string;
    spend: number;
}


const SHOP_ID = 5643;

async function getRichestPlayers(): Promise<RichestPlayerData[]> {
    try {
        const res = await fetch(`https://dev123.vishop.pl/panel/shops/${SHOP_ID}/richest_player/?amount=3`, {
            next: { revalidate: 60 }
        });
        if (!res.ok) return [];
        return res.json();
    } catch {
        return [];
    }
}


async function getServers(): Promise<ServerData[]> {
    try {
        const res = await fetch(`https://dev123.vishop.pl/panel/shops/${SHOP_ID}/servers/`, {
            next: { revalidate: 60 }
        });
        if (!res.ok) return [];
        return res.json();
    } catch {
        return [];
    }
}

async function getLatestPayments(): Promise<PaymentData[]> {
    try {
        const res = await fetch(`https://dev123.vishop.pl/panel/shops/${SHOP_ID}/latest_payments/?amount=15`, {
            next: { revalidate: 60 }
        });
        if (!res.ok) return [];
        return res.json();
    } catch {
        return [];
    }
}

function timeAgo(dateString: string) {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return "przed chwilą";
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) return `${diffInMinutes} min. temu`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours} godz. temu`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} dni temu`;
}

export default async function Home() {
    const servers = await getServers();
    const latestPayments = await getLatestPayments();
    const richestPlayers = await getRichestPlayers();

    const marqueeItems = [...latestPayments, ...latestPayments];

    return (
        <div className="flex flex-1 flex-col items-center gap-10 px-4 sm:px-6 pb-12 w-full overflow-hidden">
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-50% - 0.5rem)); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
                .group:hover .animate-marquee {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="relative flex w-full max-w-[1600px] flex-col overflow-hidden rounded-[24px] sm:rounded-[30px] px-6 sm:px-12 py-10 sm:py-32 md:h-[497px] md:justify-center md:py-12 mt-6">
                <div className="absolute inset-0 overflow-hidden rounded-[24px] sm:rounded-[30px] bg-[#008200]/[0.82]">
                    <Image
                        src="/texture.png"
                        alt="pattern"
                        fill
                        priority
                        unoptimized
                        className="absolute inset-0 z-0 object-cover opacity-[0.54] [image-rendering:pixelated]"
                    />
                    <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#009900]/[0.82] to-[#009900]/[0.17] pointer-events-none"></div>
                </div>

                <div className="relative z-10 flex flex-col items-start w-full md:max-w-[60%]">
                    <div className="flex items-center gap-4 mb-4 sm:mb-6">
                        <div className="flex -space-x-3">
                            <Image src="/head/1.png" width={42} height={42} alt="Avatar 1" className="rounded-full border-[2px] border-white bg-black" unoptimized />
                            <Image src="/head/2.png" width={42} height={42} alt="Avatar 2" className="rounded-full border-[2px] border-white bg-black" unoptimized />
                            <Image src="/head/3.png" width={42} height={42} alt="Avatar 3" className="rounded-full border-[2px] border-white bg-black" unoptimized />
                            <Image src="/head/4.png" width={42} height={42} alt="Avatar 4" className="rounded-full border-[2px] border-white bg-black" unoptimized />
                        </div>
                        <p className="text-white text-[14px] sm:text-[15px] font-medium leading-tight tracking-wide">
                            Dołącz do +1000 osób<br />
                            na naszym Discordzie
                        </p>
                    </div>

                    <h1 className="text-white text-4xl sm:text-5xl md:text-[84px] font-black uppercase leading-[0.95] tracking-tight mb-3 sm:mb-4">
                        DOŁĄCZ DO<br />
                        NAS JUŻ TERAZ!
                    </h1>
                    <p className="text-white text-base sm:text-xl md:text-[22px] font-medium mb-6 sm:mb-8">
                        Dołącz do naszej społeczności i przeżyj niezapomniane przygody.
                    </p>
                    <button className="flex items-center gap-3 sm:gap-4 bg-[#0e5c0e] hover:bg-[#0c4e0c] transition-colors rounded-xl sm:rounded-2xl px-5 sm:px-6 py-3 sm:py-4 relative z-20 shadow-xl">
                        <Image src="/popcorn.png" width={48} height={48} alt="Popcorn" unoptimized className="w-10 h-10 sm:w-12 sm:h-12" />
                        <div className="flex flex-col items-start">
                            <span className="text-white font-bold text-xl sm:text-2xl tracking-wide leading-none">Skopiuj Adres</span>
                            <span className="text-[#88c588] text-[13px] sm:text-[15px] font-normal mt-1">Kliknij!</span>
                        </div>
                    </button>
                </div>

                <div className="hidden md:flex absolute -right-[10%] md:-right-[12%] bottom-0 w-[120%] md:w-[1000px] h-[205%] pointer-events-none z-10 items-end">
                    <Image
                        src="/render.png"
                        alt="renderowski"
                        fill
                        unoptimized
                        className="object-contain object-bottom drop-shadow-2xl"
                    />
                </div>
            </div>

            {latestPayments.length > 0 && (
                <section className="w-full max-w-[1600px] px-2">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                        <div className="shrink-0">
                            <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] uppercase tracking-tight">Ostatnie zakupy</h2>
                            <p className="text-[#666] font-medium mt-1">Zobacz co najczęściej kupują inni gracze</p>
                        </div>

                        <div className="relative flex-1 min-w-0 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
                            <div className="flex w-max animate-marquee gap-4 py-2">
                                {marqueeItems.map((purchase, index) => (
                                    <div key={index} className="w-[280px] shrink-0 bg-white/90 p-4 rounded-[20px] flex items-center gap-4 cursor-default">
                                        <div className="shrink-0 bg-gray-100 rounded-xl overflow-hidden border">
                                            <Image
                                                src={`https://mc-heads.net/avatar/${purchase.player}/48`}
                                                width={48}
                                                height={48}
                                                alt={purchase.player}
                                                unoptimized
                                            />
                                        </div>
                                        <div className="flex flex-col min-w-0">
                                            <span className="font-bold text-[16px] text-[#1a1a1a] truncate">{purchase.player}</span>
                                            <span className="text-[14px] font-bold text-[#009900] truncate mt-0.5">{purchase.product_name}</span>
                                            <span className="text-[12px] font-medium text-[#888] mt-1">{timeAgo(purchase.created_at)}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <section id="wybierz-tryb" className="w-full max-w-[1600px] flex flex-col gap-6 mt-4">
                <div className="flex flex-col px-2">
                    <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] uppercase tracking-tight">Wybierz tryb</h2>
                    <p className="text-[#666] font-medium mt-1">Wybierz serwer, na którym chcesz dokonać zakupu</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {servers.map((server) => (
                        <Link
                            href={`/sklep/${server.id}`}
                            key={server.id}
                            className="bg-white rounded-[24px] sm:rounded-[30px] p-5 sm:p-6 border border-black/5 hover:border-[#009900]/30 transition-colors duration-200 flex items-center gap-4 sm:gap-5"
                        >
                            <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center">
                                {server.image && (
                                    <Image
                                        src={server.image}
                                        alt={server.name}
                                        width={48}
                                        height={48}
                                        unoptimized
                                    />
                                )}
                            </div>

                            <div className="flex flex-col items-start gap-1">
                                <span className="font-black text-lg sm:text-xl text-[#1a1a1a] text-left leading-tight">
                                    {server.name}
                                </span>
                                <span className="text-[#009900] font-bold text-[13px] sm:text-[14px]">
                                    Sprawdź ofertę
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}