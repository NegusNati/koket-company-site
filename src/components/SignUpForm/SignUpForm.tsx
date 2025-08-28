import React, { useState } from "react";

const SignUpForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: Integrate with backend or email service
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow p-6 flex flex-col gap-4"
      aria-label="Sign up for product or service updates"
    >
      <label htmlFor="email" className="font-medium text-gray-700">
        Sign up for updates:
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange"
        placeholder="Your email address"
        aria-label="Email address"
      />
      <button
        type="submit"
        className="bg-orange text-white font-semibold px-4 py-2 rounded hover:bg-orange/90 transition-colors focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2"
      >
        {submitted ? "Thank you!" : "Sign Up"}
      </button>
    </form>
  );
};

export default SignUpForm;
