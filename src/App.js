import logo from './logo.svg';
import classes from './App.module.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Menu from './components/Menu'
import Privacy from './components/Privacy'
import Partnership from './components/Partnership'
import Terms from './components/Terms'
import Cookies from './components/Cookies'
import Support from './components/Support'
import Sonarworks from './components/Sonarworks'

function App() {
  return (
    <Router>
      <div className={classes.App}>
        <header className={classes.header}>
          <div className={classes.company}>
            Sonarworks
          </div>
          <div className={classes.route}>
            <NavLink exact to="/" className={classes.link} activeClassName={classes.active}>Legal centre</NavLink>
          </div>
          <div className={classes.logoContainer}>
            <img src={logo} alt='logo'></img>
          </div>
        </header>
        <section className={classes.main}>
          <Switch>
            <Route path="/privacy">
              <Privacy />
            </Route>
            <Route path="/partnership">
              <Partnership />
            </Route>
            <Route path="/terms">
              <Terms />
            </Route>
            <Route path="/cookies">
              <Cookies />
            </Route>
            <Route path="/support">
              <Support />
            </Route>
            <Route path="/sonarworks">
              <Sonarworks />
            </Route>
            <Route path="/">
              <Menu />
            </Route>
          </Switch>
        </section>
        <footer className={classes.footer}>
          © 2020 Sonarworks Inc. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
