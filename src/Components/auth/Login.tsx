import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';

import {loginUser} from '../../actions/authActions';

const styles = () =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: "auto",
      marginRight: "auto",
    },
    dense: {
      marginTop: 16,
    },
    paper: {
      width: 300,
      height: 500,
      marginTop: 20
    },
  });

interface Props extends WithStyles<typeof styles> {
  loginUser: any,
  history: any
}

interface State {
  username: string,
  password: string,
}

class Login extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [event.target.name]: event.target.value,
    } as Pick<State, keyof State>);
  };

  componentWillReceiveProps(nextProps: any) {
    if (nextProps.auth.isAuthenticated) {
        this.props.history.push('/');
    }
  }

  onSubmit = () => (event: any) => {
    event.preventDefault();

    const userData = {
      username: this.state.username,
      password: this.state.password
    }

    this.props.loginUser(userData);
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container justify="center">
        <Paper className={classes.paper}>
          <form className={classes.container} noValidate autoComplete="off" onSubmit={this.onSubmit()}>
            <TextField
              id="username"
              name="username"
              label="Username"
              className={classNames(classes.textField, classes.dense)}
              margin="dense"
              variant="outlined"
              onChange={this.handleChange()}
            />
            <TextField
              id="password"
              name="password"
              label="Password"
              className={classNames(classes.textField, classes.dense)}
              margin="dense"
              variant="outlined"
              type="password"
              onChange={this.handleChange()}
            />
            <Button type="submit" variant="contained" color="primary" className={classNames(classes.textField, classes.dense)}>
              Login
            </Button>
          </form>
        </Paper>
      </Grid>
    );
  }
}

(Login as React.ComponentClass<Props>).propTypes = {
  classes: PropTypes.object.isRequired,
} as any;

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  errors: state.errors
});

const styledComponent = withStyles(styles)(Login);

export default connect(mapStateToProps, { loginUser })(styledComponent);
