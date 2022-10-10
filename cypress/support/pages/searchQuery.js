export class SearchQuery {

	
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

	clickSearchButtonAndTypeMobileTopUp() {
		cy.get("div[class= 'sideA_cakTArHgwR'] div[class= 'sc-EHOje fIXSYP']")
			.click()
		cy.get("input[data-qa-node='query']")
			.invoke('attr', 'placeholder')
			.should('contain', 'Fill service name, card name, template, credit')
		cy.get("input[data-qa-node='query']")
			.type('Mobile Top-up')
		cy.get('[href="/mobile"]')
			.click()
		cy.url().should('eq', 'https://next.privat24.ua/mobile')

	}

	clickSearchButtonAndTypeDeposits() {
		cy.get("div[class= 'sideA_cakTArHgwR'] div[class= 'sc-EHOje fIXSYP']")
			.click()
		cy.get("input[data-qa-node='query']")
			.invoke('attr', 'placeholder')
			.should('contain', 'Fill service name, card name, template, credit')
		cy.get("input[data-qa-node='query']")
			.type('Deposits')
		cy.get('.result_puweWqCNuQ > [href="/deposit"]')
			.click()
		cy.url().should('eq', 'https://next.privat24.ua/deposit')

	}

}

export const searchQuery = new SearchQuery()
