/// <reference types='cypress' /> 

import 'cypress-mochawesome-reporter/register';
import 'cypress-real-events/support';
import './pages/elementos';
import './commands/commands_00_Settings';
import './commands/automationPractice/custom_commands';

require('cypress-wait-until');

Cypress.ElementSelector.defaults({
    selectorPriority: ['data-cy', 'data-test', 'data-testid', 'id', 'class', 'attributes', 'tag', 'nth-child']
});

if (Cypress.config("hideXHRInCommandLog"))
{
    const app = window.top;

    if (app && !app.document.head.querySelector("[data-hide-command-log-request]"))
    {
        const style = app.document.createElement("style");
        style.innerHTML = ".command-name-request, .command-name-xhr { display: none }";
        style.setAttribute("data-hide-command-log-request", "");
        app.document.head.appendChild(style);
    };
};

beforeEach(() => 
{
    const BLOCK = [
    '**/google-analytics.com/**',
    '**/fonts.gstatic.com/**',
    '**/fonts.googleapis.com/**'
    ];
    BLOCK.forEach(p => cy.intercept('GET', p, { statusCode: 204, body: '' }));
});
