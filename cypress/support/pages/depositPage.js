export class DepositPage {


	clickQuestionsButton() {
		cy.get('.navMenu_QG5K9Dh6AQ > :nth-child(3) > .sc-cUEOzv')
			.click()
	}

	clickUsDollarButton() {
		cy.get("label[title = 'US Dollar']")
			.click()
	}

	clickEuroButton() {
		cy.get("label[title = 'Euro']")
			.click()
	}

	clickOnQuestions() {
		cy.get(':nth-child(1) > .heading_HdyoL8acKm > :nth-child(1)')
			.click()
			.click()
		cy.get(':nth-child(3) > .heading_HdyoL8acKm > :nth-child(1)')
			.click()
		cy.get(':nth-child(4) > .heading_HdyoL8acKm > :nth-child(1)')
			.click()
		cy.get(':nth-child(5) > .heading_HdyoL8acKm > :nth-child(1)')
			.click()
		cy.get(':nth-child(6) > .heading_HdyoL8acKm > :nth-child(1)')
			.click()
		cy.get(':nth-child(7) > .heading_HdyoL8acKm > :nth-child(1)')
			.click()
		cy.get(':nth-child(8) > .heading_HdyoL8acKm > :nth-child(1)')
			.click()
		cy.get(':nth-child(9) > .heading_HdyoL8acKm > :nth-child(1)')
			.click()
		cy.get(':nth-child(10) > .heading_HdyoL8acKm > :nth-child(1)')
			.click()
		cy.get(':nth-child(11) > .heading_HdyoL8acKm > :nth-child(1)')
			.click()
		cy.get(':nth-child(12) > .heading_HdyoL8acKm > :nth-child(1)')
			.click()
		cy.get(':nth-child(13) > .heading_HdyoL8acKm > :nth-child(1)')
			.click()
		cy.get(':nth-child(14) > .heading_HdyoL8acKm > :nth-child(1)')
			.click()
		cy.get(':nth-child(15) > .heading_HdyoL8acKm > :nth-child(1)')
			.click()


	}


}

export const depositPage = new DepositPage()
