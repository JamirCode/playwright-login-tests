import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false,  // mostrar navegador
    slowMo: 1000,     // ralentiza cada acción 1 segundo
  },
});
