import { test, expect } from '@playwright/test'

test('should navigate to the mermaid page', async ({ page }) => {
  await page.goto('/')

  await page.locator('div.ant-layout-sider-trigger').click()

  await page.getByText('Mermaid').click()

  await page.getByText('Batch Schedule').click()

  await expect(page).toHaveURL('/batch/batch_schedule')
  // // The new page should contain an h1 with "About Page"
  // await expect(page.getByRole('heading', { level: 1 })).toContainText(
  //   'About Page'
  // )
  await expect(page).toHaveScreenshot()
})
