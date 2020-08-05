import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Login.css';
import {Link} from "react-router-dom";
import fire from '../config/Fire';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            invalid: 0
        }

        this.handlePassword = this.handlePassword.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.login = this.login.bind(this);
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

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.username, this.state.password).then((u) => {
            // eslint-disable-next-line no-restricted-globals
            setTimeout(() => this.props.history.push("/connect-four", 500));
        }).catch((error) => {
            console.log(error);
            this.setState({
                invalid: 1
            })
        })
    }

    render() {
        let showInvalid = this.state.invalid;
        return(
            <div className={"animate__animated animate__jackInTheBox"} id={"form-container"}>
                <div className="login-page">
                    <div className="form">
                        <h1 id={"login-title"}>c<span style={{display: "inline-block", marginTop: "-10em"}} className={"RedPieceSmall card-5 Centered"} />nnect</h1>
                        <h1 id={"login-title"}>f<span style={{display: "inline-block"}} className={"YellowPieceSmall card-5 Centered"} />ur</h1>
                        <form className="login-form">
                            <input value={this.state.username} onChange={this.handleUsername} type="email" placeholder="email"/>
                            <input value={this.state.password} onChange={this.handlePassword} type="password" placeholder="password"/>
                            <button onClick={this.login}>login</button>
                            <div className="message" style={{opacity: showInvalid}}>Invalid username or password.</div>
                            <p className="message">Not registered? <Link to={"/register"}>Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login);