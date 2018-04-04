import React, {Component} from 'react';
import Sites from './SitesView';


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
    
    grabNewData(){
        return fetch('https://webcutter-api.herokuapp.com/sites', {method: 'GET'})
            .then(response => response.json())
            .then(json => {
                const data = json.sites;
                let temp = [];
                data.forEach(element => temp.push(element));
                return temp;
            })
            .catch(error => console.log("Error while fetching data"))
    }

    render(){
        return(
             <div className="container">
                 <h3>All sites:</h3>
                 <Sites data={this.state.data} />
             </div>
        )
    }

}

export default AllSites;