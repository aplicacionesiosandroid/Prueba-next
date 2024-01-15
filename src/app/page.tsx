import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col items-center text-wrap">
      <h1 className="text-4xl">This is HOME PAGE</h1>
      <h2 className="text-3xl">
        Please Visit Other Pages from Navbar to See & Test Functionalities
      </h2>
      <p className="text-2xl">
        Checkout the source codes{" "}
        <Link
          target="_blank"
          className="text-blue-500 hover:text-blue-600 hover:underline"
          href="https://github.com/Subhasish-Negel/zustand-product-store"
        >
          here
        </Link>
      </p>
    </div>
  );
};

export default page;
