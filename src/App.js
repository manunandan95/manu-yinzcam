import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./components/users/User";
import Home from "./components/pages/Home";
import "./App.css";
import GithubState from "./context/github/GithubState";


const App = () => {
  return (
    <GithubState>
      <Router>
        <div className='App'>
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/user/:login' component={User} />

            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
