import { test, Page, Browser, expect, Locator } from '@playwright/test';
import selectorsProductos from '../selectors/selectorProducto'

export class PageProducto {

    private readonly page: Page
    
    constructor(page:Page){

        this.page = page;       
    }

    async seleccionarProducto(testInfo: { attach: Function}){

        await this.page.locator(selectorsProductos.locatorFiltro).waitFor({state:'visible'});
        await expect(this.page.locator(selectorsProductos.locatorImg)).toBeVisible();

        await this.page.locator(selectorsProductos.locatorImg).click({force:true})
    }

    async seleccionarElProductoAlCarritoDeCompras(testInfo: { attach: Function}){
        await expect(this.page.locator(selectorsProductos.locatorH1NombreProductos)).toBeVisible();

        await this.page.locator(selectorsProductos.locatorTalla).waitFor({state:'visible'});
        //await this.page.locator(selectorsProductos.locatorAceptar).click();

        await this.page.getByRole('button', { name: '35' }).click({force:true});

        await this.page.getByRole('button', { name: 'Añadir al carrito' }).click();


        
    }
}