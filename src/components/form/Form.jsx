import React, { useRef } from "react";
import styles from "./Form.module.css";
import Card from "../../ui/Card";

const Form = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredTitleRef = titleInputRef.current.value;
    const enteredImageRef = imageInputRef.current.value;
    const enteredaddressRef = addressInputRef.current.value;
    const enteredDescriptionRef = descriptionInputRef.current.value;

    const newMeetUpData = {
      title: enteredTitleRef,
      image: enteredImageRef,
      address: enteredaddressRef,
      description: enteredDescriptionRef,
    };

    props.onAddMeetup(newMeetUpData);
  };

  return (
    <Card>
      <form
        action=""
        method="post"
        className={styles.form}
        onSubmit={submitHandler}
      >
        <div className={styles.control}>
          <label htmlFor="title">Enter the Meetup Title</label>
          <input type="text" id="title" ref={titleInputRef} />
        </div>

        <div className={styles.control}>
          <label htmlFor="image">Enter the Meetup image</label>
          <input type="url" id="image" ref={imageInputRef} />
        </div>

        <div className={styles.control}>
          <label htmlFor="address">Address</label>
          <input type="address" id="address" ref={addressInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={styles.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default Form;
