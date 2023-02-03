Cypress.Commands.add('preecherCadastro', (PrimeiroNome, Sobrenome, email, campoSenha, campoRepitaSenha, campoCpf, campoDataNasc, campoTelefone) => {
    cy.get(PrimeiroNome).type(chance.name());
    cy.get(Sobrenome).type(chance.name());
    cy.get(email).type(chance.email());
    cy.get(campoSenha).type("Natura@2023");
    cy.get(campoRepitaSenha).type("Natura@2023");
    cy.get(campoCpf).type(chance.cpf());
    cy.get(campoDataNasc).type("01012000");
    cy.get(campoTelefone).type("11999989999");
   
  
})

