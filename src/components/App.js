import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LayoutRoute from '../components/LayoutRoute';

import Layout from '../views/Layout';
import HomeView from '../views/HomeView';
import OtherView from '../views/OtherView';
import NoLayoutView from '../views/NoLayoutView';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <LayoutRoute path="/" exact component={HomeView} layout={Layout} />
            <LayoutRoute path="/other" component={OtherView} layout={Layout} />
            <Route path="/nolayout" component={NoLayoutView} />
        </div>
      </Router>
    );
  }
}

export default App;
