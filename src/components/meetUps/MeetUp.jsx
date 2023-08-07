import React from "react";
import Card from "../../ui/Card";
import styles from "./MeetUp.module.css";

const MeetUp = (props) => {
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
              <button>Add to favorites</button>
            </div>
          </Card>
        </li>
      </ul>
    </div>
  );
};

export default MeetUp;
