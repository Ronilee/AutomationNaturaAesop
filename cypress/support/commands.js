const el = require('./elementsNatura').ELEMENTS;

Cypress.Commands.add('preecherCadastro', (PrimeiroNome, Sobrenome, email, campoSenha, campoRepitaSenha, campoCpf, campoDataNasc, campoTelefone) => {
    cy.get(el.PrimeiroNome).type(chance.name());
    cy.get(el.Sobrenome).type(chance.name());
    cy.get(el.email).type(chance.email());
    cy.get(el.campoSenha).type("Natura@2023");
    cy.get(el.campoRepitaSenha).type("Natura@2023");
    cy.get(el.campoCpf).type(chance.cpf());
    cy.get(el.campoDataNasc).type("01012000");
    cy.get(el.campoTelefone).type("11999989999");
   
  
})

