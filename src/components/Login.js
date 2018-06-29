import React from "react"
import { render } from "react-dom"
import "../css/LoginPage.css"
class SignUp extends React.Component {
    userNameField = React.createRef();
    passwordField = React.createRef();
    loginFormSubmit = event => {
       event.preventDefault();
        const loggedIn = {
            userNameFieldValue: this.userNameField.value.value,
            passwordFieldValue: this.passwordField.value.value,
        }
        const setRole = (id) => {
            if (!(/^\d{5,6}$/.test(id))) {
                return false;
            } else if (/^22/.test(id)) {
                loggedIn.role = `panelist`;
                // this.props.history.push(`/`);
            } else if (/^11/.test(id)) {
                loggedIn.role = `supervisor`;
                // this.props.history.push(`/`);
            } else if (/^33/.test(id)) {
                loggedIn.role = `hiring`;
                // this.props.history.push(`/`);
            }
        }
        this.props.loggedInPerson(loggedIn);
        const sampleData = this.props.data;
        const id = parseInt(loggedIn.userNameFieldValue);

        for (let index in sampleData) {
            if (id === parseInt(sampleData[index].oracleId)) {
                setRole(id);
                break;
            }
        }

    }
    render() {
        return (
            <div className="signin-wrapper">
                <legend className="signin-heading">Sign In</legend>
                <form className="content-box" onSubmit={this.loginFormSubmit} className="content-box">
                    <label htmlFor="UserName">Username</label>
                    <input type="text" name="username" id="username" className="input-box" ref={this.userNameField} placeholder="Enter your username" required />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" className="input-box" ref={this.passwordField} placeholder="Enter your Password" required />
                    <button id="signin-button" type="submit">LOGIN</button>
                </form>
            </div>
        )
    }
}
export default SignUp;

