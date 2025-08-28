// Importamos las funciones de Playwright Test
const { test, expect } = require('@playwright/test');

// =====================
// TEST 1: LOGIN VÁLIDO
// =====================
test('login válido funciona', async ({ page }) => {
  // 1) Abrir la página de login de prueba
  await page.goto('https://the-internet.herokuapp.com/login');

  // 2) Completar usuario y contraseña correctos
  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').fill('SuperSecretPassword!');

  // 3) Hacer clic en el botón de Login
  await page.getByRole('button', { name: 'Login' }).click();

  // 4) Verificar que entramos al área segura
  //    - La URL debe contener "/secure"
  //    - Debe aparecer un mensaje de éxito en pantalla
  await expect(page).toHaveURL(/.*secure/);
  await expect(page.getByText('You logged into a secure area!')).toBeVisible();
});

// =======================
// TEST 2: LOGIN INVÁLIDO
// =======================
test('login inválido muestra error', async ({ page }) => {
  // 1) Abrir la misma página de login
  await page.goto('https://the-internet.herokuapp.com/login');

  // 2) Escribir credenciales incorrectas
  await page.getByLabel('Username').fill('usuario-que-no-existe');
  await page.getByLabel('Password').fill('clave-incorrecta');

  // 3) Hacer clic en el botón de Login
  await page.getByRole('button', { name: 'Login' }).click();

  // 4) Verificar que aparece un mensaje de error
  await expect(page.getByText('Your username is invalid!')).toBeVisible();
});
