import { render } from "@testing-library/react";
import App from "@/App";
import { describe, it } from "vitest";

describe("App testing", () => {
  it("renders the page without crashing", () => {
    render(<App />);
  });
});
