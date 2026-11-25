import { useState, useEffect, useMemo } from "react";
import './App.css'


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
          <ul className="politician-card" key={politician.id}>
            <li>
              <h2 className="politician-name">Name: {politician.name}</h2>

              <img
                className="politician-image"
                src={politician.image}
                alt={politician.name}
              />

              <p className="politician-position">
                Position: {politician.position}
              </p>

              <p className="politician-biography">
                Biography: {politician.biography}
              </p>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default App
