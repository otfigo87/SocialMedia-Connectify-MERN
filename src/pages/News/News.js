import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '../../components/Card/Card';
import "./News.css";




const News = () => {
  
  const [newsData, setNewsData] = useState([]);
  const [search, setSearch] = useState("sport");

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=ecaf815c34b84262a7b8f865949b004d`
      )
      .then((res) => setNewsData(res.data.articles));
  }, [search])

  console.log(newsData)

  return (
    <>
      <Navbar />
      <form className="form-container">
        <input
          type="text"
          placeholder="Search articles"
          id="search-input"
          onChange={(e) => setSearch(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
      <div className="results">
        {newsData.slice(0, 12).map((article, i) => (
          <Card article={article} key={i} />
        ))}
      </div>
    </>
  );
};

export default News;
