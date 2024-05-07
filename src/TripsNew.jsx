/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";

export function TripsNew(props) {
  const [isCreateTripsClicked, setisCreateTripsClicked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateTrip(params, () => event.target.reset());
  };

  return (
    <div className="container">
      {localStorage.getItem("jwt") ? (
        <div>
          {isCreateTripsClicked ? (
            <div>
              <div>
                <br></br>
                <h2>New Trip</h2>
                <form onSubmit={handleSubmit}>
                  <div>
                    Title: <input name="title" type="text" />
                  </div>
                  <div>
                    Image: <input name="image_url" type="text" />
                  </div>
                  <div>
                    Start: <input name="start_time" type="datetime" />
                  </div>
                  <div>
                    End: <input name="end_time" type="datetime" />
                  </div>
                  <br></br>
                  <button type="submit">Let's Plan!</button>
                  <button onClick={() => setisCreateTripsClicked(false)}>Cancel</button>
                </form>
              </div>
            </div>
          ) : (
            <div>
              <button onClick={() => setisCreateTripsClicked(true)}>New Trip</button>
              <br></br>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
