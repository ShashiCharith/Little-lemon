
import { useState, useEffect } from "react";

function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function BookingForm(props) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState("1");
  const [occasion, setOccasion] = useState("Birthday");
  const [submitError, setSubmitError] = useState("");

  const availableTimes = props.availableTimes ?? [];
  const minDate = getTodayDate();

  // Keep the selected time within the available times.
  useEffect(() => {
    if (!availableTimes.includes(time)) {
      setTime(availableTimes[0] || "");
    }
  }, [availableTimes, time]);

  // Validate the form values.
  const isDateValid = date !== "" && date >= minDate;
  const isTimeValid = availableTimes.includes(time);
  const isGuestsValid =
    Number.isInteger(Number(guests)) &&
    Number(guests) >= 1 &&
    Number(guests) <= 10;

  const isFormValid =
    isDateValid && isTimeValid && isGuestsValid;

  function handleDateChange(e) {
    const selectedDate = e.target.value;

    setDate(selectedDate);
    setSubmitError("");

    if (selectedDate) {
      props.dispatch({
      type: "UPDATE_TIMES",
      date: selectedDate
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitError("");

    if (!isFormValid) {
      setSubmitError("Please check your booking details.");
      return;
    }

    const formData = {
      date,
      time,
      guests,
      occasion
    };

    const success = props.submitForm(formData);

    if (success === false) {
      setSubmitError(
        "Sorry, we couldn't complete your reservation. Please try again."
      );
    }
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        min={minDate}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
          setSubmitError("");
        }}
        required
        disabled={availableTimes.length === 0}
      >
        {availableTimes.length === 0 ? (
          <option value="">No available times</option>
        ) : (
          availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))
        )}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        step="1"
        value={guests}
        required
        onChange={(e) => {
          setGuests(e.target.value);
          setSubmitError("");
        }}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="">None</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      {submitError && (
        <p className="form-error" role="alert">
          {submitError}
        </p>
      )}

      <input
        type="submit"
        value="Make Your reservation"
        disabled={!isFormValid}
      />
    </form>
  );
}

export default BookingForm;
