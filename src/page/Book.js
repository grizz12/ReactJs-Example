/* eslint-disable import/no-anonymous-default-export */
import { useEffect, useState } from "react";

export default function () {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    async function getItem() {
      const request = await fetch(
        "https://legacy--api.herokuapp.com/api/v1/books"
      );
      const response = await request.json();
      setBooks(response);
      setLoading(false);
    }
    getItem();
  }, []);

  return (
    <div>
      <h1 className="text-judul">Recent Book</h1>
      {loading && <div class="lds-dual-ring"></div>}
      {!loading && (
        <div>
          {books.map(function (book) {
            return (
              <div className="card-blog">
                <img src={book.image_url} alt="images" />
                <div className="container" key={book.id}>
                  <h4>
                    <b>{book.title}</b>
                  </h4>
                  <p>RakaTrust</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
