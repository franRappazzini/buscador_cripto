import "./Card.scss";

import React from "react";
import Tilt from "react-parallax-tilt";

function Card({
  id,
  name,
  symbol,
  image,
  current_price,
  market_cap,
  price_change_percentage_1h_in_currency,
  price_change_percentage_24h,
  price_change_percentage_7d_in_currency,
  low_24h,
  high_24h,
}) {
  function color() {
    if (price_change_percentage_24h >= 0) {
      return "rgb(0, 140, 0)";
    } else {
      return "rgb(220, 0, 0)";
    }
  }

  return (
    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} tiltReverse={true}>
      <a
        className="article_card"
        href={`https://www.coingecko.com/en/coins/${id}`}
        title="Go to CoinGecko"
        target="_blank"
        rel="noopener noreferrer"
      >
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
              <p>
                <span>1h:</span>{" "}
                {parseFloat(price_change_percentage_1h_in_currency).toFixed(2)}%
              </p>
              <p>
                <span>7d:</span>{" "}
                {price_change_percentage_7d_in_currency.toFixed(2)}%
              </p>
            </div>
          </section>
          <section className="coin_more_details">
            <div className="coin_metrics">
              <p>
                <span>Low 24h:</span> ${new Intl.NumberFormat().format(low_24h)}
              </p>
              <p>
                <span>Max 24h:</span> $
                {new Intl.NumberFormat().format(high_24h)}
              </p>
              <p>
                <span>Mkt Cap:</span> $
                {new Intl.NumberFormat().format(market_cap)}
              </p>
            </div>
            <div className="coin_percentage">
              <p
                className="percentage_24h"
                style={{ backgroundColor: color() }}
              >
                {price_change_percentage_24h.toFixed(2)}%
              </p>
            </div>
          </section>
        </article>
      </a>
    </Tilt>
  );
}

export default Card;
