/// <reference types="cypress"/>

import {LoginInformation} from "../support/commands"

const logininformation = new LoginInformation()

const Mail = 'abcmail@gmail.com'
const MailAdress = '#user_email'
const Password = '5uperSecret'
const PasswordAdress = '#user_password'
const NewPassword = '5upersecret'
const UCMail = 'Abcmail@gmail.com'
const NewMail = 'abcdmail@gmail.com'

describe('Login Tests',function(){

    beforeEach(function(){cy.visit('https://staging.paymi.com/')})

    it('LoginCorrect', function(){
        logininformation.EnterMail(Mail, MailAdress)
        logininformation.EnterPass(Password, PasswordAdress)
        cy.get('#log_in').click()
    })

    it('LoginIncorrectPassword', function(){
        logininformation.EnterMail(Mail, MailAdress)
        logininformation.EnterPass(NewPassword, PasswordAdress)
        cy.get('#log_in').click()
        cy.get('.error-box__errors > li').should('be.visible')
    })

    it('LoginUppercase', function(){
        logininformation.EnterMail(UCMail, MailAdress)
        logininformation.EnterPass(Password, PasswordAdress)
        cy.get('#log_in').click()
    })

    it('LoginIncorrectMail', function(){
        logininformation.EnterMail(NewMail, MailAdress)
        logininformation.EnterPass(Password, PasswordAdress)
        cy.get('#log_in').click()
        cy.get('.error-box__errors > li').should('be.visible')
    })
})
