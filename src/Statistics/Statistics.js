import s from "./Statistics.module.css";

export default function Statistics() {
  return (
    <div className={s.box}>
      <div className={s.statsBox}>
        <ul className={s.stats}>
          <li className={s.statsItem}>
            <span className={s.label}>Good</span>
            <span className={s.quantity}>0</span>
          </li>
          <li className={s.statsItem}>
            <span className={s.label}>Neutral</span>
            <span className={s.quantity}>0</span>
          </li>
          <li className={s.statsItem}>
            <span className={s.label}>Bad</span>
            <span className={s.quantity}>0</span>
          </li>
          <li className={s.statsItem}>
            <span className={s.label}>Total</span>
            <span className={s.quantity}>0</span>
          </li>
          <li className={s.statsItem}>
            <span className={s.label}>Positive feedback</span>
            <span className={s.quantity}>0</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
