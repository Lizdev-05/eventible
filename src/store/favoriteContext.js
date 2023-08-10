import React, { createContext, useState } from "react";

const initialFavoriteContext = createContext({
  favorite: [],
  totalFavorite: 0,
  addFavorite: (favoriteMeetUp) => {},
  removeFavorite: (meetUpId) => {},
  meetUpIsFavorite: (meetUpId) => {},
});
export const FavoriteContextProvider = (props) => {
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
    <FavoriteContextProvider.Provider value={updatedFavoriteContext}>
      {props.children}
    </FavoriteContextProvider.Provider>
  );
};

export default initialFavoriteContext;
