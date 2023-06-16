import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

function Catalog({ sort }) {
  const API_url = `https://api.disneyapi.dev/character`;
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);

  const getData = useCallback(async () => {
    try {
      const { data } = await axios.get(`${API_url}`);
      setCharacters(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error.message);
    }
  }, [API_url]);

  const goToDetail = (id) => {
    navigate(`${id}`);
  };

  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <section className="characters">
      {characters
        .sort((a, b) => {
          if (sort === "title") {
            return a.name > b.name ? 1 : -1;
          }
          if (sort === "year") {
            return a.createdAt < b.createdAt ? 1 : -1;
          }
        })
        .map((character) => {
          return (
            <div className="character">
              <div
                className="character-image"
                onClick={() => goToDetail(character._id)}
              >
                <img src={character.imageUrl} alt="Image" />
              </div>
              <p className="character-title">{character.name}</p>
            </div>
          );
        })}
    </section>
  );
}

export default Catalog;
