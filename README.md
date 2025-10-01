Boa, já tem bastante material pronto para um **README** profissional 🚀
Vou te montar um modelo em Markdown que reflete a estrutura do projeto, uso de **Pages**, **Custom Commands**, execução dos **Smoke Tests** e geração de relatórios **Mochawesome**.

---

# 🛒 QA Proj Cypress ShopPolyme

Projeto de automação de testes end-to-end com **Cypress** no e-commerce demo [Automation Practice](http://www.automationpractice.pl/index.php).
Foram implementados testes **Smoke** e **E2E** para fluxos críticos: **Cadastro, Login, Endereço e Carrinho de Compras**.

---

## 📂 Estrutura do Projeto

```
QA_Proj_Cypress_ShopPolyme/
├── cypress/
│   ├── e2e/                  # Casos de teste organizados por tela/fluxo
│   │   ├── 00 - Smoke Test
│   │   ├── 01 - Tela Home
│   │   ├── 02 - Tela Cadastro
│   │   ├── 03 - Tela Login
│   │   ├── 04 - Tela Your Adress
│   │   └── 05 - Tela Cart
│   ├── fixtures/             # Massa de dados (JSON)
│   ├── pages/                # Page Objects (mapeamento de elementos)
│   ├── support/              # Configurações e custom commands
│   └── reports/              # Relatórios Mochawesome
├── package.json
├── cypress.config.js
└── README.md
```

* **Pages** → encapsulam os seletores de tela (Page Object Model).
* **Custom Commands** → centralizam ações comuns como login, adicionando reuso e clareza.
* **Fixtures** → massa de dados dinâmica com **faker**.

---

## ⚡ Tecnologias Utilizadas

* [Cypress](https://www.cypress.io/) (framework de testes)
* [Faker.js](https://fakerjs.dev/) (geração de dados dinâmicos)
* [Mochawesome](https://www.npmjs.com/package/mochawesome) (relatórios em HTML/JSON)
* [cypress-iframe](https://www.npmjs.com/package/cypress-iframe) (suporte a iframes)
* [cypress-real-events](https://github.com/dmtrKovalenko/cypress-real-events) (eventos reais de usuário)
* [cypress-wait-until](https://www.npmjs.com/package/cypress-wait-until) (esperas inteligentes)

---

## 🧪 Execução dos Testes

1. Clone o repositório:

   ```bash
   git clone https://github.com/brunogsiq/QA_Proj_Cypress_ShopPolyme.git
   cd QA_Proj_Cypress_ShopPolyme
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute os testes em modo headless:

   ```bash
   npm run cy:run
   ```

4. Acesse o relatório:

   ```bash
   ./cypress/reports/report.html
   ```

---

## 📊 Relatórios Mochawesome

Após a execução, os relatórios são gerados automaticamente em:

```
cypress/reports/
├── mochawesome/
├── mochawesome-merged.json
└── report.html
```

Exemplo de relatório:

![Relatório Mochawesome](./docs/example-report.png)

---

## ✔️ Cenários Cobertos

* **Smoke Tests** → verificação rápida de disponibilidade do fluxo principal.
* **Cadastro** → criação de conta com dados válidos/inválidos.
* **Login** → autenticação válida e inválida.
* **Endereço** → inclusão de endereço completo.
* **Carrinho** → adicionar produto, validar resumo, endereço, transporte e pagamento.

---

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Push na branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

---

## ⭐ Apoie o Projeto!

Se este repositório te ajudou, **deixe uma estrela no GitHub** 🌟
👉 [QA_Proj_Cypress_ShopPolyme](https://github.com/brunogsiq/QA_Proj_Cypress_ShopPolyme)

---