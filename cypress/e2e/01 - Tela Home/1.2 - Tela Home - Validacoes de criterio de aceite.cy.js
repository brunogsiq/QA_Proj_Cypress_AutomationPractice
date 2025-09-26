/// <reference types="cypress" /> 

import { tela_Home, tela_Cadastro } from'../../support/pages/elementos';

const Tela_Home = new tela_Home();
const Tela_Cadastro = new tela_Cadastro();

context('Tela Home.', () => 
{
	let contexto = 2;
	let cenario = 2;
	let teste = 1;

	context(`${contexto} - Critérios de aceite.`, () => 
	{
		describe(`${cenario} - Validações Comportamentais.`, () => 
		{
			let complemento = 1;

			beforeEach(() =>
			{
				cy.visit("/");
			});

			//Se houver
			afterEach(() =>
			{
				//Executa depois de cada it
				cy.clearAllLocalStorage();
				cy.clearAllCookies();
				cy.clearAllSessionStorage();
			});

			it(`${teste}.${complemento} - Validar visualização da tela inicial.`, () => 
			{
				//Passo - Dado que foi inserida a url do projeto no navegador,
				cy.visit("/");

				//Passo - Quando for carregada a tela do sistema,
				cy.waitUntil(() => 
					Tela_Home.logotipo
						.should('be.visible'));

				//Passo - Então deve ser exibida o logotipo na tela inicial do sistema.
				Tela_Home.logotipo
					.should('be.visible');
			});

			it(`${teste}.${++complemento} - Validar acesso a tela de Cadastro.`, () => 
			{
				//Passo - Dado que estou visualizando a tela inicial do sistema,
				
				//Passo - Quando realizar um evento de clique na opção 'Sign in',
				Tela_Home.botao_SignIn
					.click();

				//Passo - Então deve ser exibida a tela de cadastro do sistema.
				Tela_Cadastro.titulo_Tela_Cadastro
					.should('be.visible');
			});
		});
	});
});