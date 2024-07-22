before(() => {
    cy.fixture('example').then((data)=>{
        globalThis.data = data;
    })
});

class Search_po{
Search(){

    // Add product 1 in product compare
    cy.get('[name="search"]').type(data.product1);
    cy.get('[class="btn btn-default btn-lg"]').click();

    cy.title('Search - HTC Touch HD').should('include','Search - HTC Touch HD');
    cy.get('[src="https://tutorialsninja.com/demo/image/cache/catalog/demo/htc_touch_hd_1-228x228.jpg"]').click();

    //hover the mouse to the product compare
    cy.get('[class="fa fa-exchange"]').trigger('mouseover').click();

    // clear the product name from seaarch bar
    cy.get('[name="search"]').clear();
    // Add product 2 in product compare.
    cy.get('[name="search"]').type(data.product2);
    cy.get('[class="btn btn-default btn-lg"]').click();
    cy.get('[src="https://tutorialsninja.com/demo/image/cache/catalog/demo/palm_treo_pro_1-228x228.jpg"]').click();

    //hover the mouse to the product compare
    cy.get('[class="fa fa-exchange"]').trigger('mouseover').click();

    // open product compare
    cy.contains('product comparison').click();



}
}

export default Search_po;