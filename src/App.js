import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Fooddetails from "./Fooddetails";
import Checkout from "./Checkout";
import Orderinfo from "./Orderinfo";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route
            path="/fooddetails/:strCategory"
            component={Fooddetails}
            exact
          />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orderinfo" component={Orderinfo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
