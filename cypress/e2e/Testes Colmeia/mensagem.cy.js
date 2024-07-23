describe('Teste de Validação do Campo de Mensagem no Formulário de Contato', () => {
    beforeEach(() => {
      // Visita a página principal
      cy.visit('https://colmeia-cx.github.io/colmeia-qa-teste/');
      // Clica no botão "Formulário"
      cy.get('.button-container .button').contains('Formulário').click();
    });
  
    it('Deve aceitar e exibir uma mensagem com menos de 400 caracteres', () => {
      const mensagemCurta = 'Esta é uma mensagem curta de teste.';
  
      // Insere a mensagem curta no campo de mensagem
      cy.get('#message').type(mensagemCurta);
      // Verifica se a mensagem é exibida corretamente no campo
      cy.get('#message').should('have.value', mensagemCurta);
    });
  
    it('Deve exibir uma mensagem de erro para mensagem com mais de 400 caracteres', () => {
      const mensagemLonga = 'a'.repeat(401); // Cria uma mensagem com 401 caracteres
  
      // Insere a mensagem longa no campo de mensagem
      cy.get('#message').type(mensagemLonga);
      // Verifica se a mensagem de erro é exibida
      cy.contains('Mensagem não pode exceder 400 caracteres').should('be.visible');
    });
  });