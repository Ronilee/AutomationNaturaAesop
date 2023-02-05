const el = require('./elementsNatura').ELEMENTS;


class CadastroAesop{

    clicarAceptTerm(){
     cy.get(el.btnAceptTerm).click();
    }

    clicarBtnCriarConta(){
     cy.get(el.btnCriarConta).click();
    }

    clicarGeneroNaoEspecificado(){
     cy.get(generoNaoEspec).click();
    }

}