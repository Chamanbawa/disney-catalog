import Header from "../components/Header";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Catalog from "../components/Catalog";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Index() {
  const navigate = useNavigate();
  const [sort, setSort] = useState("Sort");

  const sortItems = () => {
    let SortType;
    if (sort === "Sort") {
      SortType = "title";
    } else if (sort === "title") {
      SortType = "year";
    } else if (sort === "year") {
      SortType = "title";
    }
    setSort(SortType);
  };
  return (
    <>
      <Header title="Disney Catalogue" />
      <div className="item-area container">
        <div className="buttons">
          <Button class="primary-btn" value={sort} onClick={sortItems} />
          <Link to="/New">
            <Button class="secondary-btn" value="Add Movie" />
          </Link>
        </div>
        <Catalog sort={sort} />
      </div>
      <Footer />
    </>
  );
}

export default Index;
