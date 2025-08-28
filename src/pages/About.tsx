import React from "react";

const About: React.FC = () => (
  <section className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="font-heading text-3xl md:text-4xl font-bold text-orange mb-6">About Us</h1>
    <div className="mb-8">
      <h2 className="font-heading text-2xl font-semibold mb-2">Our Story</h2>
      <p className="text-gray-700 mb-4">
        Koket Investment, established in 2013 E.C in Addis Ababa, Ethiopia, is dedicated to transforming the future through innovative solutions in Design & Build, Digital Solutions, and Trading. Our core philosophy, <span className="font-semibold text-orange">"Mine is Yours"</span>, drives our commitment to client-centricity and sustainable growth.
      </p>
    </div>
    <div className="mb-8">
      <h2 className="font-heading text-2xl font-semibold mb-2">CEO Statement</h2>
      <blockquote className="border-l-4 border-orange pl-4 italic text-gray-800">
        "At Koket Investment, we believe in building lasting value for our clients, partners, and community. Our journey is guided by innovation, integrity, and the principle that what is mine is truly yours."
        <br />
        <span className="block mt-2 font-bold">- Wasihun Tefera, CEO</span>
      </blockquote>
    </div>
    <div className="mb-8">
      <h2 className="font-heading text-2xl font-semibold mb-2">Mission, Vision & Values</h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li><span className="font-semibold">Mission:</span> To deliver innovative, sustainable, and client-focused solutions across Ethiopia and beyond.</li>
        <li><span className="font-semibold">Vision:</span> To be a leader in design, technology, and trading, shaping a brighter future for all stakeholders.</li>
        <li><span className="font-semibold">Values:</span> Innovation, Sustainability, Client-Centricity, Integrity, Collaboration.</li>
      </ul>
    </div>
    {/* Optional: Team/Org Chart Placeholder */}
    <div className="mt-10">
      <h2 className="font-heading text-2xl font-semibold mb-2">Our Team</h2>
      <div className="bg-gray-50 rounded-lg p-6 text-center text-gray-400">
        [Organizational Chart / Team Profiles Placeholder]
      </div>
    </div>
  </section>
);

export default About;
