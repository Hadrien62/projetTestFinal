import { Page, expect, Locator } from '@playwright/test';
import { faker } from '@faker-js/faker';

export class CreatePage{
    readonly page : Page;
    readonly inputName : Locator;
    readonly inputEmail : Locator;
    readonly inputPass : Locator;
    readonly inputCheckPass : Locator;
    readonly continueButton : Locator;
    readonly proAccount : Locator;
    readonly cote : Locator;
    readonly errorEmail : Locator;
    readonly errorName : Locator;

    constructor(page : Page){
        this.page = page;
        this.inputName = page.locator('#ap_customer_name');
        this.inputEmail = page.locator('#ap_email');
        this.inputPass = page.locator('#ap_password');
        this.inputCheckPass = page.locator('#ap_password_check');
        this.continueButton = page.locator('#auth-continue');
        this.proAccount = page.locator('#ab-enhanced-registration-link')
        this.cote = page.locator('#authportal-main-section');
        this.errorEmail = page.locator('#register-mase-inlineerror .a-box-inner .a-alert-content');
        this.errorName = page.locator('#auth-customerName-missing-alert');

    }

    async create(){
        const name = faker.person.fullName();
        const email = faker.internet.email();
        await this.inputName.fill(name);
        await expect(this.inputName).toHaveValue(name);
        await this.inputEmail.fill(email);
        await expect(this.inputEmail).toHaveValue(email);
        const password = faker.internet.password();
        await this.inputPass.fill(password);
        await this.inputCheckPass.fill(password);
        const inputCheckPassValue = await this.inputCheckPass.inputValue();
        await expect(this.inputPass).toHaveValue(inputCheckPassValue);
        await this.continueButton.click();
    }

    async createAlreadyUse(){
        const name = faker.person.fullName();
        const email = 'hadri.delobel62@gmail.com';
        await this.inputName.fill(name);
        await expect(this.inputName).toHaveValue(name);
        await this.inputEmail.fill(email);
        await expect(this.inputEmail).toHaveValue(email);
        const password = faker.internet.password();
        await this.inputPass.fill(password);
        await this.inputCheckPass.fill(password);
        const inputCheckPassValue = await this.inputCheckPass.inputValue();
        await expect(this.inputPass).toHaveValue(inputCheckPassValue);
        await this.continueButton.click();
        await expect(this.errorEmail).toHaveText('Il existe déjà un compte associé à cette adresse e-mail. S’identifier ou en savoir plus.');
    }

    async createPro(){
        await this.proAccount.click();
        //await expect(this.errorName).toHaveText('Saisir votre nom')
        //await this.proAccount.click();
    }
}