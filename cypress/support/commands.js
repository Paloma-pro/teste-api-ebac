Cypress.Commands.add('token', (email, senha) => {
    cy.request({
        method: 'POST',
        url: 'login',
        body: {
            "email": email,
            "password": senha 
        }
    }).then((response) => {
        expect(response.status).to.equal(200)
        return response.body.authorization
    })
 })

 Cypress.Commands.add('cadastrarProduto' , (token, produto, preco, descricao, quantidade) =>{
    cy.request({
        method: 'POST', 
        url: 'produtos',
        headers: {authorization: token}, 
        body: {
            "nome": produto,
            "preco": preco,
            "descricao": descricao,
            "quantidade": quantidade
          }, 
          failOnStatusCode: false
    })
 })

 Cypress.Commands.add('cadastrarUsuarios', (fulano, email, senha) => {
    let usuario = 'Fulano ' + Math.floor(Math.random() * 100000000000)
    let email = Math.floor(Math.random() * 100000) + 'fulano@teste.com'
    let senha = 'teste123'
    cy.request({
        method: 'POST',
        url: 'usuarios',
        headers: {authorization: token},
        body: {
            "nome": usuario,
            "email": email,
            "password": senha
        }
    })
 })