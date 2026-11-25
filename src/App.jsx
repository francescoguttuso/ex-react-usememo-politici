import { useState, useEffect } from "react";
import './App.css'


function App() {
  const [politicians, setPoliticians] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3333/politicians')
      .then(response => response.json())
      .then(data => setPoliticians(data))
      .catch(error => console.error(error))
  }, []);
  console.log(politicians)
  return (
    <div>
      <h1>POLITICIANS</h1>
      {politicians.map((politician) => {
        return (
          <ul key={politician.id}>
            <li>
              <h2>Name:{politician.name}</h2>
              <img src={politician.image} alt={politician.name} />
              <p>Position:{politician.position}</p>
              <p>Biography:{politician.biography}</p>
            </li>
          </ul>
        )
      })}
    </div>
  )
}

export default App
