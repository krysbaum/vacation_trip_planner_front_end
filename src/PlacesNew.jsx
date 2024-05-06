/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
export function PlacesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePlace(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Place</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="trip_id" type="hidden" value={props.trip.id} />
        </div>
        <div>
          Address: <input name="address" type="text" />
        </div>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
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
        <button type="submit">Add to Trip</button>
      </form>
    </div>
  );
}
