/* eslint-disable react/prop-types */
export function PlacesIndex(props) {
  return (
    <div>
      <h1>TEST</h1>
      {props.places.map((place) => (
        <div key={place.id}>
          <h2>{place.name}</h2>
        </div>
      ))}
    </div>
  );
}
