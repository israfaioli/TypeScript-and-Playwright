// setup.ts
import { devices, PlaywrightTestConfig } from '@playwright/test';

export const setupConfig: PlaywrightTestConfig = {
  /* Configurações globais aqui */
};

export const myCustomSetupFunction = async () => {
  /* Lógica de inicialização global aqui */
};

export const myCustomTeardownFunction = async () => {
  /* Lógica de limpeza global aqui */
};