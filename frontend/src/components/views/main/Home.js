import Navbar from "../../shared/Navbar";
import Carousel from "../main/Carousel";
import ProductsCarousel from "./ProductsCarousel";
import Footer from "../../shared/Footer";
import { useContext, useEffect, useState } from "react";
import StoreContext from "../../../context/store/StoreContext";
import Spinner from "../../shared/Spinner";

const Home = () => {
  const { store, setAppData } = useContext(StoreContext);

  const [products, setProducts] = useState([])
  const [newProducts, setNewProducts] = useState([])
  const [featuredProducts, setFeaturedProducts] = useState([])

  useEffect(() => {
    setAppData('products').then(res => {
      setProducts(res)
      setNewProducts(res.filter(product => product.new === 1))
      setFeaturedProducts(res.filter(product => product.featured === 1))
    })
  }, [])

  return (
    <div className="bg-white ">
      <Navbar />
      {store.loading ? (
        <Spinner />
      ) : (
        <>
          <Carousel />
          <ProductsCarousel products={products} title={"Recommended For You"} />
          <ProductsCarousel products={newProducts} title={"New"} />
          <ProductsCarousel
            products={featuredProducts}
            title={"Featured sets"}
          />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
