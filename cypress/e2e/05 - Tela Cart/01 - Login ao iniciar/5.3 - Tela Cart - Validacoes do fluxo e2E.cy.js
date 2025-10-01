/// <reference types="cypress" />

import { tela_Home, tela_Login, tela_YourAdress } from'../../../support/pages/elementos';

const Tela_Home = new tela_Home();
const Tela_Login = new tela_Login();
const Tela_YourAdress = new tela_YourAdress();

import { faker } from '@faker-js/faker'


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
				});

				it(`${teste}.${complemento} - Tela Resumo - Validar escolha de produto + adição ao carrinho.`, () => 
				{
					cy.get('.logo')
						.click();

					cy.get('.sf-menu > li')
						.eq(1)
						.click();

					cy.get('.product-container')
						.eq(4)
						.find('a.product-name')
						.click();
					
					cy.get('#group_1')
						.select('L');
					
					cy.get('#add_to_cart button')
						.click();


					cy.get('#layer_cart')
						.should('be.visible');
					
					cy.get('#layer_cart .layer_cart_product h2')
						.should('contain.text', 'successfully')

					cy.get('#layer_cart .button-medium[title="Proceed to checkout"]')
						.click();
					
					cy.url()
						.should('include', 'controller=order');
						cy.get('.step_current.first')
							.should('be.visible')
							.and('contain.text', '01. Summary');
				});

				it(`${teste}.${++complemento} - Tela Adress - Validar escolha de produto + adição ao carrinho.`, () => 
				{
					cy.get('.logo')
						.click();

					cy.get('.sf-menu > li')
						.eq(1)
						.click();

					cy.get('.product-container')
						.eq(4)
						.find('a.product-name')
						.click();
					
					cy.get('#group_1')
						.select('L');
					
					cy.get('#add_to_cart button')
						.click();


					cy.get('#layer_cart')
						.should('be.visible');
					
					cy.get('#layer_cart .layer_cart_product h2')
						.should('contain.text', 'successfully')

					cy.get('#layer_cart .button-medium[title="Proceed to checkout"]')
						.click();
					
					//01 - Resumo
					cy.url()
						.should('include', 'controller=order');
						cy.get('.step_current.first')
							.should('be.visible')
							.and('contain.text', '01. Summary');

					cy.get('.standard-checkout')
						.click();

					//02 - Endereço
					cy.get('.step_current.third')
							.should('be.visible')
							.and('contain.text', '03. Address');

					cy.get('.cart_navigation > [type="submit"]')
						.click();
				});

				it(`${teste}.${++complemento} - Tela Transporte - Validar escolha de produto + adição ao carrinho.`, () => 
				{
					cy.get('.logo')
						.click();

					cy.get('.sf-menu > li')
						.eq(1)
						.click();

					cy.get('.product-container')
						.eq(4)
						.find('a.product-name')
						.click();
					
					cy.get('#group_1')
						.select('L');
					
					cy.get('#add_to_cart button')
						.click();


					cy.get('#layer_cart')
						.should('be.visible');
					
					cy.get('#layer_cart .layer_cart_product h2')
						.should('contain.text', 'successfully')

					cy.get('#layer_cart .button-medium[title="Proceed to checkout"]')
						.click();
					
					//01 - Resumo
					cy.url()
						.should('include', 'controller=order');
						cy.get('.step_current.first')
							.should('be.visible')
							.and('contain.text', '01. Summary');

					cy.get('.standard-checkout')
						.click();

					//02 - Endereço
					cy.get('.step_current.third')
							.should('be.visible')
							.and('contain.text', '03. Address');

					cy.get('.cart_navigation > [type="submit"]')
						.click();

					//03 - Transporte
					cy.get('.step_current.four')
						.should('be.visible')
						.and('contain.text', '04. Shipping');
				});

				it(`${teste}.${++complemento} - Tela Termos de serviço - Validar escolha de produto + adição ao carrinho.`, () => 
				{
					cy.get('.logo')
						.click();

					cy.get('.sf-menu > li')
						.eq(1)
						.click();

					cy.get('.product-container')
						.eq(4)
						.find('a.product-name')
						.click();
					
					cy.get('#group_1')
						.select('L');
					
					cy.get('#add_to_cart button')
						.click();


					cy.get('#layer_cart')
						.should('be.visible');
					
					cy.get('#layer_cart .layer_cart_product h2')
						.should('contain.text', 'successfully')

					cy.get('#layer_cart .button-medium[title="Proceed to checkout"]')
						.click();
					
					//01 - Resumo
					cy.url()
						.should('include', 'controller=order');
						cy.get('.step_current.first')
							.should('be.visible')
							.and('contain.text', '01. Summary');

					cy.get('.standard-checkout')
						.click();

					//02 - Endereço
					cy.get('.step_current.third')
							.should('be.visible')
							.and('contain.text', '03. Address');

					cy.get('.cart_navigation > [type="submit"]')
						.click();

					//03 - Transporte
					cy.get('.step_current.four')
						.should('be.visible')
						.and('contain.text', '04. Shipping');

					//4 - Termos de serviço
					cy.get('#cgv')
						.check();

					cy.get('.cart_navigation > .button')
						.click();
				});

				it(`${teste}.${++complemento} - Tela Pagamento - Validar escolha de produto + adição ao carrinho.`, () => 
				{
					cy.get('.logo')
						.click();

					cy.get('.sf-menu > li')
						.eq(1)
						.click();

					cy.get('.product-container')
						.eq(4)
						.find('a.product-name')
						.click();
					
					cy.get('#group_1')
						.select('L');
					
					cy.get('#add_to_cart button')
						.click();


					cy.get('#layer_cart')
						.should('be.visible');
					
					cy.get('#layer_cart .layer_cart_product h2')
						.should('contain.text', 'successfully')

					cy.get('#layer_cart .button-medium[title="Proceed to checkout"]')
						.click();
					
					//01 - Resumo
					cy.url()
						.should('include', 'controller=order');
						cy.get('.step_current.first')
							.should('be.visible')
							.and('contain.text', '01. Summary');

					cy.get('.standard-checkout')
						.click();

					//02 - Endereço
					cy.get('.step_current.third')
							.should('be.visible')
							.and('contain.text', '03. Address');

					cy.get('.cart_navigation > [type="submit"]')
						.click();

					//03 - Transporte
					cy.get('.step_current.four')
						.should('be.visible')
						.and('contain.text', '04. Shipping');

					//4 - Termos de serviço
					cy.get('#cgv')
						.check();

					cy.get('.cart_navigation > .button')
						.click();

					// 5. Pagamento
					cy.get('.bankwire').click();
					cy.get('#cart_navigation button[type=submit]').click();

					cy.get('.cheque-indent strong, .alert-success', { timeout: 10000 })
						.should('contain.text', 'Your order on My Shop is complete.')
				});
			});
		});
    });
});