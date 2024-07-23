describe('Teste de Tooltips', () => {
    beforeEach(() => {
      // Visita a página principal
      cy.visit('https://colmeia-cx.github.io/colmeia-qa-teste/');
    });
  
    it('Deve exibir tooltip ao passar o mouse sobre o botão Login', () => {
      // Passa o mouse sobre o botão "Login"
      cy.get('.button-container .button').contains('Login').trigger('mouseover');
      // Verifica se o tooltip está visível
      cy.get('.button-container .button').contains('Login').should('be.visible').and('contain', 'Abrir formulário de login');
    });
  
    it('Deve exibir tooltip ao passar o mouse sobre o botão Formulário', () => {
      // Passa o mouse sobre o botão "Formulário"
      cy.get('.button-container .button').contains('Formulário').trigger('mouseover');
      // Verifica se o tooltip está visível
      cy.get('.button-container .button').contains('Formulário').should('be.visible').and('contain', 'Abrir formulário de contato');
    });
  
    it('Deve exibir tooltip ao passar o mouse sobre o botão Mais Info', () => {
      // Passa o mouse sobre o botão "Mais Info"
      cy.get('.button-container .button').contains('Mais Info').trigger('mouseover');
      // Verifica se o tooltip está visível
      cy.get('.button-container .button').contains('Mais Info').should('be.visible').and('contain', 'Abrir mais informações');
    });
  });