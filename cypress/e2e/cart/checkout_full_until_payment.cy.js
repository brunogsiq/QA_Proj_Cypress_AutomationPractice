describe('Carrinho - Fluxo completo até pagamento', () => {
  it('deve completar checkout até tela de pagamento', () => {
    // adiciona item
    cy.visit('/');
    cy.contains('#block_top_menu a', 'Women').trigger('mouseover');
    cy.contains('#block_top_menu a', 'Dresses').click({ force: true });
    cy.get('.product_list .product-container').eq(0).within(() => {
      cy.get('a.product-name').click();
    });
    cy.get('#group_1').select('L');
    cy.get('#color_to_pick_list li').first().click();
    cy.get('#add_to_cart button').click();
    cy.get('#layer_cart .button-medium[title="Proceed to checkout"]', { timeout: 10000 }).click();

    // 1. Summary
    cy.get('.cart_navigation a[title="Proceed to checkout"]').click();

    // 2. Login (se necessário)
    cy.get('body').then($b => {
      if ($b.find('#SubmitLogin').length) {
        cy.get('#email').type('usuario@teste.com');
        cy.get('#passwd').type('teste123', { log: false });
        cy.get('#SubmitLogin').click();
      }
    });

    // 3. Address
    cy.get('button[name=processAddress]').click();

    // 4. Shipping
    cy.get('#cgv').check({ force: true });
    cy.get('button[name=processCarrier]').click();

    
  });
});
