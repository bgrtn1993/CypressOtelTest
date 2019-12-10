import "./LibraryPortal.js"
context('Flight', () =>{
    
        beforeEach(function () {
        cy.visit('https://www.hotelsofturkey.com/Flight').viewport(1200,729)
    })
    Cypress.Commands.add('UcusGec',()=>{
        cy.get('.mat-icon',{timeout:60000}).contains('flight_takeoff',{timeout:60000}).click({force:true})
        .get('.tab-1-2-form',{timeout:60000})
    })
    Cypress.Commands.add('araKutusu',(ara,bul)=>{
        cy.get('mat-form-field').contains(ara).parent().parent().parent().parent().find('input').type(bul).wait(600)
            .get('.cdk-overlay-pane',{timeout:60000}).contains(bul).click({force:true})
    })
    Cypress.Commands.add('tusTikla',(ara)=>{
        cy.get('button').contains(ara).click({force:true}).wait(500)
     })
     
     Cypress.Commands.add('Tarih',(tarih,gun)=>{
        cy.get('ta-core-date-panel').contains(tarih).click({force:true}).get('mat-dialog-container',{timeout:60000}).find('.owl-dt-calendar-control').find('[aria-label="Next month"]').click({force:true})
        .click({force:true}).get('[class="owl-dt-calendar-body"]').contains(gun).click({force:true})
    })
    
    it('type() - type into a DOM element', () => {
        
        cy.UcusGec().wait(2000).Tarih('Round','20').araKutusu('Origin','Antalya').araKutusu('Destination','Moscow').tusTikla('Search')
        // cy.server({
        //     // Here we handle all requests passing through Cypress' server
        //     onResponse: (response) => {
        //       if (Cypress.env('RECORD')) {
        //         const url = response.url;
        //         const method = response.method;
        //         const data = response.response.body;
        //         // We push a new entry into the xhrData array
        //         xhrData.push({ url, method, data });
        //       }
        //     },
        //   });
    })
})