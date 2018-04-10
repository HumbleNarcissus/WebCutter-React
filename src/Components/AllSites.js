import React, {Component} from 'react';
import Panel from './SitesView';


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
                 <h3>All sites:</h3>
                 <Panel data={this.state.data} />
             </div>
        )
    }

}

export default AllSites;