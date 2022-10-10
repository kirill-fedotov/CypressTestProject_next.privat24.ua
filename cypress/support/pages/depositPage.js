export class DepositPage {


	clickQuestionsButton() {
		cy.get('.navMenu_QG5K9Dh6AQ > :nth-child(3) > .sc-caSCKo')
			.click()
	}

	clickUsDollarButton() {
		cy.get('[for="toggler2321"]')
			.click()
	}

	clickEuroButton() {
		cy.get('[for="toggler2322"]')
			.click()
	}

	clickOnQuestions() {
		cy.get(':nth-child(1) > .heading_HdyoL8acKm > :nth-child(1)')
			.click()
		//cy.get(':nth-child(1) > .heading_HdyoL8acKm > :nth-child(1)').should('contain', "Коли я можу відкрити вклад через Інтернет (сайт банку, Приват24, мобільний додаток «Мої вклади»)?")
		cy.get(':nth-child(2) > .heading_HdyoL8acKm > :nth-child(1)')
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
