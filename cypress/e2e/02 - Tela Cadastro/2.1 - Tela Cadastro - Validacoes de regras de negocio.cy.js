/// <reference types="cypress" />

import { tela_Home, tela_Cadastro } from '../../support/pages/elementos';

const Tela_Home = new tela_Home();
const Tela_Cadastro = new tela_Cadastro();

context('Tela Cadastro.', () => 
{
	let contexto = 1;
	let cenario = 1;
	let teste = 1;

    context(`${contexto} - Regras de negócio.`, () => 
	{
		describe(`${cenario} - Validações de Acesso ao projeto.`, () => 
		{
			let complemento = 1;

			beforeEach(() =>
			{
				cy.visit("/");

				Tela_Home.botao_SignIn
					.click();
			});

			afterEach(() =>
			{
				cy.clearAllLocalStorage();
				cy.clearAllCookies();
				cy.clearAllSessionStorage();
			});

			it(`${teste}.${complemento} - Validar Url do projeto.`, () => 
			{
				//Passo - Dado que foi acessada a tela de cadastro do sistema,

				//Passo - Quando for carregada a tela do sistema,
				cy.waitUntil(() => 
					Tela_Cadastro.titulo_Tela_Cadastro
						.should('be.visible'));

				//Passo - Então a url deve ser:
				cy.url()
					.should('be.equal', 'http://www.automationpractice.pl/index.php?controller=authentication&back=my-account');
			});
		});
	});
});