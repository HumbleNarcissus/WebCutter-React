import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class DeleteLink extends Component {
    constructor(props){
        super(props);
        this.state = {
            exists: false,
            site: ''
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        //check if site exists
        fetch('https://webcutter-api.herokuapp.com/site/' + this.props.match.params.link)
            .then(res => {if(res.ok) this.setState({exists: true, site: this.props.match.params.link})})
            .catch(err => console.log("Error while fetching data"));
    }

    handleClick(e) {
        e.preventDefault();
        fetch('https://webcutter-api.herokuapp.com/site/' + this.props.match.params.link, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({site: this.state.site})
        })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response))
        .then(redirect => this.props.history.push("/"));
    }

    render(){
        console.log(this.state.site);
        return(
            <div className="container">
                <h5>Do you really want to delete link: {this.props.match.params.link}</h5>
                <button to={"/"} className="btn" onClick={this.handleClick}>Yes</button>
                <Link to={"/"} className="btn">No</Link>
            </div>
        );
    }
}

export default DeleteLink;