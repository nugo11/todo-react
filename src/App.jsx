import { useState, useEffect } from "react";
import "./App.css";
import Headeri from "./Components/Header.jsx";
import Container from "./Components/Container.jsx";

function App() {
  const [mode, setMode] = useState("light-mode");
  const [headStyle, setHeadStyle] = useState("light-header");
  const [img_src, setImgsrc] = useState(
    "https://todo-nine-sandy-26.vercel.app/img/moon.svg"
  );

  useEffect(() => {
    if (window.location.hash === "#light") {
      setMode("light-mode");
      setHeadStyle("light-header");
      setImgsrc("https://todo-nine-sandy-26.vercel.app/img/moon.svg");
    } else if (window.location.hash === "#dark") {
      setMode("dark-mode");
      setHeadStyle("dark-header");
      setImgsrc("https://todo-nine-sandy-26.vercel.app/img/sun.svg");
    }
  }, []);

  const toggleMode = () => {
    if (mode === "light-mode") {
      setMode("dark-mode");
      setHeadStyle("dark-header");
      setImgsrc("https://todo-nine-sandy-26.vercel.app/img/sun.svg");
      window.location.hash = "dark";
    } else {
      setMode("light-mode");
      setHeadStyle("light-header");
      setImgsrc("https://todo-nine-sandy-26.vercel.app/img/moon.svg");
      window.location.hash = "light";
    }

  };

  const [push, setPush] = useState("");
  const [count, setCount] = useState(localStorage.length);
  const [getLoc, setgetLoc] = useState(Object.keys(localStorage));

  const pushStorage = (e) => {
    if (e.key === "Enter") {
      localStorage.setItem(push, push);
      location.reload();
    }
  };

  const handleDelete = (key) => {
    localStorage.removeItem(key);
    setgetLoc(getLoc.filter((item) => item !== key));
    location.reload();
  };

  const [selectedKey, setSelectedKey] = useState(null);

  const SetLine = (key) => {
    setSelectedKey(key);
  };

  return (
    <>
      <main className={mode}>
        <Headeri className={headStyle} />
        <Container
          onclick={toggleMode}
          imgSrc={img_src}
          value={push}
          enter={pushStorage}
          change={(e) => setPush(e.target.value)}
          list={getLoc.map((key) => (
            <li key={key}>
              <ul onClick={() => SetLine(key)}>
                <span
                  className="round"
                  id={selectedKey === key ? "avtive" : "none"}
                ></span>
                <span className={selectedKey === key ? "line-through" : "none"}>
                  {localStorage.getItem(key)}
                </span>
              </ul>
              <span onClick={() => handleDelete(key)}>X</span>
            </li>
          ))}
          countNum={count}
        />
      </main>
    </>
  );
}

export default App;
