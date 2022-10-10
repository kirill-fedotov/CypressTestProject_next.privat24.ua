/// <reference types="Cypress" />

import { basePage } from "../../support/pages/basePage";
import { mobileReplenishment } from "../../support/pages/mobileReplenishment";
import { transfers } from "../../support/pages/transfers";
import { searchQuery } from "../../support/pages/searchQuery";
import { depositPage } from "../../support/pages/depositPage";
import { exchangeRatesPage } from "../../support/pages/exchangeRatesPage";

describe('Cypress Tests', () => {

	it('Top up mobile number', () => {
		cy.fixture('topUpMobileData').then((data) => {
			basePage.openPage(data.topUpMobilePage)
			mobileReplenishment.typePhoneNumber(data.phoneNumber)
			basePage.typeAmount(data.amount)
			basePage.typeDebitCardData(data.cardNumber, data.expDate, data.cvv)
			basePage.typeDebitNameAndSurname(data.name, data.surname)
			basePage.wait()
			basePage.submitPayment()
			mobileReplenishment.checkDebitCard(data.debitCard)
			mobileReplenishment.checkDebitAmount(data.debitAmount)
			mobileReplenishment.checkDebitAmountAndComission(data.debitComission)
			mobileReplenishment.checkPaymentCurrency(data.paymentCurrency)

		})
	})


	it('Money transfer between foreign cards', () => {
		cy.fixture('moneyTransferData').then((data) => {
			basePage.openPage(data.moneyTransferPage)
			basePage.typeDebitCardData(data.cardNumber, data.expDate, data.cvv)
			basePage.typeDebitNameAndSurname(data.name, data.surname)
			transfers.typeReceiverCard(data.receiverCard)
			basePage.typeAmount(data.amount)
			transfers.typeReceiverNameAndSurname(data.receiverName, data.receiverSurname)
			transfers.typeComment(data.comment)
			basePage.wait()
			basePage.submitPaymentButton()
			transfers.checkDebitAndReceiverCards(data.debitCard, data.receiverCard)
			transfers.checkDebitAmountAndTotalAmount(data.debitAmount, data.totalAmount)
			transfers.checkDebitComission(data.comission)
			transfers.checkTotalCurrency(data.currency)
			transfers.checkComment(data.checkComment)

		})
	})


	it('Working with the search field (Money transfer)', () => {
		cy.fixture('moneyTransferData').then((data) => {
			basePage.openPage(data.mainPage)
			searchQuery.clickSearchButtonAndTypeTransferToCard()
			basePage.typeDebitCardData(data.cardNumber, data.expDate, data.cvv)
			basePage.typeDebitNameAndSurname(data.name, data.surname)
			transfers.typeReceiverCard(data.receiverCard)
			basePage.typeAmount(data.amount)
			transfers.typeReceiverNameAndSurname(data.receiverName, data.receiverSurname)
			transfers.typeComment(data.comment)
			basePage.wait()
			basePage.submitPaymentButton()
			transfers.checkDebitAndReceiverCards(data.debitCard, data.receiverCard)
			transfers.checkDebitAmountAndTotalAmount(data.debitAmount, data.totalAmount)
			transfers.checkDebitComission(data.comission)
			transfers.checkTotalCurrency(data.currency)
			transfers.checkComment(data.checkComment)
			
		})
	})

	it('Working with the search field (Top up mobile)', () => {
		cy.fixture('topUpMobileData').then((data) => {
			basePage.openPage(data.mainPage)
			searchQuery.clickSearchButtonAndTypeMobileTopUp()
			mobileReplenishment.typePhoneNumber(data.phoneNumber)
			basePage.typeAmount(data.amount)
			basePage.typeDebitCardData(data.cardNumber, data.expDate, data.cvv)
			basePage.typeDebitNameAndSurname(data.name, data.surname)
			basePage.wait()
			basePage.submitPayment()
			mobileReplenishment.checkDebitCard(data.debitCard)
			mobileReplenishment.checkDebitAmount(data.debitAmount)
			mobileReplenishment.checkDebitAmountAndComission(data.debitComission)
			mobileReplenishment.checkPaymentCurrency(data.paymentCurrency)

		})
	})

	it('Working with the search field (Type "Transfer To Card")', () => {
		cy.fixture('basePageData').then((data) => {
			basePage.openPage(data.mainPage)
			searchQuery.clickSearchButtonAndTypeTransferToCard()
			
		})
	})

	it('Working with the search field (Type "Mobile Top Up")', () => {
		cy.fixture('basePageData').then((data) => {
			basePage.openPage(data.mainPage)
			searchQuery.clickSearchButtonAndTypeMobileTopUp()
			
		})
	})

	it('Working with the search field (Type "Deposits")', () => {
		cy.fixture('basePageData').then((data) => {
			basePage.openPage(data.mainPage)
			searchQuery.clickSearchButtonAndTypeDeposits()

		})
	})

	it('Working with Deposit Page', () => {
		cy.fixture('depositPageData').then((data) => {
			basePage.openPage(data.depositMainPage)
			depositPage.clickUsDollarButton()
			depositPage.clickEuroButton()
			depositPage.clickQuestionsButton()
			depositPage.clickOnQuestions()
			
		})

	})

	it('Working with Exchange Rates Page', () => {
		cy.fixture('exchangeRatesData').then((data) => {
			basePage.openPage(data.mainPage)
			exchangeRatesPage.clickOnExchangeRates()
			exchangeRatesPage.checkCurrencys()

		})

	})

	it('Working with Link to Apple Store', () => {
		cy.fixture('linksToAppleGoogleAppgallery').then((data) => {
			basePage.openPage(data.mainPage)
			basePage.clickOnLinckAppleStoreAndAssertPage(data.appleStorePage)
		})
	})

	it('Working with Link to Google Play', () => {
		cy.fixture('linksToAppleGoogleAppgallery').then((data) => {
			basePage.openPage(data.mainPage)
			basePage.clickOnLinckGooglePlayAndAssertPage(data.googlePlayPage)
		})
	})

	it('Working with Link to App Gallery', () => {
		cy.fixture('linksToAppleGoogleAppgallery').then((data) => {
			basePage.openPage(data.mainPage)
			basePage.clickOnLinckAppGalleryAndAssertPage(data.appGalleryPage)
		})
	})
	
})