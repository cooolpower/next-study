"use client";

import { useState } from "react";
import style from "./modaltest.module.css";

export default function ModalTest() {
  const [active, setActive] = useState(false);

  const onClickLayerToggle = () => {
    setActive((prev) => !prev);
  };
  return (
    <>
      <button onClick={onClickLayerToggle}>버튼</button>
      <div
        className={
          active ? `${style.layerBox} ${style.active}` : `${style.layerBox}`
        }
      >
        레이어 박스 Toggle
      </div>
    </>
  );
}
