"use client";

import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}/`);
  };

  return (
    <form onSubmit={handleSubmit} className="join mt-4 flex justify-center">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input join-item input-bordered"
        placeholder="Search anything you want!"
      />
      <button
        type="submit"
        className="btn btn-primary join-item rounded-r-full"
      >
        Wiki Search 🚀
      </button>
    </form>
  );
};

export default Search;
