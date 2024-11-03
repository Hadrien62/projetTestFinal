import { Page, expect, Locator } from '@playwright/test';
import { faker } from '@faker-js/faker';

export class CreateProPage{
    readonly page : Page;
    readonly emailInput : Locator;
    readonly continueButton : Locator;

    constructor(page : Page){
        this.page = page;
        this.emailInput = page.locator('#businessEmail-field-id');
        this.continueButton = page.locator('#submitEmailButtonId');
    }

    async create(){
        const email = faker.internet.email();
        await this.emailInput.fill(email);
        await expect(this.emailInput).toHaveValue(email);
        await this.continueButton.click();
    }
}