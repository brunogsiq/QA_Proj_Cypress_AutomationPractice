/// <reference types="cypress" />

context.skip('Tela Home.', () => 
{
	let contexto = 3;
	let cenario = 3;
	let teste = 1;

	context(`${contexto} - End To End.`, () => 
	{
		
		describe(`${cenario} - Validações de Fluxos Funcionais.`, () => 
		{
			let complemento = 1;

			//Se houver
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

			it(`${teste}.${complemento} - `, () => 
			{
				//Passo - Dado...

				//Passo - Quando...

				//Passo - Então...
				
			});
		});
    });
});