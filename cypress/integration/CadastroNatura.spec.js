var Chance = require('chance');
const { get } = require('lodash');
var chance = new Chance()

import CadastroNatura from '../support/pages/cadastro/CadastroNaturaPage'

const PrimeiroNome = ":nth-child(1) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
const Sobrenome = ":nth-child(1) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
const email = ".natds83 > :nth-child(2) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
const campoSenha = "#password-field"
const campoRepitaSenha = "#confirmPassword-field"
const campoCpf = ":nth-child(3) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
const campoDataNasc = ":nth-child(4) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
const campoTelefone = ":nth-child(4) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
const perfilLogado = ".natds3 > :nth-child(3) > .MuiBox-root"

describe('Testes Natura', () => {

    it('Validar cadastro de usuário com sucesso no site da Natura', () => {
        cy.visit('https://www.natura.com.br/cadastre-se?redirect=%2F')
        cy.preecherCadastro(PrimeiroNome, Sobrenome, email, campoSenha, campoRepitaSenha, campoCpf, campoDataNasc, campoTelefone)
        CadastroNatura.clicarGeneroNaoEspecificado();
        CadastroNatura.clicarAceptTerm();
        CadastroNatura.clicarBtnCriarConta();
        cy.wait(3000)
        cy.contains('Meus acessos').click().should('be.visible');
    });
});