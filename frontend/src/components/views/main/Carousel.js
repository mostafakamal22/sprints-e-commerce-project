import React, { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";

//carousel images' data
const CarouselData = [
  {
    image:
      "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  },
];

export default function Carousel() {
  //define state for current slide/image
  const [currentSlide, setCurrentSlide] = useState(0);

  //auto sliding
  useEffect(() => {
    const myInterval = setInterval(() => {
      let newSlide =
        currentSlide === CarouselData.length - 1 ? 0 : currentSlide + 1;
      setCurrentSlide(newSlide);
    }, 4000);

    return () => {
      clearInterval(myInterval);
    };
  }, [currentSlide]);

  const nextSlide = () => {
    let newSlide =
      currentSlide === CarouselData.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const prevSlide = () => {
    let newSlide =
      currentSlide === 0 ? CarouselData.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="flex justify-center">
      <div className="2xl:max-w-[1300px] w-full h-[350px] overflow-hidden relative">
        {/*Left arrow */}
        <AiOutlineLeft
          onClick={() => prevSlide()}
          className="absolute w-8 h-8 p-1 left-[.5rem] bg-yellow-400 rounded-full text-3xl inset-y-1/2 text-white cursor-pointer"
        />
        {/*Carousel*/}
        {/*and Swip lib is for mobile devices*/}
        <Swipe onSwipeLeft={() => nextSlide()} onSwipeRight={() => prevSlide()}>
          {CarouselData.map((slide, index) => {
            return (
              <img
                src={slide.image}
                alt="New Toys for you!"
                key={index}
                className={
                  index === currentSlide
                    ? "block w-full h-auto object-center object-contain"
                    : "hidden"
                }
              />
            );
          })}
        </Swipe>

        <div className="absolute w-full flex justify-center md:bottom-0 bottom-3">
          {CarouselData.map((element, index) => {
            return (
              <div
                className={
                  index === currentSlide
                    ? "h-2 w-2 bg-yellow-400 rounded-full mx-2 mb-2 cursor-pointer"
                    : "h-2 w-2 bg-blue-700 rounded-full mx-2 mb-2 cursor-pointer"
                }
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                }}
              ></div>
            );
          })}
        </div>

        {/*Right arrow */}
        <AiOutlineRight
          onClick={() => nextSlide()}
          className="absolute w-8 h-8 p-1 right-[.5rem] text-3xl inset-y-1/2 text-white bg-yellow-400 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
}
