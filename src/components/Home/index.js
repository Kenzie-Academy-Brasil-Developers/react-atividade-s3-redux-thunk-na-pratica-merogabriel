import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../Button";

const Home = () => {
  const [phrase, setPhrase] = useState("");
  const user = useSelector((store) => store.user.name);
  const comments = useSelector((store) => store.user.comments);

  return (
    <div>
      <span>{user}</span>
      <input
        placeholder="Make a comment"
        onChange={(e) => setPhrase(e.target.value)}
      />
      <Button phrase={phrase} />
      <ul>
        {comments.map((e, i) => (
          <li key={i}>{e.phrase}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
