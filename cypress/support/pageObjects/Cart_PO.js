class Cart_PO {
  visitProductPage() {
    cy.visit("https://automationteststore.com");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  }

  addProductToBasket(productName) {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text() === productName) {
        cy.get(".productcart").eq(index).click();
      }
    });
  }
}

export default Cart_PO;
