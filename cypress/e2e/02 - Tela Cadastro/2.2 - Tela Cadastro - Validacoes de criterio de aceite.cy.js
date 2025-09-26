/// <reference types="cypress" /> 

import { tela_Home, tela_Cadastro } from'../../support/pages/elementos';

const Tela_Home = new tela_Home();
const Tela_Cadastro = new tela_Cadastro();

context('Tela Cadastro', () => 
{
	let contexto = 2;
	let cenario = 2;
	let teste = 1;

	context(`${contexto} - Critérios de aceite.`, () => 
	{
		describe(`${cenario} - Validações Comportamentais.`, () => 
		{
			beforeEach(() =>
			{
				cy.visit("/");

				Tela_Home.botao_SignIn
					.click();
			});

			afterEach(() =>
			{
				//Executa depois de cada it
				cy.clearAllLocalStorage();
				cy.clearAllCookies();
				cy.clearAllSessionStorage();
			});

			describe('Modal de cadastro.', () => 
			{
				let complemento = 1;

				it(`${teste}.${complemento} - Validar visualização do modal da tela cadastro.`, () => 
				{
					//Passo - Dado que a tela de cadastro foi acessada,
					
					//Passo - Quando a tela for carregada,',
					cy.waitUntil(() => 
						Tela_Cadastro.modal_Cadastro
							.should('be.visible'));

					//Passo - Então o sistema deverá exibir um modal de cadastro.
					Tela_Cadastro.modal_Cadastro
						.should('be.visible')
				});

				it(`${teste}.${++complemento} - Validar conteúdo do modal da tela cadastro.`, () => 
				{
					//Passo - Dado que estou visualizando o modal da tela cadastro do sistema,
					
					//Passo - Quando validar seu conteúdo,',
					cy.waitUntil(() => 
						Tela_Cadastro.modal_Cadastro
							.should('be.visible'));

					//Passo - Então deve ser exibido de acordo com a documentação.
					Tela_Cadastro.modal_Cadastro
						.should('be.visible');

					Tela_Cadastro.modal_Cadastro_Titulo
						.should('be.visible')
						.and('have.text', Tela_Cadastro.modal_Cadastro_Titulo_Texto)
						.and('have.css', 'color', 'rgb(85, 84, 84)');

					Tela_Cadastro.subtitulo_Cadastro
						.should('be.visible')
						.and('have.text', Tela_Cadastro.subtitulo_Cadastro_Texto)
						.and('have.css', 'color', 'rgb(119, 119, 119)');

					Tela_Cadastro.input_Email_Titulo
						.should('be.visible')
						.and('have.text', Tela_Cadastro.input_Email_Titulo_Texto)
						.and('have.css', 'color', 'rgb(51, 51, 51)');
						Tela_Cadastro.input_Email_Input
							.should('be.visible')
							.and('have.attr', 'type', 'text')
							.and('have.attr', 'data-validate', 'isEmail')
							.and('have.attr', 'name', 'email_create')
							.and('be.empty');

					Tela_Cadastro.botao_Create_Account
						.should('be.visible')
						.and('have.attr', 'type', 'submit')
						.and('have.attr', 'name', 'SubmitCreate')
						.and('have.css', 'background-image', 'linear-gradient(rgb(253, 170, 2), rgb(254, 151, 2))')
						Tela_Cadastro.botao_Create_Account_Icone
							.should('be.visible')
							.and('have.css', 'color', 'rgb(255, 255, 255)'	);
							Tela_Cadastro.botao_Create_Account_Texto
								.should('be.visible')
								.and('contain.text', Tela_Cadastro.botao_Create_Account_Texto_Conteudo)
								.and('have.css', 'color', 'rgb(255, 255, 255)');
				});
			});				
		});
	});
});