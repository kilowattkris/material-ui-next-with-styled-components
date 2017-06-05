import React from 'react';
import Button from '../common/button';
import Dialog from 'material-ui/Dialog';
import Link from '../common/link';
import Grid from 'material-ui/Grid';

class Main extends React.Component {
  constructor(props = {}, context = {}) {
    super(props, context);

    this.state = {
      open: false,
    };

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  render() {
    return (
      <Grid item xs={12}>
        <Grid container justify="center" align="center" direction="column">
          <Dialog
            open={this.state.open}
            title="Super Secret Password"
            onRequestClose={this.handleRequestClose}
          >
            <p>1-2-3-4-5</p><br />
            <div>
              <Button onTouchTap={this.handleRequestClose}>Ok</Button>
            </div>
          </Dialog>
          <h1>Material-UI</h1>
          <h2>example project</h2>
          <Button onTouchTap={this.handleTouchTap}>Super Secret Password</Button>
          <br />
          <Link to="/test"><Button>To Test</Button></Link>
        </Grid>
      </Grid>
    );
  }
}

export default Main;
