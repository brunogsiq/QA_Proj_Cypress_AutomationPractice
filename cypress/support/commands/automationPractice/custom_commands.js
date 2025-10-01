/// <reference types="cypress" /> 

import 'cypress-wait-until';

import { tela_Login } from '../../pages/elementos';

const Tela_Login = new tela_Login();

Cypress.Commands.add("loginValido", () => 
{
    cy.fixture('usuario.json').then((data) =>
    { 
        //Dado que foi inserido dadsos válidos para e-mail e senha
        Tela_Login.input_Email
            .type(data.login);	
            Tela_Login.input_Password
                .type(data.pass, { log: false });

        //Quando clicar em Sign in
        Tela_Login.botao_SignIn
            .click();

        //Então o sistema deverá apresentar a tela My account
        cy.url()
            .should('be.equal', 'http://www.automationpractice.pl/index.php?controller=my-account');
					});
});