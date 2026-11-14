import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-7 bg-white p-4 p-md-5 rounded shadow-sm">
        <h2 className="fw-bold mb-3">Contact Us</h2>
        <p className="text-muted mb-4">
          Questions about allergens, catering, or an order? Send us a message.
        </p>

        {sent && (
          <div className="alert alert-success">
            Message received! Our team will reply shortly.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Your Name</label>
            <input
              type="text"
              className="form-control"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              rows="4"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-danger">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;