import { test, Page, Browser, expect, Locator } from '@playwright/test';
import selectorsLoginBon from '../selectors/selectorLoginBon';

export class LoginBon{
    private readonly page: Page
        
        constructor(page:Page){
    
            this.page = page;       
        }

    async hacerLogin(testInfo : { attach: Function}, usuario: string , contrasena: string){

        await expect(this.page.locator(selectorsLoginBon.locatorUser)).toBeEditable();
        await this.page.locator(selectorsLoginBon.locatorUser).fill(usuario);
        await expect(this.page.locator(selectorsLoginBon.locatorPaaword)).toBeEditable();
        await this.page.locator(selectorsLoginBon.locatorPaaword).fill(contrasena);
        await this.page.locator(selectorsLoginBon.locatorBotonLogin).click({force:true})
    }
}