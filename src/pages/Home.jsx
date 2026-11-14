import { Link } from 'react-router-dom';
import menuData from '../data/menuData';

function Home({ addToCart }) {
  const popularDishes = menuData.slice(0, 3);

  return (
    <div>
      <div className="hero-banner p-5 mb-5 text-center">
        <h1 className="display-5 fw-bold">Fresh Food, Ordered Fast</h1>
        <p className="lead my-3">
          Browse our daily menu, customize your cart, and track your meal in real time.
        </p>
        <Link to="/menu" className="btn btn-danger btn-lg">
          Explore Menu
        </Link>
      </div>

      <h3 className="fw-bold mb-3">Popular Dishes</h3>
      <div className="row g-4">
        {popularDishes.map((dish) => (
          <div className="col-md-4" key={dish.id}>
            <div className="card dish-card h-100 shadow-sm">
              <div className="dish-banner" style={{ backgroundColor: dish.color }}>
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="dish-img"
                  onError={(e) => (e.target.style.display = 'none')}
                />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{dish.name}</h5>
                <p className="text-muted small mb-2">Prep time: {dish.prepTime}</p>
                <p className="fw-bold text-danger mb-3">${dish.price}</p>
                <div className="mt-auto d-flex gap-2">
                  <Link to={`/dish/${dish.id}`} className="btn btn-outline-dark btn-sm">
                    Details
                  </Link>
                  <button
                    onClick={() => addToCart(dish)}
                    className="btn btn-danger btn-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;