import { AfterStep } from '@cucumber/cucumber';
import { setDefaultTimeout } from '@cucumber/cucumber';

AfterStep(async function () {
  await new Promise(resolve => setTimeout(resolve, 2000)); // 2 segundos de pausa visual
});

setDefaultTimeout(120 * 1000);