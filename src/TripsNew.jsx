/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
export function TripsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateTrip(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Trip</h1>
      <form onSubmit={handleSubmit}>
        <div>
          User_id: <input name="user_id" type="integer" />
        </div>
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
        <button type="submit">Let's Plan!</button>
      </form>
    </div>
  );
}
