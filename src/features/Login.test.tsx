import { render, within } from "@testing-library/react";
import Login from "./Login";
import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";

import { store } from "@/store";
import { Provider } from "react-redux";
describe("Login Component must render", () => {
  it("renders the login page without crashing", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );
  });

  describe("Login Form structure", () => {
    it("form contains all inputs and heading", () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Login />
          </MemoryRouter>
        </Provider>
      );

      const loginForm = screen.getByTestId("login-form");
      expect(loginForm).toBeInTheDocument();

      expect(
        within(loginForm).getByTestId("login-form-input-name")
      ).toBeInTheDocument();
      expect(
        within(loginForm).getByTestId("login-form-input-email")
      ).toBeInTheDocument();
      expect(
        within(loginForm).getByTestId("login-form-input-password")
      ).toBeInTheDocument();
      expect(
        within(loginForm).getByTestId("login-form-input-button")
      ).toBeInTheDocument();
    });
  });
});
