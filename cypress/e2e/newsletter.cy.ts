import { faker } from "@faker-js/faker/locale/en";

let email = faker.internet.exampleEmail()
let wrongEmail = faker.internet.url({protocol: "http"})

describe( "test newsletter subscription", () => {
    beforeEach( () => {
        cy.visit("/")
    })

    it("subscribes1 with a wrong email", () => {
        cy.findByTestId("email-input").type(wrongEmail, {delay: 200})
        cy.findByTestId("subscribe-button").click()
        cy.getByData("message-output").should("exist").contains("check email field")
    })

    it("subscribes with a new email", () => {
        cy.findByTestId("email-input").type(email, {delay: 200})
        cy.findByTestId("subscribe-button").click()
        cy.getByData("message-output").should("exist").contains("successful")
    })

    it("subscribes with an existing email", () => {
        cy.findByTestId("email-input").type(email, {delay: 200})
        cy.findByTestId("subscribe-button").click()
        cy.getByData("message-output").should("exist").contains("email already exists")
    } )

})

// Prevent TypeScript from reading file as legacy script
export {};