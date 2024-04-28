/* eslint-disable react/prop-types */
export function TripsIndex(props) {
  return (
    <div>
      <h1>All Trips</h1>
      {props.trips.map((trip) => (
        <div key={trip.id}>
          <h2>{trip.title}</h2>
          <img height="250" src={trip.image_url} />
          <button onClick={() => props.onShowTrip(trip)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
