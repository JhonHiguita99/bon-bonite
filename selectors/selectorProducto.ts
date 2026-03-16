import { test, Page, Browser, expect, Locator } from '@playwright/test';
const selectorsProductos = {

    locatorFiltro: `//span[contains(text(), 'Filtros')]`,
    locatorImg: `//img[@id="image-1019284"]`,
    locatorTalla: `//button[contains(text(), '35')]`,
    locatorH1NombreProductos: `//h1[contains(text(), 'Tacón en cuero charolado beige')]`,
    locatorAceptar:`//div[@id='cookiescript_accept']`,
    locatorCarrito: `getByRole('button', { name: 'Añadir al carrito' })`

}
export default selectorsProductos;