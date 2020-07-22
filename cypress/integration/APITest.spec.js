describe("Sales API", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")

    cy.server();

    cy.route({
      method: 'GET',
      url: '/api/sales',
      response: []
    }).as('salesCheck')

    cy.route({
      method: 'GET',
      url: '/api/subscriptions',
      response: []
    }).as('subscriptionsCheck')
  })

  it("should select Sales", () => {
    cy.contains("select").click()

    cy.get('select').select('Sales')
  })

  it("should select Subscriptions", () => {
    cy.contains("select").click()

    cy.get('select').select('Subscriptions')
  })

  it("should see totals in each card", () => {
    cy.get(".card").children().as('cardsChildren')

    cy.get("@cardsChildren")
    .should(($p) => {
      expect($p).to.have.length(4)
      expect($p.first()).to.have.text('CellFast sales')
      expect($p.eq(2)).to.have.text('CellNow subscriptions')
    })
  })
})