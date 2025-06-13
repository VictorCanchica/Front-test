# Proyecto de pruebas automáticas

Usa **Playwright** + **Cucumber.js** para pruebas web.

## Instalación
npm install
npx playwright install

## Ejecutar pruebas

Todas las pruebas:
npm run test-dev


Solo un tag (por ejemplo `@carrito`):
npm run test-dev -- --tags="@carrito"

## Reporte
Después de correr, se genera un HTML en:
test-results/reports/cucumber-report.html
