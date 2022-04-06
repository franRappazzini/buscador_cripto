import "./CardsContainer.scss";

import Card from "./Card";
import React from "react";
import notFound from "../../assets/not found.png";
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
    <>
      {coinsSearched && coinsSearched.length > 0 ? (
        <section className="cards_container">
          {coinsSearched.map((coin) => (
            <Card key={coin.id} {...coin} />
          ))}
        </section>
      ) : (
        <section className="not_found">
          <img src={notFound} alt="not found" />
        </section>
      )}
    </>
  );
}

export default CardsContainer;
