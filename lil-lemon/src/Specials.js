import greekSalad from './assets/greek salad.jpg';
import bruchetta from './assets/bruchetta.svg';
import lemonDessert from './assets/lemon dessert.jpg';
function Specials() {
  return (
    <section className="specials">
      <h2>This week's specials!</h2>
    <div className="specials-container">
      <article className="card">
        <img src={greekSalad} alt="Greek salad" />
        <h3>Greek Salad</h3>
        <p>A refreshing Greek salad with fresh vegetables and feta cheese.</p>
      </article>

      <article className="card">
        <img src={bruchetta} alt="Bruchetta" />
        <h3>Bruchetta</h3>
        <p>Grilled bread topped with tomatoes, garlic and fresh basil.</p>
      </article>

      <article className="card">
        <img src={lemonDessert} alt="Lemon dessert" />
        <h3>Lemon Dessert</h3>
        <p>A delicious homemade lemon dessert.</p>
      </article>
      </div>
    </section>
  );
}

export default Specials;