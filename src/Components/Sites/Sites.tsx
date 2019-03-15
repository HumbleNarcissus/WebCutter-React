import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getSites } from '../../actions/sitesActions';
import SitesTable from './SitesTable';

class Sites extends Component<any> {
   public componentDidMount() {
       this.props.getSites();
   }
   
   render() {
       return(
            <div>
                <SitesTable data={this.props.sites}/>
            </div> 
       )
   }
}

const mapStateToProps = (state: any) => ({
    sites: state.sites
});

export default connect(mapStateToProps, {getSites})(Sites);