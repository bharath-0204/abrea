import React from 'react';
import styles from './addtocart.module.css';
import { useCart } from '../context/CartContext';

const AddToCart = () => {
  const { cartItems, updateQuantity, removeFromCart, isCartOpen, toggleCart } = useCart();

  if (!isCartOpen) return null;

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={styles.cartOverlay} onClick={() => toggleCart(false)}>
      <div className={`${styles.cartDrawer} ${isCartOpen ? styles.open : ''}`} onClick={(e) => e.stopPropagation()}>
        <div className={styles.cartPanel}>
          <div className={styles.header}>
            <h3>Your cart</h3>
            <button className={styles.closeBtn} onClick={() => toggleCart(false)}>&times;</button>
          </div>

          <div className={styles.cartContent}>
            <div className={styles.cartHeaders}>
              <span>Product</span>
              <span>Total</span>
            </div>

            {cartItems.map((item, index) => (
              <div key={index} className={styles.cartItem}>
                <img src={item.image} alt={item.name} className={styles.thumbnail} />
                <div className={styles.itemDetails}>
                  <p>{item.name}</p>
                  <p>₹ {item.price.toLocaleString()}</p>
                  <p>Size: {item.size}</p>
                  <div className={styles.quantityControls}>
                    <button
                      onClick={() => updateQuantity(index, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(index, item.quantity + 1)}>+</button>
                  </div>
                  <button className={styles.removeBtn} onClick={() => removeFromCart(index)}>Remove</button>
                </div>
                <div className={styles.itemTotal}>
                  ₹ {(item.price * item.quantity).toLocaleString()}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.footer}>
            <div className={styles.total}>Subtotal: ₹ {total.toLocaleString()}</div>
            <div className={styles.taxNote}>Tax Included and shipping Calculated at checkout</div>
            <button className={styles.checkoutBtn}>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
