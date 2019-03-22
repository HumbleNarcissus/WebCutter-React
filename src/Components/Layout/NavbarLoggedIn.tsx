import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles, WithStyles } from '@material-ui/core/styles';

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
};

export interface Props extends WithStyles<typeof styles> {}

const NavbarLoggedIn = (props: Props) => {
    const { classes } = props;

    return (
        <div className="container">
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" color="inherit" className={classes.grow}>
                    Webcutter
                </Typography>
                <Button color="inherit">Sign out</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withStyles(styles)(NavbarLoggedIn);