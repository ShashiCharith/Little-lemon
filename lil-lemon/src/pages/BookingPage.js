import BookingForm from "../BookingForm";

function BookingPage(props) {
  return (
    <div>
      <h1>Reserve a Table</h1>

      <BookingForm
        availableTimes={props.availableTimes}
        dispatch={props.dispatch}
        submitForm={props.submitForm}
      />
    </div>
  );
}

export default BookingPage;