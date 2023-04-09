describe('Index', () => {
    it('Has Text', () => {
        cy.visit("/")
        cy.contains(/learn react/i)
    })
})
