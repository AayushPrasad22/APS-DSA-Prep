import { useState } from "react";
import "./App.css";

const roadmapData = [
  {
    topic: "Arrays",
    subtopics: ["Basics", "Sorting", "Two Pointer Approach", "Sliding Window"],
  },
  {
    topic: "Strings",
    subtopics: ["String Basics", "Palindrome", "Pattern Matching"],
  },
  {
    topic: "Linked List",
    subtopics: ["Singly Linked List", "Doubly Linked List", "Cycle Detection"],
  },
];

function App() {
  const [expanded, setExpanded] = useState({});
  const [completed, setCompleted] = useState({});

  const toggleTopic = (topic) => {
    setExpanded((prev) => ({ ...prev, [topic]: !prev[topic] }));
  };

  const toggleSubtopic = (topic, subtopic) => {
    const key = `${topic}-${subtopic}`;
    setCompleted((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="app-container">
      <h1>🚀 APS DSA Roadmap Tracker</h1>
      <p>Track your daily progress in the Striver A2Z DSA Course!</p>

      {roadmapData.map(({ topic, subtopics }) => (
        <div key={topic} className="topic-card">
          <div className="topic-header" onClick={() => toggleTopic(topic)}>
            <h2>{topic}</h2>
            <span>{expanded[topic] ? "▲" : "▼"}</span>
          </div>

          {expanded[topic] && (
            <ul className="subtopic-list">
              {subtopics.map((sub) => {
                const key = `${topic}-${sub}`;
                return (
                  <li key={sub} className="subtopic-item">
                    <label>
                      <input
                        type="checkbox"
                        checked={completed[key] || false}
                        onChange={() => toggleSubtopic(topic, sub)}
                      />
                      {sub}
                    </label>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
