// pages/login.tsx
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      // Save token to localStorage
      localStorage.setItem("token", data.token);

      console.log("Login successful! Token:", data.token);

      // Redirect to the home page after successful login
      router.push("/");
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage("Wrong Login Credentials");
    }
  };

  useEffect(() => {
    // Check for token in local storage on component mount
    const token = localStorage.getItem("token");
    if (token) {
      // Redirect to home page if a token is found
      router.push("/");
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500">
      <div className="w-96 bg-white p-8 shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-black">
          Login
        </h1>
        {errorMessage && (
          <p className="text-red-500 text-sm mb-4 text-center">
            {errorMessage}
          </p>
        )}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black"
          />
        </div>
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
