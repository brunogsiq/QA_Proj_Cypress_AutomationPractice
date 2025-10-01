/// <reference types="cypress" />

import { tela_Home, tela_Login, tela_YourAdress } from'../../support/pages/elementos';

const Tela_Home = new tela_Home();
const Tela_Login = new tela_Login();
const Tela_YourAdress = new tela_YourAdress();

import { faker } from '@faker-js/faker'

const randomName = faker.person.firstName();
const randomLastName = faker.person.lastName();
const randomCompany = faker.company.name();
const randomAddress = faker.location.streetAddress();
const randomCity = faker.location.city();

context('Tela Your Adress.', () => 
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

					cy.loginValido();

					Tela_Login.button_AddMyFirstAddress
						.click();

					cy.waitUntil(() => 
						cy.get('h1')
							.should('be.visible'));	
				});

				it(`${teste}.${complemento} - Validar acesso a tela Your Adress.`, () => 
				{
					//Passo - Dado que foi realizado um evento de clique na opção Add my Firts Adress,

					//Passo - Quando o sistema carregar,,

					//Passo - Então deve ser exibida a tela Your Adress do sistema.
					cy.url()
						.should('be.equal', 'http://www.automationpractice.pl/index.php?controller=address');
						Tela_YourAdress.titulo_YourAdress
							.should('be.visible');
				});

				it(`${teste}.${complemento} - Validar preenchimento válido do formulário.`, () => 
				{
					// Passo - Dado que o formulário foi preenchido com dados válidos
					cy.fixture('usuario.json').then((data) =>
					{
						cy.get('#firstname')
							.clear()
								.type(data.nome);
								cy.get('#lastname')
									.clear()
									.type(data.sobrenome);
									cy.get('#company')
										.clear()
										.type(randomCompany);
										cy.get('#address1')
											.clear()
											.type(randomAddress);
											cy.get('#city')
												.clear()
												.type(randomCity);
												cy.get('#id_state')
													.select('California');
													cy.get('#postcode')
														.clear()
														.type('00000');
														cy.get('#id_country')
															.select('United States');
															cy.get('#phone')
																.clear()
																.type('1212555-1234');
																cy.get('#phone_mobile')
																	.clear()
																	.type(12125551234);
					});

					// Passo - Quando clicar em Save,
					cy.get('#submitAddress')
						.click();

					// Passo - Então o sistema deverá apresentar a tela My account
					cy.get('.last_item')
						.should('be.visible');
				});
			});
		});
    });
});