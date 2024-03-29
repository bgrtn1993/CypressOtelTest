context('Portal', () =>{
    
    beforeEach(function () {
        cy.visit('https://www.hotelsofturkey.com/Transfer')
            .viewport(1200,729)
    })
    Cypress.Commands.add('araKutusu',(ara,bul)=>{
        cy.get('mat-form-field')
            .contains(ara)
                .parent().parent().parent().parent()
                    .find('input')
                        .clear()
                            .type(bul)
                                .wait(600)
                                    .get('.cdk-overlay-pane',{timeout:60000})
                                        .contains(bul)
                                            .first()
                                                .click({force:true})
    })
    Cypress.Commands.add('tusTikla',(ara)=>{
        cy.get('button')
            .contains(ara)
                .click({force:true})
                    .wait(500)
     })
     Cypress.Commands.add('FieldInfixDoldur',(kutuad,doldurad)=>{
        cy.get('.mat-form-field-infix')
            .contains(kutuad)
                .parent().parent().parent()
                    .find('textarea')
                        .type(doldurad)
     })
     Cypress.Commands.add('Tarih',(tarih,gun)=>{
        cy.get('ta-core-date-panel')
            .contains(tarih)
                .click({force:true})
                    .get('mat-dialog-container',{timeout:60000})
                        .find('.owl-dt-calendar-control')
                            .find('[aria-label="Next month"]')
                                .click({force:true})
                                    .click({force:true})
                                        .get('[class="owl-dt-calendar-body"]')
                                            .contains(gun)
                                                .click({force:true})
                                                    .get('mat-dialog-container')
                                                        .find('mat-icon')
                                                            .contains('clear')
                                                                .click({force:true})
    })
    Cypress.Commands.add('ilkTransfer',(arac)=>{
        cy.get('ta-transfer-itinerary-list')
            .first()
                .contains(arac)
                    .parent()
                        .parent()
                            .parent()
                                .parent()
                                    .contains('Select')
                                        .click({force:true})
    })
    Cypress.Commands.add('sonTransfer',(arac)=>{
        cy.get('ta-transfer-itinerary-list')
            .last()
                .contains(arac)
                    .parent().parent().parent().parent()
                        .contains('Select')
                            .click({force:true})
    })
    it('Work', () => {
        cy.clearCookies()
        .araKutusu('Origin','Antalya Havalimani')
            .araKutusu('Destination','Alanya').Tarih('Departure','2').Tarih('Round Trip','25').tusTikla('Search')
                .ilkTransfer('Shuttle')
                    .sonTransfer('Shuttle')
                        .tusTikla('Add To Cart')
    })
})