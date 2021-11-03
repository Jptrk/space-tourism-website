//Style
import styles from "./PageContainer.module.scss";
//Library
import { useLocation } from "react-router";
import { motion } from "framer-motion";
//Variants
import { inout } from "../../Util/Variants.js";
//Pages
import Crew from "../../Components/Crew/Crew";
import Destination from "../../Components/Destination/Destination";
import Technology from "../../Components/Technology/Technology";

const PageContainer = () => {
  const location = useLocation();

  //Functions
  const setPageClass = () => {
    //This will determine the styling per page.
    switch (location.pathname.toLowerCase()) {
      case "/crew":
        return styles.mainCrew;
      case "/technology":
        return styles.mainTechnology;
      case "/destination":
        return styles.mainDestination;
      default:
        break;
    }
  };

  return (
    <motion.main
      className={setPageClass()}
      variants={inout}
      initial="initial"
      animate="in"
      exit="out"
    >
      <div className={styles.header}>
        {location.pathname.toLowerCase() === "/crew" && (
          <h5 className={styles.headerlabel}>
            <span>02</span>MEET YOUR CREW
          </h5>
        )}
        {location.pathname.toLowerCase() === "/technology" && (
          <h5 className={styles.headerlabel}>
            <span>03</span>SPACE LAUNCH 101
          </h5>
        )}
        {location.pathname.toLowerCase() === "/destination" && (
          <h5 className={styles.headerlabel}>
            <span>01</span>PICK YOUR DESTINATION
          </h5>
        )}
      </div>
      <div className={styles.componentContainer}>
        {location.pathname.toLowerCase() === "/crew" && <Crew />}
        {location.pathname.toLowerCase() === "/destination" && <Destination />}
        {location.pathname.toLowerCase() === "/technology" && <Technology />}
      </div>
    </motion.main>
  );
};

export default PageContainer;
