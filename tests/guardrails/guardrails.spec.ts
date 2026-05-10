import { test } from '@playwright/test';
import { GuardrailsPage } from './guardrails.page';

test.describe('Guardrails Configuration - Automation audit section', () => {
  
  test('should save the new keyword and keep it after page refresh', async ({ page }) => {
    const guardrails = new GuardrailsPage(page);
    const keyword = `automation_test_${Date.now()}`;

    await guardrails.goto();
    await guardrails.addKeyword(keyword);
    await guardrails.saveConfiguration(); 
    await guardrails.refresh();
    await guardrails.expectKeywordVisible(keyword);
  });
});