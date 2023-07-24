import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import SelectCoins from '../components/Compare/SelectCoins'
import SelectDays from '../components/Coin/SelectDays';
import { getCoinData } from '../functions/getCoinData';
import { getCoinPrices } from '../functions/getCoinPrices';
import { coinObject } from '../functions/convertObject';
import Loader from '../components/Common/Loader';
import Footer from '../components/Common/Footer';
import CoinInfo from '../components/Coin/Coininfo';
import List from '../components/Dashboard/List';
import { settingChartData } from '../functions/settingChartData';
import LineChart from '../components/Coin/LineChart';
import PriceToggle from '../components/Coin/PriceType';

function ComparePage() {
  const [crypto1, setCrypto1] = useState('bitcoin');
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [days, setDays] = useState(60);
  const [priceType, setPriceType] = useState("prices")
  const [chartData, setChartData] = useState({});

  async function handleDaysChange(event) {
    setIsLoading(true);
    setDays(event.target.value);
    const prices1 = await getCoinPrices(crypto1, event.target.value, priceType);
    const prices2 = await getCoinPrices(crypto2, event.target.value, priceType);
    settingChartData(setChartData, prices1, prices2);
    setIsLoading(false);
  }

  const handlePriceType = async (event, newType) => {
    setIsLoading(true);
      setPriceType(newType);
      // console.log(newType);
      const prices1 = await getCoinPrices(crypto1, days, newType);
      const prices2 = await getCoinPrices(crypto2, days, newType);
    settingChartData( setChartData, prices1, prices2 );
    setIsLoading(false); 
  };

  useEffect(() => {
    getData();
  }, []);

  /*======================================================================== */
  // async function getData() {
  //   setIsLoading(true);
  //   const data1 = await getCoinData(crypto1);
  //   const data2 = await getCoinData(crypto2);
  //   if (data1) {
  //     coinObject(setCrypto1Data, data1);
  //   }
  //   if (data2) {
  //     coinObject(setCrypto2Data, data2);
  //   }
  //   // 

  //   if (data1 && data2) {
  //     const prices1 = await getCoinData(crypto1, days, priceType);
  //     const prices2 = await getCoinData(crypto2, days, priceType);
  //     setIsLoading(false);

  //     if (prices1.length > 0 && prices2.length > 0) {
  //       // console.log("Both prices fetched", prices1, prices2);
  //       settingChartData( setChartData, prices1, prices2 );
  //       setIsLoading(false);
  //     } else if (prices1.length > 0) {
  //       // Handle the case when data is available only for one cryptocurrency (prices2 is undefined)
  //       settingChartData(setChartData, prices1, []);
  //       setIsLoading(false);
  //     }
  //   }
  // }
  /*======================================================================== */

  async function getData() {
    setIsLoading(true);
    const data1 = await getCoinData(crypto1);
    if (data1) {
      const data2 = await getCoinData(crypto2);
      coinObject(setCrypto1Data, data1);
      if (data2) {
        coinObject(setCrypto2Data, data2);
        const prices1 = await getCoinPrices(crypto1, days, priceType);
        const prices2 = await getCoinPrices(crypto2, days, priceType);
        settingChartData(setChartData, prices1, prices2);
        // console.log("Both prices fetched", prices1, prices2);

        setIsLoading(false);
      }
    }
  }


  /*======================================================================== */
  const handleCoinChange = async (event, isCoin2) => {
    setIsLoading(true);
    if (isCoin2) {
      setCrypto2(event.target.value);
      const data = await getCoinData(event.target.value);
      coinObject(setCrypto2Data, data);
    } else {
      setCrypto1(event.target.value);
      const data = await getCoinData(event.target.value);
      coinObject(setCrypto1Data, data);
    }
    const prices1 = await getCoinPrices(crypto1, days, priceType);
    const prices2 = await getCoinPrices(crypto2, days, priceType);
    setIsLoading(false);
  };
  /*======================================================================== */
  // const handleCoinChange = async (event, isCoin2) => {
  //   setIsLoading(true);
  //   if (isCoin2) {
  //     setCrypto2(event.target.value);
  //     const data = await getCoinData(event.target.value);
  //     coinObject(setCrypto2Data, data);
  //     const prices1 = await getCoinPrices(crypto1, days, priceType);
  //     const prices2 = await getCoinPrices(crypto2, days, priceType);
  //     if (prices1.length > 0 && prices2.length > 0) {
  //       console.log("Both prices fetched", prices1, prices2);
  //       setIsLoading(false);
  //     }
  //   } else {
  //     setCrypto1(event.target.value);
  //     const data = await getCoinData(event.target.value);
  //     coinObject(setCrypto1Data, data);
  //   }
  // }


  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className='coin-days-flex'>
            <SelectCoins
              crypto1={crypto1}
              handleCoinChange={handleCoinChange}
              crypto2={crypto2}
            />
            <SelectDays days={days} handleDaysChange={handleDaysChange}
            />
          </div>
          
          <div className='wrapper' >
            <List coin={crypto1Data} />
          </div>
          <div className='wrapper' >
            <List coin={crypto2Data} />
          </div>

          <div className="wrapper">
          <PriceToggle priceType={priceType} 
          handlePriceType={handlePriceType}
          />
            <LineChart
              chartData={chartData}
              priceType={priceType}
              multiAxis={true}
            />
          </div>

          <CoinInfo heading={crypto1Data.name} description={crypto1Data.desc} />
          <CoinInfo heading={crypto2Data.name} description={crypto2Data.desc} />
        </>
      )}

      {/* <Footer/> */}
    </div>
  )
}

export default ComparePage
