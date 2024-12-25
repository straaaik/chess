import React from "react";
import MyButton from "./UI/Button/MyButton";

export default function GameSettings({ start }) {
  return (
    <div className="settings">
      <MyButton onClick={start}>Начать игру</MyButton>
    </div>
  );
}
