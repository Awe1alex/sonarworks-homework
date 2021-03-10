import logo from './logo.svg';
import classes from './App.module.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Menu from './components/Menu'
import PrivacyPolicy from './components/PrivacyPolicy'
import PartnershipPolicy from './components/PartnershipPolicy'

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
            <Route path="/privacyPolicy">
              <PrivacyPolicy />
            </Route>
            <Route path="/partnershipPolicy">
              <PartnershipPolicy />
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
