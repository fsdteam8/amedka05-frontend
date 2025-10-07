import { Partnership } from "@/types/shopDataType";
import Image from "next/image";
import React from "react";

const TopProductCard = ({ shop }: { shop: Partnership }) => {
  return (
    <div className="bg-[#2A2A2A] rounded-lg overflow-hidden relative group">
      <div className="relative h-64 w-full">
        <Image
          src={shop?.image}
          alt={shop?.title || "Partnership image"}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="bg-[#424242] py-3 text-center">
        <p className="text-[#7DD3DD] text-[20px] font-medium">{shop?.title}</p>
      </div>
    </div>
  );
};

export default TopProductCard;
