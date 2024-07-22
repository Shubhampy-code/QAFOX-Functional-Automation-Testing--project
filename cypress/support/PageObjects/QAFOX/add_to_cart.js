class Add_to_cart{
    check_cart(){
        cy.get('#cart-total').click();
        cy.contains('Palm Treo Pro').should('have.text','Palm Treo Pro');
    }
    
}
export default Add_to_cart;