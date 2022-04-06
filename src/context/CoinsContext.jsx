import React, { createContext, useContext, useEffect, useState } from "react";

const coinsContext = createContext();
export const useCoinsContext = () => useContext(coinsContext);

function CoinsContext({ children }) {
  const [coins, setCoins] = useState([]);
  const URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d";

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setCoins(data))
      .catch((err) => console.log("ERROR:", err));
  }, []);

  return (
    <coinsContext.Provider value={{ coins }}>{children}</coinsContext.Provider>
  );
}

export default CoinsContext;
