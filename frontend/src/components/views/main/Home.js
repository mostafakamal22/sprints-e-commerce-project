import Navbar from "../../shared/Navbar";
import Carousel from "../main/Carousel";
import ProductsCarousel from "./ProductsCarousel";
import Footer from "../../shared/Footer";
import { useContext, useEffect } from "react";
import StoreContext from "../../../context/store/StoreContext";
import Spinner from "../../shared/Spinner";

const Home = () => {
  const { store } = useContext(StoreContext);

  return (
    <div className="bg-white ">
      <Navbar />
      {store.loading ? (
        <Spinner />
      ) : (
        <>
          <Carousel />
          <ProductsCarousel title={"Recommended For You"} />
          <ProductsCarousel title={"New"} />
          <ProductsCarousel title={"Featured sets"} />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
