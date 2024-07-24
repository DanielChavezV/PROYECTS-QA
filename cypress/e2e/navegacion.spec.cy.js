
describe("Navigation", () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
    });
    it("visit our website", () => {
      cy.visit("https://www.google.com");
    });
    it("visit our website and reload", () => {
      cy.visit("https://www.google.com");
      cy.reload();
    });
    it("visit our website and force reload", () => {
      cy.visit("https://www.google.com");
      cy.reload(true);
    });
  });