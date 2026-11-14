import { useState } from 'react';
import { Link } from 'react-router-dom';
import menuData from '../data/menuData';

function Menu({ cart, addToCart, removeFromCart, placeOrder, activeOrder, nextOrderStep }) {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredMenu = menuData.filter((dish) => {
    const matchesName = dish.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesCat = selectedCategory === 'All' || dish.category === selectedCategory;
    return matchesName && matchesCat;
  });

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  const statusLabels = {
    1: "Order Received",
    2: "Cooking in Kitchen",
    3: "Ready for Pickup!"
  };

  return (
    <div className="row g-4">
      {/* Left Side: Menu Filter & Dishes */}
      <div className="col-lg-8">
        <h2 className="fw-bold mb-3">Our Menu</h2>

        <div className="row g-2 mb-4">
          <div className="col-sm-7">
            <input
              type="text"
              className="form-control"
              placeholder="Search dishes..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <div className="col-sm-5">
            <select
              className="form-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Burgers">Burgers</option>
              <option value="Pizza">Pizza</option>
              <option value="Drinks">Drinks</option>
            </select>
          </div>
        </div>

        <div className="row g-3">
          {filteredMenu.map((dish) => (
            <div className="col-md-6" key={dish.id}>
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
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge bg-light text-dark border">{dish.category}</span>
                    <small className="text-muted">{dish.prepTime}</small>
                  </div>
                  <h5 className="card-title">{dish.name}</h5>
                  <p className="fw-bold text-danger">${dish.price}</p>
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

      {/* Right Side: Shopping Cart + Live Order Tracking */}
      <div className="col-lg-4">
        <div className="bg-white p-4 rounded shadow-sm mb-4">
          <h4 className="fw-bold mb-3">Your Cart ({cart.length})</h4>

          {cart.length === 0 ? (
            <p className="text-muted mb-0">No dishes added yet.</p>
          ) : (
            <div>
              <ul className="list-group mb-3">
                {cart.map((item, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <span>{item.name} (${item.price})</span>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="btn btn-sm btn-outline-danger"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <h5 className="fw-bold mb-3">Total: ${cartTotal}</h5>
              <button onClick={placeOrder} className="btn btn-success w-100">
                Place Order
              </button>
            </div>
          )}
        </div>

        {activeOrder && (
          <div className="bg-white p-4 rounded shadow-sm border-start border-4 border-success">
            <h5 className="fw-bold mb-1">Order #{activeOrder.id}</h5>
            <p className="text-muted small mb-2">
              {activeOrder.items.length} item(s) • Total: ${activeOrder.total}
            </p>

            <div className="alert alert-success py-2 fw-bold text-center">
              Status: {statusLabels[activeOrder.step]}
            </div>

            {activeOrder.step < 3 && (
              <button
                onClick={nextOrderStep}
                className="btn btn-outline-dark btn-sm w-100"
              >
                Next Stage (Kitchen Update)
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;