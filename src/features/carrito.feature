@carrito
Feature: Carrito de compras

  Scenario: Agregar producto al carrito
    Given que he iniciado sesión como "standard_user"
    When agrego un producto al carrito
    Then el ícono del carrito debería mostrar "1"
