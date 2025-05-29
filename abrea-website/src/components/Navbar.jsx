import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import navbarBg from '../assets/background.jpg';
import title from '../assets/title.png';
import bagIcon from '../assets/bag-icon.png';
import { useCart } from '../context/CartContext';

function Navbar() {
  const { toggleCart, totalQuantity } = useCart();

  return (
    <nav className={styles.navbar} style={{ backgroundImage: `url(${navbarBg})` }}>
      <div className={styles.left}>
        <Link to="/shop">Shop</Link>
        <Link to="/collection">Collection</Link>
        <Link to="/about">About</Link>
      </div>

      <div className={styles.center}>
        <img src={title} alt="Abréa Logo" className={styles.logo} />
      </div>

      <div className={styles.right} onClick={() => toggleCart(true)}>
        <div className={styles.bagWrapper}>
          <img src={bagIcon} alt="Cart" className={styles.bagIcon} />
          {totalQuantity > 0 && (
            <span className={styles.cartBadge}>{totalQuantity}</span>
          )}
        </div>
        <span className={styles.bagText}>Bag</span>
      </div>
    </nav>
  );
}

export default Navbar;
