import data from "./data";
import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [paragraphs, setParagraphs] = useState([]);

  const handleChange = (e) => {
    if (e.target.value < 0) setNumber(0);
    else if (e.target.value > 8) setNumber(8);
    else setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const paragraphs = [];
    for (let i = 0; i < number; i++) {
      paragraphs.push(data[i]);
    }

    setParagraphs(paragraphs);
  };
  return (
    <>
      <section className="section-center">
        <h3>tired of boring lorem ipsum?</h3>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="amount">paragrahs:</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={number}
            onChange={handleChange}
          />
          <button className="btn">generate</button>
        </form>
        <article className="lorem-text">
          {paragraphs.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </article>
      </section>
    </>
  );
}

export default App;
