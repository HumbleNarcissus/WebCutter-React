import React from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles, WithStyles } from '@material-ui/core/styles';

const styles = {
  font: {
    fontSize: "20px"
  },
  position: {
    "text-align": "center"
  },
  margin: {
    "margin-top": "10px"
  }
};

export interface Props extends WithStyles<typeof styles> {
  history: any
}

const NotFound = (props: Props) => {

  const { classes } = props;

  return (
    <div className={classes.position}>
      <Typography  variant="display3">404</Typography>
      <Typography className={classes.font} variant="display1">That site does not exist.</Typography>
      <Button color="primary"
              className={classes.margin}
              variant="contained"
              id="hover-dis"
              href="/"
            >Home Page
      </Button>
    </div>
  )
};

export default withStyles(styles)(NotFound);