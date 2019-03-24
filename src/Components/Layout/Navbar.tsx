import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import NavbarLoggedIn from './NavbarLoggedIn';
import NavbarGuest from './NavbarGuest';

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

export interface Props extends WithStyles<typeof styles> {
  auth: any;
}

class Navbar extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        { isAuthenticated ? <NavbarLoggedIn /> : <NavbarGuest /> }
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  auth: state.auth
});

const styledComponent = withStyles(styles)(Navbar);

export default connect(mapStateToProps, {})(styledComponent);
