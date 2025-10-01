/// <reference types="cypress" />

import { faker } from '@faker-js/faker'

const randomName = faker.person.firstName();
const randomLastName = faker.person.lastName();
const randomMail = faker.internet.email();

import { tela_Home, tela_Cadastro, tela_InformacoesPessoais, tela_CadastroSucesso } from'../../support/pages/elementos';

const Tela_Home = new tela_Home();
const Tela_Cadastro = new tela_Cadastro();
const Tela_InformacoesPessoais = new tela_InformacoesPessoais();
const Tela_CadastroSucesso = new tela_CadastroSucesso();

context('Tela Cadastro.', () => 
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

			describe('Preenchimento inválido.', () => 
			{
				let complemento = 1;

				beforeEach(() =>
				{
					cy.visit("/");

					Tela_Home.botao_SignIn
						.click();
				});

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

			describe('Preenchimento válido - Etapa E-mail.', () => 
			{
				let complemento = 1;

				beforeEach(() =>
				{
					cy.visit("/");

					Tela_Home.botao_SignIn
						.click();
				});

				it(`${teste}.${complemento} - Validar preenchimento com letra & @ & server & .com.`, () => 
				{
					//Passo - Dado que foi inserido conteúdo no campo email para criação de conta,
					Tela_Cadastro.input_Email_Input
						.type('QAQA@teste.com');	

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

			describe('Preenchimento válido - Etapa Informações pessoais.', () => 
			{
				let complemento = 1;

				beforeEach(() =>
				{
					cy.visit("/")
						Tela_Home.botao_SignIn
							.click();

					Tela_Cadastro.input_Email_Input
							.type(randomName + randomLastName + '@server.com');
							Tela_Cadastro.botao_Create_Account
								.click();	
				});

				it(`${teste}.${complemento} - Validar preenchimento do formulário com sucesso.`, () => 
				{ 
					//Passo - Dado que o formulário foi preenchido com dados válidos
					Tela_InformacoesPessoais.opcao_Mr
						.check();
					Tela_InformacoesPessoais.input_PrimeiroNome
						.clear()
						.type(randomName);
						Tela_InformacoesPessoais.input_Sobrenome
							.clear()
							.type(randomLastName);
							Tela_InformacoesPessoais.input_Email
								.should('be.visible')
								.and('have.attr', 'value', randomName + randomLastName + '@server.com');
								Tela_InformacoesPessoais.input_Senha
									.clear()
									.type('123456QA');
									Tela_InformacoesPessoais.select_Dia
										.select('1');
										Tela_InformacoesPessoais.select_Mes
											.select('November');
											Tela_InformacoesPessoais.select_Ano
												.select('1986');

					//Passo - Quando clicar na opção 'Register',
					Tela_InformacoesPessoais.botao_Register
						.click();

					//Passo - Então deve ser exibida
					cy.waitUntil(() =>
						Tela_CadastroSucesso.titulo_Tela
							.should('be.visible'));
							Tela_CadastroSucesso.titulo_Tela
								.should('be.visible')
								.and('have.text', Tela_CadastroSucesso.titulo_Tela_Conteudo);

							cy.url()
								.should('be.equal', 'http://www.automationpractice.pl/index.php?controller=my-account');

					const user = {
						nome: randomName,
						sobrenome: randomLastName,
						login: randomName + randomLastName + '@server.com',
						pass: '123456QA'
					};
					cy.writeFile('cypress/fixtures/usuario.json', user);
				});
			});
		});
    });
});