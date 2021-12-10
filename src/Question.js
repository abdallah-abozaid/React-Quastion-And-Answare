import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = (props) => {
  const [showb, setshowb] = useState(false);
  const showq = () => {
    setshowb((prev) => !prev);
  };
  return (
    <article className="question">
      <header>
        <h4>{props.title}</h4>
        <button className="btn" onClick={showq}>
          {showb ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {showb ? <p>{props.info}</p> : " "}
    </article>
  );
};

export default Question;
