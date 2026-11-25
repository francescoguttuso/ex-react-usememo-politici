import { useState, useEffect } from "react";
import './App.css'


function App() {
  const [politician, setPolitician] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3333/politicians')
      .then(response => response.json())
      .then(data => setPolitician(data))
      .catch(error => console.error(error))
  }, []);

  return (
    <>
      ciao
    </>
  )
}

export default App
