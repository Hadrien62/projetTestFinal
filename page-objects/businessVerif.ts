import { Page, Locator, expect } from '@playwright/test';

export class BusinessVerif{
    readonly page : Page;
    readonly Newpage: Locator;

    constructor(page : Page){
        this.page = page;
        this.Newpage = page.getByText('© 1996-2024, Amazon.com, Inc.');
    }

    async verif(){
        const url = this.page.url();
        expect(url).toContain('https://www.amazon.fr/ap/');
    }

    async verifCreate(){
        await expect(this.Newpage).toContainText('© 1996-2024, Amazon.com, Inc.');
    }
}