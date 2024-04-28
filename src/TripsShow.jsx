/* eslint-disable react/prop-types */
export function TripsShow(props) {
  return (
    <div>
      <h1>
        <i>Places to Go, Things to See...</i>
      </h1>
      {props.trip.places.map((place) => (
        <div key={place.id}>
          <h2>{place.name}</h2>
          <img height="200" src={place.image_url} alt="" />
          <p>{place.description}</p>
        </div>
      ))}
    </div>
  );
}
