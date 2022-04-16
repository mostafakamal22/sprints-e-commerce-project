import Navbar from "../../shared/Navbar";
import Carousel from "../main/Carousel";
import ProductsCarousel from "./ProductsCarousel";

const Home = () => {
  return (
    <div className="bg-white ">
      <Navbar />
      <Carousel />
      <ProductsCarousel title={"Recommended For You"} />
      <ProductsCarousel title={"New"} />
      <ProductsCarousel title={"Featured sets"} />
    </div>
  );
};

export default Home;
