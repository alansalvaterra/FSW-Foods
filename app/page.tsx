import Image from "next/image";
import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import Search from "./_components/search";

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
    </>
  );
};

export default Home;
