import "./styles.css";
import Button from "../Button/Button";
import { useState } from "react";

function Feedback() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const onLikeClick = () => {
    setLikes((prevValue) => prevValue + 1);
  };

  const onDislikesClick = () => {
    setDislikes((prevValue) => prevValue + 1);
  };

  const onResetClick = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className="feedback-container">
      <div className="button-wrapper">
        <Button name="Like" onClick={onLikeClick} />
      </div>
      <div className="result">{likes}</div>
      <div className="result">{dislikes}</div>
      <div className="button-wrapper">
        <Button name="Dislike" onClick={onDislikesClick} />
      </div>
      <div className="button-wrapper">
        <Button name="Reset Result" onClick={onResetClick} />
      </div>
    </div>
  );
}

export default Feedback;
