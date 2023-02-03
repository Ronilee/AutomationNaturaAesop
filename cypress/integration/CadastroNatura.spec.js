var Chance = require('chance');
const { get } = require('lodash');
var chance = new Chance()

const PrimeiroNome = "div.natds2 div.natds75 div.MuiPaper-root.natds76.MuiPaper-elevation1.MuiPaper-rounded div.MuiBox-root.natds90.natds77:nth-child(1) div.MuiFormControl-root.natds91.natds78:nth-child(2) div.MuiFormControl-root.natds91 div.MuiInputBase-root.MuiInput-root.natds96.natds97.MuiInputBase-formControl.MuiInput-formControl > input.MuiInputBase-input.MuiInput-input"
const Sobrenome = "div.natds2 div.natds75 div.MuiPaper-root.natds76.MuiPaper-elevation1.MuiPaper-rounded div.MuiBox-root.natds90.natds77:nth-child(1) div.MuiFormControl-root.natds91.natds78:nth-child(3) div.MuiFormControl-root.natds91 div.MuiInputBase-root.MuiInput-root.natds96.natds100.MuiInputBase-formControl.MuiInput-formControl > input.MuiInputBase-input.MuiInput-input"
const email = "div.natds2 div.natds75 div.MuiPaper-root.natds76.MuiPaper-elevation1.MuiPaper-rounded div.MuiBox-root.natds90.natds77:nth-child(1) div.MuiFormControl-root.natds91.natds78:nth-child(4) div.MuiFormControl-root.natds91 div.MuiInputBase-root.MuiInput-root.natds96.natds102.MuiInputBase-formControl.MuiInput-formControl > input.MuiInputBase-input.MuiInput-input"
const campoSenha = "#password-field"
const campoRepitaSenha = "#confirmPassword-field"
const campoCpf = "div.natds2 div.natds75 div.MuiPaper-root.natds76.MuiPaper-elevation1.MuiPaper-rounded div.MuiBox-root.natds90.natds77:nth-child(1) div.MuiFormControl-root.natds91.natds78:nth-child(8) div.MuiFormControl-root.natds91 div.MuiInputBase-root.MuiInput-root.natds96.natds119.MuiInputBase-formControl.MuiInput-formControl > input.MuiInputBase-input.MuiInput-input"
const campoDataNasc = "div.natds2 div.natds75 div.MuiPaper-root.natds76.MuiPaper-elevation1.MuiPaper-rounded div.MuiBox-root.natds90.natds77:nth-child(1) div.MuiFormControl-root.natds91.natds78:nth-child(9) div.MuiFormControl-root.natds91 div.MuiInputBase-root.MuiInput-root.natds96.natds121.MuiInputBase-formControl.MuiInput-formControl > input.MuiInputBase-input.MuiInput-input"
const generoNaoEspec = "div.natds2 div.natds75 div.MuiPaper-root.natds76.MuiPaper-elevation1.MuiPaper-rounded div.MuiBox-root.natds90.natds77:nth-child(1) div.MuiFormControl-root.natds91.natds78:nth-child(10) div.MuiFormGroup-root.natds82 label.MuiFormControlLabel-root:nth-child(3) span.MuiButtonBase-root.MuiIconButton-root.natds103.MuiRadio-root.MuiRadio-colorPrimary.MuiIconButton-colorPrimary span.MuiIconButton-label > input.natds106"
const campoTelefone = "div.natds2 div.natds75 div.MuiPaper-root.natds76.MuiPaper-elevation1.MuiPaper-rounded div.MuiBox-root.natds90.natds77:nth-child(1) div.MuiFormControl-root.natds91.natds78:nth-child(11) div.MuiFormControl-root.natds91 div.MuiInputBase-root.MuiInput-root.natds96.natds137.MuiInputBase-formControl.MuiInput-formControl > input.MuiInputBase-input.MuiInput-input"
const btnAceptTerm = "#acceptedterms"

describe('Testes Natura', () => {

    it('Validar cadastro de usuário com sucesso no site da Natura', () => {
        cy.visit('https://www.natura.com.br/cadastre-se?redirect=%2F')
        cy.preecherCadastro(PrimeiroNome, Sobrenome, email, campoSenha, campoRepitaSenha, campoCpf, campoDataNasc, campoTelefone)
        cy.get(generoNaoEspec).click();
        cy.get(btnAceptTerm).click();
    });
});