import React from "react";

const Contact: React.FC = () => (
  <section className="max-w-3xl mx-auto px-4 py-12">
    <h1 className="font-heading text-3xl md:text-4xl font-bold text-orange mb-8">Contact Us</h1>
    <form className="bg-white rounded-lg shadow p-6 flex flex-col gap-4 mb-8" aria-label="Contact form">
      <label htmlFor="name" className="font-medium text-gray-700">Name</label>
      <input id="name" name="name" type="text" required className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange" placeholder="Your name" />
      <label htmlFor="email" className="font-medium text-gray-700">Email</label>
      <input id="email" name="email" type="email" required className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange" placeholder="Your email address" />
      <label htmlFor="message" className="font-medium text-gray-700">Message</label>
      <textarea id="message" name="message" required rows={4} className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange" placeholder="How can we help you?" />
      <button type="submit" className="bg-orange text-white font-semibold px-4 py-2 rounded hover:bg-orange/90 transition-colors focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2">Send Message</button>
    </form>
    <div className="mb-8">
      <h2 className="font-heading text-xl font-semibold mb-2">Contact Details</h2>
      <ul className="text-gray-700">
        <li><span className="font-semibold">Phone:</span> +251-11-123-4567</li>
        <li><span className="font-semibold">Email:</span> info@koketinvestment.com</li>
        <li><span className="font-semibold">Address:</span> Bole, Addis Ababa, Ethiopia</li>
      </ul>
    </div>
    <div className="w-full h-64 bg-gray-200 rounded flex items-center justify-center text-gray-400">
      {/* Google Map Placeholder */}
      [Google Map Placeholder]
    </div>
  </section>
);

export default Contact;
