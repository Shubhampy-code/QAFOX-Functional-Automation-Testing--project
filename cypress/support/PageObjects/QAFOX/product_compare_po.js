class Product_Compare_po{
    RemoveItem(){
        cy.get('[href="https://tutorialsninja.com/demo/index.php?route=product/compare&remove=28"]').click();
    }

    AddToCart(){
        cy.get('[value="Add to Cart"]').click();
    }
}
export default Product_Compare_po;