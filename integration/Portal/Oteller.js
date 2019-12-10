context('Portal', () =>{
    
    beforeEach(function () {
    cy.ServerKontrol('POST')
        .visit('https://www.hotelsofturkey.com/Home').viewport(1400,1000)
    })
    Cypress.Commands.add('ServerKontrol',(Method)=>{
        cy.server().route(Method,'/SP_PORTALV4_GETDOMAINCONFIG').as('kontrolet')
    })
    Cypress.Commands.add('araKutusu',(ara,bul)=>{
        cy.get('.search-box-autocomplete-container')
            .contains(ara)
               .parent().parent().parent().parent()
                  .find('input')
                     .type(bul)
                        .wait(600)
                           .get('.cdk-overlay-pane',{timeout:60000})
                              .contains(bul)
                                 .click({force:true})
     })
     Cypress.Commands.add('TextInputDoldur',(textbul,textyaz)=>{
        cy.contains(textbul)
            .parents('.mat-form-field-infix')
               .find('input')
                  .click({force:true})
                     .type(textyaz)
                        .wait(500)
     })
     Cypress.Commands.add('OtelKontrol',(otel)=>{
         cy.get('.ng-star-inserted')
                .contains(otel,{timeout:60000})
     })
     Cypress.Commands.add('besyildizliotelsirala',()=>{
         cy.get('body').contains('star_rate star_rate star_rate star_rate star_rate',{timeout:60000})
     })
    it('type() - type into a DOM element', () => {
        cy.wait('@kontrolet')
            .araKutusu('Where are you going?','All Hotels')
                .get('button')
                    .contains('Search').click({force:true})
                        .TextInputDoldur('Hotel Name','Alaiye Resort & Spa Hotel')
                            .OtelKontrol('Alaiye Resort & Spa Hotel')
                                
    })
})
