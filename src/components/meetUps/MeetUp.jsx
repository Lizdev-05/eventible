import React, { useContext } from "react";
import Card from "../../ui/Card";
import styles from "./MeetUp.module.css";
import InitialFavoriteContext from "../../store/favoriteContext";

const MeetUp = (props) => {
  const favoriteCtx = useContext(InitialFavoriteContext);

  const meetUpIsFavorite = favoriteCtx.meetUpIsFavorite(props.id);
  const favoriteStatusHandler = () => {
    if (meetUpIsFavorite) {
      favoriteCtx.removeFavorite(props.id);
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description: props.description,
      });
    }
  };
  return (
    <div>
      <ul>
        <li className={styles.item}>
          <Card>
            <div className={styles.image}>
              <img src={props.image} alt={props.title} />
            </div>
            <div className={styles.content}>
              <h2>{props.title}</h2>
              <address>{props.address}</address>
              <p>{props.description}</p>
            </div>
            <div className={styles.actions}>
              <button onClick={favoriteStatusHandler}>
                {meetUpIsFavorite ? "Remove from favorite" : "Add to favorites"}
              </button>
            </div>
          </Card>
        </li>
      </ul>
    </div>
  );
};

export default MeetUp;
