import { test as base } from '@playwright/test';
import { HomePage } from '../page-objects/homePage';
import { LoginPage } from '../page-objects/loginPage';
import { PassPage } from '../page-objects/pwPage';
import { CreatePage } from '../page-objects/createPage';
import { CreateProPage } from '../page-objects/createProPage';
import { FormProPage } from '../page-objects/formProPage';
import { ListProductPage } from '../page-objects/listProductPage';
import { VerifPage } from '../page-objects/verifPage';
import { BusinessVerif } from '../page-objects/businessVerif';
import { interBiscuits } from '../page-objects/interBiscuits';
import { ListSnacks } from '../page-objects/listSnacks';
import { InterSnacks } from '../page-objects/interSnacks';
import { ProductPage } from '../page-objects/productPage';
import { CartPage } from '../page-objects/cartPage';
import { SigninPage } from '../page-objects/signinPage';

const test = base.extend({
    Homepage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    Loginpage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    Passpage: async ({ page }, use) => {
        await use(new PassPage(page));
    },
    Createpage: async ({ page }, use) => {
        await use(new CreatePage(page));
    },
    Createpropage: async ({ page }, use) => {
        await use(new CreateProPage(page));
    },
    Formpropage: async ({ page }, use) => {
        await use(new FormProPage(page));
    },
    Listproductpage: async ({ page }, use) => {
        await use(new ListProductPage(page));
    },
    Verifpage: async ({ page }, use) => {
        await use(new VerifPage(page));
    },
    Businessverif: async ({ page }, use) => {
        await use(new BusinessVerif(page));
    },
    Interbiscuits: async ({ page }, use) => {
        await use(new interBiscuits(page)); 
    },
    Listsnacks: async ({ page }, use) => {
        await use(new ListSnacks(page));  
    },
    InterSnacks: async ({ page }, use) => {
        await use(new InterSnacks(page));
    },
    ProductPage: async ({page}, use) => {
        await use(new ProductPage(page));
    },
    CartPage: async ({page}, use) => {
        await use(new CartPage(page));
    },
    SigninPage: async ({page}, use) => {
        await use(new SigninPage(page));
    }
});

const expect = base.expect;
export {expect, test};