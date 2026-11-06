import restaurant from './assets/restaurant.jpg';
import restaurantChef from './assets/restaurant chef B.jpg';
function Chicago() {
  return (
    <section className="chicago">
      <h2>Little Lemon</h2>
      <h3>Chicago</h3>

      <p>
        Little Lemon is a family-owned restaurant located in Chicago.
        We serve traditional Mediterranean food with a modern twist.
      </p>
      <div className="chicago-images">
        <img className="chicago-image" src={restaurant} alt="Little Lemon restaurant" />
        <img className="chicago-image" src={restaurantChef} alt="Restaurant chefs" />
      </div>
    </section>
  );
}

export default Chicago;