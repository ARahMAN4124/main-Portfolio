import "./App.css";
import Home from "./Components/Home/Home/Home";
import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Router exact path="/">
          <Home />
        </Router>
      </Switch>
    </Router>
  );
}

export default App;
