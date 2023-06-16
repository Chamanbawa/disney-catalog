import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
const Detail = () => {
  const [character, setCharacter] = useState({});
  const navigate = useNavigate();
  const API_url = `https://api.disneyapi.dev/character`;
  const { id } = useParams();

  useEffect(() => {
    const getCharacter = async () => {
      console.log(`${API_url}/${id}`);
      const response = await axios.get(`${API_url}/${id}`);
      console.log(response.data.data);
      if (response.data.data === 0) {
        navigate("/not-found");
      } else {
        setCharacter(response.data.data);
      }
    };
    getCharacter();
  }, [id]);
  return (
    <>
      <Helmet>
        <title>{character.name}</title>
      </Helmet>
      <Header title="Disney Catalogue" />
      <div className="detail-area container">
        <div className="detail">
          <div className="char-image">
            <img src={character.imageUrl} alt="Image" />
          </div>
          <div className="char-detail">
            <p className="name">{character.name}</p>
            <p className="created">Created on: {character.createdAt}</p>
            <p className="update">Last Update: {character.updatedAt}</p>
            <p className="image">Original Image: {character.imageUrl}</p>
            <p className="source"> More Details: {character.sourceUrl}</p>
            <Button class="primary-btn site-btn" value="Original site" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
