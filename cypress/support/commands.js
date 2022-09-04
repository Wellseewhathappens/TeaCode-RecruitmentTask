export class LoginInformation{
    
    EnterMail(Mail, Adress){
        cy.get(Adress).type(Mail)
    }

    EnterPass(Password, Adress){
        cy.get(Adress).type(Password)
    }
}