
import { render, screen } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  /* global fetchAPI */
  window.fetchAPI = jest.fn(() => [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ]);
});
test("renders Little Lemon homepage", () => {
  render(<App />);

  const headingElement = screen.getByRole("heading", {
    name: "Little Lemon",
    level: 1
  });

  expect(headingElement).toBeInTheDocument();
});
