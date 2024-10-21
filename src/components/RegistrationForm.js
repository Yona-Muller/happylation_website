import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    birthDate: '',
    newsletter: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // כאן תוכל להוסיף את הלוגיקה לשליחת הנתונים לשרת
    console.log(formData);
    // לדוגמה: await fetch('/api/register', { method: 'POST', body: JSON.stringify(formData) });
  };

  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">הרשמי כעת:</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="שם מלא"
            className="p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="אימייל"
            className="p-2 border rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="טלפון"
            className="p-2 border rounded"
            required
          />
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          
          <button
            type="submit"
            className="md:col-span-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
          >
            שלח ←
          </button>
        </form>
      </div>
    </footer>
  );
};

export default RegistrationForm;