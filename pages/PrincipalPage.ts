import { test, Page, Browser, expect, Locator } from '@playwright/test';
import selectorsPrincipalPage from '../selectors/selectorPrincipalPage';

export class PrincipalPage {

    private readonly page: Page
    
    constructor(page:Page){

        this.page = page;       
    }
    async seleccionarCategoriaProducto(testInfo: { attach: Function}){

        await this.page.locator(selectorsPrincipalPage.locatorH3Bona).waitFor({state: 'visible'});
        await expect(this.page.locator(selectorsPrincipalPage.locatorSeleccionarCategoria)).toBeVisible();
        await this.page.locator(selectorsPrincipalPage.locatorSeleccionarCategoria).click({force:true});

        
    }

     
}
