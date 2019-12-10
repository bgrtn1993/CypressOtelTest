context('Portal', () =>{
    beforeEach(function () {
    cy.visit('http://www.easypms.net/').viewport(1200,729)
    })
    Cypress.Commands.add('TextCagir', (textYazi, textSayi) =>
	    cy.contains(textYazi,{timeout:60000}).parent().parent().parent().parent()
	        .find('.mat-input-element').first().clear().type(textSayi)
    )
    Cypress.Commands.add('TextElektraCagir',(TextYazi,textyaz)=>{
        cy.get('.mat-input-element',{timeout:5000}).contains(TextYazi,{timeout:5000}).parent().parent().find('.mat-input-element').click()
            .clear().type(textyaz).get('.mat-option',{timeout:5000}).contains(textyaz,{timeout:5000}).click()
    })
    Cypress.Commands.add('MediTextCagir',(text,text2)=>{
        cy.contains(text,{timeout:60000}).click({force:true})
	        .find('input').clear().type(text2)
    })
    Cypress.Commands.add('TextLookUp',(TextYazi,textsec)=>{
        cy.get('mat-select').contains(TextYazi).click({force:true}).get('.mat-select-panel')
            .contains(textsec).click({force:true})
    })

    it('type() - type into a DOM element', () => {
        cy.TextCagir('Tenant','1').TextCagir('Usercode','demo').TextCagir('Password','123').TextLookUp('ElektraWeb Local','Medisoft')
            .get('button').contains('Login').click({force:true}).wait(2000)
            .get('app-menu').contains('Hasta İşlemleri').click({force:true})
                .get('[class="children ng-trigger ng-trigger-openClose"]').contains('Hızlı Hasta Kayıt').click({force:true}).wait(2000)
                    .get('mat-tab-group').first().find('ang-element').contains('TC. Kimlik No').parents('ang-element').parent().parent().contains('Adı')
                    .parent().parent().parent().parent().find('input').clear().type('Ahmet')
                    .parents('ang-group').find('button').contains('Ara').click({force:true})
                    .get('ang-panel').contains('Dosya Bilgileri').parents('ang-panel')
                    .contains('Dosya Arama').click({force:true}).wait(500).get('[class="mat-autocomplete-panel ng-star-inserted mat-autocomplete-visible"]')
                    .contains('ŞAHİN ORAL').click({force:true})
                    .get('ang-panel').find('ang-record-datetime').find('input').first().type('20.11.2019').parents('ang-record-datetime')
                    .find('input').last().type('10:00')
                    .parents('ang-panel').contains('Kurum İşlem Tamamlandı').click({force:true})
                    .parents('[class="ang-record-container ang-record-hizli-kayit"]')
                    .find('[class="big-icon mat-icon notranslate material-icons mat-icon-no-color ng-star-inserted"]').click({force:true})

    })
})