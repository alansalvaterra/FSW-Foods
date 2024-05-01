import Image from "next/image";
import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import Search from "./_components/search";
import ProductList from "./_components/products-list";
import { Button } from "./_components/ui/button";
import { ChevronRightIcon } from "lucide-react";

const Home = () => {
  return (
    <>
      <Header />

      <div className="px-5 pt-6">
        <Search />
      </div>

      <div className="px-5 pt-6">
        <CategoryList />
      </div>

      <Image
        src="/promo-banner01.png"
        alt="Banner com oferta promocional de até 30% de desconto em pizzas"
        width={0}
        height={0}
        className="h-auto w-full object-contain px-5 pt-6"
        sizes="100vw"
        quality={100}
      />

      <div className="space-y-4 pt-6">
        <div className="flex items-center justify-between px-5">
          <h2 className="font-semibold">Pedidos Recomendados</h2>
          <Button
            variant="ghost"
            className="h-fit p-0 text-primary hover:bg-transparent"
          >
            Ver todos
            <ChevronRightIcon size={16} />
          </Button>
        </div>
        <ProductList />
      </div>
    </>
  );
};

export default Home;
