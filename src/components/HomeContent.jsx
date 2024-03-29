import React, { useEffect, useState } from "react";
import CardList from "./CardList";
import { Spinner } from "react-bootstrap";

function HomeContent({ query }) {
  const [song, setSong] = useState(null);

  const fetchHomeContent = async query => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);

      if (response.ok) {
        let data = await response.json();
        setSong(data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchHomeContent(query);
  }, [query]);

  return (
    <>
      {song ? (
        <CardList song={song} />
      ) : (
        <div className="mx-auto">
          <Spinner />
        </div>
      )}
    </>
  );
}

export default HomeContent;
