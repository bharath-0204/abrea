import { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import styles from './Footer.module.css';
import logo from '../assets/logo.png';
import bgImage from '../assets/background.jpg';

function Footer({ setHovered }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHovered(false);
  };

  return (
    <footer
      className={styles.footer}
      style={{ backgroundImage: `url(${bgImage})` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.arc} />
      <div className={`${styles.content} ${isHovered ? styles.contentVisible : ''}`}>
        <div className={styles.textSection}>
          <div className={styles.column}>
            <h4>Policy</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Shipping & Return</li>
              <li>Terms & Conditions</li>
              <li>FAQ’s</li>
            </ul>
            <h4>About us</h4>
            <ul>
              <li>
                <Link to="/about" className={styles.link}>Our Story</Link>
              </li>
            </ul>
            <h4>Follow us</h4>
            <ul>
              <li>
               <a
                href="https://www.instagram.com/a.brea._?igsh=MWNtbzE5NGtkOW9veg=="
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
               >Instagram</a>
               </li>
            </ul>
          </div>
        </div>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Abrea Logo" className={styles.logo} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
