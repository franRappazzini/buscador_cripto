import "./CardsContainer.scss";

import Card from "./Card";
import React from "react";
import { useCoinsContext } from "../../context/CoinsContext";

function CardsContainer({ search }) {
  const { coins } = useCoinsContext();
  const coinsSearched =
    search !== ""
      ? coins.filter(
          (coin) =>
            coin.name.toLowerCase().includes(search.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(search.toLowerCase())
        )
      : coins;

  return (
    <section className="cards_container">
      {coinsSearched ? (
        coinsSearched.map((coin) => <Card key={coin.id} {...coin} />)
      ) : (
        <p>No resultados</p>
      )}
    </section>
  );
}

export default CardsContainer;
