import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
// import { ParallaxProvider } from 'react-scroll-parallax';
import Terms from './Terms';
import PrivacyPolicy from './PrivacyPolicy'



const Main = () => {
  return(
    // <ParallaxProvider scrollAxis='horizontal'>
      <Router>
        <Switch>
          <Route exact path='/' render={(props) => <Home {...props}/>} />
          <Route path='/terms-and-conditions' render={props => <Terms {...props} />} />
          <Route path='/privacy-policy' render={props => <PrivacyPolicy {...props} />}/>
        </Switch>
      </Router>
    // </ParallaxProvider>
  );
}

export default Main;