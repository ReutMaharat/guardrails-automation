import { Page, expect } from '@playwright/test';

export class GuardrailsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/config/guardrails');
    await expect(this.page.getByText('Automation Audit')).toBeVisible();
  }

  private subjectsInput() {
    return this.page.getByRole('textbox').nth(1);
  }

private saveButton() {
  return this.page.getByTestId('config-save-button');
}


  async addKeyword(keyword: string) {
    const input = this.subjectsInput();
    await input.click();
    await input.type(keyword);
    await input.press('Enter');
  }

async saveConfiguration() {
  await this.page.getByTestId('config-save-button').click();
  const modal = this.page.locator('text=Confirm changes').locator('..').locator('..');
  await expect(modal).toBeVisible();
  await modal.getByRole('button', { name: 'Save' }).click();
  await expect(modal).toHaveCount(0);
}

  async refresh() {
    await this.page.reload();
  }

async expectKeywordVisible(keyword: string) {
  const input = this.page.getByRole('textbox').nth(1);
  const chipsContainer = input.locator('..').locator('..');
  await expect(chipsContainer.getByText(keyword)).toBeVisible({ timeout: 5000 });
}
}
