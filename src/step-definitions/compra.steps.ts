import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { chromium, Page, Browser, BrowserContext } from '@playwright/test';
import { PaginaLogin } from '../pages/PaginaLogin';
import { PaginaProductos } from '../pages/PaginaProductos';
import { PaginaCarrito } from '../pages/PaginaCarrito';
import { PaginaCheckout } from '../pages/PaginaCheckout';

let page: Page;
let browser: Browser;
let context: BrowserContext;
let loginPage: PaginaLogin;
let productosPage: PaginaProductos;
let carritoPage: PaginaCarrito;
let checkoutPage: PaginaCheckout;

Given('que tengo un producto en el carrito', async () => {
browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();
  loginPage = new PaginaLogin(page);
  productosPage = new PaginaProductos(page);
  carritoPage = new PaginaCarrito(page);
  checkoutPage = new PaginaCheckout(page);

  await loginPage.ir();
  await loginPage.iniciarSesion('standard_user', 'secret_sauce');
  await productosPage.agregarPrimerProductoAlCarrito();
  await productosPage.irAlCarrito();
});

When('realizo el proceso de compra con información válida', async () => {
  await carritoPage.hacerCheckout();
  await checkoutPage.completarInformacion('Juan', 'Pérez', '12345');
  await checkoutPage.finalizarCompra();
  

});

Then('debería ver la página de confirmación de pedido', async () => {
  const mensaje = await checkoutPage.obtenerMensajeConfirmacion();
  expect(mensaje).toContain('Thank you for your order!');
  

  await browser.close();
});
