// useSearchbar.tsx
import React, { useState, ChangeEvent } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useCartStore } from "@/lib/zustand/store";

const Searchbar = () => {
  const [activeSearch, setActiveSearch] = useState<string[]>([]);
  const { products } = useCartStore();
  console.log(products)

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();

    if (searchTerm === "") {
      setActiveSearch([]);
      return false;
    }

    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm)
    );

    // Extracting only a limited number of suggestions
    const suggestions = filteredProducts
      .slice(0, 8)
      .map((product) => product.title);

    setActiveSearch(suggestions);
  };

  return (
    <form className="w-[500px] relative">
      <div className="relative">
        <input
          type="search"
          placeholder="Type Here"
          className="w-full p-4 rounded-full bg-slate-800"
          onChange={handleSearch}
        />
        <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-600 rounded-full">
          <AiOutlineSearch />
        </button>
      </div>

      {activeSearch.length > 0 && (
        <div className="absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
          {activeSearch.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      )}
    </form>
  );
};

export default Searchbar;
