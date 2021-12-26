import React from "react";

const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator=/^[a-zA-Z0-9!@#$%^&*]{8,}$/;

class FormComponent extends React.Component{
    constructor(){
        super();
        this.state={
            userName="",
            firstName="",
            lastName="",
            emailAdress="",
            password="",
            passwordConfirmation="",
            userNameError="",
            emailAdressError="",
            passwordError="",
            passwordConfirmationError="",
            isFormSubmitted=false

        };
        

    }
 





}