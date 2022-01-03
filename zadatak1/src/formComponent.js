import React from "react";

const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = /^[a-zA-Z0-9!@#$%^&*]{8,}$/;
const usernameValidator = /^[a-zA-Z0-9!@#$%^&*]{6,12}$/;

class FormComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            firstName: "",
            lastName: "",
            emailAddress: "",
            password: "",
            passwordConfirmation: "",
            userNameError: "",
            firstNameError: "",
            emailAddressError: "",
            passwordError: "",
            passwordConfirmationError: "",
            isFormSubmitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateUserName = this.validateUserName.bind(this);
        this.validateFirstName = this.validateFirstName.bind(this);
        this.validateLastName = this.validateLastName.bind(this);
        this.validateEmailAddress = this.validateEmailAddress.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.validatePasswordConfirmation = this.validatePasswordConfirmation.bind(
            this
        );
        this.validateField = this.validateField.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });

        return;
    }

    handleBlur(event) {
        const { name } = event.target;

        this.validateField(name);
        return;
    }

    async handleSubmit(event) {
        event.preventDefault();
        let formFields = [
            "userName",
            "firstName",
            "lastName",
            "emailAddress",
            "password",
            "passwordConfirmation"
        ];
        let isValid = true;
        formFields.forEach(field => {
            isValid = this.validateField(field) && isValid;
        });

        if (isValid) this.setState({ isFormSubmitted: true });
        else this.setState({ isFormSubmitted: false });

        const response = await fetch('https://jsonblob.com/api/jsonBlob/927203771570995200', {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'redirect': 'follow'
            },
            body: JSON.stringify(this.state)
        })

        return this.state.isFormSubmitted;
    }

    validateField(name) {
        let isValid = false;

        if (name === "userName") isValid = this.validateUserName();
        else if (name === "firstName") isValid = this.validateFirstName();
        else if (name === "lastName") isValid = this.validateLastName();
        else if (name === "emailAddress") isValid = this.validateEmailAddress();
        else if (name === "password") isValid = this.validatePassword();
        else if (name === "passwordConfirmation")
            isValid = this.validatePasswordConfirmation();
        return isValid;
    }

    validateUserName() {
        let userNameError = "";
        const value = this.state.userName;
        if (value.trim() === "") userNameError = "User name is required";//trim removes whitespaces
        else if (!usernameValidator.test(value))
            userNameError =
                "Username must be at least 6 characters long and less than 12 characters";
        this.setState({
            userNameError
        });
        return userNameError === "";


    }

    validateFirstName() {
        let firstNameError = "";
        const value = this.state.firstName;
        if (value.trim() === "") firstNameError = "First Name is required";//trim removes whitespaces

        this.setState({
            firstNameError
        });
        return firstNameError === "";//firstnameisrequired
    }

    validateLastName() {
        let lastNameError = "";
        const value = this.state.lastName;
        if (value.trim() === "") lastNameError = "Last Name is required";

        this.setState({
            lastNameError
        });
        return lastNameError === "";//lastnameisrequired
    }

    validateEmailAddress() {
        let emailAddressError = "";
        const value = this.state.emailAddress;
        if (value.trim === "") emailAddressError = "Email Address is required";
        else if (!emailValidator.test(value))
            emailAddressError = "Email is not valid";

        this.setState({
            emailAddressError
        });
        return emailAddressError === "";
    }

    validatePassword() {
        let passwordError = "";
        const value = this.state.password;
        if (value.trim === "") passwordError = "Password is required";
        else if (!passwordValidator.test(value))
            passwordError =
                "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";

        this.setState({
            passwordError
        });
        return passwordError === "";
    }

    validatePasswordConfirmation() {
        let passwordConfirmationError = "";
        if (this.state.password !== this.state.passwordConfirmation)
            passwordConfirmationError = "Password does not match Confirmation";

        this.setState({
            passwordConfirmationError
        });
        return passwordConfirmationError === "";
    }





    render() {
        return (
            <div className="main" >
                <h3>SignUp Form</h3>
                {this.state.isFormSubmitted ? (
                    <div className="details">
                        <h3>Thanks for signing up, find your details below:</h3>
                        <div>User Name: {this.state.userName}</div>
                        <div>First Name: {this.state.firstName}</div>
                        <div>Last Name: {this.state.lastName}</div>
                        <div>Email Address: {this.state.emailAddress}</div>
                    </div>
                ) : (
                    <div style={{ textAlign: "center" }} className="formContainer">
                        <form onSubmit={this.handleSubmit} >
                            <input
                                type="text"
                                placeholder="User Name"
                                name="userName"
                                value={this.state.userName}
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                autoComplete="off"
                            />
                            <br />
                            {this.state.userNameError && (
                                <div className="errorMsg">{this.state.userNameError}</div>
                            )}
                            <input
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                autoComplete="off"
                            />
                            <br />
                            {this.state.firstNameError && (
                                <div className="errorMsg">{this.state.firstNameError}</div>
                            )}
                            <input
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                value={this.state.lastName}
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                autoComplete="off"
                            />
                            <br />
                            {this.state.lastNameError && (
                                <div className="errorMsg">{this.state.lastNameError}</div>
                            )}
                            <input
                                type="email"
                                placeholder="Email Address"
                                name="emailAddress"
                                value={this.state.emailAddress}
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                autoComplete="off"
                            />
                            <br />
                            {this.state.emailAddressError && (
                                <div className="errorMsg">{this.state.emailAddressError}</div>
                            )}
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                autoComplete="off"
                            />
                            <br />
                            {this.state.passwordError && (
                                <div className="errorMsg">{this.state.passwordError}</div>
                            )}
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                name="passwordConfirmation"
                                value={this.state.passwordConfirmation}
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                autoComplete="off"
                            />
                            <br />
                            {this.state.passwordConfirmationError && (
                                <div className="errorMsg">
                                    {this.state.passwordConfirmationError}
                                </div>
                            )}
                            <button>Signup</button>
                        </form>
                    </div>
                )}
            </div>
        );
    }
}

export default FormComponent;