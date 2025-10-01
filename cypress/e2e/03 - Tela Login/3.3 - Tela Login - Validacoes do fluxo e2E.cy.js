/// <reference types="cypress" />

import { tela_Home, tela_Login } from'../../support/pages/elementos';

const Tela_Home = new tela_Home();
const Tela_Login = new tela_Login();

context('Tela Login.', () => 
{
	let contexto = 3;
	let cenario = 3;
	let teste = 1;

	context(`${contexto} - End To End.`, () => 
	{
		describe(`${cenario} - Validações de Fluxos Funcionais.`, () => 
		{
			afterEach(() =>
			{
				cy.clearAllLocalStorage();
				cy.clearAllCookies();
				cy.clearAllSessionStorage();
			});

			describe('Preenchimento válido.', () => 
			{
				let complemento = 1;

				beforeEach(() =>
				{
					cy.visit("/");

					Tela_Home.botao_SignIn
						.click();
				});

				it(`${teste}.${complemento} - Validar login com sucesso.`, () => 
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
			});
		});
    });
});