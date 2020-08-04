import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Login.css';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return(
            <div id={"form-container"}>
                <div className="login-page">
                    <div className="form">
                        <form className="register-form">
                            <input type="text" placeholder="name"/>
                            <input type="password" placeholder="password"/>
                            <input type="text" placeholder="email address"/>
                            <button>create</button>
                            <p className="message">Already registered? <a href="#">Sign In</a></p>
                        </form>
                        <form className="login-form">
                            <input type="text" placeholder="username"/>
                            <input type="password" placeholder="password"/>
                            <button>login</button>
                            <p className="message">Not registered? <a href="#">Create an account</a></p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}