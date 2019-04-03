import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { Button, TextField, DialogActions, DialogContent, createStyles } from '@material-ui/core';


export interface PopupProps {
    buttonTitle: string,
    title: string,
    component?: any,
    site?: string,
    deleteSite?: any
}

interface State {
    open: boolean,
}
  
class PopupComponent extends React.Component<PopupProps, State> {

  constructor(props: PopupProps) {
    super(props);
    
    this.state = {
        open: false,
    }
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {open} = this.state;

    return (
    <div>
      <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
        {this.props.buttonTitle}
      </Button>
      <Dialog open={open} onClose={this.handleClose} aria-labelledby="simple-dialog-title">
        <DialogTitle id="simple-dialog-title">{this.props.title}</DialogTitle>
        <DialogContent>
            {this.props.component}
        </DialogContent>
      </Dialog>
      </div>
    );
  }
}

export default PopupComponent;