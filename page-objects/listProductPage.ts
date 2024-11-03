import { Page, expect, Locator } from '@playwright/test';

export class ListProductPage{
    readonly page : Page;
    readonly researchResult : Locator;
    readonly caseProduit : Locator;

    constructor(page : Page){
        this.page = page;
        this.researchResult = page.getByText('"pain de mie"');
        this.caseProduit = page.getByRole('link', {name : 'Gerblé Pain de Mie aux'}).first();
    }

    async viewPage(){
        await expect(this.researchResult).toHaveText('"pain de mie"');
        await this.caseProduit.click();
    }

   
}