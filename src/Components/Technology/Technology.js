//Style
import styles from "./Technology.module.scss";
//Data
import { data } from "../../Util/data.js";
//Variants
import { inout } from "../../Util/Variants";
//Library
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";

const Technology = () => {
  const [techSelected, setTechSelected] = useState(0);
  const techData = data.technology[techSelected];

  return (
    <motion.article
      variants={inout}
      initial="initial"
      animate="in"
      exit="out"
      className={styles.techMain}
    >
      <div className={styles.left}>
        <div className={styles.landscapeImage}>
          <AnimatePresence exitBeforeEnter>
            <motion.img
              src={techData.images.landscape}
              alt={techData.name}
              key={techData.name ? techData.name : "empty"}
              variants={inout}
              initial="initial"
              animate="in"
              exit="out"
            />
          </AnimatePresence>
        </div>
        <div className={styles.nav}>
          <AnimateSharedLayout>
            {data.technology.map((tech, key) => (
              <div
                className={styles.navItem}
                onClick={() => setTechSelected(key)}
                key={key}
                className={
                  techSelected === key
                    ? styles.navItem + " " + styles.activeColor
                    : styles.navItem
                }
              >
                {techSelected === key && (
                  <motion.div
                    layoutId="active"
                    className={styles.active}
                  ></motion.div>
                )}

                <h4>{key + 1}</h4>
              </div>
            ))}
          </AnimateSharedLayout>
        </div>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            className={styles.copy}
            key={techData.name ? techData.name : "empty"}
            variants={inout}
            initial="initial"
            animate="in"
            exit="out"
          >
            <h6>THE TERMINOLOGY…</h6>
            <h3>{techData.name}</h3>
            <p>{techData.description}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={styles.right}>
        <AnimatePresence exitBeforeEnter>
          <motion.img
            src={techData.images.portrait}
            alt={techData.name}
            key={techData.name ? techData.name : "empty"}
            variants={inout}
            initial="initial"
            animate="in"
            exit="out"
          />
        </AnimatePresence>
      </div>
    </motion.article>
  );
};

export default Technology;
