import React, { createContext, useState } from "react";

const InitialFavoriteContext = createContext({
  favorite: [],
  totalFavorite: 0,
  addFavorite: (favoriteMeetUp) => {},
  removeFavorite: (meetUpId) => {},
  meetUpIsFavorite: (meetUpId) => {},
});
export const FavoriteContext = (props) => {
  const [favoriteMeetUp, setFavoriteMeetUp] = useState([]);

  const addFavoriteMeetUp = (favoriteMeetUp) => {
    setFavoriteMeetUp((prevFavoriteMeetUp) => {
      return prevFavoriteMeetUp.concat(favoriteMeetUp);
    });
  };

  const removeFavoriteMeetUp = (meetUpId) => {
    setFavoriteMeetUp((prevFavoriteMeetUp) => {
      return prevFavoriteMeetUp.filter((meetUp) => meetUp.id !== meetUpId);
    });
  };

  const meetUpIsFavoriteHandler = (meetUpId) => {
    return favoriteMeetUp.some((meetUp) => meetUp.id === meetUpId);
  };
  const updatedFavoriteContext = {
    favorite: favoriteMeetUp,
    totalFavorite: favoriteMeetUp.length,
    addFavorite: addFavoriteMeetUp,
    removeFavorite: removeFavoriteMeetUp,
    meetUpIsFavorite: meetUpIsFavoriteHandler,
  };

  return (
    <InitialFavoriteContext.Provider value={updatedFavoriteContext}>
      {props.children}
    </InitialFavoriteContext.Provider>
  );
};

export default InitialFavoriteContext;
