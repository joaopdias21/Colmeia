describe('Teste de Pop-up de Login', () => {
    it('Abre e fecha corretamente o pop-up de login', () => {
      // Visita a página 
      cy.visit('https://colmeia-cx.github.io/colmeia-qa-teste/');
  
      // Clica no botão "Login"
      cy.get('.button-container .button').contains('Login').click();
  
      // Verifica se o pop-up de login está visível
      cy.get('#loginPopup').should('be.visible');
  
      // Fecha o pop-up clicando no botão de fechar
      cy.get('#loginPopup .close').click();
  
      // Verifica se o pop-up de login não está mais visível
      cy.get('#loginPopup').should('not.be.visible');
    });
  });


  describe('Teste de Pop-up de Formulario', () => {
    it('Abre e fecha corretamente o pop-up de formulario', () => {
      // Visita a página 
      cy.visit('https://colmeia-cx.github.io/colmeia-qa-teste/');
  
      // Clica no botão "Login"
      cy.get('.button-container .button').contains('Formulário').click();
  
      // Verifica se o pop-up de login está visível
      cy.get('#formPopup').should('be.visible');
  
      // Fecha o pop-up clicando no botão de fechar
      cy.get('#formPopup .close').click();
  
      // Verifica se o pop-up de login não está mais visível
      cy.get('#formPopup').should('not.be.visible');
    });
  });


  describe('Teste de Pop-up de Mais Info', () => {
    it('Abre e fecha corretamente o pop-up de mais info', () => {
      // Visita a página 
      cy.visit('https://colmeia-cx.github.io/colmeia-qa-teste/');
  
      // Clica no botão "Login"
      cy.get('.button-container .button').contains('Mais Info').click();
  
      // Verifica se o pop-up de login está visível
      cy.get('#infoPopup').should('be.visible');
  
      // Fecha o pop-up clicando no botão de fechar
      cy.get('#infoPopup .close').click();
  
      // Verifica se o pop-up de login não está mais visível
      cy.get('#infoPopup').should('not.be.visible');
    });
  });