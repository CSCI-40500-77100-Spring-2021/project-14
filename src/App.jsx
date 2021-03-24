import React from "react";
import Cars from "./pages/Cars.jsx";
import Car from "./pages/Car.jsx";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <h1 className="py-3 container text-center">Available Cars Nearby</h1>
      <div>
        <Switch>
          <Route path="/" exact component={Cars} />
          <Route path="/car">
            <Car />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
