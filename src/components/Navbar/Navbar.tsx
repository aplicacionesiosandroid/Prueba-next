"use client";
// components/Navbar.tsx

import CartIcon from "@/components/NavbarComponent/CartCount";
import HomePageButton from "@/components/NavbarComponent/HomePageButton";
import LogoutButton from "@/components/NavbarComponent/LogOutButton/LogoutButton";
import LoginButton from "@/components/NavbarComponent/LoginButton/LoginButton";
import ProductPageButton from "@/components/NavbarComponent/ProductPageButton";
import UserProfileButton from "@/components/NavbarComponent/UserProfileButton/UserProfileButton";

// Define the cart icon component
const Navbar = () => {
  // Check if the user is logged in by verifying the token in local storage
  const isUserLoggedIn = !!localStorage.getItem("token");

  return (
    <div className="flex justify-between mb-4 w-screen h-16 bg-gray-900 items-center px-10">
      <div className="flex gap-6">
        <HomePageButton />
        <ProductPageButton />
        <UserProfileButton />
      </div>
      <div className="flex gap-6">
        {isUserLoggedIn ? <LogoutButton /> : <LoginButton />}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
