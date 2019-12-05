import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import { ParallaxProvider } from 'react-scroll-parallax';

const Main = () => {
  return(
    // <ParallaxProvider scrollAxis='horizontal'>
      <Router>
        <Switch>
          <Route exact path='/' render={(props) => <Home {...props}/>} />
        </Switch>
      </Router>
    // </ParallaxProvider>
  );
}

export default Main;