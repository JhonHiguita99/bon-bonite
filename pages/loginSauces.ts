import { test, Page, Browser, expect, Locator } from '@playwright/test';
import selectorsLoginSauces from '../selectors/selectorLoginSauces';

export class PageLoginSauces{

    private readonly page: Page
    
    constructor(page:Page){

        this.page = page;       
    }

    async hacerLogin(testInfo: { attach: Function}){
        await expect(this.page.locator(selectorsLoginSauces.locatorUser)).toBeEditable();
        await this.page.locator(selectorsLoginSauces.locatorUser).fill('standard_user');
        await expect(this.page.locator(selectorsLoginSauces.locatorPaaword)).toBeEditable();
        await this.page.locator(selectorsLoginSauces.locatorPaaword).fill('secret_sauce');
        await expect(this.page.locator(selectorsLoginSauces.locatorBotonLogin)).toBeVisible();
        await this.page.locator(selectorsLoginSauces.locatorBotonLogin).click({force:true});
        
    }
}

