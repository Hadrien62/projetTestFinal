import { Page, Locator } from '@playwright/test';

export class ProductPage {
    readonly page: Page;
    readonly addToCartButton: Locator;
    readonly productTitle: Locator;
    readonly goToCartButton: Locator;
    readonly uneLivraison:Locator;
    readonly deleteButton:Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToCartButton = page.locator('#add-to-cart-button');
        this.goToCartButton = page.locator('#nav-cart')
        this.uneLivraison = page.locator('#newAccordionRow_1');
        this.deleteButton = page.locator(`[name='submit.delete.8eb364df-0632-476c-8f36-8f1ab9174a5f']`); 
    }

    async addToCart() {
        //await this.uneLivraison.click();
        await this.addToCartButton.click(); 
    }

    async goToCart(){
        await this.goToCartButton.click();
    }
    
    async deleteProduct() {
        // Crée un sélecteur dynamique basé sur l'itemID fourni
        await this.deleteButton.click();
    }
}
