import s from "../Section/Section.module.css";
export default function Section({ children }) {
  return (
    <div className={s.section}>
      <h1>Please leave feedback</h1>
      {children}
    </div>
  );
}
