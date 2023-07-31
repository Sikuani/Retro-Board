import { useState } from "react";
import "./RetroTask.css";
// import adjustTextareaHeight from

const RetroItem = ({
  index,
  category,
  item,
  onDelete,
  onMove,
  onChangeText,
  onVote,
}) => {
  const [text, setText] = useState(item.text);
  const [votes, setVotes] = useState(item.votes);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    onChangeText(item.id, newText);
  };

  const handleVoteChange = (type) => {
    const newVote = votes;
    console.log(newVote);

    if (type === "up") {
      newVote.up = newVote.up + 1;
    } else {
      newVote.down = newVote.down + 1;
    }

    setVotes(newVote);
    onVote(item.id, newVote);
  };

  const colorButton = () => {
    if (category === "Went Well") {
      return "lightbrown";
    } else if (category === "To Improve") {
      return "lightSalmon";
    } else if (category === "Action Items") {
      return "lightskyblue";
    }
  };

  const handlerBlur = (e) => {
    const newText = e.target.value;
    if (newText === "") {
      alert("You must write a valid task");
      onDelete(index);
    } else {
      setText(newText);
      onChangeText(item.id, newText);
    }
  };

  return (
    <div className="retro-item">
      <textarea
        autoFocus
        // id="textarea"
        // rows="1"
        // onChange="adjustTextareaHeight()"
        // onInput="adjustTextareaHeight()"
        className={colorButton()}
        value={text}
        onChange={handleTextChange}
        onBlur={handlerBlur}
        rows="2"
      />
      <div className="'item-votes">
        <button
          className={colorButton()}
          onClick={() => handleVoteChange("up")}
        >
          {votes.up} 👍
        </button>
        <button
          className={colorButton()}
          onClick={() => handleVoteChange("down")}
        >
          {votes.down} 👎
        </button>
      </div>

      <div className="item-controls">
        <button
          className={colorButton()}
          onClick={() => onMove(category, index, "left")}
        >
          ⬅️
        </button>
        <button className={colorButton()} onClick={() => onDelete(index)}>
          ❌
        </button>
        <button
          className={colorButton()}
          onClick={() => onMove(category, index, "right")}
        >
          ➡️
        </button>
      </div>
    </div>
  );
};

export default RetroItem;
