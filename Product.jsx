import React from "react";
import ProductCard from "./ProductCard";
import products from "./products";

function Products() {
  return (
    <div>
      <h1>Products Page</h1>

      <div className="products-container">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Products;