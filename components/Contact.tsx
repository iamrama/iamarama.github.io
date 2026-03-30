'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="min-h-screen bg-white dark:bg-black border-b-2 border-black dark:border-white flex items-center py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-6xl md:text-8xl font-black mb-12 text-center bg-linear-to-b from-white to-white dark:from-white dark:to-black bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.35)] dark:drop-shadow-none">Get In Touch</h2>
        
        <div className="mb-12">
          <p className="text-xl text-black dark:text-white text-center mb-8">
            Have a project in mind? Let's collaborate and create something amazing together.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="border-2 border-black dark:border-white p-8">
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-semibold text-black dark:text-white mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border-2 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white p-3 font-semibold focus:outline-none"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-semibold text-black dark:text-white mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border-2 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white p-3 font-semibold focus:outline-none"
              placeholder="your@email.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-semibold text-black dark:text-white mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full border-2 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white p-3 font-semibold focus:outline-none resize-none"
              placeholder="Your message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black dark:bg-white text-white dark:text-black font-bold py-3 px-6 text-lg hover:opacity-80 transition-all border-2 border-black dark:border-white"
          >
            Send Message
          </button>

          {submitted && (
            <div className="mt-4 p-4 border-2 border-black dark:border-white text-center">
              <p className="text-black dark:text-white font-semibold">Thank you! Your message has been sent.</p>
            </div>
          )}
        </form>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-lg font-bold text-black dark:text-white mb-2">Email</h3>
            <p className="text-black dark:text-white">hello@example.com</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-black dark:text-white mb-2">Phone</h3>
            <p className="text-black dark:text-white">+1 (555) 123-4567</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-black dark:text-white mb-2">Location</h3>
            <p className="text-black dark:text-white">San Francisco, CA</p>
          </div>
        </div>
      </div>
    </section>
  );
}