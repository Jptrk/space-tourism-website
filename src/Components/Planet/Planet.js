//Style
import styles from "./Planet.module.scss";
//Library
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

const Planet = ({ data, setPlanet }) => {
  const { images, name, description, distance, travel } = data[0];
  const planetList = ["MOON", "MARS", "EUROPA", "TITAN"];

  //Variants
  const opacity = {
    show: {
      opacity: 1,
    },
    hide: {
      opacity: 0,
    },
  };

  return (
    <article className={styles.main}>
      <div className={styles.left}>
        <div className={styles.image}>
          <AnimatePresence exitBeforeEnter>
            <motion.img
              key={name ? name : "empty"}
              src={images.png}
              alt={name}
              variants={opacity}
              animate="show"
              initial="hide"
              exit="hide"
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.planetList}>
          <ul className={styles.list}>
            <AnimateSharedLayout>
              {planetList.map((planet) => (
                <li
                  key={planet}
                  onClick={() => setPlanet(planet.toUpperCase())}
                >
                  <h6>
                    {planet}
                    {planet.toLowerCase() === name.toLowerCase() && (
                      <motion.span layoutId="underline"></motion.span>
                    )}
                  </h6>
                </li>
              ))}
            </AnimateSharedLayout>
          </ul>
        </div>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            className={styles.planetDetails}
            variants={opacity}
            animate="show"
            initial="hide"
            exit="hide"
            key={name}
            transition={{ duration: 0.5 }}
          >
            <h2>{name}</h2>
            <p>{description}</p>
            <div className={styles.line}></div>
            <div className={styles.bottomDetails}>
              <div className={styles.distance}>
                <h6>AVG. DISTANCE</h6>
                <h3>{distance}</h3>
              </div>
              <div className={styles.time}>
                <h6>Est. travel time</h6>
                <h3>{travel}</h3>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </article>
  );
};

export default Planet;
