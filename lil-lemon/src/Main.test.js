import { initializeTimes, updateTimes} from "./Main";

test("initializeTimes returns the expected available times", () => {
  /* global fetchAPI */
  window.fetchAPI = jest.fn(() => [
    "17:00",
    "18:00",
    "19:00",
    "20:00"
  ]);

  const result = initializeTimes();

  expect(result).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00"
  ]);
});
test("updateTimes returns the available times for the selected date", () => {
  const mockTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00"
  ];

  window.fetchAPI = jest.fn(() => mockTimes);

  const state = ["17:00", "18:00", "19:00"];

  const action = {
    type: "UPDATE_TIMES",
    date: "2026-11-11"
  };

  const result = updateTimes(state, action);

  expect(window.fetchAPI).toHaveBeenCalledTimes(1);
  expect(window.fetchAPI).toHaveBeenCalledWith(
    new Date("2026-11-11")
  );
  expect(result).toEqual(mockTimes);
});