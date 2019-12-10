context('Library', () =>{

    beforeEach(function () {
        cy.ServisKontrol('POST','/SP_GETPAYMENTSETTINGS','asd')
            .viewport(1200,729)
               .visit('https://www.fanatik.com')
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
     Cypress.Commands.add('TextAreaDoldur',(kutuad,doldurad)=>{
      cy.get('.mat-form-field-infix')
            .contains(kutuad)
               .parent().parent().parent()
                  .find('textarea')
                     .type(doldurad)
                        .wait(500)
   })
     Cypress.Commands.add('tusTikla',(ara)=>{
        cy.get('button')
            .contains(ara)
               .click({force:true})
                  .wait(500)
     })
     Cypress.Commands.add('TarihBul',(Checkin,Checkout)=>{
         cy.get('ta-core-date-panel')
            .contains('Checkin',{timeout:60000})
               .click({force:true})
                  .get('mat-dialog-container')
                     .contains(Checkin,{timeout:60000})
                        .click({force:true})
                           .get('mat-dialog-container')
                              .should('not.exist',{timeout:60000})
                                 .get('mat-dialog-container',{timeout:60000})
                                    .contains(Checkout,{timeout:60000})
                                       .click({force:true})
     })
     Cypress.Commands.add('HotelKontrol',()=>{
         cy.get('.mat-icon',{timeout:60000})
            .contains('business',{timeout:60000})
               .click({force:true})
                  .get('ta-hotel-home-search-box',{timeout:60000})
     })
     Cypress.Commands.add('UcusKontrol',()=>{
        cy.get('.mat-icon',{timeout:60000})
            .contains('flight_takeoff',{timeout:60000})
               .click({force:true})
                  .get('.tab-1-2-form',{timeout:60000})
     })
     Cypress.Commands.add('TransferKontrol',()=>{
        cy.get('.mat-icon',{timeout:60000})
            .contains('directions_car',{timeout:60000})
               .click({force:true})
                  .get('.transfer-search-box-tab-group',{timeout:60000})
     })
     Cypress.Commands.add('TurKontrol',()=>{
        cy.get('.mat-icon',{timeout:60000})
            .contains('map',{timeout:60000})
               .click({force:true})
                  .get('.tour-search-box-container',{timeout:60000})
     })
     Cypress.Commands.add('TicketKontrol',()=>{
        cy.get('.mat-icon',{timeout:60000})
            .contains('local_movies',{timeout:60000})
               .click({force:true})
                  .get('.ticket-search-box-container',{timeout:60000})
     })
     Cypress.Commands.add('Kontrol',()=>{
         cy.UcusKontrol()
            .wait(500)
               .TransferKontrol()
                  .wait(500)
                     .TurKontrol()
                        .wait(500)
                           .TicketKontrol()
                              .wait(500)
                                 .HotelKontrol()
                                    .wait(500)
     })
     Cypress.Commands.add('ResimKontrol',()=>{
         cy.get('.hotel-detail-info-img',{timeout:60000})
     })
     Cypress.Commands.add('OdaSec',(OdaTur)=>{
         cy.get('body')
            .contains(OdaTur,{timeout:60000})
               .parent().parent().parent().parent()
                  .find('button',{timeout:60000})
                     .contains('Book')
                        .click({force:true})
     })
     Cypress.Commands.add('BasketKontrol',(OdaTuru)=>{
         cy.get('.basket-panel-container',{timeout:60000})
            .contains(OdaTuru,{timeout:60000})
               .should('exist',{timeout:60000})

     })
     
     
     Cypress.Commands.add('ContratDoldur',(GuestName,GuestSurname,Phone,Email,ExtraNote)=>{
        cy.get('body')
            .contains('Contact Information',{timeout:60000})
               .TextInputDoldur('Guest Name',GuestName)
                  .TextInputDoldur('Guest Surname',GuestSurname)
                     .TextInputDoldur('Phone',Phone).wait(200)
                        .TextInputDoldur('Email',Email)
                           .ExtroNoteKontrol(ExtraNote)
     })
     Cypress.Commands.add('FieldOutlineSec',(Gender,Secenek)=>{
         cy.get('.mat-form-field-wrapper')
               .contains(Gender,{timeout:60000})
                  .click({force:true})
                     .get('.mat-select-panel-wrap')
                        .contains(Secenek)
                           .click({force:true})
     })
     Cypress.Commands.add('ComboBoxDoldur',(textbul,textsec)=>{
         cy.contains(textbul,{timeout:60000})
               .click({force:true})
                  .get('.mat-option-text')
                     .contains(textsec,{timeout:60000})
                        .click({force:true})  
     })
     Cypress.Commands.add('GuestDoldur',(cinsiyet1,cinsiyet2,isim,soyisim)=>{
        cy.contains('1.Guest',{timeout:60000})
            .parent()
               .ComboBoxDoldur('Gender',cinsiyet1) 
                  .get('.hotel-guest-container > :nth-child(2)')
                     .contains('Gender').click({force:true})
                        .get('.mat-option-text').contains(cinsiyet2)
                           .click({force:true})
                              .get('.hotel-guest-container > :nth-child(2)')
                                 .contains('Guest Name').parents('')
                                    .parents('.mat-form-field-infix').find('input')
                                       .clear().type(isim)
                                          .get('.hotel-guest-container > :nth-child(2)')
                                             .contains('Guest Surname').parents('')
                                                .parents('.mat-form-field-infix').find('input')
                                                   .clear().type(soyisim)
                                                      .tusTikla('Next')
     })
     Cypress.Commands.add('PaymentDoldur',(CardHolder,CardNumber,Month,Year)=>{
         cy.TextInputDoldur('Card Holder',CardHolder)
            .TextInputDoldur('Card Number',CardNumber)
               .FieldOutlineSec('Month',Month)
                  .FieldOutlineSec('Year',Year)
                     .TextInputDoldur('Cvv','555')
                        .get('mat-checkbox')
                           .find('.mat-checkbox-inner-container')
                              .click({force:true})
                                 .tusTikla('Complete')
     })
     Cypress.Commands.add('ServisKontrol',(servisMethod,servisAd,serviskaydet)=>{
         cy.server()
            .route(servisMethod,'/SP_PORTALV4_GETDOMAINCONFIG')
               .as(serviskaydet)
     })
     Cypress.Commands.add('BasketDus',(asdd)=>{
        cy.get('.basket-panel-container')
            .then((asd)=>{
               if(asd.hasClass('active')){
                  cy.contains(asdd,{timeout:60000})
                        .wait(1234)
               }
        })
     })
     Cypress.Commands.add('ExtraNoteRoute',(servisMethod)=>{
        cy.server().route(servisMethod,'/BASKET_FIELDS_INVISIBILITY').as('extrakontrol')
     })
     
     Cypress.Commands.add('ExtroNoteKontrol',(textyaz)=>{
        cy.wait('@extrakontrol').then(xhr=>{
           if(xhr.response.body.ResultSets[0][0].CONTACT_EXTRANOT==true){
              cy.TextAreaDoldur('Extra Note',textyaz)
           }
        })
     })
    

})