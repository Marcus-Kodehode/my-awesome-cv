'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const json = await res.json();

    if (json.success) {
      setResult('Your message has been sent successfully!');
      form.reset();
    } else {
      setResult('Something went wrong. Please try again.');
    }

    setTimeout(() => setResult(null), 5000);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
      <div>
        <label className="block mb-1 text-sm text-secondary">Name</label>
        <input
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="w-full p-3 border rounded-md bg-space-light/10 border-space-light text-star"
        />
      </div>
      <div>
        <label className="block mb-1 text-sm text-secondary">Email</label>
        <input
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full p-3 border rounded-md bg-space-light/10 border-space-light text-star"
        />
      </div>
      <div>
        <label className="block mb-1 text-sm text-secondary">Message</label>
        <textarea
          name="message"
          rows="5"
          required
          placeholder="Your message..."
          className="w-full p-3 border rounded-md bg-space-light/10 border-space-light text-star"
        />
      </div>
      <button
        type="submit"
        className="px-6 py-3 text-white transition rounded-md bg-highlight hover:bg-accent"
      >
        Send Message
      </button>

      {result && (
        <p className="mt-2 text-sm text-center text-highlight">{result}</p>
      )}
    </form>
  );
}
