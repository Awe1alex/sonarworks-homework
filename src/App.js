import logo from './logo.svg';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <header className={classes.header}>
        <div className={classes.company}>
          Sonarworks
        </div>
        <div className={classes.route}>
          Legal centre
        </div>
        <div className={classes.logoContainer}>
          <img src={logo} alt='logo'></img>
        </div>
      </header>
      <section className={classes.main}></section>
      <footer className={classes.footer}>
        © 2020 Sonarworks Inc. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
