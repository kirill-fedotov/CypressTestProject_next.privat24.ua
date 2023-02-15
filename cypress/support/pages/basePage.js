export class BasePage {

	openPage(page) {
		cy.visit(page)
	}

	typeAmount(amount) {
		cy.get('[data-qa-node="amount"]')
			.clear()
			.type(amount)
	}

	typeDebitCardData(cardNumber, expDate, cvv) {
		cy.get('[data-qa-node="numberdebitSource"]')
			.type(cardNumber)
			.get('[data-qa-node="expiredebitSource"]')
			.type(expDate)
			.get('[data-qa-node="cvvdebitSource"]')
			.type(cvv)
	}

	wait(time=2000) {
		cy.wait(time)
	}

	submitPayment() {
		cy.get('[data-qa-node="submit"]')
			.click()
	}

	clickLoginButton() {
		cy.get('button[data-qa-node="login"]')
			.click()
	}



	submitPaymentButton() {
		cy.get('button[type = "submit"]')
			.click()
	}

	clickSearchButtonAndTypeTransferToCard() {
		cy.get("div[class= 'sideA_cakTArHgwR'] div[class= 'sc-EHOje fIXSYP']")
			.click()
		cy.get("input[data-qa-node='query']")
			.invoke('attr', 'placeholder')
			.should('contain', 'Fill service name, card name, template, credit')
		cy.get("input[data-qa-node='query']")
			.type('Transfer to a card')
		cy.get('[href = "/money-transfer/card"]')
			.click()
		cy.url().should('eq', 'https://next.privat24.ua/money-transfer/card')
        
	}


	typeDebitNameAndSurname(name, surname) {
		cy.get("input[data-qa-node='firstNamedebitSource']")
			.should('be.visible')
			.type(name)
		cy.get("input[data-qa-node='lastNamedebitSource']")
			.should('be.visible')
			.type(surname)
	}

	
	clickOnLinckAppleStoreAndAssertPage(linkToApple) {
		cy.get('a[title = "Apple store"]')
			.invoke('removeAttr', 'target')
			.click()
		cy.url().should('eq', linkToApple)
		cy.get('.product-header__identity > .link').should('contain.text', "PrivatBank")
	}


	clickOnLinckGooglePlayAndAssertPage(linkToGoogle) {
		cy.get('a[title = "Google Play"]')
			.invoke('removeAttr', 'target')
			.click()
		cy.url().should('eq', linkToGoogle)
		cy.get('.Vbfug > a > span').should('contain.text', "JSC CB PrivatBank")
	}


	clickOnLinckAppGalleryAndAssertPage(linkToAppGallery) {
		cy.get('a[title = "AppGallery"]')
			.invoke('removeAttr', 'target')
			.click()
		cy.url().should('eq', linkToAppGallery)
	}


	changeLanguage() {
		cy.get("button[data-qa-node='lang']")
			.click()
		cy.get("button[data-qa-node='lang-option'][data-qa-value='English']")
			.click()
	}

	uncaughtException() {
		Cypress.on('uncaught:exception', (err, runnable) => {
			return false
		})
	}



}

export const basePage = new BasePage()
