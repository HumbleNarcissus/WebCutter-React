import React, {Component} from 'react';

class EditLink extends Component {
    constructor(props){
        super(props);
        this.state = {
            exists: false,
            query: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        this.setState({query: event.target.value})
    }

    handeSubmit(event) {
        event.preventDefault();
        this.postData();
    }
    
    componentDidMount(){
        //check if site exists
        fetch('https://webcutter-api.herokuapp.com/site/' + this.props.match.params.link)
            .then(res => {if(res.ok) this.setState({exists: true})})
            .catch(err => console.log("Error while fetching data"));
    }

    postData(){
        //edit link with PUT and redirect to home page
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
        .then(response => console.log('Success:', response))
        .then(redirect => this.props.history.push("/"));
    }

    render(){
        return(
            this.state.exists
            ?<div>
                <h5>You are editing site: {this.props.match.params.link} </h5>
                <form className="col s12" onSubmit={this.handeSubmit.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input type="text" className="form-control" placeholder="Full Link"
                                value={this.state.query} onChange={this.handleChange}
                            />
                            <label htmlFor="full_link">Full Link</label>
                            <input id="btn-post" type="submit" className="btn" value="submit"/>
                        </div>
                    </div>
                </form>
            </div>
            : <div><h5>That site does not exist.</h5></div>
        );
    }
}
export default EditLink;