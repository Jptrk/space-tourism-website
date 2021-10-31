//Style
import styles from "./Destination.module.scss";
//Data
import { data } from "../../Util/data.js";
//Components
import Planet from "../../Components/Planet/Planet";
//Library
import { useEffect, useState } from "react";

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
    <main className={styles.main}>
      <div className={styles.header}>
        <h5 className={styles.headerlabel}>
          <span>01</span>Pick your destination
        </h5>
      </div>
      <div className={styles.planet}>
        {destination.length > 0 && (
          <Planet
            data={destination}
            key={destination.name}
            setPlanet={setPlanet}
          />
        )}
      </div>
    </main>
  );
};

export default Destination;
