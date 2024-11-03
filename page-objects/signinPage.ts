import { Page, Locator, expect } from '@playwright/test';

export class SigninPage {
    readonly page: Page;
    readonly GotoCreateAccountPage: Locator;
    readonly Newpage: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.GotoCreateAccountPage = page.locator('#createAccountSubmit'); 
        this.Newpage = page.locator('.a-size-mini .a-color-secondary');
    }

    async GoCreateAccount(){
        await this.GotoCreateAccountPage.click(); 
    }
}