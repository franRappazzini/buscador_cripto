import Card from "../Card/Card";
import React from "react";
import { useCoinsContext } from "../../context/CoinsContext";

function Home() {
  const { coins } = useCoinsContext();
  console.log(coins);
  return (
    <main>
      <h1>Home</h1>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: "1rem",
          padding: "0 2rem",
        }}
      >
        {coins && coins.map((coin) => <Card key={coin.id} {...coin} />)}
      </section>
    </main>
  );
}

export default Home;
