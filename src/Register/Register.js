import React from 'react';
import './Register.css';
import {Link} from "react-router-dom";
import fire from '../config/Fire'
import { withRouter } from 'react-router-dom';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }

        this.handlePassword = this.handlePassword.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.signup = this.signup.bind(this);
    }

    handleUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    handlePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.username, this.state.password).then((u) => {
            console.log(u);
            setTimeout(() => this.props.history.push("/connect-four", 500));
        }).catch((error) => {
            console.log(error);
        })
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return(
            <div className={"animate__animated animate__jackInTheBox"} id={"form-container"}>
                <div className="login-page">
                    <div className="form">
                        <form className="login-form">
                            <input value={this.state.username} onChange={this.handleUsername} type="text" placeholder="email"/>
                            <input value={this.state.password} onChange={this.handlePassword} type="password" placeholder="password"/>
                            <button onClick={this.signup}>create</button>
                            <p className="message">Already registered? <Link to={"/login"}>Sign In</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Register);