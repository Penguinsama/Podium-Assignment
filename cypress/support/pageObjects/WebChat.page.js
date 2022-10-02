const WebChatPage =  {

    visit () {
        cy.visit('/')
    },

    clickSearchButton () {
        this.getIframeBodyPodiumBubble().find('.ContactBubble__Bubble').click();
    },

    getIframeBodyPodiumModal() {
        return cy
    .get('#podium-modal')
    .its('0.contentDocument.body').should('not.be.empty')
    .then(cy.wrap)
    },

    getIframeBodyPodiumBubble () {
        return cy
    .get('#podium-bubble')
    .its('0.contentDocument.body').should('not.be.empty')
    .then(cy.wrap)
    },

    verifySearchWindowIsPresent () {
        cy.get('#podium-modal').should('exist')
    },

    verifySearchWindowIsNotPresent () {
        cy.get('#podium-modal').should('not.exist')
    },

    getSearchInputField () {
        return this.getIframeBodyPodiumModal().find('input[name="Search Locations"]')
    },

    getLocationsList () {
        return this.getIframeBodyPodiumModal().find('.LocationItemsContainer')
    },

    getMobilePhoneInputField () {
        return this.getIframeBodyPodiumModal().find('[id="Mobile Phone"]');
    },

    verifyValidationCheckmarkIsPresent () {
        this.getIframeBodyPodiumModal().find('.checkmark').should('exist');
    },

    verifyValidationCheckmarkIsNotPresent () {
        this.getIframeBodyPodiumModal().find('.checkmark').should('not.exist');
    },

    getNameInputField () {
        return this.getIframeBodyPodiumModal().find('#Name');
    },

    getMessageInputField () {
        return this.getIframeBodyPodiumModal().find('#Message');
    },

    verifySendButtonIsEnabled () {
        this.getIframeBodyPodiumModal().find('[class="SendButton SendButton--valid"]').should('exist');
    },

    verifySendButtonIsDisabled () {
        this.getIframeBodyPodiumModal().find('[class="SendButton SendButton--incomplete"]').should('exist');
    },

    selectAustraliaFlag () {
        this.getIframeBodyPodiumModal().find('.flag-picker').click({force: true})
        this.getIframeBodyPodiumModal().find('[class="flag-drop-container open"] > :nth-child(3)').click();
    }


};

export default WebChatPage;