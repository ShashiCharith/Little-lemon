import BookingForm from "../BookingForm";

function BookingPage(props) {
  return (
    <section className="booking">
      <div className="booking-inner">
        <div className="booking-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          </div>
          <div className="booking-title">
          <h1>Reserve a Table</h1>
          </div>
      <BookingForm
        availableTimes={props.availableTimes}
        dispatch={props.dispatch}
        submitForm={props.submitForm}
      />
    </div>
    </section>
  );
}

export default BookingPage;