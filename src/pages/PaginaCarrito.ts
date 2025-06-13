import { Page } from '@playwright/test';

export class PaginaCarrito {
  constructor(private page: Page) {}

  async hacerCheckout() {
    await this.page.click('[data-test="checkout"]');
  }
}
