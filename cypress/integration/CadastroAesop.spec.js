var Chance = require('chance');
const { get } = require('lodash');
var chance = new Chance()
import CadastroAesopPage from '../support/pages/cadastro/CadastroAesopPage';


const PrimeiroNome = ":nth-child(1) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
const Sobrenome = ":nth-child(1) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
const email = ".natds83 > :nth-child(2) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
const campoSenha = "#password-field"
const campoRepitaSenha = "#confirmPassword-field"
const campoCpf = ":nth-child(3) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
const campoDataNasc = ":nth-child(4) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
const generoNaoEspec = "#root > div:nth-child(1) > div > div > div > form > div.MuiBox-root.natds83.natds73 > div:nth-child(3) > div:nth-child(2) > div.MuiFormGroup-root.natds77 > label:nth-child(3) > span.MuiButtonBase-root.MuiIconButton-root.natds112.MuiRadio-root.MuiRadio-colorPrimary.MuiIconButton-colorPrimary > span.MuiIconButton-label > input"
const campoTelefone = ":nth-child(4) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
const btnAceptTerm = "#acceptedterms"
const btnCriarConta = ".MuiButton-label"
const perfilLogado = ".natds3 > :nth-child(3) > .MuiBox-root"

describe('Testes Aesop', () => {

    it('Validar cadastro de usuário com sucesso AESOP', () => {
        cy.visit('cadastre-se')
        cy.preecherCadastro(PrimeiroNome, Sobrenome, email, campoSenha, campoRepitaSenha, campoCpf, campoDataNasc, campoTelefone)
        cy.get(generoNaoEspec).click();
        cy.get(btnAceptTerm).click();
        cy.get(btnCriarConta).click();
        cy.get(perfilLogado).click().should('be.visible');
    });

});