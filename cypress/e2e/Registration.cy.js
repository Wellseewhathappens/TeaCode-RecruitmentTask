/// <reference types="cypress"/>

import {LoginInformation} from "../support/commands"

const logininformation = new LoginInformation()

const Mail = 'abcmail@gmail.com'
const MailAdress = '#user_email'
const Password = '5uperSecret'
const PasswordAdress = '#user_password'

it('Register User', function(){   
    cy.visit('https://staging.paymi.com/')
    cy.get(':nth-child(2) > .text-link').click()
    logininformation.EnterMail(Mail, MailAdress)
    logininformation.EnterPass(Password, PasswordAdress)
    cy.get('#terms-label').click()
    cy.get('.btn').click() 
})