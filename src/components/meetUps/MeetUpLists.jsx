import React from "react";
import MeetUp from "./MeetUp";

const MeetUpLists = (props) => {
  return (
    <ul>
      {props.meetUpData.map((data) => {
        return (
          <li>
            <MeetUp
              key={data.id}
              title={data.title}
              id={data.id}
              image={data.image}
              address={data.address}
              description={data.description}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default MeetUpLists;
