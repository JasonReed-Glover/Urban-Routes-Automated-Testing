const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
    it('setting the address', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const fromField = await $(page.fromField);
        expect(fromField).toHaveValue('East 2nd Street, 601');
        const toField = await $(page.toField);
        expect(toField).toHaveValue('1300 1st St');
    })
    it('selecting the supportive plan', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportiveMode()
        const supportiveButton = await $(page.supportiveButton);
        expect (supportiveButton).toHaveElementClass('active');
    })
    
    it('fill the phone number', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })

    it('Adding a credit card', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.addingCreditCard('1234 5678 9000','12');
        const cardVerification = await $(page.cardVerification);
        expect (cardVerification).toHaveValue('Card');
    })

    it('Messaging the Driver', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.messagingTheDriver('Hello Driver, can you see me');
        const driverMessageBox = await $(page.driverMessageBox);
        expect (driverMessageBox).toHaveValue('Hello Driver, can you see me');
    })

    it('Ordering a Blanket', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportiveMode();
        await page.orderingBlanket();
        const orderingBlanket = await $(page.toggleSelected);
        expect (orderingBlanket).toBeSelected();
    })

    it('Ordering 2 Ice cream', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportiveMode();
        await page.selectingIceCream();
        const iceCreamConfirmation = await $(page.iceCreamConfirmation);
        expect (iceCreamConfirmation).toHaveText('2');
    })

    it('Ordering Car', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportiveMode();
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await page.addingCreditCard('1234 5678 9000','12');
        await page.clickOrderButton();
        const carSearch = await $(page.carSearch);
        expect (carSearch).toHaveText('Car search');
    })



})


