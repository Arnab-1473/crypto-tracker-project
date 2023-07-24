import React, { useEffect, useState } from "react";
import TabsComponent from "../components/Dashboard/TabsCompnent";
import Header from "../components/Common/Header";
import axios from "axios";
import SearchBar from "../components/Dashboard/SearchBar";
import "./Dashboard.css";
import PaginationComponent from "../components/Dashboard/Pagination";
import Loader from "../components/Common/Loader";
import BackToTOp from "../components/Common/BackToTop";
import Footer from "../components/Common/Footer";
import { get100Coins } from "../functions/get100coins";

function DashboardPage() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [match, setMatch] = useState(true);
  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const handlePageChange = (event, value) => {
    setPage(value);

    var startingIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(startingIndex, startingIndex + 10));

  };

  const onSearchChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  // // filter function for search
  const filteredCoins = coins.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );
  // clearing search bar after seraching
  const clearSearch = () => {
    setSearch("");
  };

  useEffect(() => {
    // filter function for search
    const filteredCoins = coins.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.symbol.toLowerCase().includes(search.toLowerCase())
    );

    const startingIndex = (page - 1) * 10;
    const paginated = filteredCoins.slice(startingIndex, startingIndex + 10);
    setPaginatedCoins(paginated);

    // Update match state based on filtered coins length
    setMatch(filteredCoins.length > 0);
  }, [coins, page, search]);


  useEffect(() => {
    getData();
  }, []);

  const getData = async() => {
    const myCoins = await get100Coins();
    if (myCoins) {
      setCoins(myCoins);
      setPaginatedCoins(myCoins.slice(0, 10));
      setisLoading(false);
    }
  }

  return (
    <>
      <Header />
      <BackToTOp />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <SearchBar search={search} onSearchChange={onSearchChange} />
          <div className="message">
            {!match && search.length > 0 && <p>No Crypto Currencies Found</p>}
          </div>

          {!match && search.length > 0 && (
            <button onClick={() => clearSearch()} className="clear-search">
              Clear Search
            </button>
          )}

          {match && <TabsComponent coins={paginatedCoins} />}

          <PaginationComponent
            page={page}
            handlePageChange={handlePageChange}
          />
        </div>
      )}
      <Footer />
    </>
  );
}

export default DashboardPage;
