//Pages & Components
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

import PageContainer from "./Pages/PageContainer/PageContainer";

//Style
import "../src/Styles/Global.module.scss";

//Library
import { Route, Switch } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router";

function App() {
  const location = useLocation();

  return (
    <motion.div className="App">
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/destination">
            <PageContainer />
          </Route>
          <Route path="/crew">
            <PageContainer />
          </Route>
          <Route path="/technology">
            <PageContainer />
          </Route>
        </Switch>
      </AnimatePresence>
    </motion.div>
  );
}

export default App;
