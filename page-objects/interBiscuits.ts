import { Page, expect, Locator } from '@playwright/test';

export class interBiscuits{
    readonly page : Page;
    readonly title : Locator;
    readonly Biscuits : Locator;
    

    constructor(page : Page){
        this.page = page;
        this.title = page.locator('h1').filter({hasText: 'Biscuits'}).locator('span');
        this.Biscuits = page.getByTitle('Biscuits');
    }

    async viewPage(){
        
        await this.Biscuits.click();
        
    }

   
}