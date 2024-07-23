describe('Teste de Validação do Campo de E-mail no Formulário de Login', () => {
    beforeEach(() => {
      // Visita a página principal
      cy.visit('https://colmeia-cx.github.io/colmeia-qa-teste/');
      // Clica no botão "Login"
      cy.get('.button-container .button').contains('Login').click();
    });
  
    it('Deve aceitar e exibir o e-mail inserido corretamente', () => {
      // Insere o e-mail válido no campo de e-mail
      cy.get('#loginEmail').type('exemplo@gmail.com');
      // Verifica se o e-mail é exibido corretamente no campo
      cy.get('#loginEmail').should('have.value', 'exemplo@gmail.com');
    });
  
    it('Deve exibir uma mensagem de erro para e-mail inválido', () => {
      // Insere o e-mail inválido no campo de e-mail
      cy.get('#loginEmail').type('teste@exemplo');
      cy.get('#loginPassword').type('1234567');
      // Tenta enviar o formulário (assumindo que há um botão de envio)
      cy.get(':nth-child(3) > button')
      // Verifica se a mensagem de erro é exibida
      cy.contains('Por favor, insira um endereço de email válido').should('be.visible');
    });
  });