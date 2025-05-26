'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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
    setLoading(false);

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
      className="relative max-w-2xl px-6 py-10 mx-auto space-y-6 transition-all border shadow-md border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:shadow-xl"
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
          className="w-full px-4 py-3 text-sm transition border rounded-md bg-white/10 text-star border-white/10 placeholder-secondary focus:outline-none focus:ring-2 focus:ring-highlight focus:bg-white/20"
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
          className="w-full px-4 py-3 text-sm transition border rounded-md bg-white/10 text-star border-white/10 placeholder-secondary focus:outline-none focus:ring-2 focus:ring-highlight focus:bg-white/20"
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
          className="w-full px-4 py-3 text-sm transition border rounded-md resize-none bg-white/10 text-star border-white/10 placeholder-secondary focus:outline-none focus:ring-2 focus:ring-highlight focus:bg-white/20"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full px-6 py-3 text-sm font-semibold transition rounded-lg text-space bg-highlight hover:bg-accent hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-highlight"
        disabled={loading}
      >
        Send Message
      </button>

      {result && (
        <p className="mt-4 text-sm text-center text-highlight animate-fadeIn">
          {result}
        </p>
      )}

      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm rounded-2xl animate-fadeIn">
          <div className="text-center">
            <div className="w-10 h-10 mx-auto mb-4 border-4 rounded-full border-t-transparent border-highlight animate-spin" />
            <p className="text-sm font-semibold text-star">Sending your message...</p>
          </div>
        </div>
      )}
    </form>
  );
}
