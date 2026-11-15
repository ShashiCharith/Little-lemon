import restaurant from './assets/restaurant.jpg';
import restaurantChef from './assets/restaurant chef B.jpg';
function Chicago() {
  return (
    <section className="chicago">
      <div className="chicago-content">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Little Lemon is a family-owned restaurant located in the heart of Chicago. We are passionate about bringing people together through delicious food, warm hospitality, and memorable dining experiences. Our menu features traditional Mediterranean dishes prepared with fresh, high-quality ingredients and a modern twist.
        </p>
      </div>
      <div className="chicago-images">
        <img className="chicago-image" src={restaurant} alt="Little Lemon restaurant" />
        <img className="chicago-image" src={restaurantChef} alt="Restaurant chefs" />
      </div>
    </section>
  );
}

export default Chicago;