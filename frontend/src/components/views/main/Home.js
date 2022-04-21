import Navbar from "../../shared/Navbar";
import Carousel from "../main/Carousel";
import ProductsCarousel from "./ProductsCarousel";
import Footer from "../../shared/Footer";
import { useContext } from "react";
import StoreContext from "../../../context/store/StoreContext";
import Spinner from "../../shared/Spinner";

const Home = () => {
  const { store } = useContext(StoreContext);
  const products = store.appData.products;
  const NewProducts = store.appData.products.filter(
    (product) => product.new === 1
  );
  const FeaturedProducts = store.appData.products.filter(
    (product) => product.featured === 1
  );
  return (
    <div className="bg-white ">
      <Navbar />
      {store.loading ? (
        <Spinner />
      ) : (
        <>
          <Carousel />
          <ProductsCarousel products={products} title={"Recommended For You"} />
          <ProductsCarousel products={NewProducts} title={"New"} />
          <ProductsCarousel
            products={FeaturedProducts}
            title={"Featured sets"}
          />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
