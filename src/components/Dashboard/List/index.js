import React from 'react'
import "./styles.css"
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Tooltip } from '@mui/material';
import { convertNumbers } from '../../../functions/convertNumbers';
import { Link } from 'react-router-dom';


function List({ coin }) {
  return (
    <Link to={`/coin/${coin.id}`}>
      <tr className='list-row'>

        <Tooltip title="Coin Logo" placement="bottom-start">
          <td className="td-image">
            <img src={coin.image} className="coin-img" />
          </td>
        </Tooltip>

        <td>
          <div className="coin-section">
            <Tooltip title="Coin Symbol" placement="bottom-start"><h3 className="coin-symbol">{coin.symbol}</h3> </Tooltip>
            <Tooltip title="Coin Name" placement="bottom-start"><p className="coin-name">{coin.name}</p> </Tooltip>
          </div>
        </td>

        <Tooltip title="Price Change in 24Hrs" placement="bottom-start">
          <td className='td-price-chip-list'>
            {coin.price_change_percentage_24h > 0 ? (
              <div className="chip-flex">
                <div className="chip-price price-chip-list">
                  {coin.price_change_percentage_24h.toFixed(2)} %
                </div>
                <div className="chip-trending td-icon">
                  <TrendingUpRoundedIcon className='trending-icon-list' />
                </div>
              </div>
            ) : (
              <div className="chip-flex">
                <div className="chip-price price-chip-list red">
                  {coin.price_change_percentage_24h.toFixed(2)} %
                </div>
                <div className="chip-trending red td-icon">
                  <TrendingDownRoundedIcon className='trending-icon-list'/>
                </div>
              </div>
            )}
          </td>
        </Tooltip>

        <Tooltip title="Current Price">
          <td>
            <p className="coin-price td-center-align desktop-price"
              style={{
                color: coin.price_change_percentage_24h < 0 ? "var(--red)" : "var(--green)",
              }}
            >
              ${coin.current_price.toLocaleString()}
            </p>
          </td>
        </Tooltip>

        <Tooltip title="Total Volume" placement="bottom-start">
          <td className='td-volume'>
            <span className='total-volume total-volume-vol td-right-align' id='volume'>${coin.total_volume.toLocaleString()}</span>
          </td>
        </Tooltip>

        <Tooltip title="Market Cap" placement="bottom-start">
          <td className='desktop-td-mkt'>
            <span className='total-volume td-right-align total-volume-mkt-cap'>
              ${coin.market_cap.toLocaleString()}
            </span>
          </td>
        </Tooltip>
        <Tooltip title="Market Cap" placement="bottom-start">
          <td className='mobile-td-mkt'>
            <span className='total-volume td-right-align total-volume-mkt-cap'>
              ${convertNumbers(parseFloat(coin.market_cap))}
            </span>
          </td>
        </Tooltip>
      </tr>
    </Link>
  )
}

export default List
