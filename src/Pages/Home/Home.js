//Style
import styles from "./Home.module.scss";
//Library
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className={styles.main}>
      <motion.article
        className={styles.article}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className={styles.copyContent}>
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className={styles.exploreButton}>
          <Link to="/destination" className={styles.explore}>
            <h4>EXPLORE</h4>
          </Link>
        </div>
      </motion.article>
    </main>
  );
};

export default Home;
