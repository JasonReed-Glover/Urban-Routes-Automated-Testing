module.exports = {
    // Inputs
    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    codeField: '#code',
    cardNumberField: '#number',
    cvvField: '/html/body/div/div/div[2]/div[2]/div[2]/form/div[1]/div[2]/div[2]/div[2]/input',
    driverMessageBox: '#comment',
    blanketToggle: '//*[@id="root"]/div/div[3]/div[3]/div[2]/div[2]/div[4]/div[2]/div[1]/div/div[2]/div/span',
    // Buttons
    callATaxiButton: 'button=Call a taxi',
    phoneNumberButton: '//div[starts-with(text(), "Phone number")]',
    nextButton: 'button=Next',
    confirmButton: 'button=Confirm',
    linkButton: 'button=Link',
    selectingAmount: '.counter-plus',
   orderButton: '//*[@id="root"]/div/div[3]/div[4]/button',
   closePayment: '//*[@id="root"]/div/div[2]/div[2]/div[1]/button',
   toggleSelected: '//*[@id="root"]/div/div[3]/div[3]/div[2]/div[2]/div[4]/div[2]/div[1]/div/div[2]/div/input',
   iceCreamConfirmation: 'div=2',
    // Modals
    phoneNumberModal: '.modal', 
    supportiveButton: '//div[.="Supportive"]/..',
    // Functions
    addingCard: '//*[@id="root"]/div/div[3]/div[3]/div[2]/div[2]/div[2]',
    // Modals
    addCardInformation: '//*[@id="root"]/div/div[2]/div[2]/div[1]/div[2]/div[3]',
    cardTitle: 'div=Adding a card',
    cardVerification: 'div=Cash',
    carSearch: '//*[@id="root"]/div/div[5]/div[2]/div[1]/div/div[1]',


    fillAddresses: async function(from, to) {
        const fromField = await $(this.fromField);
        await fromField.setValue(from);
        const toField = await $(this.toField);
        await toField.setValue(to);
        const callATaxiButton = await $(this.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
    },
    fillPhoneNumber: async function(phoneNumber) {
        const phoneNumberButton = await $(this.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(this.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed()
        const phoneNumberField = await $(this.phoneNumberField);
        await phoneNumberField.waitForDisplayed();
        await phoneNumberField.setValue(phoneNumber);
    },
    submitPhoneNumber: async function(phoneNumber) {
        await this.fillPhoneNumber(phoneNumber);
        // we are starting interception of request from the moment of method call
        await browser.setupInterceptor();
        await $(this.nextButton).click();
        // we should wait for response
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(2000);
        const codeField = await $(this.codeField);
        // collect all responses
        const requests = await browser.getRequests();
        // use first response
        await expect(requests.length).toBe(1)
        const code = await requests[0].response.body.code
        await codeField.setValue(code)
        await $(this.confirmButton).click()
    }, 
    selectSupportiveMode: async function() {
        const supportiveButton = await $(this.supportiveButton);
        await supportiveButton.waitForDisplayed();
        await supportiveButton.click();
    },
    addingCreditCard: async function(creditCardNumber, CVV){
        const addingCreditCard = await $(this.addingCard);
        await addingCreditCard.waitForDisplayed();
        await addingCreditCard.click();
        const addCardInformation = await $(this.addCardInformation);
        await addCardInformation.waitForDisplayed();
        await addCardInformation.click();
        const cardNumberField = await $(this.cardNumberField);
        await cardNumberField.setValue(creditCardNumber);
        const cvvField = await $(this.cvvField);
        await cvvField.setValue(CVV);
        const cardTitle = await $(this.cardTitle);
        await cardTitle.click();
        const linkButton = await $(this.linkButton);
        await linkButton.click();
        const closePayment = await $(this.closePayment);
        await closePayment.waitForDisplayed();
        await closePayment.click();
    },
    messagingTheDriver: async function(desiredText){
        const messagingTheDriver = await $(this.driverMessageBox);
        await messagingTheDriver.waitForDisplayed();
        await messagingTheDriver.setValue(desiredText);
    },
    orderingBlanket: async function(desiredText){
        const orderingBlanket = await $(this.blanketToggle);
        await orderingBlanket.waitForDisplayed();
        await orderingBlanket.click();
    },

    selectingIceCream: async function(){
        const selectingIceCream = await $(this.selectingAmount);
        await selectingIceCream.waitForDisplayed();
        await selectingIceCream.click();
        await selectingIceCream.click();
    },

    clickOrderButton: async function(){
        const clickOrderButton = await $(this.orderButton);
        await clickOrderButton.waitForDisplayed();
        await clickOrderButton.click();
    }


};