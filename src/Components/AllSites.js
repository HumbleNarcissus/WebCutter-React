import React, {Component} from 'react';
import axios from 'axios';

class AllSites extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    fetchData(){
        axios.get('https://webcutter-api.herokuapp.com/sites')
            .then(response => console.log(response.data.sites))
            .catch(error => console.log("Error while fetching data"))
    }
    
    render(){
        return(
             <div>
                 {this.fetchData()}
             </div>
        )
    }

}

export default AllSites;