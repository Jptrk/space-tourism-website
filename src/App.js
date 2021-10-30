//Pages & Components
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

//Style
import "../src/Styles/Global.scss";

//Library
import { Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
