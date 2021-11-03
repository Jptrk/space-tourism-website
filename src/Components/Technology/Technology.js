//Style
import styles from "./Technology.module.scss";
//Data
import { data } from "../../Util/data.js";
//Variants
import { inout } from "../../Util/Variants";
//Library
import { motion } from "framer-motion";
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
          <img src={techData.images.landscape} alt={techData.name} />
        </div>
        <div className={styles.nav}>
          {data.technology.map((tech, key) => (
            <div
              className={techSelected === key ? styles.active : styles.navItem}
              onClick={() => setTechSelected(key)}
              key={key}
            >
              <h4>{key + 1}</h4>
            </div>
          ))}
        </div>
        <div className={styles.copy}>
          <h6>THE TERMINOLOGY…</h6>
          <h3>{techData.name}</h3>
          <p>{techData.description}</p>
        </div>
      </div>
      <div className={styles.right}>
        <img src={techData.images.portrait} alt={techData.name} />
      </div>
    </motion.article>
  );
};

export default Technology;
