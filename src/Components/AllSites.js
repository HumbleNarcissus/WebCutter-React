import React, {Component} from 'react';
import Panel from './SitesView';
import {Link} from 'react-router-dom';
import './Styles/style.css';


class AllSites extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            data: []
        }
    }

    componentDidMount(){
        this.fetchData();
        
    }

    fetchData(){
        fetch('https://webcutter-api.herokuapp.com/sites', {method: 'GET'})
            .then(response => response.json())
            .then(json => {
                const data = json.sites;
                const temp = [];
                data.forEach(element => {
                    temp.push(element);
                });
                this.setState({data: temp, isLoading: false});
            })
            .catch(error => console.log("Error while fetching data"))
    }
    
    render(){
        return(
             <div className="container">
                 <h3 className="center-align">All sites:</h3>
                 <Panel data={this.state.data} />
                 <Link to={"/add"} className="btn-floating btn-large waves-effect waves-light red right myfloat"><i className="material-icons">+</i></Link>
             </div>
        )
    }

}

export default AllSites;