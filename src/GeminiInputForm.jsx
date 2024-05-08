/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

export function GeminiInputForm() {
  const [text, setText] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(text);
    try {
      const response = await fetch("http://localhost:3000/plan.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });
      const data = await response.json();
      setResponse(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div id="gemini">
      <form onSubmit={handleSubmit}>
        <label>
          Give me a city and I'll give you places:
          <input id="gemini-form" type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
