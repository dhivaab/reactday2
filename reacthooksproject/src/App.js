import logo from './logo.svg';
import './App.css';
import UsingState from './usingstate';
import UsingEffect from './usingeffect';
import UsingEffect1 from './usingeffect1';
import seContext from './usecontext';
import UseContext1 from './usecontext1';

import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory, Redirect, withRouter } from "react-router-dom";
import UseContext from './usecontext';
import UsingRef from './usingRef';


export const SessionContext = React.createContext();


function App() {
  /*
  const [loggedin,setLoggedin] = useState(false);
  const [username, setUsername] = useState("");

  function increment(value) {
    setLoggedin(value)
  }
  function setUserName(value) {
    setUsername(value)
  }

  return ( 
    <div className = "App">
       <SessionContext.Provider value={{loggedin,username,increment,setUserName}}>
        <Router>

          <nav>
            <Switch>
              <Route path="/" exact component={UseContext} />
              <Route path="/login" exact component={UseContext1} />

            </Switch>
          </nav>
        </Router>

      </SessionContext.Provider>
    </div>
  );
  */

  
  /*return (
    <div className="App">
      <UsingState/>
      <UsingEffect/>
      <UsingEffect1/>
    </div>
  );
  */

  /*
  return ( 
    <div className = "App">
      <UsingRef/>
    </div>
  );
  */
}

export default App;
