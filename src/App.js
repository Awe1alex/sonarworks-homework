import logo from './logo.svg';
import classes from './App.module.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Menu from './components/Menu'
import TextComponent from './components/TextComponent';

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
              <TextComponent name='privacy' />
            </Route>
            <Route path="/partnership">
              <TextComponent name='partnership' />
            </Route>
            <Route path="/terms">
              <TextComponent name='terms' />
            </Route>
            <Route path="/cookies">
              <TextComponent name='cookies' />
            </Route>
            <Route path="/support">
              <TextComponent name='support' />
            </Route>
            <Route path="/truefi-privacy">
              <TextComponent name='truefi-privacy' />
            </Route>
            <Route path="/eula">
              <TextComponent name='eula' />
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
