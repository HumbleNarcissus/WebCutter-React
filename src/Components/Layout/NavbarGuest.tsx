import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import LinkButton from '../../utils/LinkButton';

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

const NavbarGuest = (props: Props) => {
    const { classes } = props;

    return (
        <div className="container">
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" color="inherit" className={classes.grow}>
                    Webcutter
                </Typography>
                <Button color="inherit" 
                  component={LinkButton("/register")}
                >Register</Button>
                <Button color="inherit" 
                  component={LinkButton("/login")}
                >Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withStyles(styles)(NavbarGuest);