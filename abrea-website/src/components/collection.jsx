import React from 'react';
import styles from './collection.module.css';
import veilImage from '../assets/design.png';
import titleImage from '../assets/veils.png';

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.leftColumn}>
        <img src={veilImage} alt="Veils collage" className={styles.collageImage} />
      </div>
      <div className={styles.rightColumn}>
        <img src={titleImage} alt="The Veils" className={styles.titleImage} />
        <p className={styles.aboutText}>
          The Veils is a visual meditation, an exploration of the Memory of Void, expressing the beauty in what is lost and the lingering echoes of what is no longer present. Through subtle elements of absence, fragmented forms, and tactile textures, the collection evokes a haunting yet tender representation of fading memories and emptiness.
          <br /><br />
          Inspired by natural imagery from the Tanakh, this collection draws upon the symbolism of three significant flowers of ancient Israel: the white lily (shoshan or shoshannah), the bunch-flowered daffodil (Narcissus tazetta), and the sea daffodil (havtzelet ha-Sharon). These blooms embody timeless beauty, resilience, and deep love and absence anchoring the collection in both cultural richness and nature’s enduring strength.
        </p>
      </div>
    </section>
  );
};

export default About;
