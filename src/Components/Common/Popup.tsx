import React from 'react';
import { connect } from 'react-redux';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { Button, TextField, DialogActions, DialogContent, createStyles } from '@material-ui/core';
import { addSite } from '../../actions/sitesActions';

const styles = () =>
  createStyles({
    floatBtn: {
      position: "fixed",
      bottom: -4,
      right: 10,
      marginBottom: 10,
    }
});


interface Props extends WithStyles<typeof styles> {
    classes: any,
    addSite: any 
}

interface State {
    open: boolean,
    site: string
}
  
class Popup extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    
    this.state = {
        open: false,
        site: ''
    }
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = () => (event: any) => {
    this.setState({
      [event.target.name]: event.target.value,
    } as Pick<State, keyof State>);
  };

  onSubmit = () => (event: any) => {
    event.preventDefault();

    const userData = {
      site: this.state.site,
    }

    this.props.addSite(userData);
  }

  render() {
    const {open} = this.state;
    const {classes} = this.props;

    return (
    <div>
      <Button variant="contained" color="primary" onClick={this.handleClickOpen} className={classes.floatBtn}>
        Add new site
      </Button>
      <Dialog open={open} onClose={this.handleClose} aria-labelledby="simple-dialog-title">
        <DialogTitle id="simple-dialog-title">Add new site</DialogTitle>
        <form noValidate autoComplete="off" onSubmit={this.onSubmit()}>
        <DialogContent>
            <TextField
                autoFocus
                name="site"
                margin="dense"
                id="site"
                label="Site's name"
                type="text"
                fullWidth
                onChange={this.handleChange()}
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} type="submit" color="primary">
              Add
            </Button>
        </DialogActions>
        </form>
      </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  sites: state.sites,
});

const styledComponent = withStyles(styles)(Popup);

export default connect(mapStateToProps, { addSite })(styledComponent);
