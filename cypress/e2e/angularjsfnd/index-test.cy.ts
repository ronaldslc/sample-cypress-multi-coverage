describe('Index', () => {
    it('Has Text', () => {
        cy.visit("/")
        cy.contains(/this is the partial for view 1/i)
    })
})
