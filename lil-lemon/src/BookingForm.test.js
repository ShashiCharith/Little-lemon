import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm HTML5 validation", () => {
  beforeEach(() => {
    render(
      <BookingForm
        availableTimes={["17:00", "18:00", "19:00"]}
        dispatch={() => {}}
        submitForm={() => {}}
      />
    );
  });

  test("Date input is required", () => {
    const dateInput = screen.getByLabelText("Choose date");
    expect(dateInput).toBeRequired();
  });

  test("Number of guests has minimum and maximum values", () => {
    const guestsInput = screen.getByLabelText("Number of guests");

    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(guestsInput).toBeRequired();
  });

  test("Time selection is required", () => {
    const timeInput = screen.getByLabelText("Choose time");
    expect(timeInput).toBeRequired();
  });

  test("Occasion is optional", () => {
    const occasionInput = screen.getByLabelText("Occasion");
    expect(occasionInput).not.toBeRequired();
  });
});
test("Submit button is disabled when the form is invalid", () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00", "19:00"]}
      dispatch={() => {}}
      submitForm={() => {}}
    />
  );

  const submitButton = screen.getByRole("button", {
    name: /make your reservation/i
  });

  expect(submitButton).toBeDisabled();
});
test("Submit button is enabled when the form is valid", () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00", "19:00"]}
      dispatch={() => {}}
      submitForm={() => {}}
    />
  );

  const dateInput = screen.getByLabelText("Choose date");
  const guestsInput = screen.getByLabelText("Number of guests");

  fireEvent.change(dateInput, {
    target: { value: "2026-11-20" }
  });

  fireEvent.change(guestsInput, {
    target: { value: "3" }
  });

  const submitButton = screen.getByRole("button", {
    name: /make your reservation/i
  });

  expect(submitButton).toBeEnabled();
});
test("Submit button is disabled when guest count exceeds 10", () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00", "19:00"]}
      dispatch={() => {}}
      submitForm={() => {}}
    />
  );

  const dateInput = screen.getByLabelText("Choose date");
  const guestsInput = screen.getByLabelText("Number of guests");

  fireEvent.change(dateInput, {
    target: { value: "2026-11-20" }
  });

  fireEvent.change(guestsInput, {
    target: { value: "11" }
  });

  const submitButton = screen.getByRole("button", {
    name: /make your reservation/i
  });

  expect(submitButton).toBeDisabled();
});