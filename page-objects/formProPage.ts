import { Page, expect, Locator } from '@playwright/test';
import { faker } from '@faker-js/faker';

export class FormProPage{
    readonly page : Page;
    readonly nameInput : Locator;
    readonly passInput : Locator;
    readonly checkPassInput : Locator;
    readonly submitButton : Locator;

    constructor(page : Page){
        this.page = page;
        this.nameInput = page.locator('#ap_customer_name');
        this.passInput = page.locator('#ap_password');
        this.checkPassInput = page.locator('#ap_password_check');
        this.submitButton = page.locator('#continue');
    }

    async create(){
        const name = faker.person.fullName();
        const password = faker.internet.password();
        await this.nameInput.fill(name);
        await expect(this.nameInput).toHaveValue(name);
        await this.passInput.fill(password);
        await this.checkPassInput.fill(password);
        const passInputValue = await this.passInput.inputValue();
        await expect(this.checkPassInput).toHaveValue(passInputValue);
        await this.submitButton.click();
    }
}