@compra
Feature: Proceso de compra
  @compra
  Scenario: Completar una compra
    Given que tengo un producto en el carrito
    When realizo el proceso de compra con información válida
    Then debería ver la página de confirmación de pedido
