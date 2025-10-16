import { useState } from "react";
import "./App.css";

function ProgressTracker() {
  const [topics, setTopics] = useState([
    { name: "Arrays", done: true },
    { name: "Strings", done: true },
    { name: "Recursion", done: false },
    { name: "Sorting", done: false },
    { name: "Linked Lists", done: false },
  ]);

  const toggleDone = (index) => {
    const newTopics = [...topics];
    newTopics[index].done = !newTopics[index].done;
    setTopics(newTopics);
  };

  return (
    <div className="progress">
      <h2>📊 DSA Progress Tracker</h2>
      <ul>
        {topics.map((topic, index) => (
          <li
            key={index}
            onClick={() => toggleDone(index)}
            style={{
              textDecoration: topic.done ? "line-through" : "none",
              color: topic.done ? "green" : "black",
              cursor: "pointer",
            }}
          >
            {topic.name} {topic.done ? "✅" : "🕓"}
          </li>
        ))}
      </ul>
      <p>Click a topic to mark it as complete!</p>
    </div>
  );
}

export default ProgressTracker;
