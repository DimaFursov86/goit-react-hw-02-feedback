import React from "react";
import s from "../FeedbackOptions/FeedbackOptions.module.css";
const FeedbackOptions = ({ onIncrement }) => (
  <div className={s.buttonBox}>
    <button className={s.buttons} type="button" onClick={onIncrement}>
      Good
    </button>
    <button className={s.buttons} type="button" onClick={onIncrement}>
      Neutral
    </button>
    <button className={s.buttons} type="button" onClick={onIncrement}>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
