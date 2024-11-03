import { Page, expect, Locator } from '@playwright/test';

export class InterSnacks{
    readonly page : Page;
    readonly filter : Locator;
    readonly Snacks : Locator;
    

    constructor(page : Page){
        this.page = page;
        this.filter = page.getByLabel('Epicerie');
        this.Snacks = page.getByTitle('Snacks');
    }

    async viewPage(){
        await expect(this.filter).toHaveText('Epicerie');
        await this.Snacks.click();
    }

   
}