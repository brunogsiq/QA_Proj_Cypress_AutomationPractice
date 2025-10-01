import { faker } from '@faker-js/faker';

const genEmail = () => `bruno.${Date.now()}@qatest.io`;

Cypress.Commands.add('goToAuth', () => {
  cy.visit('/index.php?controller=authentication&back=my-account');
});

Cypress.Commands.add('signup', (overrides = {}) => {
  const user = {
    email: genEmail(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    password: 'QAtrix!123',
    day: '10',
    month: 'May',
    year: '1990',
    newsletter: false,
    ...overrides
  };

  cy.goToAuth();
  cy.get('#email_create').clear().type(user.email);
  cy.get('#SubmitCreate').click();

  cy.get('#account-creation_form', { timeout: 15000 }).should('be.visible');
  cy.get('#id_gender1').check({ force: true });
  cy.get('#customer_firstname').type(user.firstName);
  cy.get('#customer_lastname').type(user.lastName);
  cy.get('#passwd').type(user.password);
  if (user.day) cy.get('#days').select(user.day);
  if (user.month) cy.get('#months').select(user.month);
  if (user.year) cy.get('#years').select(user.year);
  if (user.newsletter) cy.get('#newsletter').check({ force: true });
  cy.get('#submitAccount').click();

  cy.get('.alert.alert-success, .info-account', { timeout: 15000 })
    .should(($el) => {
      const t = $el.text();
      expect(t).to.match(/Your account has been created|Welcome to your account/i);
    });
  cy.get('.account').should('be.visible');

  cy.wrap(user).as('user');
});

Cypress.Commands.add('login', (email, password) => {
  cy.goToAuth();
  cy.get('#email').type(email);
  cy.get('#passwd').type(password, { log: false });
  cy.get('#SubmitLogin').click();
  cy.get('.account').should('be.visible');
});

Cypress.Commands.add('logoutIfLogged', () => {
  cy.get('body').then($b => {
    if ($b.find('a.logout').length) cy.get('a.logout').click();
  });
});

Cypress.Commands.add('addProductToCart', (category = 'Women', subcategory = 'Dresses', productIndex = 0) => {
  cy.visit('/');
  cy.contains('#block_top_menu a', category).trigger('mouseover');
  cy.contains('#block_top_menu a', subcategory).click({ force: true });

  cy.get('.product_list .product-container').eq(productIndex).within(() => {
    cy.get('a.product-name').click();
  });

  cy.get('#group_1').select('L'); // tamanho
  cy.get('#color_to_pick_list li').first().click(); // cor

  cy.get('#add_to_cart button').click();

  // valida modal
  cy.get('#layer_cart', { timeout: 10000 }).should('be.visible');
  cy.get('#layer_cart .layer_cart_product h2')
    .should('contain.text', 'successfully')
    .or('contain.text', 'sucesso');
});
