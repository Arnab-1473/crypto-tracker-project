import React from "react";
import "./styles.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Link } from "react-router-dom";

function Grid({ coin }) {
  
  return (
    <Link to={`/coin/${coin.id}`}>
      <div className={`grid-items ${coin.price_change_percentage_24h < 0 && "grid-items-red"
        }`}>
        <div className="coin-info-container">
          <img src={coin.image} className="coin-img" />
          <div className="coin-section">
            <p className="coin-symbol">{coin.symbol}</p>
            <p className="coin-name">{coin.name}</p>
          </div>
        </div>

        {coin.price_change_percentage_24h > 0 ? (
          <div className="chip-flex">
            <div className="chip-price">
              {coin.price_change_percentage_24h.toFixed(2)} %
            </div>
            <div className="chip-trending">
              <TrendingUpRoundedIcon />
            </div>
          </div>
        ) : (
          <div className="chip-flex">
            <div className="chip-price red">
              {coin.price_change_percentage_24h.toFixed(2)} %
            </div>
            <div className="chip-trending red">
              <TrendingDownRoundedIcon />
            </div>
          </div>
        )}
        <h3 className="coin-price"
          style={{
            color: coin.price_change_percentage_24h < 0 ? "var(--red)" : "var(--green)",
          }}
        >
          $ {coin.current_price.toLocaleString()}
        </h3>
        <div className="coin-info">
          <p>Total Volume : $ {coin.total_volume.toLocaleString()}</p>
          <p>Market Cap : $ {coin.market_cap.toLocaleString()}</p>
        </div>
      </div>
    </Link>
  );
}

export default Grid;
