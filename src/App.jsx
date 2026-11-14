import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import DishDetails from './pages/DishDetails';
import Contact from './pages/Contact';

function App() {
  const [cart, setCart] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);

  const addToCart = (dish) => {
    setCart([...cart, dish]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  // Creates an order from the current cart and starts tracking at step 1
  const placeOrder = () => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    setActiveOrder({
      id: Math.floor(1000 + Math.random() * 9000),
      items: cart,
      total: total,
      step: 1 // 1 = Received, 2 = Cooking, 3 = Ready
    });
    setCart([]);
  };

  // Lets you demo order progress live during presentation
  const nextOrderStep = () => {
    if (activeOrder && activeOrder.step < 3) {
      setActiveOrder({ ...activeOrder, step: activeOrder.step + 1 });
    }
  };

  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar cartCount={cart.length} />

        <main className="container my-4 flex-grow-1">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/menu"
              element={
                <Menu
                  cart={cart}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  placeOrder={placeOrder}
                  activeOrder={activeOrder}
                  nextOrderStep={nextOrderStep}
                />
              }
            />
            <Route path="/dish/:id" element={<DishDetails addToCart={addToCart} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;