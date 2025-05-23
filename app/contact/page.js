"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const [captchaToken, setCaptchaToken] = useState("");
  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaToken) return alert("Please verify reCAPTCHA");

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, captchaToken }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Message sent!");
        setFormData({ name: "", email: "", message: "" });
        recaptchaRef.current.reset(); // ✅ Reset the checkbox
        setCaptchaToken(""); // ✅ Clear the token too
      } else {
        alert("❌ Failed: " + data.error);
      }
    } catch (err) {
      console.error("❌ Error:", err);
      alert("❌ Could not send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
        <p className="text-gray-400 mb-6 text-center">
          Feel free to reach out to me. I'll get back to you as soon as
          possible!
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-lg"
        >
          <div className="mb-4">
            <label className="block text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full mt-1 p-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LfdlkArAAAAAIpZHkytzSdNjmUUbP2nKtWj5xSX"
            onChange={(token) => setCaptchaToken(token)}
            theme="dark"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading ? "bg-gray-600" : "bg-blue-600 hover:bg-blue-700"
            } text-white font-semibold py-2 px-4 rounded`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Social Links */}
        <div className="mt-6 flex space-x-4">
          <a
            href="https://github.com/FM-Hadiur-Rahman"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/f-m-hadiur-rahman/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            LinkedIn
          </a>
          <a
            href="mailto:fmhadiuzzaman@gmail.com"
            className="hover:text-blue-400"
          >
            Email
          </a>
        </div>
      </motion.div>
    </div>
  );
}
