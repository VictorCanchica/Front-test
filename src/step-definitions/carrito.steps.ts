import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { chromium, Page, Browser, BrowserContext } from '@playwright/test';
import { PaginaLogin } from '../pages/PaginaLogin';
import { PaginaProductos } from '../pages/PaginaProductos';

let page: Page;
let browser: Browser;
let context: BrowserContext;
let loginPage: PaginaLogin;
let productosPage: PaginaProductos;

 Given('que he iniciado sesión como {string}', async (usuario: string) => {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();
  loginPage = new PaginaLogin(page);
  productosPage = new PaginaProductos(page);
  await loginPage.ir();
  await loginPage.iniciarSesion(usuario, 'secret_sauce');
  await loginPage.estaEnPaginaDeProductos();

});

When('agrego un producto al carrito', async () => {
  await productosPage.agregarPrimerProductoAlCarrito();

});

Then('el ícono del carrito debería mostrar {string}', async (cantidad: string) => {
  const cantidadCarrito = await productosPage.obtenerCantidadEnCarrito();
  expect(cantidadCarrito).toBe(cantidad);
  await browser.close();
});
