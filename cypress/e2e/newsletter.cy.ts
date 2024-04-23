import { faker } from "@faker-js/faker/locale/en";

let email = faker.internet.exampleEmail()
let wrongEmail = faker.internet.url({protocol: "http"})

describe( "test newsletter subscription", () => {
    beforeEach( () => {
        cy.visit("/")
    })

    it("subscribes with a wrong email", () => {
        cy.getByData("email-input").type(wrongEmail)
        cy.getByData("subscribe-button").click()
        cy.getByData("message-output").should("exist").contains("check email field")
    })

    it("subscribes with a new email", () => {
        cy.getByData("email-input").type(email)
        cy.getByData("subscribe-button").click()
        cy.getByData("message-output").should("exist").contains("successful")
    })

    it("subscribes with an existing email", () => {
        cy.getByData("email-input").type(email)
        cy.getByData("subscribe-button").click()
        cy.getByData("message-output").should("exist").contains("email already exists")
    } )

})

// Prevent TypeScript from reading file as legacy script
export {};