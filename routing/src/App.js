import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import Home from './components/Home';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/app';
import { Nav } from './styles/nav';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
    <h1>Routing</h1>
    <Router>
      <div>
        <Nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </Nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        <Switch>
          <Route path="/users">
            <PageOne />
          </Route>
          <Route path="/posts">
            <PageTwo />
          </Route>

          <Route path="/">
            {/* La home page va per ultima? */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;
