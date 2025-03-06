/// <reference types="cypress" />
import contrato from '../contracts/usuarios.contract'

describe('Testes da Funcionalidade Usuários', () => {
  let token
    beforeEach(() => {
        cy.token('fulano@qa.com', 'teste').then(tkn => { 
          token = tkn 
        })
  });

  it('Deve validar contrato de usuários', () => {
    cy.request('usuarios').then(response => {
      return contrato.validateAsync(response.body)
    })
  });

  it('Deve listar usuários cadastrados - GET', () => {
    cy.request({
      method: 'GET',
      url: 'usuarios'
    }).should((reponse) => {
      expect(reponse.body).to.have.property('usuarios')
      expect(reponse.status).equal(200)
    })
  });

  it('Deve cadastrar um usuário com sucesso - POST', () => { //Arrumar
    let usuario = 'Fulano ' + Math.floor(Math.random() * 100000000000)
    let email = Math.floor(Math.random() * 100000) + 'fulano@teste.com'
    let senha = 'teste123'
    let admin = 'true'

    cy.cadastrarUsuarios(token, usuario, email, senha, admin)
    .should((response) => {
      expect(response.status).equal(201)
      expect(response.body.message).equal('Cadastro realizado com sucesso')
    })
  });

  it('Deve validar um usuário com email inválido - POST', () => { 
      cy.request({
        method: 'POST',
        url: 'usuarios',
        body: {
          "nome": "Fulano da Silva",
          "email": "beltrano@qa.com.br",
          "password": "teste",
          "administrador": "true"
        },
        failOnStatusCode: false
      }).should((response) => {
        expect(response.status).equal(400)
        expect(response.body.message).to.equal('Este email já está sendo usado')
      })
  });

  it('Deve editar um usuário previamente cadastrado - POST', () => {
    let usuario = 'Fulano ' + Math.floor(Math.random() * 100000000000)
    let email = Math.floor(Math.random() * 100000) + 'fulano@teste.com'
    let senha = 'teste123'
    let admin = 'true'
    cy.cadastrarUsuarios(token, usuario, email, senha, admin)
  });

  it('Deve deletar um usuário previamente cadastrado', () => {
    let usuario = 'Fulano ' + Math.floor(Math.random() * 100000000000)
    let email = Math.floor(Math.random() * 100000) + 'fulano@teste.com'
    let senha = 'teste123'
    let admin = 'true'
    cy.cadastrarUsuarios(token, usuario, email, senha, admin)
    .then(response => {
      let id = response.body._id
      cy.request({
        method: 'DELETE',
        url: `usuarios/${id}`,
        headers: {authorization: token}
      }).should(response => {
        expect(response.body.message).to.equal('Registro excluído com sucesso')
        expect(response.status).equal(200)
      })
    })
  });


});
