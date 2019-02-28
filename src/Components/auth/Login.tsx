import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';

const styles = (theme: Theme) =>
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

export interface Props extends WithStyles<typeof styles> {}

interface State {
  name: string;
  age: string;
  multiline: string;
  currency: string;
}

class OutlinedTextFields extends React.Component<Props, State> {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = (name: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [name]: event.target.value,
    } as Pick<State, keyof State>);
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container justify="center">
        <Paper className={classes.paper}>
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="username"
              label="Username"
              className={classNames(classes.textField, classes.dense)}
              margin="dense"
              variant="outlined"
            />
            <TextField
              id="password"
              label="Password"
              className={classNames(classes.textField, classes.dense)}
              margin="dense"
              variant="outlined"
              type="password"
            />
            <Button variant="contained" color="primary" className={classNames(classes.textField, classes.dense)}>
              Login
            </Button>
          </form>
        </Paper>
      </Grid>
    );
  }
}

(OutlinedTextFields as React.ComponentClass<Props>).propTypes = {
  classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(OutlinedTextFields);