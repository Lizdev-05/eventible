import React from "react";
import Form from "../components/form/Form";

const AddNewMeetUp = () => {
  const addMeetUpHandler = (meetUpData) => {
    fetch(
      "https://react-meetup-1f936-default-rtdb.firebaseio.com/meetup.json",
      {
        method: "POST",
        body: JSON.stringify(meetUpData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  return (
    <section>
      <h1>Add New MeetUp</h1>
      <Form onAddMeetup={addMeetUpHandler} />
    </section>
  );
};

export default AddNewMeetUp;
