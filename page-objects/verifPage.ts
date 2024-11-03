import { Locator, Page, expect} from '@playwright/test';

export class VerifPage{
    readonly page : Page;
    readonly verif : Locator;

    constructor(page : Page){
        this.page = page;
        this.verif = page.getByText('Amazon');
    }

    async connexion(){
        await expect(this.verif).toHaveText('Amazon');
    }
}