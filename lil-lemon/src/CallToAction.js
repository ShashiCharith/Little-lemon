import restaurantFood from './assets/restauranfood.jpg';
function CallToAction() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family-owned Mediterranean restaurant,
          focused on traditional recipes served with a modern twist.
        </p>
      </div>

      <div className="hero-image">
        <img
          src={restaurantFood}
          alt="Mediterranean food"
        />
      </div>
    </section>
  );
}

export default CallToAction;