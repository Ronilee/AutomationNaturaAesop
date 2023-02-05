var Chance = require('chance');
const { get } = require('lodash');
var chance = new Chance()

import CadastroNatura from '../support/pages/cadastro/CadastroNaturaPage'
const el = require('./elementsNatura').ELEMENTS;

describe('Testes Natura', () => {

    it('Validar cadastro de usuário com sucesso no site da Natura', () => {
        cy.visit('https://www.natura.com.br/cadastre-se?redirect=%2F')
        cy.preecherCadastro(PrimeiroNome, Sobrenome, email, campoSenha, campoRepitaSenha, campoCpf, campoDataNasc, campoTelefone)
        CadastroNatura.clicarGeneroNaoEspecificado();
        CadastroNatura.clicarAceptTerm();
        CadastroNatura.clicarGeneroNaoEspecificado();
        cy.wait(3000)
        cy.contains('Meus acessos').click().should('be.visible');
    });
});