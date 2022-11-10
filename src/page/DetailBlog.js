// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// export default function DetailBlog() {
//   const params = useParams();
//   const [news, setNews] = useState([]);
//   //   const [loading, setLoading] = useState(true);

//   useEffect(
//     function () {
//       async function getData() {
//         const request = await fetch(
//           `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`
//         );
//         const response = await request.json();
//         setNews(response);
//         // setLoading(false);
//       }
//       getData();
//     },
//     [params]
//   );

//   return (
//     <div>
//       {/* {loading && <i>Loading ....</i>}
//       {!loading && (
//         <div>
//           {news.map(function(item) {
//             return (
//               <div>
//                 <img src={item.imageUrl} alt={item.title} />
//               </div>
//             );
//           })}
//         </div>
//       )} */}
//       {news.map(function (artikel) {
//         return (
//           <div>
//             <img src={artikel.imageUrl} alt={artikel.title} />
//           </div>
//         );
//       })}
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const params = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(
    function () {
      async function getArticle() {
        const request = await fetch(
          `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`
        );
        const response = await request.json();
        setArticle(response);
        setLoading(false);
      }
      getArticle();
    },
    [params]
  );

  return (
    <article>
      {loading && (
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      {!loading && (
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="page-header">
                  <h1>{article.title}</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="article-meta workshop-schedule">
                  <span>
                    <i className="glyphicon glyphicon-time"></i>
                    {new Date(article.publishedAt).toDateString()}
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="article-meta">
                  <ul>
                    <li>
                      <i className="glyphicon glyphicon-user"></i> by{" "}
                      <a href="#none">{article.newsSite}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="workshop-post">
                  <div className="cover">
                    <img src={article.imageUrl} alt="" />
                  </div>
                  <div className="article-text">
                    <p>{article.summary}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="widget-container"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
