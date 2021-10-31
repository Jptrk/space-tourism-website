//Style
import "./Navbar.scss";
//Assets
import logo from "../../Assets/shared/logo.svg";
import burger from "../../Assets/shared/icon-hamburger.svg";
import close from "../../Assets/shared/icon-close.svg";
//Library
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation().pathname;
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [show, setShow] = useState(windowSize <= 640 ? false : true);

  //Change links state depending on the window size.
  useEffect(() => {
    windowSize <= 640 ? setShow(false) : setShow(true);
  }, [windowSize]);

  //Update windowSize variable on window resize
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });

    return window.removeEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });
  }, []);

  //setShow to false on location change
  useEffect(() => {
    windowSize <= 640 && setShow(false);
  }, [location, windowSize]);

  //Variants
  const links = {
    hidden: {
      x: "100%",
      transition: {
        duration: windowSize <= 640 ? 0.5 : 1,
      },
    },
    show: {
      x: "0%",
      transition: {
        duration: windowSize <= 640 ? 0.5 : 1,
      },
    },
  };

  const line = {
    hidden: {
      width: "0",
    },
    show: {
      width: "100%",
      transition: {
        delay: 1,
        duration: 1,
        type: "spring",
        stiffness: 10,
      },
    },
  };

  return (
    <header>
      <nav>
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <motion.div
            variants={line}
            initial="hidden"
            animate="show"
            className="line-space"
          />
          <motion.div
            variants={links}
            initial={show ? "hidden" : "hidden"}
            animate={show ? "show" : "hidden"}
            className={`${show ? "links links-active" : "links"}`}
          >
            <img
              src={close}
              alt="close"
              onClick={() => setShow(false)}
              className="close"
            />
            <ul>
              <li className={`${location === "/" ? "active-page" : ""}`}>
                <Link to="/">
                  <p className="link">Home</p>
                </Link>
              </li>
              <li
                className={`${
                  location === "/destination" ? "active-page" : ""
                }`}
              >
                <Link to="/destination">
                  <p className="link">Destination</p>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <p className="link">Crew</p>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <p className="link">Technology</p>
                </Link>
              </li>
            </ul>
          </motion.div>
          <div className="burger" onClick={() => setShow(true)}>
            <img src={burger} alt="Navigation" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
