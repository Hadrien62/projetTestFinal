import { Page, expect, Locator} from '@playwright/test';
import { faker } from '@faker-js/faker';

export class PassPage{
    readonly page : Page;
    readonly passInput : Locator;
    readonly indentifyButton : Locator;
    readonly resterCoCheck : Locator;
    readonly modifyButton : Locator;

    constructor(page : Page){
        this.page = page;
        this.passInput = page.locator('#ap_password');
        this.indentifyButton = page.locator('#auth-signin-button');
        this.resterCoCheck = page.getByLabel('Rester connecté', { exact: true });
        this.modifyButton = page.locator('#ap_change_login_claim');
    }

    async connexion(){
        const password = "Hadrigaming62";
        await this.passInput.fill(password);
        await expect(this.passInput).toHaveValue(password);
        await this.indentifyButton.click();
    }
}