import CartIcon from "@/components/Navbar/CartCount";
import HomePageButton from "@/components/Navbar/HomePageButton";
import ProductPageButton from "@/components/Navbar/ProductPageButton";

// Define the cart icon component
const Navbar = () => {
  return (
    <div className="flex justify-between mb-4 w-screen h-16 bg-gray-900 items-center px-10">
      <div className="flex gap-6">
        <HomePageButton />
        <ProductPageButton />
      </div>
      <CartIcon />
    </div>
  );
};

export default Navbar;
