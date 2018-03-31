import React, {Component} from 'react';

class EditLink extends Component {
    constructor(props){
        super(props);
        this.state = {
            exists: false
        }
    }

    componentDidMount(){
        fetch('https://webcutter-api.herokuapp.com/site/' + this.props.match.params.link)
            .then(res => {if(res.ok) this.setState({exists: true})})
            .catch(err => console.log("Error while fetching data"));
    }

    render(){
        return(
            this.state.exists
            ?<div>
                <h5>You are editing site: {this.props.match.params.link} </h5>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="Full Link" id="full_link" type="text" className="validate" />
                            <label htmlFor="full_link">Full Link</label>
                        </div>
                    </div>
                </form>
            </div>
            : <div><h5>That site does not exists.</h5></div>
        );
    }
}
export default EditLink;