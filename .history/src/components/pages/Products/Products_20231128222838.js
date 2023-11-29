import React from "react";
import Card from "../../Card";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { products, productNames } from "./Data.js";

function Products(props) {
  const { name } = useParams();

  return (
    <>
      
      <div className="product-wrapper">
        {products[name].map((product) => (
          <Card img={`${product.img}`} title={product.title} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Products;
