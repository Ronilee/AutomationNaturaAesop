const el = require('./elementsAesop').ELEMENTS;


class CadastroAesop{

    clicarAceptTerm(){
     cy.get(el.btnAceptTerm).click();
    }

    clicarBtnCriarConta(){
     cy.get(el.btnCriarConta).click();
    }

    clicarGeneroNaoEspecificado(){
     cy.get(el.generoNaoEspec).click();
    }

   
}
module.exports = new CadastroAesop();