import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RegistrationPage from './content/RegistrationPage';

import { Content, Theme } from '@carbon/react';
import TutorialHeader from './components/TutorialHeader';

import './app.scss';

class App extends Component {
  render() {
    return (
      <>
        <Theme theme="g90">
          <TutorialHeader />
        </Theme>
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/registration" component={RegistrationPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
