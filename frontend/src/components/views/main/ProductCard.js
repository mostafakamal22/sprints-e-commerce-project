import React from "react";
//Ripples is lib. for ripples effects while clicking items
import Ripples from "react-ripples";
import { AiOutlineHeart } from "react-icons/ai";
//AiFillHeart when added to cart

export default function ProductCard() {
  return (
    <div className="text-left mx-auto text-dark font-bold snap-start select-none">
      {/*product image and link*/}
      <Ripples
        className="!block border border-1 p-2"
        color={"rgba(253,128,36,.1)"}
        during={2200}
      >
        <button className="flex items-center">
          <AiOutlineHeart className="text-[25px] bg-[rgba(0,0,0,.05)] text-[rgb(44,44,44)] p-1 rounded-full" />
          <span className="hidden text-sm font-medium sm:inline-block">
            Add to wish card{" "}
          </span>
        </button>
        <a href="#!" className="relative">
          <img
            className="block w-full h-auto rounded-t-lg object-center object-cover transition-all duration-500 ease-in-out hover:scale-105
    "
            src="https://www.lego.com/cdn/cs/set/assets/blte226ac95a59d6b48/10299.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1"
            alt="Santiago Bernabéu Stadium"
          />
          {/*only if a new/featured product*/}
          <span className="font-medium text-sm bg-yellow-400 py-1 px-2">
            New
          </span>
        </a>
      </Ripples>

      {/*product details*/}
      <div className="py-6 flex flex-col justify-center ">
        <a href="#" className="text-lg mb-5 underline">
          Real Madrid – Santiago Bernabéu Stadium.
        </a>

        {/*product rating*/}
        <div className="flex items-center mb-2">
          <svg
            className="w-5 h-5 ml-0 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <p className="text-sm font-bold text-dark-900">4.95</p>
        </div>

        {/*product price*/}
        <p className="text-base mb-2">$399.99</p>
        <Ripples className="!block" color={"rgba(253,128,36,.1)"} during={2200}>
          {/*add to cart*/}
          <button className="block w-full p-3 bg-[rgb(253,128,36)] font-bold text-sm uppercase  border-2 border-[rgb(253,128,36)] rounded hover:bg-white focus:outline-none transition-all duration-500 ease-in-out">
            Add To Cart
          </button>
        </Ripples>
      </div>
    </div>
  );
}
