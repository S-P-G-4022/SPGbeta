import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function SearchBar() {
  const [query, setQuery] = useState("")
  const [games, setGames] = useState("")
  const navigate = useNavigate()


  const handleSearch = async () => {
    try {
      const { data } = await axios.post("http://localhost:3001/api/games/allGames", {
        names: query
      })

      setGames(data)
      console.log(games)
      if(games){navigate("/searched", { state: games })}
      

    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div style={styles.container}>
      <input
        type="text"

        onChange={(e) => {
          setQuery(e.target.value)
        }}
        placeholder="Search..."
        style={styles.input}
      />
      <button onClick={handleSearch} style={styles.button}>
        Search
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px 0 0 5px',
    border: '1px solid #ccc',
    outline: 'none',
    width: '300px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '0 5px 5px 0',
    border: 'none',
    backgroundColor: 'orange',
    color: 'white',
    cursor: 'pointer',
  },
};

export default SearchBar;