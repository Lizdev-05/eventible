import React, { useEffect, useState } from "react";
// import { DUMMY_DATA } from "../components/meetUps/MeetUpData";
import MeetUpLists from "../components/meetUps/MeetUpLists";

const AllMeetups = () => {
  const [loadedMeetUp, setLoadedMeetup] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://react-meetup-1f936-default-rtdb.firebaseio.com/meetup.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetUps = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetUps.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetup(meetUps);
      });
  }, []);

  return (
    <section>
      <h1>All Meetups</h1>

      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <MeetUpLists meetUpData={loadedMeetUp} />
      )}
    </section>
  );
};

export default AllMeetups;
