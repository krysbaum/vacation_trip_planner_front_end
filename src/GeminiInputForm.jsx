/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

export function GeminiInputForm() {
  const [text, setText] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleClick();
    console.log(text);
    try {
      const response = await fetch("/plan.json", {
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
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  };

  return (
    <div className="container">
      {localStorage.getItem("jwt") ? (
        <div>
          <br></br>
          <h3>AI Trip Planner</h3>
          <div>
            <form onSubmit={handleSubmit}>
              <label>
                Enter Destination:
                <input id="gemini-form" type="text" value={text} onChange={(e) => setText(e.target.value)} />
              </label>
              {loading ? (
                <button type="button" disabled>
                  <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                  Loading...
                </button>
              ) : (
                <button type="submit">Submit</button>
              )}
            </form>
            {response && (
              <div id="gemini">
                <div>
                  {response.map((response) => (
                    <div key={response.name}>
                      <div>
                        <h2>{response.name}</h2>
                        <p>{response.description}</p>
                        {/* <img src={response.img_url} alt={response.name} />
                    <p>{response.address}</p> */}
                        <hr />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
