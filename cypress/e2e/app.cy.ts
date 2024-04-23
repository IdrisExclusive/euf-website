describe("my first test", () => {
    it("tests form input", () => {
        cy.visit("/")
        cy.url().should("contains", "localhost:3000")
    })
})