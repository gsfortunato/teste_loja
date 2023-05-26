///<reference types='cypress'/>


describe('Must select a product ', () => {

    beforeEach(() => {
        cy.visit('produtos/')
    });

    it('Select a product', () => {
        //cy.get('.products > .row').contains('Aero Daily Fitness Tee').click()
        cy.get('[class="product-block grid"]').eq(2).click()
    });

    it.only('Adiciona o produto ao carrinho', () => {

        var quantidade = 9

        cy.get('[class="product-block grid"]').contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade +' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    });
    
    
});
