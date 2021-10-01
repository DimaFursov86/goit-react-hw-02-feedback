import React from "react";
import s from "../FeedbackOptions/FeedbackOptions.module.css";
const FeedbackOptions = ({ options }) => (
  <div className={s.buttonBox}>
    <button className={s.buttons} type="button" onClick={options[0]}>
      Good
    </button>
    <button className={s.buttons} type="button" onClick={options[1]}>
      Neutral
    </button>
    <button className={s.buttons} type="button" onClick={options[2]}>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
