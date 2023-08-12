import React, { useContext } from "react";
import { Link } from "react-router-dom";
import InitialFavoriteContext from "../../store/favoriteContext";
import styles from "./Nav.module.css";

const Nav = () => {
  const favoriteCtx = useContext(InitialFavoriteContext);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link className="flex gap-2 flex-center">Logo</Link>
      <div className="flex gap-3 md:gap-5">
        <Link to="/">All MeetUps</Link>
        <Link to="/addNewMeetUp">Add New</Link>
        <Link to="/favorites">
          Favorites{" "}
          <span className={styles.badge}>{favoriteCtx.totalFavorite}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
