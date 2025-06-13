import { Page } from '@playwright/test';

export class PaginaLogin {
  constructor(private page: Page) {}

  async ir() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async iniciarSesion(usuario: string, contrasena: string) {
    await this.page.fill('#user-name', usuario);
    await this.page.fill('#password', contrasena);
    await this.page.click('#login-button');
  }

  async obtenerMensajeError() {
    return this.page.textContent('[data-test="error"]');
  }
  


async estaEnPaginaDeProductos(): Promise<boolean> {
return this.page.url().includes('/inventory.html');
}



}
