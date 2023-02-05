var Chance = require('chance');
const { get } = require('lodash');
var chance = new Chance()
import CadastroAesop from '../support/pages/cadastro/CadastroAesopPage'

const perfilLogado = ".natds3 > :nth-child(3) > .MuiBox-root"

describe('Testes Aesop', () => {

    it('Validar cadastro de usuário com sucesso AESOP', () => {
        cy.visit('cadastre-se')
        cy.preecherCadastro(PrimeiroNome, Sobrenome, email, campoSenha, campoRepitaSenha, campoCpf, campoDataNasc, campoTelefone)
        CadastroAesop.clicarGeneroNaoEspecificado();
        CadastroAesop.clicarAceptTerm();
        CadastroAesop.clicarBtnCriarConta();
        cy.get(perfilLogado).click().should('be.visible');
    });

});