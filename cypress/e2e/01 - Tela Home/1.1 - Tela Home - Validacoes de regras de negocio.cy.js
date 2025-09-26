/// <reference types="cypress" />

import { tela_Home } from '../../support/pages/elementos';

const Tela_Home = new tela_Home();

context('Tela Home.', () => 
{
	let contexto = 1;
	let cenario = 1;
	let teste = 1;

    context(`${contexto} - Regras de negócio.`, () => 
	{
		describe(`${cenario} - Validações de Acesso ao projeto.`, () => 
		{
			let complemento = 1;

			afterEach(() =>
			{
				cy.clearAllLocalStorage();
				cy.clearAllCookies();
				cy.clearAllSessionStorage();
			});

			it(`${teste}.${complemento} - Validar Url do projeto.`, () => 
			{
				//Passo - Dado que foi inserida a url do projeto no navegador,
				cy.visit("/");

				//Passo - Quando for carregada a tela do sistema,
				cy.waitUntil(() => 
					Tela_Home.logotipo.should('be.visible'));

				//Passo - Então a url deve ser:
				cy.url()
					.should('be.equal', 'http://www.automationpractice.pl/index.php');
			});
		});
	});
});