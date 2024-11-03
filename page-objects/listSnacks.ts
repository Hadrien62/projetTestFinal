import { Page, expect, Locator } from '@playwright/test';

export class ListSnacks{
    readonly page : Page;
    readonly title : Locator;
    readonly filtreEtoile : Locator;
    

    constructor(page : Page){
        this.page = page;
        this.title = page.locator('b').filter({hasText: 'Snacks'});
        this.filtreEtoile = page.getByLabel('4 étoiles et plus');
    }

    async viewPage(){
        await expect(this.title).toHaveText('Snacks');
        await this.filtreEtoile.click();
        
    }

   
}