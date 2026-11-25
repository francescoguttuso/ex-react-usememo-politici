import { useState, useEffect, useMemo } from "react";
import './App.css'
import PoliticianCard from "./components/PoliticianCard";

function App() {
  const [politicians, setPoliticians] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch('http://localhost:3333/politicians')
      .then(response => response.json())
      .then(data => setPoliticians(data))
      .catch(error => console.error(error))
  }, []);
  const filteredPoliticians = useMemo(() => {
    return politicians.filter((politician) => {
      return politician.name.toLowerCase().includes(search.toLowerCase()) || politician.biography.toLowerCase().includes(search.toLowerCase())
    })
  }, [politicians, search])
  return (
    <div className="app">
      <h1 className="page-title">POLITICIANS</h1>
      <input type="text" value={search}
        onChange={e => setSearch(e.target.value)} />
      {filteredPoliticians.map((politician) => {
        return (
          <PoliticianCard politician={politician} key={politician.id} />

        );
      })}

    </div>
  );
}

export default App
