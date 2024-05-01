"use client";

import { Button } from "@/app/_components/ui/button";
import type { Product } from "@prisma/client";
import { ChevronLeftIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductImageProps {
  product: Pick<Product, "imageUrl" | "name">;
}

const ProductImage = ({ product }: ProductImageProps) => {
  const router = useRouter();

  const handleBackClick = () => router.back();

  return (
    <div className="relative h-[360px] w-full">
      <Image
        className="object-cover"
        src={product?.imageUrl}
        alt={product?.name}
        layout="fill"
      />

      {/* BOTAO VOLTAR */}
      <Button
        className="absolute left-4 top-4 rounded-full border-2 bg-white text-foreground hover:text-white"
        size="icon"
        onClick={handleBackClick}
      >
        <ChevronLeftIcon />
      </Button>
    </div>
  );
};

export default ProductImage;
