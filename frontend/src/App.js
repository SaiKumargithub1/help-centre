import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CardList from "./components/CardList";
import Footer from "./components/Footer";

function App() {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/help-center"); // Update API endpoint to backend URL
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <Header />
      <div className="content-wrapper">
        <h1>How can we help?</h1>
        <SearchBar onSearch={handleSearch} />
        <CardList cards={filteredCards} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
