import React, { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";

import { AboutPageLazy, MainPageLazy } from "./pages";
import { useTheme } from "./hooks";
import { classNames } from "./helpers";

import "./styles/index.scss";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  //className={classNames("app", { hovered: true, selected: false }, [theme])}
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageLazy />} />
          <Route path="/about" element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};
