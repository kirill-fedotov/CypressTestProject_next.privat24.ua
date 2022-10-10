export class MobilePhoneReplenishment {

	typePhoneNumber(phoneNumber) {
		cy.get('[data-qa-node="phone-number"]')
			.type(phoneNumber)

	}

	checkDebitCard(debitCard) {
		cy.get('[data-qa-node="card"]')
			.should('have.text', debitCard)
	}

	checkDebitAmount(debitAmount) {
		cy.get('[data-qa-node="amount"]')
			.should('contain.text', debitAmount)
	}

	checkDebitAmountAndComission(debitComission) {
		cy.get('[data-qa-node="commission"]')
			.should('contain.text', debitComission)
	}

	checkPaymentCurrency(paymentCurrency) {
		cy.get('[data-qa-node="commission-currency"]')
			.should('contain.text', paymentCurrency)
	}

}

export const mobileReplenishment = new MobilePhoneReplenishment()

