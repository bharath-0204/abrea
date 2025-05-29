import React, { useState } from 'react';
import styles from './product1.module.css';
import productImage from '../assets/productdesc.jpg';
import bgImage from '../assets/background.jpg';
import { useCart } from '../context/CartContext'; // ✅ import cart hook

const Product1 = () => {
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const { addToCart } = useCart(); // ✅ grab addToCart from context

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size before adding to cart.');
      return;
    }

    const item = {
      name: 'Whispering Tide Cape',
      price: 30000,
      image: productImage,
      size: selectedSize,
      quantity,
    };

    addToCart(item); // ✅ adds and auto-opens cart
  };

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.imageSection}>
        <img
          src={productImage}
          alt="Whispering Tide Cape"
          className={styles.productImage}
        />
      </div>
      <div className={styles.detailsSection}>
        <h2 className={styles.title}>Whispering Tide Cape</h2>
        <p className={styles.price}>₹ 30,000</p>
        <p className={styles.taxNote}>Tax included.</p>

        <div className={styles.tabs}>
          <span>Description</span>
          <span>Details</span>
          <span>Shipping</span>
        </div>

        <p className={styles.description}>
          Crafted from pure silk organza, this exquisite five-panel cape is a statement in sheer elegance. Each panel is delicately finished with fine piping, offering a structured yet ethereal drape. The cape features intricate hand embroidery, adding artisanal charm and texture to its translucent silhouette.

          Lightweight and versatile, it flows effortlessly, making it a perfect overlay for swimwear or eveningwear alike. Whether worn at the beach or layered over a formal ensemble, this cape captures the essence of refined, handcrafted luxury.
        </p>

        <div className={styles.sizes}>
          <div className={styles.sizeLabel}>Size</div>
          <div className={styles.sizeOptions}>
            {sizes.map(size => (
              <button
                key={size}
                className={`${styles.sizeButton} ${selectedSize === size ? styles.selected : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
            <span className={styles.sizeChart}>Size Chart</span>
          </div>
        </div>

        <div className={styles.quantitySection}>
          <div className={styles.quantityLabel}>Quantity</div>
          <div className={styles.quantityControls}>
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className={styles.quantityBtn}
            >−</button>
            <span className={styles.quantityDisplay}>{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className={styles.quantityBtn}
            >+</button>
          </div>
        </div>

        <button className={styles.addToCartBtn} onClick={handleAddToCart}>
          Add to Bag
        </button>
        <div className={styles.helpLink}>Need Help?</div>
      </div>
    </div>
  );
};

export default Product1;