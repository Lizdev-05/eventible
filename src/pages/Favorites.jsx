import React, { useContext } from "react";
import InitialFavoriteContext from "../store/favoriteContext";
import MeetUpLists from "../components/meetUps/MeetUpLists";

const Favorites = () => {
  const favoriteCtx = useContext(InitialFavoriteContext);

  let content;

  if (favoriteCtx.totalFavorite === 0) {
    content = <h2>You have no favorite meet up presently, kindly add</h2>;
  } else {
    content = <MeetUpLists meetUpData={favoriteCtx.favorite} />;
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
};

export default Favorites;
