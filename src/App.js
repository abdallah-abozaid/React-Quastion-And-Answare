import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [Questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Quastion and Answare About Login</h3>
        <section className="info">
          {Questions.map((q) => (
            <SingleQuestion key={q.id} title={q.title} info={q.info} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
