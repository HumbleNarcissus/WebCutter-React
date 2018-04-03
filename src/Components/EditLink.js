import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EditLink extends Component {
    constructor(props){
        super(props);
        this.state = {
            exists: false,
            query: ''
        }
    }

    componentDidMount(){
        fetch('https://webcutter-api.herokuapp.com/site/' + this.props.match.params.link)
            .then(res => {if(res.ok) this.setState({exists: true})})
            .catch(err => console.log("Error while fetching data"));
    }

    postData(){
        fetch('https://webcutter-api.herokuapp.com/site/' + this.props.match.params.link, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({site: this.state.query})
        })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
    }

    render(){
        return(
            this.state.exists
            ?<div>
                <h5>You are editing site: {this.props.match.params.link} </h5>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                        <input type="text" className="form-control" placeholder="Full Link"
                          value={this.state.query} onChange={ event => {this.setState({query: event.target.value})} }
                          onKeyPress = {event => {
                              if (event.key === 'Enter' && this.state.query !== ''){
                                document.getElementById("btn-post").click();
                              }
                          }}
                        />
                            <label htmlFor="full_link">Full Link</label>
                            <Link to="/" className="btn" disabled={!this.state.query}
                                id="btn-post" onClick={()=> this.postData()}
                            >Submit</Link>
                        </div>
                    </div>
                </form>
            </div>
            : <div><h5>That site does not exists.</h5></div>
        );
    }
}
export default EditLink;