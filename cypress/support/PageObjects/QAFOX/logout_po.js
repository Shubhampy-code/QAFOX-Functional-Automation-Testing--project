class Logout{
    LogingOut(){
        cy.get('[class="fa fa-user"]').click();
        cy.get('[href="https://tutorialsninja.com/demo/index.php?route=account/logout"]').click();
        cy.title().should('include','Account Logout')
    }
}
export default Logout;