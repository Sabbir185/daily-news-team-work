import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/blog/:date">
          <Blog />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
