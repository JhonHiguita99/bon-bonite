import { test, Page, Browser, expect, Locator } from '@playwright/test';
import selectorsLoginSauces from '../selectors/selectorLoginSauces';

export class PageLoginSauces{

    private readonly page: Page
    
    constructor(page:Page){

        this.page = page;       
    }

    async hacerLogin(testInfo: { attach: Function}){
        const username = this.page.locator(selectorsLoginSauces.locatorUser);
        const password = this.page.locator(selectorsLoginSauces.locatorPaaword);
        const loginBtn = this.page.locator(selectorsLoginSauces.locatorBotonLogin);

        await expect(username).toBeVisible({ timeout: 15000 });
        await username.fill('standard_user');

        await expect(password).toBeVisible();
        await password.fill('secret_sauce');

        await expect(loginBtn).toBeEnabled();
        await loginBtn.click();
        
    }
}

