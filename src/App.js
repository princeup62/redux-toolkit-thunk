import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/management-page/Management";
import Management from "./components/management-page/Management";
import Adder from "./components/adder/Adder";
import EditManagement from "./components/management-page/EditManagement";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="main-content-wrapper ">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Management} />
            <Route path="/edit/:id">
              <EditManagement />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
