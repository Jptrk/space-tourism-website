//Style
import styles from "./Crew.module.scss";
//Variants
import { inout, slide } from "../../Util/Variants";
//Data
import { data } from "../../Util/data.js";
//Library
import { useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

const Crew = () => {
  const [crew, setCrew] = useState({
    current: 0,
    previous: -1,
  });

  const crewData = data.crew[crew.current];

  //Handlers
  const changeCrew = (key) => {
    setCrew((prev) =>
      crew.current < prev.current
        ? { current: key, previous: crew.current }
        : { current: key, previous: crew.current }
    );
  };

  return (
    <article className={styles.crewMain}>
      <div className={styles.details}>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={crewData.name ? crewData.name : "empty"}
            variants={inout}
            initial="initial"
            animate="in"
            exit="out"
          >
            <div className={styles.role}>
              <h4>{crewData.role}</h4>
            </div>
            <div className={styles.name}>
              <h3>{crewData.name}</h3>
            </div>
            <div className={styles.info}>
              <p>{crewData.bio}</p>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className={styles.carouselControl}>
          <AnimateSharedLayout>
            {data.crew.map((crew, key) => (
              <div
                className={styles.circle}
                key={key}
                onClick={() => changeCrew(key)}
              >
                {crewData.name === crew.name && (
                  <motion.div
                    layoutId="circle"
                    className={crewData.name === crew.name ? styles.active : ""}
                  ></motion.div>
                )}
              </div>
            ))}
          </AnimateSharedLayout>
        </div>
      </div>

      <div className={styles.carousel}>
        <AnimatePresence exitBeforeEnter>
          <motion.img
            key={crewData.name ? crewData.name : "empty"}
            variants={slide}
            initial="initialNext"
            animate="animateNext"
            exit="exitLeft"
            src={crewData.images.png}
            alt={crewData.name}
          />
        </AnimatePresence>
      </div>
    </article>
  );
};

export default Crew;
