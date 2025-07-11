import { test, expect } from "@playwright/test";

test("to login in the app", async ({ page }) => {
  await page.goto("http://localhost:5173/login");

  await page.getByTestId("login-form-input-name").fill("rehan");
  await page
    .getByTestId("login-form-input-email")
    .fill("mohdrehanali40@gmail.com");
  await page.getByTestId("login-form-input-password").fill("1234");
  await page.getByTestId("login-form-input-button").click();

  await page.waitForURL("http://localhost:5173/home");
  expect(page.url()).toBe("http://localhost:5173/home");
  await expect(
    page.getByRole("heading", { name: "All Products" })
  ).toBeVisible();
});

test("to show the error text in form", async ({ page }) => {
  await page.goto("http://localhost:5173/login");
  await page.getByTestId("login-form-input-button").click();
  await expect(page.getByText("User name must be bigger than")).toBeVisible();
  await expect(page.getByText("Enter a valid email")).toBeVisible();
  await expect(page.getByText("Password must be bigger than")).toBeVisible();
});

