export class ExchangeRatesPage {

	clickOnExchangeRates() {
		cy.get('.rates_bMirB70gRx')
			.click()
	}

	checkCurrencys() {
		cy.get(':nth-child(1) > .currency_b_C9i_wbMZ > .content_w73Ioj4XNI > :nth-child(1)').should('have.text', "EUR")
		cy.get(':nth-child(2) > .currency_b_C9i_wbMZ > .content_w73Ioj4XNI > :nth-child(1)').should('have.text', "USD")
		cy.get(':nth-child(3) > .currency_b_C9i_wbMZ > .content_w73Ioj4XNI > :nth-child(1)').should('have.text', "GBP")
		cy.get(':nth-child(4) > .currency_b_C9i_wbMZ > .content_w73Ioj4XNI > :nth-child(1)').should('have.text', "USD/EUR")
		cy.get(':nth-child(5) > .currency_b_C9i_wbMZ > .content_w73Ioj4XNI > :nth-child(1)').should('have.text', "EUR/USD")
	}
}

export const exchangeRatesPage = new ExchangeRatesPage()

