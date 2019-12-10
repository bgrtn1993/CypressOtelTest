context('Portal', () =>{
    let config = {};
    var deger;
    beforeEach(function () {
    cy.ServisKontrol('POST','/SP_PORTALV4_GETDOMAINCONFIG','deger').ServisKontrol('POST','/BASKET_FIELDS_INVISIBILITY','basket').visit('https://www.hotelsofturkey.com/Home').viewport(1200,729)
    })

    Cypress.Commands.add('ServisKontrol',(servisMethod,servisAd,serviskaydet)=>{
        cy.server().route(servisMethod,servisAd).as(serviskaydet)
       })
    
    Cypress.Commands.add('objekontrol',(deger)=>{
        cy.wait(deger).then(xhr => {
            config = xhr.response.body;
            if(config[0][0].USEHOTEL==true){
                cy.get('body').find('mat-icon').contains('business',{timeout:60000})
            }else{
                cy.get('body').find('mat-icon').contains('business').should('not.exist',{timeout:60000})
            }
        })
    })
    Cypress.Commands.add('araKutusu',(ara,bul)=>{
        cy.get('.search-box-autocomplete-container').contains(ara).parent().parent().parent().parent().find('input').type(bul).wait(600)
            .get('.cdk-overlay-pane',{timeout:60000}).contains(bul).click({force:true})
     })
     Cypress.Commands.add('BasketKontrol',(odatipi)=>{
         cy.wait(basket).then(xhr=>{
             config=xhr.response.body;
             if (config[0][0]){
                 
             }
         })
     })
    it('type() - type into a DOM element', () => {
        cy.araKutusu('Where are you going?',"La Boutique Antalya").objekontrol('@deger').get('button')
            .contains('Search').click({force:true}).get('button').contains('Search').click({force:true}).BasketKontrol()

    })
})