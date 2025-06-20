import { useState } from "react";
import axios from "axios"; // Make sure axios is installed

const AuthForm = ({ type }) => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      if (type === "signup") {
        if (formData.password !== formData.confirmPassword) {
          setError("Passwords do not match.");
          return;
        }
        // Replace with your backend signup endpoint
        const res = await axios.post("https://medication-backend-spw7.onrender.com/api/signup", {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
        setSuccess("Signup successful!");
      } else {
        // Replace with your backend login endpoint
        const res = await axios.post("https://medication-backend-spw7.onrender.com/api/login", {
          email: formData.email,
          password: formData.password,
        });
        setSuccess("Login successful!");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6">
          {type === "login" ? "Login" : "Signup"}
        </h2>
        {error && <div className="mb-4 text-red-600">{error}</div>}
        {success && <div className="mb-4 text-green-600">{success}</div>}
        {/* Name input only for signup */}
        {type === "signup" && (
          <input
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            type="text"
            placeholder="Name"
            required
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        )}
        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          type="password"
          placeholder="Password"
          required
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        {/* Confirm password only for signup */}
        {type === "signup" && (
          <input
            className="w-full p-2 mb-6 border border-gray-300 rounded"
            type="password"
            placeholder="Confirm Password"
            required
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
          />
        )}
        {type === "login" && <div className="mb-6"></div>}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          {type === "login" ? "Login" : "Signup"}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;