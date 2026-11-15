import { useState, useEffect } from "react";

function BookingForm(props) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState("1");
  const [occasion, setOccasion] = useState("Birthday");
  const [isFormValid, setIsFormValid] = useState(false);

  function handleDateChange(e) {
    const selectedDate = e.target.value;

    setDate(selectedDate);

    props.dispatch({
      type: "UPDATE_TIMES",
      date: selectedDate
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      date,
      time,
      guests,
      occasion
    };
    props.submitForm(formData);
  }
  useEffect(() => {
  const isDateValid = date !== "";
  const isTimeValid = time !== "";
  const isGuestsValid = guests >= 1 && guests <= 10;

  setIsFormValid(
    isDateValid &&
    isTimeValid &&
    isGuestsValid
  );
}, [date, time, guests, occasion]);
  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>

      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="res-time">Choose time</label>

      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        {props.availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>

      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        required
        onChange={(e) => setGuests(e.target.value)}
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

      <input type="submit" value="Make Your reservation" disabled={!isFormValid} />
    </form>
  );
}

export default BookingForm;