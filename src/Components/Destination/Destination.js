//Style
import styles from "./Destination.module.scss";
//Data
import { data } from "../../Util/data";
//Components
import Planet from "../Planet/Planet";
//Library
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
//Variants
import { inout } from "../../Util/Variants";

const Destination = () => {
  const [planet, setPlanet] = useState("MOON");
  const [destination, setDestination] = useState([]);

  //Update destination on planet state change
  useEffect(() => {
    const currentDestination = data.destinations.filter(
      (p) => p.name.toLowerCase() === planet.toLowerCase()
    );
    setDestination(currentDestination);
  }, [planet]);

  return (
    <motion.main
      className={styles.main}
      variants={inout}
      initial="initial"
      animate="in"
      exit="out"
    >
      <div className={styles.planet}>
        {destination.length > 0 && (
          <Planet
            data={destination}
            key={destination.name}
            setPlanet={setPlanet}
          />
        )}
      </div>
    </motion.main>
  );
};

export default Destination;
