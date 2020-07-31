describe('Polly dashboard', () => {
  it('should select Sales', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: '/api/sales/',
      response: [
        {
          timestamp: '2020-06-17T06:44:02.676475',
          amount: 1902,
        },
        {
          timestamp: '2020-06-17T06:45:30.983656',
          amount: 893,
        },
      ],
    });

    cy.visit('/');
    cy.get('select').select('Sales');
  });

  it('should select Subscriptions', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: '/api/subscriptions/',
      response: [
        {
          timestamp: '2020-06-17T06:44:02.676475',
          amount: 4,
        },
        {
          timestamp: '2020-06-17T06:45:30.983656',
          amount: 2,
        },
        {
          timestamp: '2020-06-17T06:45:30.983656',
          amount: 4,
        },
      ],
    });

    cy.visit('/');
    cy.get('select').select('Subscriptions');
  });

  it('should see totals in each card', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: '/api/totals/',
      response: {
        salesTotal: 2311,
        subscriptionsTotal: 381,
      },
    });

    cy.visit('/');

    cy.get('.card').children().as('cardsChildren');

    cy.get('@cardsChildren').eq(0).should('have.text', 'CellFast sales');

    cy.get('@cardsChildren').eq(1).should('have.text', '$ 2311');

    cy.get('@cardsChildren').eq(2).should('have.text', 'CellNow subscriptions');

    cy.get('@cardsChildren').eq(3).should('have.text', '$ 381');
  });
});
