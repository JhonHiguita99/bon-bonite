import { test, expect } from '@playwright/test';
import {PageLoginSauces} from '../pages/loginSauces';
import {PrincipalPage} from '../pages/PrincipalPage';


let loginSauces: PageLoginSauces;
let principalPage: PrincipalPage


test.beforeEach(async ({page}, testInfo) => {
  loginSauces = new PageLoginSauces(page)
  principalPage = new PrincipalPage(page)
})

test('@LoginEnSauces', async ({ page }, testInfo) => {
  await page.goto('https://www.saucedemo.com');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Swag Labs");

 await test.step('Ingresar usuario y contraseña', async() => {
    await loginSauces.hacerLogin(testInfo);
});
await test.step('realizar login', async() => {
     await principalPage.seleccionarCategoriaProducto(testInfo)
    
});







  
});

