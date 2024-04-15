import style from "./messages.module.css";
import Room from "@/app/(afterLogin)/messages/_component/room";

export default function Message() {
  return (
    <main className={style.main}>
      <div className={style.header}>
        <h3>쪽지</h3>
      </div>
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
    </main>
  );
}
