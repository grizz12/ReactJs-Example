import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [news, setNews] = useState([]);

  useEffect(function () {
    async function getData() {
      const request = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      const response = await request.json();
      setNews(response);
    }
    getData();
  }, []);

  return (
    <div>
      <h1 className="text-blog">news spaceflight</h1>
      {news.map(function (artikel) {
        return (
          <div className="card-container">
            <div className="card card-1">
              <a href="#card" className="card-link">
                <div className="img-1"></div>
                <div className="card-img-hovered"></div>
              </a>
              <div className="card-info">
                <div className="card-about">
                  <a className="card-tag tag-news" href="#card">
                    NEWS
                  </a>
                  <div className="card-time">
                    {new Date(artikel.publishedAt).toLocaleString()}
                  </div>
                </div>
                <h1 className="card-title">
                  <Link to={`/news/${artikel.id}`}>{artikel.title}</Link>
                </h1>
                <div className="card-creator">
                  by <a href="#card">{artikel.newsSite}</a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
