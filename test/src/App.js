import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Welcome from "./Welcome";
import Clock from "./chapter03/Clock";
import Comment from "./chapter03/Comment";
import CommentList from "./chapter03/CommentList";

function App() {
  return (
    <div className="App">
      <CommentList />
      <Welcome name="홍길동" />
      <Welcome name="이순신" />
      <Welcome name="강감찬" />
      <Clock />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
