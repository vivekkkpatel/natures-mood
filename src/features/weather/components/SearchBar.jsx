import { useState, useEffect, useRef } from "react";
import { searchCity } from "../services/weatherApi";
import { Search } from "lucide-react";

const SearchBar = ({ onSelectCity }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const timeoutRef = useRef(null);
  const wrapperRef = useRef(null);
  const skipSearchRef = useRef(false);

  useEffect(() => {
    if (!query.trim() || query.trim().length < 3) {
      setSuggestions([]);
      return;
    }

    if (skipSearchRef.current) {
      skipSearchRef.current = false;
      return;
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(async () => {
      try {
        const data = await searchCity(query);
        setSuggestions(data);
      } catch (error) {
        console.error(error);
      }
    }, 400);

    return () => clearTimeout(timeoutRef.current);
  }, [query]);

  const handleSelect = (city) => {
    skipSearchRef.current = true;
    setQuery(`${city.name}, ${city.region}, ${city.country}`);
    setSuggestions([]);
    // onSelectCity(`${city.name}, ${city.country}`);
    onSelectCity(city.name);
    setQuery("");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-80 mt-3 md:mt-0">
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 z-10 pointer-events-none"
        size={18}
      />
      <input
        type="text"
        placeholder="Search city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="
          font-Outfit
          peer w-full
          bg-white/10
          backdrop-blur-md
          rounded-full
          pl-10 pr-5
          px-5 py-2
          text-white
          placeholder-white/70
          focus:outline-none
          focus:ring-2
          focus:ring-white/20
          transition relative z-0
        "
      />

      {suggestions.length > 0 && (
        <div
          className="
            font-Outfit
            absolute
            mt-2
            w-full
            bg-white/20
            backdrop-blur-xl
            border border-white/20
            rounded-2xl
            overflow-hidden
            shadow-2xl
            z-50
          "
        >
          {suggestions.map((city, index) => (
            <div
              key={index}
              onClick={() => handleSelect(city)}
              className="
                px-4 py-3
                cursor-pointer
                hover:bg-white/20
                transition
              "
            >
              {city.name}, {city.region}, {city.country}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
