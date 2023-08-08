import React, { createContext, useState } from "react";

const initialFavoriteContext = createContext({
  favorite: [],
  totalFavorite: 0,
});
const favoriteContext = () => {
  const [favoriteMeetUp, setFavoriteMeetUp] = useState([]);

  const addFavoriteMeetUp = () => {
    setFavoriteMeetUp((prevFavoriteMeetUp) => {
      return prevFavoriteMeetUp.concat(favoriteMeetUp);
    });
  };

  const removeFavoriteMeetUp = (meetUpId) => {
    setFavoriteMeetUp((prevFavoriteMeetUp) => {
      return prevFavoriteMeetUp.filter((meetUp) => meetUp.id !== meetUpId);
    });
  };

  const meetUpFavoriteHandle = (meetUpId) => {
    return favoriteMeetUp.some((meetUp) => meetUp.id === meetUpId);
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
