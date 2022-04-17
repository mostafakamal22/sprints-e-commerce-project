import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import UsersReviewsOverView from "./UsersReviewsOverView";
import UserReview from "./UserReview";
import { classNames } from "./className";
import { Swiper, SwiperSlide } from "swiper/react";
//Ripples is lib. for ripples effects while clicking items
import Ripples from "react-ripples";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import { AiOutlineHeart } from "react-icons/ai";

//product fake data
const product = {
  name: "Chip & Dale",
  price: "$19.99",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Home", href: "#" },
    { id: 2, name: "BrickHeadz", href: "#" },
  ],
  images: [
    {
      src: "https://www.lego.com/cdn/cs/set/assets/blt3d69e678c82a7321/40550_alt1.png?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1",
      alt: "Chip & Dale",
    },
    {
      src: "https://www.lego.com/cdn/cs/set/assets/blt1d4afe55f888042a/40550_alt2.png?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1",
      alt: "Chip & Dale",
    },
    {
      src: "https://www.lego.com/cdn/cs/set/assets/bltd4b2c41519d3f7a8/40550_alt3.png?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1",
      alt: "Chip & Dale",
    },
    {
      src: "https://www.lego.com/cdn/cs/set/assets/bltdc6d17a41571ff8d/40550_alt4.png?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1",
      alt: "Chip & Dale",
    },
    {
      src: "https://www.lego.com/cdn/cs/set/assets/blt757ce0761fc7b55b/40550_alt6.png?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1",
      alt: "Chip & Dale",
    },
  ],
  age: "+10",
  pieces: "255",
  badge: "featured",
  features:
    "Dive back into childhood with these fun LEGO® BrickHeadz™ style buildable figures of Disney’s adorable chipmunk characters Chip & Dale (40550). This is a super gift idea for kids aged 10 and up, who will love the authentic details of the outfits from the show Chip ’n Dale: Rescue Rangers, which reflect the chipmunks’ individual personalities. With baseplates for display, these delightful construction models will make an eye-catching addition to any cartoon fan’s collection.",
  highlights: [
    "Brick-built cartoon characters - Buildable LEGO® BrickHeadz™ | Disney Chip & Dale (40550), each in their iconic outfit from Disney’s Chip ‘n Dale: Rescue Rangers ",
    "Playful display piece - This 226-piece LEGO® | Disney building toy for kids aged 10 and up comes with step-by-step building instructions and includes baseplates for display ",
    "Gift idea - These creative buildable LEGO® figures measure over 3.5 in. (9 cm) high, 1.5 in. (4 cm) wide and 1.5 in. (4 cm) deep. Give the set to a fan of cartoons or Disney’s Chip ‘n Dale as a treat",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

const usersReviews = [
  {
    name: "Jese Leos",
    pic: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    productRating: 3,
    reviewTitle: "Thinking to buy another one!",
    reviewComment:
      "This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.",
    foundHelpful: 20,
  },
  {
    name: "Jese Leos",
    pic: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    productRating: 3,
    reviewTitle: "Thinking to buy another one!",
    reviewComment:
      "This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.",
    foundHelpful: 20,
  },
  {
    name: "Jese Leos",
    pic: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    productRating: 3,
    reviewTitle: "Thinking to buy another one!",
    reviewComment:
      "This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.",
    foundHelpful: 20,
  },
  {
    name: "Jese Leos",
    pic: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    productRating: 3,
    reviewTitle: "Thinking to buy another one!",
    reviewComment:
      "This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.",
    foundHelpful: 20,
  },
];

export default function Product() {
  return (
    <div className="mt-5">
      {/* Bread crumb */}
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-4 h-5 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mt-20 max-h-[600px] max-w-[750px]"
        >
          {product.images.map((pic, index) => (
            <SwiperSlide>
              <img
                className="object-cover object-center w-full h-auto"
                src={pic.src}
                alt={pic.alt}
                key={index}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Product info */}
        <div className="max-w-2xl mx-auto pt-10 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 ">
          <div className="lg:col-span-2 lg:border-r lg:border-yellow-400 lg:pr-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
          </div>

          <div className="mt-4 lg:mt-0 lg:row-span-3 self-center">
            <h2 className="sr-only">Product information</h2>

            <div className="w-full flex justify-between items-center">
              {/*product badge*/}
              <span className="font-medium text-sm bg-yellow-400 py-1 px-2 my-4">
                {product.badge}
              </span>

              {/*add to wish list*/}
              <Ripples color={"rgba(253,128,36,.1)"} during={1200}>
                <button className="flex items-center">
                  <AiOutlineHeart className="text-[25px] bg-[rgba(0,0,0,.05)] text-[rgb(44,44,44)] p-1 rounded-full" />
                  <span className="text-sm font-medium sm:inline-block">
                    Add to wish card{" "}
                  </span>
                </button>
              </Ripples>
            </div>

            <p className="text-3xl text-gray-900 my-5">{product.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating
                          ? "text-yellow-400"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a
                  href={reviews.href}
                  className="ml-3 text-sm font-bold text-yellow-400 hover:text-yellow-500"
                >
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <div className="flex w-full justify-center my-20">
              {/* Age */}
              <div className="basis-1/2 flex flex-col items-center justify-center border-r-2 border-yellow-400">
                <p className="text-2xl font-bold">{product.age}</p>
                <h3 className="text-gray-900 font-medium">Age </h3>
              </div>

              {/* pieces */}

              <div className="basis-1/2 flex flex-col items-center justify-center">
                <p className="text-2xl font-bold">{product.pieces}</p>
                <h3 className="text-gray-900 font-medium">pieces</h3>
              </div>
            </div>

            <Ripples
              className="!block"
              color={"rgba(253,128,36,.1)"}
              during={1200}
            >
              {/*add to cart*/}
              <button className="block w-full p-3 bg-[rgb(253,128,36)] font-bold text-sm uppercase  border-2 border-[rgb(253,128,36)] rounded hover:bg-white focus:outline-none transition-all duration-500 ease-in-out">
                Add To Cart
              </button>
            </Ripples>
          </div>

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-yellow-400 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Features</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.features}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul className="pl-4 list-disc text-sm space-y-2">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
        {/*users reviews overview*/}
        <hr className="w-[80vw] mx-auto lg:my-1 border-b-[0.5px] border-yellow-400"></hr>
        <UsersReviewsOverView reviews={reviews} />
        <hr className="w-[80vw] mx-auto lg:my-1 border-b-[0.5px] border-yellow-400"></hr>

        {/*users reviews*/}
        <div className="px-5 lg:px-10 my-10 max-w-[900px]">
          <h2 className="my-5 text-xl">Users Reviews</h2>

          {usersReviews.map((review) => (
            <UserReview userReview={review} />
          ))}
        </div>

        {/*TOdO add review*/}
      </div>
    </div>
  );
}
