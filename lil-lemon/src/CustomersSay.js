import customer1 from './assets/customer1.jpg';
import customer2 from './assets/customer2.jpg';
function CustomersSay() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>

      <div className="testimonials-container">
        <article className="testimonial-card">
          <h3>★★★★★</h3>
          <img src={customer1} alt="Customer" />
        <p>John</p>
        <p>The food was delicious and the service was excellent!</p>
      </article>

        <article className="testimonial-card">
          <h3>★★★★★</h3>
          <img src={customer2} alt="Customer" />
          <p>Sarah</p>
          <p>A wonderful restaurant with a great atmosphere.</p>
        </article>
      </div>
    </section>
  );
}

export default CustomersSay;