
import { Page } from '@playwright/test';

export class PaginaCheckout {
   constructor(private page: Page) {}



  async completarInformacion(nombre: string, apellido: string, codigoPostal: string) {
    await this.page.fill('[data-test="firstName"]', nombre);
    await this.page.fill('[data-test="lastName"]', apellido);
    await this.page.fill('[data-test="postalCode"]', codigoPostal);
    await this.page.click('[data-test="continue"]');
  }

  async finalizarCompra() {
    await this.page.click('[data-test="finish"]');
  }

  async obtenerMensajeConfirmacion(): Promise<string | null> {
    return this.page.textContent('.complete-header');
  }
}
