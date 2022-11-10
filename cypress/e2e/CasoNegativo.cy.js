/// <reference> types="cypress"/>

const { it } = require("mocha")

describe('Criando cenário de teste ao site CNN BRASIL',()=> {

  it('Caso de teste: Clique do botão do vídeo', ()=> {
    
    cy.visit('https://www.cnnbrasil.com.br/')
    // click -> Clicar no botão desejado
    cy.get('.search_form > form > #busca > img').click()
    // type -> Digitar conteúdo do botão
    cy.get('.search_form > form > [type="text"]').type("Eleições 2022{enter}")
    // should -> Comparação
    cy.get('.tags__topics__title').should('contain.text','Exibindo resultados para Eleições 2022')
  })
})