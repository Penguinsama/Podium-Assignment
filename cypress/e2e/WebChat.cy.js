/// <reference types="cypress" />

import WebChatPage from '../support/pageObjects/WebChat.page'

describe('Search widget tests', () => {

    it('Seach button opens and closes modal', () => {
        
        WebChatPage.visit();
        WebChatPage.verifySearchWindowIsNotPresent();
        WebChatPage.clickSearchButton();
        WebChatPage.verifySearchWindowIsPresent();
        WebChatPage.clickSearchButton();
        WebChatPage.verifySearchWindowIsNotPresent();
    })

    it('Search result list has expected values', () => {

        WebChatPage.visit();
        WebChatPage.clickSearchButton();
        WebChatPage.getLocationsList().contains('Scoreboard Sports - Orem');
        WebChatPage.getLocationsList().contains('Scoreboard Sports - Bountiful');
        WebChatPage.getLocationsList().contains('Scoreboard Sports - Narnia');
    })

    it('Mobile phone verification works as expected', () => {

        WebChatPage.visit();
        WebChatPage.clickSearchButton();
        WebChatPage.getLocationsList().contains('Scoreboard Sports - Orem').click();
        WebChatPage.verifyValidationCheckmarkIsNotPresent();
        WebChatPage.getMobilePhoneInputField().click().type('8048675309897');
        WebChatPage.verifyValidationCheckmarkIsNotPresent();
    })

    it('Send button disabled until form completed', () => {

        WebChatPage.visit();
        WebChatPage.clickSearchButton();
        WebChatPage.getLocationsList().contains('Scoreboard Sports - Orem').click();
        WebChatPage.getNameInputField().click().type('Penguin');
        WebChatPage.verifySendButtonIsDisabled();
        WebChatPage.getMobilePhoneInputField().click().type('5558675309');
        WebChatPage.verifySendButtonIsDisabled();
        WebChatPage.getMessageInputField().click().type('Penguins rock!');
        WebChatPage.verifySendButtonIsEnabled();
    })

    it('Flag picker sets country code', () => {
        WebChatPage.visit();
        WebChatPage.clickSearchButton();
        WebChatPage.getLocationsList().contains('Scoreboard Sports - Orem').click();
        WebChatPage.getMobilePhoneInputField().click().type('18046228695');
        WebChatPage.selectAustraliaFlag();
        WebChatPage.getMobilePhoneInputField().should('have.value', '618046228695') 
    })
})