import React from "react";
import { useDispatch } from "react-redux";
import { addCommentThunk } from "../../store/modules/user/thunks";

const Button = (phrase) => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(addCommentThunk(phrase))}>Send</button>
  );
};

export default Button;
