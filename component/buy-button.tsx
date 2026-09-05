"use client";

const SHOP_ID = 30831;

declare global {
    interface Window {
        vishopPay: (shopId: number, productId: number) => void;
    }
}

interface BuyButtonProps {
    productId: number;
}

export default function BuyButton({ productId }: BuyButtonProps) {
    const handleBuy = () => {
        if (typeof window !== "undefined" && window.vishopPay) {
            window.vishopPay(SHOP_ID, productId);
        }
    };

    return (
        <button
            onClick={handleBuy}
            className="w-full bg-[#009900] hover:bg-[#008200] transition-colors text-white font-bold text-[15px] py-3 px-6 rounded-2xl"
        >
            Kupuję
        </button>
    );
}
