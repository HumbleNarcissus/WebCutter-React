import React from 'react';
import PopupComponent from './PopupComponent';
import { DialogActions, Button } from '@material-ui/core';
import { deleteSite } from '../../actions/sitesActions';
import { connect } from 'react-redux';


class DeletePopup extends PopupComponent {
    render() {
        const DeleteSite = () => (
            <div>
                <p>Do you want to delete site: {this.props.site}</p>
                <DialogActions>
                    <Button type="submit" onClick={ () => this.props.deleteSite(this.props.site)} color="primary">
                      Delete
                    </Button>
                </DialogActions>
            </div>
        );

        return (
            <div>
                <PopupComponent
                    buttonTitle={this.props.buttonTitle}
                    title={this.props.title}
                    component={<DeleteSite />}
                />
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    sites: state.sites
});

export default connect(mapStateToProps, {deleteSite})(DeletePopup);