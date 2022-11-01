import React, { useCallback } from "react";

import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators.js';
import "./NewPlace.css";

const NewPlace = () => {
  const titleInputHandler = useCallback((id, value, isValid) => {}, []);

  const descriptionInputHandler = useCallback((id, value, isValid) => {}, []);

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE]}
        errorText="please enter a valid title"
        onInput={titleInputHandler}
      />
      <Input
        id="description"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="At least 5 characters."
        onInput={descriptionInputHandler}
      />
    </form>
  );
};

export default NewPlace;
