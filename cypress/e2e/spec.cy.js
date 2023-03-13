describe('#Order', () => {
  beforeEach(()=>{

  })

  it('should check that the navbar color matches', ()=>{
    cy.visit('http://localhost:5050/');

    cy.get(".nav-list").should("have.css", "background-color", "rgb(51, 51, 51)")

  })

  it('should add error elements once form fails', () => {
    cy.intercept('POST', 'http://localhost:8080/user/vighnesh/order', {
      fixture: "failOrder.json",
      statusCode: 400
    });
    cy.visit('http://localhost:5050/');
    cy.get("#esop-form-submit").click();

    cy.get("#order-failure>p").eq(0).should("contains.text", "User doesn't exist");
    cy.get("#order-failure>p").eq(1).should("contains.text", "Invalid quantity");
  })

  it('should add success elements once the form succeeds', () => {
    cy.intercept('POST', 'http://localhost:8080/user/vighnesh/order', {
      fixture: "successOrder.json",
      statusCode: 200
    });
    cy.visit('http://localhost:5050/');
    cy.get("#esop-quantity").type(1);
    cy.get("#esop-price").type(1);
    cy.get("#esop-form-submit").click();

    cy.get("#order-success>p").eq(0).should("contains.text", "orderId 1");
    cy.get("#order-success>p").eq(1).should("contains.text", "quantity 1");
    cy.get("#order-success>p").eq(2).should("contains.text", "type BUY");
    cy.get("#order-success>p").eq(3).should("contains.text", "price 1");
  })
})