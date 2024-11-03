import { Page, Locator } from '@playwright/test';


export class CartPage {
    readonly page: Page;
    readonly Commandproduct: Locator;

    constructor(page: Page) {
        this.page = page;
        this.Commandproduct = page.locator('[data-feature-id="proceed-to-checkout-action"]'); 
    }

    async Pay(){
        await this.Commandproduct.click(); 
    }
    async navigateToCheckout() {
        await this.page.goto('https://www.amazon.fr/gp/buy/payselect/handlers/display.html?_from=cheetah'); 
    }

    async selectShippingAddress() {
        await this.page.click('#add-new-address-popover-link');
        await this.page.fill('#address-ui-widgets-enterAddressFullName', 'Rizoug');
        await this.page.selectOption('#address-ui-widgets-countryCode-dropdown-nativeId_67', { label: 'France' });
        await this.page.fill('#address-ui-widgets-enterAddressPhoneNumber', "0776009836");
        await this.page.fill('#address-ui-widgets-enterAddressLine1', "41 Boulevard Vauban");
        await this.page.fill('#address-ui-widgets-enterAddressPostalCode', "59800");
        await this.page.fill('#address-ui-widgets-enterAddressCity', "Lille");
        await this.page.click('#address-ui-widgets-form-submit-button-announce');
    }

    async selectPaymentMethod(method: string) {
        await this.page.click('#pp-td7C1x-110');
    }

    async enterCardDetails(cardDetails: { cardNumber: string; expirationDate: string; cvv: string }) {
        await this.page.fill('#pp-kAZt3v-17',"4111111111111111");
        await this.page.fill('#pp-kAZt3v-19', "rizoug coran");
        await this.page.selectOption('#pp-YJH7XK-23', '12');
        await this.page.selectOption('#pp-0YRqGu-24', '2025');
        await this.page.fill('#pp-YJH7XK-26', cardDetails.cvv);
        await this.page.click('#pp-YJH7XK-34');
        await this.page.click('#pp-YJH7XK-38-announce');
    }

    async clickConfirmButton() {
        await this.page.click('#turbo-checkout-pyo-button'); 
    }


    async changeItemQuantity() {
    await this.page.selectOption('[data-feature-id="sc-update-quantity-input"]', "2"); 
    }
}
