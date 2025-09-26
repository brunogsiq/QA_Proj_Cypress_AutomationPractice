/// <reference types="cypress" />

import { tela_Home, tela_Cadastro } from'../../support/pages/elementos';

const Tela_Home = new tela_Home();
const Tela_Cadastro = new tela_Cadastro();

context('Tela Cadastro.', () => 
{
	let contexto = 3;
	let cenario = 3;
	let teste = 1;

	context(`${contexto} - End To End.`, () => 
	{
		describe(`${cenario} - Validações de Fluxos Funcionais.`, () => 
		{
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

			describe('Preenchimento inválido.', () => 
			{
				let complemento = 1;

				it(`${teste}.${complemento} - Validar preenchimento vazio.`, () => 
				{
					//Passo - Dado que não foi inserido conteúdo no campo email para criação de conta,

					//Passo - Quando for realizado um evento de clique no botão 'Create an account',
					Tela_Cadastro.botao_Create_Account
						.click();

					//Passo - Então deve ser exibida a mensagem 'Invalid email address'.
					Tela_Cadastro.mensagem_Email_Invalido
						.should('be.visible')
						.and('have.css', 'background-color', 'rgb(243, 81, 92)')
						Tela_Cadastro.mensagem_Email_Invalido_Texto
						.should('be.visible')
						.and('have.css', 'color', 'rgb(255, 255, 255)')
						.and('have.text', Tela_Cadastro.mensagem_Email_Invalido_Texto_Conteudo);
					
				});

				it(`${teste}.${++complemento} - Validar preenchimento com uma letra.`, () => 
				{
					//Passo - Dado que foi inserido conteúdo no campo email para criação de conta,
					Tela_Cadastro.input_Email_Input
						.type('Q');	

					//Passo - Quando for realizado um evento de clique no botão 'Create an account',
					Tela_Cadastro.botao_Create_Account
						.click();

					//Passo - Então deve ser exibida a mensagem 'Invalid email address'.
					Tela_Cadastro.mensagem_Email_Invalido
						.should('be.visible')
						.and('have.css', 'background-color', 'rgb(243, 81, 92)')
						Tela_Cadastro.mensagem_Email_Invalido_Texto
						.should('be.visible')
						.and('have.css', 'color', 'rgb(255, 255, 255)')
						.and('have.text', Tela_Cadastro.mensagem_Email_Invalido_Texto_Conteudo);
					
				});

				it(`${teste}.${++complemento} - Validar preenchimento com duas letras.`, () => 
				{
					//Passo - Dado que foi inserido conteúdo no campo email para criação de conta,
					Tela_Cadastro.input_Email_Input
						.type('QA');	

					//Passo - Quando for realizado um evento de clique no botão 'Create an account',
					Tela_Cadastro.botao_Create_Account
						.click();

					//Passo - Então deve ser exibida a mensagem 'Invalid email address'.
					Tela_Cadastro.mensagem_Email_Invalido
						.should('be.visible')
						.and('have.css', 'background-color', 'rgb(243, 81, 92)')
						Tela_Cadastro.mensagem_Email_Invalido_Texto
						.should('be.visible')
						.and('have.css', 'color', 'rgb(255, 255, 255)')
						.and('have.text', Tela_Cadastro.mensagem_Email_Invalido_Texto_Conteudo);
					
				});

				it(`${teste}.${++complemento} - Validar preenchimento com um número.`, () => 
				{
					//Passo - Dado que foi inserido conteúdo no campo email para criação de conta,
					Tela_Cadastro.input_Email_Input
						.type('1');	

					//Passo - Quando for realizado um evento de clique no botão 'Create an account',
					Tela_Cadastro.botao_Create_Account
						.click();

					//Passo - Então deve ser exibida a mensagem 'Invalid email address'.
					Tela_Cadastro.mensagem_Email_Invalido
						.should('be.visible')
						.and('have.css', 'background-color', 'rgb(243, 81, 92)')
						Tela_Cadastro.mensagem_Email_Invalido_Texto
						.should('be.visible')
						.and('have.css', 'color', 'rgb(255, 255, 255)')
						.and('have.text', Tela_Cadastro.mensagem_Email_Invalido_Texto_Conteudo);
					
				});

				it(`${teste}.${++complemento} - Validar preenchimento com dois números.`, () => 
				{
					//Passo - Dado que foi inserido conteúdo no campo email para criação de conta,
					Tela_Cadastro.input_Email_Input
						.type('1');	

					//Passo - Quando for realizado um evento de clique no botão 'Create an account',
					Tela_Cadastro.botao_Create_Account
						.click();

					//Passo - Então deve ser exibida a mensagem 'Invalid email address'.
					Tela_Cadastro.mensagem_Email_Invalido
						.should('be.visible')
						.and('have.css', 'background-color', 'rgb(243, 81, 92)')
						Tela_Cadastro.mensagem_Email_Invalido_Texto
						.should('be.visible')
						.and('have.css', 'color', 'rgb(255, 255, 255)')
						.and('have.text', Tela_Cadastro.mensagem_Email_Invalido_Texto_Conteudo);
					
				});

				it(`${teste}.${++complemento} - Validar preenchimento com um caracter especial.`, () => 
				{
					//Passo - Dado que foi inserido conteúdo no campo email para criação de conta,
					Tela_Cadastro.input_Email_Input
						.type('!');	

					//Passo - Quando for realizado um evento de clique no botão 'Create an account',
					Tela_Cadastro.botao_Create_Account
						.click();

					//Passo - Então deve ser exibida a mensagem 'Invalid email address'.
					Tela_Cadastro.mensagem_Email_Invalido
						.should('be.visible')
						.and('have.css', 'background-color', 'rgb(243, 81, 92)')
						Tela_Cadastro.mensagem_Email_Invalido_Texto
						.should('be.visible')
						.and('have.css', 'color', 'rgb(255, 255, 255)')
						.and('have.text', Tela_Cadastro.mensagem_Email_Invalido_Texto_Conteudo);
					
				});

				it(`${teste}.${++complemento} - Validar preenchimento com dois caracter especial.`, () => 
				{
					//Passo - Dado que foi inserido conteúdo no campo email para criação de conta,
					Tela_Cadastro.input_Email_Input
						.type('!?');	

					//Passo - Quando for realizado um evento de clique no botão 'Create an account',
					Tela_Cadastro.botao_Create_Account
						.click();

					//Passo - Então deve ser exibida a mensagem 'Invalid email address'.
					Tela_Cadastro.mensagem_Email_Invalido
						.should('be.visible')
						.and('have.css', 'background-color', 'rgb(243, 81, 92)')
						Tela_Cadastro.mensagem_Email_Invalido_Texto
						.should('be.visible')
						.and('have.css', 'color', 'rgb(255, 255, 255)')
						.and('have.text', Tela_Cadastro.mensagem_Email_Invalido_Texto_Conteudo);
					
				});

				it(`${teste}.${++complemento} - Validar preenchimento com letra & @.`, () => 
				{
					//Passo - Dado que foi inserido conteúdo no campo email para criação de conta,
					Tela_Cadastro.input_Email_Input
						.type('QA@');	

					//Passo - Quando for realizado um evento de clique no botão 'Create an account',
					Tela_Cadastro.botao_Create_Account
						.click();

					//Passo - Então deve ser exibida a mensagem 'Invalid email address'.
					Tela_Cadastro.mensagem_Email_Invalido
						.should('be.visible')
						.and('have.css', 'background-color', 'rgb(243, 81, 92)')
						Tela_Cadastro.mensagem_Email_Invalido_Texto
						.should('be.visible')
						.and('have.css', 'color', 'rgb(255, 255, 255)')
						.and('have.text', Tela_Cadastro.mensagem_Email_Invalido_Texto_Conteudo);
					
				});

				it(`${teste}.${++complemento} - Validar preenchimento com número & @.`, () => 
				{
					//Passo - Dado que foi inserido conteúdo no campo email para criação de conta,
					Tela_Cadastro.input_Email_Input
						.type('01@');	

					//Passo - Quando for realizado um evento de clique no botão 'Create an account',
					Tela_Cadastro.botao_Create_Account
						.click();

					//Passo - Então deve ser exibida a mensagem 'Invalid email address'.
					Tela_Cadastro.mensagem_Email_Invalido
						.should('be.visible')
						.and('have.css', 'background-color', 'rgb(243, 81, 92)')
						Tela_Cadastro.mensagem_Email_Invalido_Texto
						.should('be.visible')
						.and('have.css', 'color', 'rgb(255, 255, 255)')
						.and('have.text', Tela_Cadastro.mensagem_Email_Invalido_Texto_Conteudo);
					
				});

				it(`${teste}.${++complemento} - Validar preenchimento com caracter especial & @.`, () => 
				{
					//Passo - Dado que foi inserido conteúdo no campo email para criação de conta,
					Tela_Cadastro.input_Email_Input
						.type('!?@');	

					//Passo - Quando for realizado um evento de clique no botão 'Create an account',
					Tela_Cadastro.botao_Create_Account
						.click();

					//Passo - Então deve ser exibida a mensagem 'Invalid email address'.
					Tela_Cadastro.mensagem_Email_Invalido
						.should('be.visible')
						.and('have.css', 'background-color', 'rgb(243, 81, 92)')
						Tela_Cadastro.mensagem_Email_Invalido_Texto
						.should('be.visible')
						.and('have.css', 'color', 'rgb(255, 255, 255)')
						.and('have.text', Tela_Cadastro.mensagem_Email_Invalido_Texto_Conteudo);
					
				});

				it(`${teste}.${++complemento} - Validar preenchimento com letra & @ & server.`, () => 
				{
					//Passo - Dado que foi inserido conteúdo no campo email para criação de conta,
					Tela_Cadastro.input_Email_Input
						.type('QA@teste');	

					//Passo - Quando for realizado um evento de clique no botão 'Create an account',
					Tela_Cadastro.botao_Create_Account
						.click();

					//Passo - Então deve ser exibida a mensagem 'Invalid email address'.
					Tela_Cadastro.mensagem_Email_Invalido
						.should('be.visible')
						.and('have.css', 'background-color', 'rgb(243, 81, 92)')
						Tela_Cadastro.mensagem_Email_Invalido_Texto
						.should('be.visible')
						.and('have.css', 'color', 'rgb(255, 255, 255)')
						.and('have.text', Tela_Cadastro.mensagem_Email_Invalido_Texto_Conteudo);
					
				});

				it(`${teste}.${++complemento} - Validar preenchimento com número & @ & server.`, () => 
				{
					//Passo - Dado que foi inserido conteúdo no campo email para criação de conta,
					Tela_Cadastro.input_Email_Input
						.type('01@teste');	

					//Passo - Quando for realizado um evento de clique no botão 'Create an account',
					Tela_Cadastro.botao_Create_Account
						.click();

					//Passo - Então deve ser exibida a mensagem 'Invalid email address'.
					Tela_Cadastro.mensagem_Email_Invalido
						.should('be.visible')
						.and('have.css', 'background-color', 'rgb(243, 81, 92)')
						Tela_Cadastro.mensagem_Email_Invalido_Texto
						.should('be.visible')
						.and('have.css', 'color', 'rgb(255, 255, 255)')
						.and('have.text', Tela_Cadastro.mensagem_Email_Invalido_Texto_Conteudo);
					
				});

				it(`${teste}.${++complemento} - Validar preenchimento com caracter especial & @ & server.`, () => 
				{
					//Passo - Dado que foi inserido conteúdo no campo email para criação de conta,
					Tela_Cadastro.input_Email_Input
						.type('!?@teste');	

					//Passo - Quando for realizado um evento de clique no botão 'Create an account',
					Tela_Cadastro.botao_Create_Account
						.click();

					//Passo - Então deve ser exibida a mensagem 'Invalid email address'.
					Tela_Cadastro.mensagem_Email_Invalido
						.should('be.visible')
						.and('have.css', 'background-color', 'rgb(243, 81, 92)')
						Tela_Cadastro.mensagem_Email_Invalido_Texto
						.should('be.visible')
						.and('have.css', 'color', 'rgb(255, 255, 255)')
						.and('have.text', Tela_Cadastro.mensagem_Email_Invalido_Texto_Conteudo);
					
				});
			});

			describe.only('Preenchimento válido.', () => 
			{
				let complemento = 1;

				it(`${teste}.${++complemento} - Validar preenchimento com letra & @ & server & .com.`, () => 
				{
					//Passo - Dado que foi inserido conteúdo no campo email para criação de conta,
					Tela_Cadastro.input_Email_Input
						.type('QA@teste.com');	

					//Passo - Quando for realizado um evento de clique no botão 'Create an account',
					Tela_Cadastro.botao_Create_Account
						.click();

					//Passo - Então deve ser exibida o modal de informações para criação de conta.
					Tela_Cadastro.modal_Cadastro_InfoPessoais
						.should('be.visible');
				});

				it(`${teste}.${++complemento} - Validar preenchimento com número & @ & server & .com.`, () => 
				{
					//Passo - Dado que foi inserido conteúdo no campo email para criação de conta,
					Tela_Cadastro.input_Email_Input
						.type('01@teste.com');	

					//Passo - Quando for realizado um evento de clique no botão 'Create an account',
					Tela_Cadastro.botao_Create_Account
						.click();

					//Passo - Então deve ser exibida o modal de informações para criação de conta.
					Tela_Cadastro.modal_Cadastro_InfoPessoais
						.should('be.visible');
				});

				it(`${teste}.${++complemento} - Validar preenchimento com caracter especial & @ & server & .com.`, () => 
				{
					//Passo - Dado que foi inserido conteúdo no campo email para criação de conta,
					Tela_Cadastro.input_Email_Input
						.type('!?@teste.com');	

					//Passo - Quando for realizado um evento de clique no botão 'Create an account',
					Tela_Cadastro.botao_Create_Account
						.click();

					//Passo - Então deve ser exibida o modal de informações para criação de conta.
					Tela_Cadastro.modal_Cadastro_InfoPessoais
						.should('be.visible');
				});
			});
		});
    });
});