import React from 'react';
import PropTypes from 'prop-types';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Home from './home'; // Our custom react component
import Test from './test';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import {Grid} from 'material-ui';

const muiTheme = createMuiTheme();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <BrowserRouter>
          <Grid container justify="center" align="center">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/test" component={Test} />
            </Switch>
          </Grid>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
