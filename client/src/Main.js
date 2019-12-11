import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home/Home';
// import { ParallaxProvider } from 'react-scroll-parallax';
import Terms from './TermsAndConditions/Terms';
import PrivacyPolicy from './Privacy/PrivacyPolicy';
import About from './About/About.js';



const Main = () => {
  return(
    // <ParallaxProvider scrollAxis='horizontal'>
      // <div>
        <Switch>
          <Route exact path='/' render={(props) => <Home {...props}/>} />
          <Route path='/terms-and-conditions' render={props => <Terms {...props} />} />
          <Route path='/privacy-policy' render={props => <PrivacyPolicy {...props} />}/>
          <Route path='/about' render={props => <About {...props}/>}/>
        </Switch>
      // </div>
    // </ParallaxProvider>
  );
}

export default Main;