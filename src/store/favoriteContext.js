import React, { createContext, useState } from "react";

const initialFavoriteContext = createContext({
  favorite: [],
  totalFavorite: 0,
});
const favoriteContext = () => {
  const [favoriteMeetUp, setFavoriteMeetUp] = useState([]);

  const addFavoriteHandler = () => {
    setFavoriteMeetUp((prevFavoriteMeetUp) => {
      return prevFavoriteMeetUp.concat(favoriteMeetUp);
    });
  };

  const updatedFavoriteContext = {
    favorite: favoriteMeetUp,
    totalFavorite: favoriteMeetUp.length,
  };

  return (
    <initialFavoriteContext.Provider value={updatedFavoriteContext}>
      {props.children}
    </initialFavoriteContext.Provider>
  );
};

export default favoriteContext;
