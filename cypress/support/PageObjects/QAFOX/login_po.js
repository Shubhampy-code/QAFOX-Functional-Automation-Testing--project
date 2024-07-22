before(() => {
    cy.fixture('example').then((data)=>{
        globalThis.data = data;
    })
});
class Login_po{


    EnterURL(){
        cy.visit('https://tutorialsninja.com/demo/index.php?route=account/login');

    }

    Login(){
        cy.get('[name="email"]').type(data.email);
        cy.get('[name="password"]').type(data.password);
        cy.get('[value="Login"]').click();
        cy.title().should('include','My Account');
    }
}

export default Login_po;