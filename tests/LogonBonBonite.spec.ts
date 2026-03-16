import { test, expect } from '@playwright/test';
import { LoginBon } from '../pages/loginBon';
import {PrincipalPage} from '../pages/PrincipalPage'
import { PageProducto } from '../pages/Productos';

let loginBon: LoginBon
let principalPage:PrincipalPage
let pageProducto:PageProducto

//1152696923
//Agosto2022*



test.beforeEach(async ({ page }) => {

    loginBon = new LoginBon(page);
    principalPage = new PrincipalPage(page);
    pageProducto = new PageProducto(page);
    
})

test('@CarritoDeCompras', async ({ page }, testInfo) => {

    await page.goto('https://bon-bonite.com.co');
    
    await page.locator(`#toggle-account-menu > .hover\\:opacity-70`).click()
    await page.waitForLoadState('domcontentloaded');

    const cookies = page.locator('#cookiescript_accept');

if (await cookies.isVisible()) {
  await cookies.click();
}

    await test.step('hacer login', async () => {

        await loginBon.hacerLogin(testInfo , '1152696923','Agosto2022*')  
    })    

    await test.step('SeleccionarProducto', async () => {
         await principalPage.seleccionarCategoriaProducto(testInfo);
         await pageProducto.seleccionarProducto(testInfo);
         await pageProducto.seleccionarElProductoAlCarritoDeCompras(testInfo);

    })
    
})

