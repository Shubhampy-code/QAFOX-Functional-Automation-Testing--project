import Link_po from "../../support/PageObjects/QAFOX/link_po";
import Login_po from "../../support/PageObjects/QAFOX/login_po";
import Search_po from "../../support/PageObjects/QAFOX/search_po";
import Product_Compare_po from "../../support/PageObjects/QAFOX/product_compare_po";
import Add_to_cart from "../../support/PageObjects/QAFOX/add_to_cart";
import Logout from "../../support/PageObjects/QAFOX/logout_po";

describe('QAFOX Test', () => {
    
    const link_po = new Link_po();
    const login_po = new Login_po();
    const search_po = new Search_po();
    const product_compare_po = new Product_Compare_po();
    const add_to_cart = new Add_to_cart();
    const logout_po = new Logout();

    it('test1', () => {

        // login
        login_po.EnterURL();
        login_po.Login();

        //search the product
        search_po.Search();

        // Remove the product and add to the cart, the product in product compare window.
        product_compare_po.RemoveItem();
        product_compare_po.AddToCart(); 

        // assert the product in add to cart section
        add_to_cart.check_cart();

        // Logout he page 
        logout_po.LogingOut();

    });
});