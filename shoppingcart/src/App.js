import React from 'react';
import { Provider } from "react-redux";
import "./styles/app.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddContact from './components/contacts/AddContact';
import store from './store/store';
import Contacts from './components/contacts/Contacts';
import EditContact from './components/contacts/EditContact';
import Navbar from './components/elements/NavBar';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
        <Navbar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contacts/add" component={AddContact} />
                <Route
                  exact
                  path="/contacts/edit/:id"
                  component={EditContact}
                />
              </Switch>
            </div>
          </div>
        </div>s
    </Router>
    </Provider>
  );
}

export default App;
