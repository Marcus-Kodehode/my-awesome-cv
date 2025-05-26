'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState(null);
  // const [loading, setLoading] = useState(false); // Optional: for loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);

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
    // setLoading(false);

    if (json.success) {
      setResult('Your message has been sent successfully!');
      form.reset();
    } else {
      setResult('Something went wrong. Please try again.');
    }

    setTimeout(() => setResult(null), 5000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl px-6 py-10 mx-auto space-y-6 border shadow-md rounded-2xl bg-space-light/10 border-space-light/20 backdrop-blur-md"
    >
      {/* Name */}
      <div>
        <label htmlFor="name" className="block mb-1 text-sm font-medium text-star">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="w-full px-4 py-3 text-sm transition border rounded-md text-star bg-space-light/20 border-space-light placeholder-secondary focus:outline-none focus:ring-2 focus:ring-highlight focus:bg-space-light/30"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block mb-1 text-sm font-medium text-star">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full px-4 py-3 text-sm transition border rounded-md text-star bg-space-light/20 border-space-light placeholder-secondary focus:outline-none focus:ring-2 focus:ring-highlight focus:bg-space-light/30"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block mb-1 text-sm font-medium text-star">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          placeholder="Your message..."
          className="w-full px-4 py-3 text-sm transition border rounded-md resize-none text-star bg-space-light/20 border-space-light placeholder-secondary focus:outline-none focus:ring-2 focus:ring-highlight focus:bg-space-light/30"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full px-6 py-3 text-sm font-semibold transition rounded-lg text-space bg-highlight hover:bg-accent focus:outline-none focus:ring-2 focus:ring-highlight"
        // disabled={loading}
      >
        {/* {loading ? "Sending..." : "Send Message"} */}
        Send Message
      </button>

      {/* Result Feedback */}
      {result && (
        <p className="mt-4 text-sm text-center text-highlight">{result}</p>
      )}
    </form>
  );
}
