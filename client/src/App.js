import logo from "./logo.webp";
import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import Cats from "./Cats";

function App() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((response) => setCats(response.data));
  }, []);

  const handleSearch = (e) => {
    axios
      .get(`http://localhost:3001/search?q=${e.target.value}`)
      .then((response) => {
        setCats(response.data);
      });
  }

  return (
    <div className="App amity">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          width="50px"
          height="50px"
        />
        <span>CatFinder</span>
      </header>
      <main>
        {/* Search filter for cats */}
        <input className="search-cats" type="text" onKeyUp={handleSearch} placeholder="search cat by name..."/>
        <h3 className="search-results-count">Found  <b>({cats.length}) cats</b> matching search criteria</h3>
        {/*  cats variable of type array */}
        <div className="cats-container">
          {cats.map((cat) => (
            <Cats key={cat.id} cat={cat} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
