import React from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { setCurrentUser } from "../../actions/authActions";

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

const logOut = () => {
   // Logout user
   localStorage.removeItem('jwtToken');
   // set curretn user to {}
   setCurrentUser({});
   // Redirect to login
   window.location.href = '/login';
}


const NavbarLoggedIn = (props: Props) => {
    const { classes } = props;

    return (
        <div className="container">
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" color="inherit" className={classes.grow}>
                    Webcutter
                </Typography>
                <Button color="inherit" onClick={() => logOut()}>Sign out</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
  auth: state.auth
});

const styledComponent = withStyles(styles)(NavbarLoggedIn);


export default connect(mapStateToProps, {setCurrentUser})(styledComponent);