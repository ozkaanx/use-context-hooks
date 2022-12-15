import React from "react";
import { useContentState, useContenttAPI } from "../context";
import "./styles.css";

const App = () => {
  const { darkMode } = useContentState();
  const { changeThema } = useContenttAPI();

  // const {} = useContenttAPI();
  return (
    <div
      className="section"
      style={{ background: darkMode ? "#196dfc" : "#292929" }}
    >
      <button onClick={() => changeThema(!darkMode)}>Change Background</button>
    </div>
  );
};

export default App;
