import React from "react";
import ProductCard from "./ProductCard";

export default function ProductsCarousel(props) {
  return (
    <div className="w-full my-20 px-8 ">
      {/*products carousel title*/}
      <h2 className="text-2xl md:text-4xl">{props.title}</h2>
      {/*products carousel*/}
      <div className="max-w-[1250px] grid auto-cols-[minmax(300px,_1fr)] auto-rows-max grid-flow-col gap-8 mx-auto my-8 w-full overflow-x-auto snap-x scroll-px-8 overscroll-x-contain">
        {/*products carousel Cards*/}
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
