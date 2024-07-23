describe('Teste de Validação do Campo de Telefone no Formulário de Contato', () => {
    beforeEach(() => {
      // Visita a página principal
      cy.visit('https://colmeia-cx.github.io/colmeia-qa-teste/');
      // Clica no botão "Formulário"
      cy.get('.button-container .button').contains('Formulário').click();
    });
  
    it('Deve aceitar e exibir o número de telefone inserido corretamente', () => {
      // Insere o número de telefone válido no campo de telefone
      cy.get('#phone').type('123456789');
      // Verifica se o número de telefone é exibido corretamente no campo
      cy.get('#phone').should('have.value', '123456789');
    });
  
    it('Deve exibir uma mensagem de erro para telefone inválido (menos de 9 dígitos)', () => {
      // Insere o número de telefone inválido no campo de telefone
      cy.get('#phone').type('123');
      // Verifica se a mensagem de erro é exibida
      cy.contains('Por favor, insira um número de telefone válido.').should('be.visible');
    });
  
    it('Deve exibir uma mensagem de erro para telefone inválido (mais de 9 dígitos)', () => {
      // Insere o número de telefone inválido no campo de telefone
      cy.get('#phone').type('1234567890');
      // Verifica se a mensagem de erro é exibida
      cy.contains('Por favor, insira um número de telefone válido.').should('be.visible');
    });
  
    it('Deve exibir uma mensagem de erro para telefone inválido (caracteres não numéricos)', () => {
      // Insere caracteres não numéricos no campo de telefone
      cy.get('#phone').type('abcdefghi');
      // Verifica se a mensagem de erro é exibida
      cy.contains('Por favor, insira um número de telefone válido.').should('be.visible');
    });
  });