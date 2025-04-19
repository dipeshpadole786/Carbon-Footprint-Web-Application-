import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Login_form = () => {
  const [form, setForm] = useState({
    name: '',
    contact: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    const data = await response.json();
    alert(data.message);
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#f5f5f5' }}>
      <div className="card shadow-lg p-4 rounded-4" style={{ width: '100%', maxWidth: '400px', background: '#ffffff' }}>
        <h3 className="text-center mb-4">🔐 Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">👤 Name</label>
            <input type="text" name="name" className="form-control" onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">📱 Contact Number</label>
            <input type="text" name="contact" className="form-control" onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">📧 Email</label>
            <input type="email" name="email" className="form-control" onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">🔒 Password</label>
            <input type="password" name="password" className="form-control" onChange={handleChange} required />
          </div>

          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="check1" />
            <label className="form-check-label" htmlFor="check1">Remember me</label>
          </div>

          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-success w-100 me-2">Login</button>
            {/* Future use - register or navigate */}
            {/* <button type="button" className="btn btn-outline-secondary w-100">Register</button> */}
          </div>
        </form>
      </div>
    </div>
  );
};