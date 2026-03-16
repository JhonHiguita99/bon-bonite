import { test, Page, Browser, expect, Locator } from '@playwright/test';
const selectorsProductos = {

    locatorFiltro: `//span[contains(text(), 'Filtros')]`,
    locatorImg: `//img[@id="image-1019284"]`,
    locatorTalla: `//button[contains(text(), '35')]`,
    locatorH1NombreProductos: `//h1[contains(text(), 'Tacón en cuero charolado beige')]`,
    locatorAceptar:`//div[@id='cookiescript_accept']`,
    locatorCarrito: `//button[@class='uppercase bg-black border-2 border-black w-full py-2 block font-semibold text-sm text-white text-center transition-all hover:bg-white hover:text-black single_add_to_cart_button button alt']`

}
export default selectorsProductos;