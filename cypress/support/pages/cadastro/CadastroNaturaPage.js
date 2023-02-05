const el = require('./elementsNatura').ELEMENTSNAT;

class CadastroNatura {
    clicarAceptTerm() {
        cy.get(el.btnAceptTerm).click();
    }

    clicarBtnCriarConta() {
        cy.get(el.btnCriarConta).click();
    }

    clicarGeneroNaoEspecificado() {
        cy.get(el.generoNaoEspecNatura).click();
    }

}
module.exports = new CadastroNatura();