export class tela_Home
{
    get logotipo() {
        return cy.get('.logo')
    };

    get botao_SignIn() {
        return cy.get('.login')
    };
};

export class tela_Cadastro
{
    get titulo_Tela_Cadastro() {
        return cy.get('.page-heading')
    };

    get titulo_Tela_Cadastro_Texto() {
        return cy.get('Authentication')
    };

    get modal_Cadastro() {
        return cy.get('#create-account_form')
    };

    get modal_Cadastro_Titulo() {
        return cy.get('h3').eq(0)
    };

    get modal_Cadastro_Titulo_Texto() {
        return 'Create an account'
    };

    get subtitulo_Cadastro() {
        return cy.get('.form_content > p').eq(0)
    };

    get subtitulo_Cadastro_Texto() {
        return 'Please enter your email address to create an account.'
    };

    get input_Email_Titulo() {
        return cy.get('[for="email_create"]')
    };

    get input_Email_Titulo_Texto() {
        return 'Email address'
    };

    get input_Email_Input() {
        return cy.get('#email_create')
    };

    get botao_Create_Account() {
        return cy.get('#SubmitCreate')
    };

    get botao_Create_Account_Icone() {
        return cy.get('.icon-user')
    }

    get botao_Create_Account_Texto() {
        return cy.get('#SubmitCreate > span')
    };

    get botao_Create_Account_Texto_Conteudo() {
        return 'Create an account'
    };

    get mensagem_Email_Invalido() {
        return cy.get('#create_account_error')
    };

    get mensagem_Email_Invalido_Texto() {
        return cy.get('#create_account_error > ol > li')
    };

    get mensagem_Email_Invalido_Texto_Conteudo() {
        return 'Invalid email address.'
    };

    get modal_Cadastro_InfoPessoais() {
        return cy.get('.account_creation')
    };
};