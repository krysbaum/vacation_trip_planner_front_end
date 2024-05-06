import { PlacesNew } from "./PlacesNew";
import axios from "axios";
import { useState } from "react";

/* eslint-disable react/prop-types */
export function TripsShow(props) {
  const [isPlaceCreationShowVisible, setIsPlaceCreationShowVisible] = useState(false);
  const handleCreatePlace = (params) => {
    console.log("handleCreatePlace", params);
    axios.post("http://localhost:3000/places.json", params).then((response) => {
      console.log("handleCreatePlaceComplete", response);
      // TO DO: UPDATE PLACES WITHIN MODAL
      window.location.href = "/";
    });
  };

  return (
    <div className="container">
      {isPlaceCreationShowVisible ? null : (
        <div>
          <h1>
            <i>Places to Go, Things to See...</i>
          </h1>
          <button onClick={() => setIsPlaceCreationShowVisible(true)}>Add New Place</button>
          {props.trip.places.map((place) => (
            <div key={place.id}>
              <h2>{place.name}</h2>
              <img height="200" src={place.image_url} alt="" />
              <p>{place.description}</p>
            </div>
          ))}
        </div>
      )}

      {isPlaceCreationShowVisible ? (
        <div>
          <PlacesNew onCreatePlace={handleCreatePlace} trip={props.trip} />
          <button onClick={() => setIsPlaceCreationShowVisible(false)}>Cancel</button>
        </div>
      ) : null}
    </div>
  );
}
