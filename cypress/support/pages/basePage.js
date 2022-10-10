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
		cy.get('[data-qa-node="firstNamedebitSource"]')
			.type(name)
			.get('[data-qa-node="lastNamedebitSource"]')
			.type(surname)
	}


	clickOnLinckAppleStoreAndAssertUrl(linkToApple) {
		cy.get('a[title = "Apple store"]')
			.invoke('removeAttr', 'target')
			.click()
		cy.url().should('eq', linkToApple)
	}


	clickOnLinckGooglePlayAndAssertUrl(linkToGoogle) {
		cy.get('a[title = "Google Play"]')
			.invoke('removeAttr', 'target')
			.click()
		cy.url().should('eq', linkToGoogle)
	}


	clickOnLinckAppGalleryAndAssertUrl(linkToAppGallery) {
		cy.get('a[title = "AppGallery"]')
			.invoke('removeAttr', 'target')
			.click()
		cy.url().should('eq', linkToAppGallery)
	}




}

export const basePage = new BasePage()
