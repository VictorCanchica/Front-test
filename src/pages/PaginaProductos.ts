import { Page } from '@playwright/test';

export class PaginaProductos {
constructor(private page: Page) {}


  async agregarPrimerProductoAlCarrito() {
    await this.page.click('.inventory_item button');
  }

  async irAlCarrito() {
    await this.page.click('.shopping_cart_link');
  }

  async obtenerCantidadEnCarrito(): Promise<string | null> {
    return this.page.textContent('.shopping_cart_badge');
  }
}
