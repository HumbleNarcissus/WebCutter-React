import React, {Component} from 'react';
import axios from 'axios';

class AllSites extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            data: []
        }
    }


    componentDidMount(){
        this.fetchData()
    }

    fetchData(){
        this.setState({data: [], isLoading: true})
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
                 <table className="striped">
                     <thead>
                        <tr>
                            <th>Full Link</th>
                            <th>Shortcut</th>
                            <th>Expiry Date</th>
                            <th>Working</th>
                        </tr>
                    </thead>

                    <tbody>
                    {this.state.data.map( item =>
                    <tr key={item.full_link.toString()}>
                        <td>{item.full_link}</td>
                        <td>{item.short_link}</td>
                        <td>{item.expiry_date}</td>
                        <td>{item.working.toString()}</td>
                    </tr>
                    )}
                    </tbody>
                 </table>
             </div>
        )
    }

}

export default AllSites;