/// <reference types="cypress" />
import contrato from '../contracts/usuarios.contract'

describe('Testes da Funcionalidade Usuários', () => {
  let token
    beforeEach(() => {
        cy.token('fulano@qa.com', 'teste').then(tkn => { token = tkn })
  });

  it.only('Deve validar contrato de usuários', () => {
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

  it('Deve cadastrar um usuário com sucesso - POST', () => {
    cy.cadastrarUsuario(usuario, email, senha)
    .should((response) => {
      expect(response.status).equal(201)
      expect(response.body.message).equal('Cadastro realizado com sucesso')
    })
  });

  it('Deve validar um usuário com email inválido', () => {
      cy.request({
        method: 'POST',
        url: 'usuarios',
        body: {
          "nome": "Fulano da Silva",
          "email": "beltrano@qa.com.br",
          "password": "teste",
          "administrador": "true"
        }
      }).should((response) => {
        expect(response.status).equal(400)
        expect(response.body.message).to.equal('Este email já está sendo usado')
      })
  });

  it('Deve editar um usuário previamente cadastrado', () => {
    cy.cadastrarUsuario(usuario, email, senha)
  });

  it('Deve deletar um usuário previamente cadastrado', () => {
    //TODO: 
  });


});
