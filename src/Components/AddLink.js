import React, {Component} from 'react';

class AddLink extends Component {
    constructor(props){
        super(props);
        this.state = {
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

    postData(){
        //add new link with post
        fetch('https://webcutter-api.herokuapp.com/sites', {
            method: 'POST',
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
            <div>
                <h4>Enter site name:</h4>
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
        )
    }
}

export default AddLink;