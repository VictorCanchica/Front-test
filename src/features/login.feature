 @login
 Feature: Inicio de sesión
 
  Scenario: Inicio de sesión exitoso con credenciales válidas
    Given que estoy en la página de inicio de sesión
    When inicio sesión con el usuario "standard_user" y la contraseña "secret_sauce"
    Then debería ver la página de productos
 
  Scenario: Inicio de sesión fallido con usuario bloqueado
    Given que estoy en la página de inicio de sesión
    When inicio sesión con el usuario "locked_out_user" y la contraseña "secret_sauce"
    Then debería ver un mensaje de error
