import { Page, expect, Locator } from '@playwright/test';
import { faker } from '@faker-js/faker';

export class LoginPage{
    readonly page : Page;
    readonly emailInput : Locator;
    readonly continueButton : Locator;
    readonly createButton : Locator;

    constructor(page : Page){
        this.page = page;
        this.emailInput = page.locator('#ap_email');
        this.createButton = page.locator('#createAccountSubmit');
        this.continueButton = page.getByLabel('Continuer');
    }

    async connexion(){
        const email = 'hadri.delobel62@gmail.com'
        await this.emailInput.fill(email);
        await expect(this.emailInput).toHaveValue(email);
        await this.continueButton.click();
    }
}