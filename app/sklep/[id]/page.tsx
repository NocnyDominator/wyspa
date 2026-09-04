import Image from "next/image";
import Link from "next/link";
import BuyButton from "@/component/buy-button";

const SHOP_ID = 30831;

interface ProductPrice {
    id: number;
    simpay: string | null;
    cashbill_transfer: string | null;
    cashbill_paysafecard: string | null;
    cashbill_paypal: string | null;
    icehost: string | null;
    [key: string]: string | number | null;
}

interface ProductData {
    id: number;
    prices: ProductPrice;
    promo: number | null;
    name: string;
    description: string;
    short_description: string;
    image: string | null;
    main_price: string;
    require_player_online: boolean;
    slider: boolean;
    slider_min: number | null;
    slider_max: number | null;
    slider_name: string;
    order: number;
    server: number;
}

interface ServerData {
    id: number;
    name: string;
    shop: number;
    ip: string;
    image: string | null;
}

async function getProducts(serverId: string): Promise<ProductData[]> {
    try {
        const res = await fetch(
            `https://dev123.vishop.pl/panel/shops/${SHOP_ID}/products/?server=${serverId}`,
            { next: { revalidate: 60 } }
        );
        if (!res.ok) return [];
        return res.json();
    } catch {
        return [];
    }
}

async function getServers(): Promise<ServerData[]> {
    try {
        const res = await fetch(
            `https://dev123.vishop.pl/panel/shops/${SHOP_ID}/servers/`,
            { next: { revalidate: 60 } }
        );
        if (!res.ok) return [];
        return res.json();
    } catch {
        return [];
    }
}

export default async function ShopPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const [products, servers] = await Promise.all([
        getProducts(id),
        getServers(),
    ]);

    const currentServer = servers.find((s) => s.id === Number(id));

    return (
        <div className="flex flex-1 flex-col items-center gap-10 px-6 pb-12 w-full">
            <div className="w-full max-w-[1600px] mt-6">
                <div className="flex items-center gap-4">
                    {currentServer?.image && (
                        <Image
                            src={currentServer.image}
                            alt={currentServer.name || ""}
                            width={48}
                            height={48}
                            unoptimized
                        />
                    )}
                    <div>
                        <h1 className="text-3xl md:text-4xl font-black text-[#1a1a1a] uppercase tracking-tight">
                            {currentServer?.name || "Sklep"}
                        </h1>
                        <p className="text-[#666] font-medium mt-1">Wybierz produkt, który chcesz kupić</p>
                    </div>
                </div>
            </div>

            <section className="w-full max-w-[1600px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products
                        .sort((a, b) => a.order - b.order)
                        .map((product) => (
                            <div
                                key={product.id}
                                className="relative bg-white rounded-[30px] p-6 border border-black/5 hover:border-[#009900]/30 transition-all duration-200 flex flex-col items-center gap-4 group overflow-hidden"
                            >
                                <Image
                                    src="/texture.png"
                                    alt=""
                                    fill
                                    unoptimized
                                    className="absolute inset-0 z-0 object-cover opacity-[0.03] [image-rendering:pixelated] pointer-events-none"
                                />

                                <div className="relative z-10 w-24 h-24 flex items-center justify-center">
                                    {product.image && (
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            width={64}
                                            height={64}
                                            unoptimized
                                            className="object-contain drop-shadow-md"
                                        />
                                    )}
                                </div>

                                <div className="relative z-10 flex flex-col items-center text-center gap-2 flex-1">
                                    <h3 className="font-black text-xl text-[#1a1a1a]">{product.name}</h3>
                                    <p className="text-[#666] text-sm font-medium leading-snug">
                                        {product.short_description}
                                    </p>
                                </div>

                                <div className="relative z-10 flex flex-col items-center gap-3 w-full mt-auto pt-4">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl font-black text-[#009900]">
                                            {product.main_price}
                                        </span>
                                        <span className="text-[#009900] font-bold text-lg">zł</span>
                                    </div>

                                    <BuyButton productId={product.id} />
                                </div>

                                {product.slider && (
                                    <span className="absolute top-4 left-4 z-10 bg-blue-100 text-blue-700 text-[11px] font-bold px-2.5 py-1 rounded-full">
                                        {product.slider_min}–{product.slider_max} szt.
                                    </span>
                                )}
                            </div>
                        ))}
                </div>
            </section>

            {servers.length > 1 && (
                <section className="w-full max-w-[1600px]">
                    <h2 className="text-xl font-black text-[#1a1a1a] uppercase tracking-tight mb-4">Inne serwery</h2>
                    <div className="flex flex-wrap gap-3">
                        {servers
                            .filter((s) => s.id !== Number(id))
                            .map((server) => (
                                <Link
                                    href={`/sklep/${server.id}`}
                                    key={server.id}
                                    className="bg-white rounded-2xl px-5 py-3 border border-black/5 hover:border-[#009900]/30 transition-colors flex items-center gap-3"
                                >
                                    {server.image && (
                                        <Image
                                            src={server.image}
                                            alt={server.name}
                                            width={28}
                                            height={28}
                                            unoptimized
                                        />
                                    )}
                                    <span className="font-bold text-[#1a1a1a] text-sm">{server.name}</span>
                                </Link>
                            ))}
                    </div>
                </section>
            )}
        </div>
    );
}
