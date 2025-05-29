import styles from './shop.module.css';
import whisperingTide from '../assets/product1.jpg';
import reverieEcho from '../assets/product2.jpg';
import bgTexture from '../assets/background.jpg';
import { Link } from 'react-router-dom'; // ✅ import Link

function Collection() {
  return (
    <div
      className={styles.collectionContainer}
      style={{ backgroundImage: `url(${bgTexture})` }}
    >
      <div className={styles.itemsContainer}>
        <Link to="/product1" className={styles.item}>
          <img src={whisperingTide} alt="Whispering Tide Cape" />
          <div className={styles.caption}>
            <p>Whispering Tide Cape</p>
            <p>₹ 30,000</p>
          </div>
        </Link>

        <div className={styles.item}>
          <img src={reverieEcho} alt="Reverie Echo" />
          <div className={styles.caption}>
            <p>Reverie Echo</p>
            <p>₹ 25,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
