import './LibraryPortal.js'
context('Portal', () =>{
    
        beforeEach(function () {
        cy.ServisKontrol('POST','/SP_GETPAYMENTSETTINGS','asd')
            .viewport(1200,729)
               .visit('https://www.hotelsofturkey.com/Home')
    })
    
     var CardHolder = "Test";
     var CardNumber = "2222222222222222";
     var Month = "02";
     var Year = "2019";
     var mail = "test@test.com";
    it('type() - type into a DOM element', () => {
       let config = {};
      cy.get('body').contains('Where are you going?',{timeout:60000}).should('exist',{timeout:60000}).wait(1000)
        .wait('@asd').then(xhr => {
           config = xhr.response.body;
            assert.isNotNull(xhr.response.body[0][0].BANNERIMAGE, 'banner image var!');
            })
        .Kontrol()
        .araKutusu('Where are you going?',"La Boutique Antalya").wait(200)
        .TarihBul('25','26')
        .tusTikla('Search').ResimKontrol()
        .OdaSec('STANDARD ROOM')
        if (config.BASKET) {
           cy.BasketKontrol('STANDARD ROOM').wait(1000).get('app-loading-overlay').should('not.exist',{timeout:60000})
        }
        cy.ExtraNoteRoute('POST')
            .BasketDus('STANDARD ROOM')
            .ContratDoldur('test','test','05454454545',mail,'test')
            .tusTikla('Next').wait(400)
            .GuestDoldur("Mr","Ms","test","test")
            .PaymentDoldur(CardHolder,CardNumber,Month,Year)
    })
})