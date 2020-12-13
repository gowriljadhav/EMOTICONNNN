import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😂": "Face with tears of joy",
  "😭": "Loudly  crying face",
  "🥺": "Pleading face",
  "🤣": "Rolling on the floor laughing",
  "❤️": "Red heart",
  "✨": "Sparkles",
  "😍": "Smiling face with heart eyes",
  "🙏🏻": "Folded hands",
  "😊": "Smiling face with smiling eyes",
  "🥰": " Smiling face with hearts"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we do not have it in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div>
      <h1 className="header">The Emoticon Interpretor!</h1>

      <body>
        <p className="textpart">
          {" "}
          The word emoji means “picture word” in Japanese. The usage of emojis
          has increased drastically this pandemic.<br></br>
          <br></br> The top 10 most used emojis on Twitter in 2020 is given
          below.
          <br></br> <br></br> You can either enter the emoji in the white text
          area or click on the respective emoji, upon which you will get its
          meaning.{" "}
        </p>
      </body>
      <input
        onChange={emojiInputHandler}
        placeholder="Enter your emoji"
        style={{ padding: "1rem" }}
      />
      <h2>{meaning} </h2>
      <h3 className="headthr"> THE 10 MOST USED EMOJIS ARE: </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
      <footer className="footer">
      <br></br><strong>YOU CAN CONNECT WITH ME ON:</strong>
        <br></br>
        <br></br>
        <a className="linkfoot" href="https://github.com/gowriljadhav">
          Github
        </a>
        <br></br>
        <br></br>
        <a className="linkfoot" href="https://twitter.com/gogo_quo">
          Twitter
        </a>
        <br></br>
        <br></br>
        <a
          className="linkfoot"
          href="https://www.instagram.com/_weirdlyabstract_/"
        >
          Instagram
        </a>
        <br></br>
        <br></br>
        <a
          className="linkfoot"
          href="https://www.linkedin.com/in/gowri-l-jadhav/"
        >
          LinkedIn
        </a>
        <br></br>
        <br></br>
      </footer>
    </div>
  );
}
