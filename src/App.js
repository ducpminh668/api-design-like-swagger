import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout2Columns from "./components/layouts/Layout2Columns";
import routes from './routes';


function App() {
  const configRoute = routes => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };
  return (
    <div className="App">
      <Router>
        <Layout2Columns route={configRoute(routes)} />
      </Router>
    </div>
  );
}

export default App;
