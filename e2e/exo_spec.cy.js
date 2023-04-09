describe('ce qu\'il fait la méthode', function () {
  //les tests ici

  it('description', function () {
    cy.visit("")
    cy.get('#id_de_champs').type('test',{force:true}) // dans le champ avec l'id est :id_de_champ, taper test
    //en cas de problème faire : .type('test',{force:true})
    // pour cliquer entrer sans avoir cliqué sur un bouton :.type('test{enter}',{force:true})
    cy.get('#id_button').click()
    cy.get('#content_element').contains('chaine')
  })

  it('test avec click sur enter', function () {
    cy.visit("")
    cy.get('#id_de_champs').type('test{enter}', { force: true })// dans le champ avec l'id: id_de_champ taper test
    cy.get('#content_element').contains('chaine')
  })
})