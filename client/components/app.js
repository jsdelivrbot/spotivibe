import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Homepage from './Homepage';
import VisualizeContainer from './VisualizeContainer';

injectTapEventPlugin();

const App = () => (
  <div>
    <MuiThemeProvider>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/visualize/:artistName" component={VisualizeContainer} />
      </Switch>
    </MuiThemeProvider>
  </div>
);

export default App;
