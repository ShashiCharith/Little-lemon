import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import { useNavigate } from "react-router-dom";

/* global fetchAPI, submitAPI */
// Initial available booking times
export const initializeTimes = () => {
  return fetchAPI(new Date());
};

// Reducer function
export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(new Date(action.date));

    default:
      return state;
  }
};

function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  const navigate = useNavigate();
  const submitForm = (formData) => {
  if (submitAPI(formData)) {
    navigate("/confirmed");
  }
};
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route
          path="/confirmed"
          element={<ConfirmedBooking />}
            />
      </Routes>
    </main>
  );
}

export default Main;