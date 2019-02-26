import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getSites } from '../../actions/sitesActions';

class Sites extends Component<any> {
   public componentDidMount() {
       this.props.getSites();
   }

   render() {
       console.log(this.props)
       return(
            <div>
                <h1>Hello</h1>
            </div> 
       )
   }
}

const mapStateToProps = (state: any) => ({
    sites: state.sites
});

export default connect(mapStateToProps, {getSites})(Sites);