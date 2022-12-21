import React from "react";
import ReactDOM from "react-dom";
import ThemeProvider from "ui_lib/ThemeProvider";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PDPContent from "pdp_react/App";
import HomeContent from './HomeContent'
import Button from 'ui_lib/Button';
import Nav from 'ui_lib/Nav'
import PLPContent from 'plp_vue/App'
import './index.css'



const App = () => (
  <div>
      <Nav> 
        <p>A simple Nav bar</p>
        <Button>Login</Button>
      </Nav>
      <div className="container">
        <Router>
          <div>
            <div>
              <Switch>
                <Route exact path="/" component={HomeContent} />
                <Route path="/product" component={PDPContent} />
                <Route path="/product-list" />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
