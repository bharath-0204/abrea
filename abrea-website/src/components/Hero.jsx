import { useNavigate } from 'react-router-dom';
import styles from './Hero.module.css';
import bgImage from '../assets/hero.jpg';

function Hero({ hideContent }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/collection');
  };

  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay}>
        <div className={`${styles.content} ${hideContent ? styles.hidden : ''}`}>
          <h1 className={styles.title}>The Veils</h1>
          <p className={styles.subtitle}>
            The Veils is a visual meditation, an exploration of the memory of void,
            expressing the beauty in what is lost and the lingering echoes of what is no longer present.
          </p>
          <button className={styles.button} onClick={handleClick}>
            See the Collection
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
