1 - Instalando o Cypress no projeto:
    Node Js instalado
    Vs Code instalado

    Extensões configuradas
        ES6 Mocha
        Cypress Snnipets

    No terminal (Dentro da pasta do projeto)

        npm init --yes

        npm install cypress@latest --save-dev

        npm i cypress --save

        Para terminar as configurações iniciais, rode o cypress:
            npx cypress open

-Após a interface gráfica abrir, configurar, e rodar o primeiro teste, feche o cypress.
Retorne ao terminal de comando.

2 - Instalando as dependências:

    2.1 - Faker:
        npm install @faker-js/faker --save-dev

    2.2 - Relatórios:
        npm i -D cypress-mochawesome-reporter@latest

        No arquivo package.json, adicionar a seguinte linha:
            "scripts": {
                "test": "cypress run --reporter mochawesome --reporter-options reportDir=cypress/reports/mocha,overwrite=false,html=false,json=true",
                "merge-reports": "mochawesome-merge cypress/reports/mocha/*.json > cypress/reports/mochawesome-merged.json",
                "generate-report": "marge cypress/reports/mochawesome-merged.json -f report -o cypress/reports",
                "cy:run": "npm run test && npm run merge-reports && npm run generate-report"
            },

        Para executar e visulizar relatórios:
            npx cypress run

    2.3 - WaitUntil

        npm install -D cypress-wait-until

        Adicione cypress/support/commands.js:
            import 'cypress-wait-until';
        
        Adicione em cypress/support/e2e.js:
            require('cypress-wait-until')

    2.4 - Hover
        npm install --save-dev cypress-real-events

        Adicione em cypress/support/e2e.js:
            import 'cypress-real-events/support';