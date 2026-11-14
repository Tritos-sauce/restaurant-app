import { useParams, Link } from 'react-router-dom';
import menuData from '../data/menuData';

function DishDetails({ addToCart }) {
  const { id } = useParams();
  const dish = menuData.find((item) => item.id === Number(id));

  if (!dish) {
    return (
      <div className="text-center py-5">
        <h3>Dish not found</h3>
        <Link to="/menu" className="btn btn-danger mt-3">Back to Menu</Link>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 p-md-5 rounded shadow-sm">
      <div className="row align-items-center g-4">
        <div className="col-md-5">
          <div
            className="dish-banner rounded"
            style={{ backgroundColor: dish.color, height: '250px' }}
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="dish-img"
              onError={(e) => (e.target.style.display = 'none')}
            />
          </div>
        </div>

        <div className="col-md-7">
          <span className="badge bg-secondary me-2">{dish.category}</span>
          <span className="text-muted small">Prep time: {dish.prepTime}</span>
          <h2 className="fw-bold mt-2">{dish.name}</h2>
          <p className="my-3">{dish.description}</p>
          <h4 className="text-danger fw-bold mb-4">${dish.price}</h4>

          <div className="d-flex gap-2">
            <button onClick={() => addToCart(dish)} className="btn btn-danger">
              Add to Cart
            </button>
            <Link to="/menu" className="btn btn-outline-secondary">
              Back to Menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DishDetails;