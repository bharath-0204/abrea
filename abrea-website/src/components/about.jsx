import styles from './about.module.css';
import logo from '../assets/aboutlogo.jpg';

function Shop() {
  return (
    <div className={styles.shopContainer}>
      <div className={styles.textSection}>
        <h1>Our Story</h1>
        <p>
          At A Bréa, we believe that travel is more than movement — it’s a feeling,
          a transformation, an art through which beauty is redefined. Each destination,
          each coastline, and every museum has whispered its story into our designs.
          Born from a love of exploration and an unwavering commitment to elegance,
          A Bréa creates resort wear for the modern, conscious woman who wants to move
          lightly through the world — with intention, grace, and purpose.
        </p>
        <p>
          Our collections are a seamless fusion of luxury and sustainability.
          We work with innovative textiles such as Econyl®, Merino wool, and other
          ethically sourced materials that honor both the earth and the artistry of craft.
          Wearing A Bréa means stepping into something meaningful. Something beautiful.
          Something that reflects not just where you’re going, but who you are becoming.
        </p>
      </div>
      <div className={styles.imageSection}>
        <img src={logo} alt="Logo" className={styles.logoImage} />
      </div>
    </div>
  );
}

export default Shop;
