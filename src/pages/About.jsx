function About() {
    return (
      <div className="bg-white p-4 p-md-5 rounded shadow-sm">
        <h2 className="fw-bold mb-3">About Urban Fork</h2>
        <p className="text-muted">
          Urban Fork is a modern casual kitchen built around simple ordering and fresh
          ingredients. Customers can browse our menu from any phone or laptop and follow
          their order from the kitchen to the counter.
        </p>
  
        <div className="row g-4 mt-3">
          <div className="col-md-4">
            <div className="p-3 border rounded h-100">
              <h5 className="fw-bold">1. Pick Your Meal</h5>
              <p className="text-muted mb-0">
                Filter by Burgers, Pizza, or Drinks and check preparation times.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 border rounded h-100">
              <h5 className="fw-bold">2. Quick Cart</h5>
              <p className="text-muted mb-0">
                Add or remove dishes with automatic total calculation.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 border rounded h-100">
              <h5 className="fw-bold">3. Live Tracking</h5>
              <p className="text-muted mb-0">
                Watch your order move from Received to Cooking to Ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;