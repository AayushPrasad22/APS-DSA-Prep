import './App.css';

function App() {
  return (
    <div className="App">
      <h1>🚀 APS DSA Roadmap</h1>
      <p>Welcome to your learning journey! This site will guide you through mastering DSA step by step.</p>

      <div className="sections">
        <section>
          <h2>📘 Introduction</h2>
          <p>Learn the basics of Data Structures and Algorithms in an easy and structured way.</p>
        </section>

        <section>
          <h2>🧩 Roadmap</h2>
          <ul>
            <li>Step 1: Learn the Basics of C++/Java/Python</li>
            <li>Step 2: Master Arrays and Strings</li>
            <li>Step 3: Learn Recursion and Sorting</li>
            <li>Step 4: Dive into Linked Lists, Stacks, and Queues</li>
            <li>Step 5: Practice Trees, Graphs, and Dynamic Programming</li>
          </ul>
        </section>

        <section>
          <h2>🛠️ Resources</h2>
          <p>
            Follow the <a href="https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/" target="_blank">Striver’s DSA Sheet</a> to practice effectively.
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
