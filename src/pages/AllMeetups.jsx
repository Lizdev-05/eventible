import React from "react";
import { DUMMY_DATA } from "../components/meetUps/MeetUpData";
import MeetUpLists from "../components/meetUps/MeetUpLists";

const AllMeetups = () => {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetUpLists meetUpData={DUMMY_DATA} />
    </section>
  );
};

export default AllMeetups;
