import "./Card.scss";

import React from "react";

function Card({
  id,
  name,
  symbol,
  image,
  current_price,
  market_cap,
  market_cap_change_percentage_24h,
  price_change_percentage_24h,
  price_change_percentage_7d_in_currency,
  ath_change_percentage,
}) {
  function color() {
    if (price_change_percentage_24h >= 0) {
      return "rgb(0, 140, 0)";
    } else {
      return "rgb(220, 0, 0)";
    }
  }

  return (
    <article>
      <section className="coin_details">
        <div className="coin_name_container">
          <img src={image} alt="icon name" width={50} height={50} />
          <div>
            <h3>{name}</h3>
            <p>{symbol.toUpperCase()}</p>
          </div>
        </div>
        <div className="coin_numbers_container">
          <h3>${new Intl.NumberFormat().format(current_price)}</h3>
          <p>ATH: {ath_change_percentage.toFixed(2)}%</p>
          <p>7d: {price_change_percentage_7d_in_currency.toFixed(2)}%</p>
        </div>
      </section>
      <section className="coin_more_details">
        <div className="coin_metrics">
          <p>Mkt Cap: ${market_cap}</p>
          <p>Mkt Cap 24h: {market_cap_change_percentage_24h.toFixed(2)}%</p>
          <p>Mkt Cap: ${new Intl.NumberFormat().format(market_cap)}</p>
        </div>
        <div className="coin_percentage">
          <p className="percentage_24h" style={{ backgroundColor: color() }}>
            {price_change_percentage_24h.toFixed(2)}%
          </p>
        </div>
      </section>
    </article>
  );
}

export default Card;
