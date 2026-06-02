import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addItem,
  decrementItem,
  selectCartItems,
} from "./cartSlice";

function ProductCard({ product }) {
  
    const dispatch = useDispatch();
 const cartItems = useSelector(selectCartItems);
 const cartItem = cartItems.find((item) => item.id === product.id);
 const qty = cartItem ? cartItem.qty : 0;
 return (
 <div className="product-card">
 <div className="product-emoji">{product.emoji}</div>
 <h3 className="product-name">{product.name}</h3>
 <p className="product-desc">{product.description}</p>
 <p className="product-price">₹{product.price}</p>
 {qty === 0 ? (
 <button
 className="btn-add"
 onClick={() => dispatch(addItem({ id: product.id, name: product.name, price: product.price,
emoji: product.emoji }))}
 >
 Add to Cart
 </button>
 ) : (
 <div className="qty-controls">
 <button className="btn-qty" onClick={() =>
dispatch(decrementItem(product.id))}>−</button>
 <span className="qty-display">{qty}</span>
 <button className="btn-qty" onClick={() => dispatch(addItem({ id: product.id, name:
product.name, price: product.price, emoji: product.emoji }))}>+</button>
 </div>
 )}
 </div>
  );
}

export default ProductCard;