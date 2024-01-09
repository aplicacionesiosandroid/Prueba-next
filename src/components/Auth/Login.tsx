"use client";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        console.log("Login successful! Token:", data.token);

        // Go back to the previous page
        window.history.back();

        // Listen for the page navigation completion
        window.addEventListener("popstate", function onPopState() {
          // Remove the event listener to avoid multiple calls
          window.removeEventListener("popstate", onPopState);

          // Reload the current page
          location.reload();
        });
      } else {
        console.error("Login failed: Token not found in response");
        setErrorMessage("Wrong Login Credentials");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage("Wrong Login Credentials");
    }
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gray-500">
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
    </>
  );
};

export default Login;
