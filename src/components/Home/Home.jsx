import "./Home.scss";

import React, { useState } from "react";

import CardsContainer from "../Card/CardsContainer";

function Home() {
  const [search, setSearch] = useState("");

  return (
    <main>
      <section className="input_search_container">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </section>

      <CardsContainer search={search} />

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: "1rem",
          padding: "0 2rem",
        }}
      ></section>
    </main>
  );
}

export default Home;
