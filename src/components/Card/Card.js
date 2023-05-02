import "./Card.css";

const Card = ({article}) => {
  return (
    <div className="article">
      <img src={article.urlToImage} alt={article.title} />
      {/* <h1>Author: {article.author}</h1> */}
      <h2>{article.title}</h2>
      {article.publishedAt ? <h5>released: {article.publishedAt}</h5> : null}
      <h5>By: {article.author}</h5>
      <p>{article.description}</p>
      <button className="btn">Read more and Discuss</button>
    </div>
  );
}

export default Card