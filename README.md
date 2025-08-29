# Playwright Login Tests

Este proyecto contiene pruebas automatizadas de login utilizando **Playwright**.  
Se incluyen dos escenarios principales:
- **Login válido**: Verifica que un usuario pueda ingresar con credenciales correctas.  
- **Login inválido**: Verifica que se muestre un mensaje de error al ingresar credenciales incorrectas.  

## Tecnologías utilizadas
- [Playwright](https://playwright.dev/)  
- Node.js  
- Visual Studio Code  

## Instalación y ejecución
1. Clonar este repositorio:  
   ```bash
   git clone https://github.com/tu-usuario/playwright-login-tests.git

2. Instalar dependencias:

npm install


3. Ejecutar las pruebas:

npx playwright test

4. Resultado esperado

Al ejecutar los tests, deberías ver una salida similar en la terminal:

✓ login válido funciona (7s)
✓ login inválido muestra error (4s)

