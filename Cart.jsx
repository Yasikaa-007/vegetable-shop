import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, clearCart, selectCartItems, selectCartTotal, selectCartCount } from
'./cartSlice';
function Cart() {
 const dispatch = useDispatch();
 const items = useSelector(selectCartItems);
 const total = useSelector(selectCartTotal);
 const count = useSelector(selectCartCount);
 return (
 <div className="cart">
 <div className="cart-header">
 <span className="cart-icon"> </span>
 <h2 className="cart-title">Cart</h2>
 {count > 0 && <span className="cart-badge">{count}</span>}
 </div>
 {items.length === 0 ? (
 <p className="cart-empty">Your cart is empty. Add some vegetables!</p>
 ) : (
 <>
 <ul className="cart-list">
 {items.map((item) => (
 <li key={item.id} className="cart-item">
 <span className="cart-item-emoji">{item.emoji}</span>
 <span className="cart-item-name">{item.name}</span>
 {item.qty > 1 && <span className="cart-item-qty">× {item.qty}</span>}
 <span className="cart-item-price">₹{item.price * item.qty}</span>
 <button
 className="btn-remove"
 onClick={() => dispatch(removeItem(item.id))}
 aria-label={`Remove ${item.name}`}
 >
 ✕</button>
 </li>
 ))}
 </ul>
 <div className="cart-footer">
 <div className="cart-total">
 <span>Total :</span>
 <strong>Rs.{total}</strong>
 </div>
 <button className="btn-clear" onClick={() => dispatch(clearCart())}>
 Clear Cart
 </button>
 </div>
 </>
 )}
 </div>
 );
}
export default Cart;
