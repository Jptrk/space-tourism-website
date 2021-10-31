//Pages & Components
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Destination from "./Pages/Destination/Destination";

//Style
import "../src/Styles/Global.module.scss";

//Library
import { Route, Switch } from "react-router";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/destination">
            <Destination />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
