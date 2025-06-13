import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { PaginaLogin } from '../pages/PaginaLogin';
import { chromium, Page, Browser, BrowserContext } from '@playwright/test';

let page: Page;
let browser: Browser;
let context: BrowserContext;
let loginPage: PaginaLogin;

Given('que estoy en la página de inicio de sesión', async () => {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();
  loginPage = new PaginaLogin(page);
  await loginPage.ir();
});

When('inicio sesión con el usuario {string} y la contraseña {string}', async (usuario: string, contrasena: string) => {
  await loginPage.iniciarSesion(usuario, contrasena);
});

Then('debería ver la página de productos', async () => {
  expect(await loginPage.estaEnPaginaDeProductos()).toBeTruthy();
  await browser.close();
});

Then('debería ver un mensaje de error', async () => {
  const mensaje = await loginPage.obtenerMensajeError();
  expect(mensaje).toContain('Epic sadface');
  await browser.close();
});
