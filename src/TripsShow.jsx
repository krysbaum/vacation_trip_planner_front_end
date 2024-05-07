import { PlacesNew } from "./PlacesNew";
import axios from "axios";
import { useState } from "react";

/* eslint-disable react/prop-types */
export function TripsShow(props) {
  const [isPlaceCreationShowVisible, setIsPlaceCreationShowVisible] = useState(false);
  const [updatePlaceId, setUpdatePlaceId] = useState(null);

  const handleCreatePlace = (params) => {
    console.log("handleCreatePlace", params);
    axios.post("http://localhost:3000/places.json", params).then((response) => {
      console.log("handleCreatePlaceComplete", response);
      window.location.href = "/";
    });
  };

  const handleUpdatePlace = (id, params, successCallback) => {
    console.log("handleUpdatePlace", params);
    axios.patch(`http://localhost:3000/places/${id}.json`, params).then((response) => {
      setPlace(
        places.map((photo) => {
          if (photo.id === response.data.id) {
            return response.data;
          } else {
            return photo;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  return (
    <div className="container">
      {isPlaceCreationShowVisible ? null : (
        <div className="row">
          <h1>
            <i>Places to Go, Things to See...</i>
          </h1>
          <button onClick={() => setIsPlaceCreationShowVisible(true)}>Add New Place</button>
          {props.trip.places.map((place) => (
            <div className="col" key={place.id}>
              <br></br>
              <h2>{place.name}</h2>
              <br></br>
              <img id="img-places" src={place.image_url} alt="" />
              <p>{place.description}</p>
              <br></br>
              {place.id === updatePlaceId ? (
                <div>
                  <div>
                    <form>
                      <div>
                        Name: <input defaultValue={place.name} name="name" type="text"></input>
                      </div>
                      <div>
                        Image: <input defaultValue={place.image_url} name="image_url" type="text" />
                      </div>
                      <div>
                        Description: <input defaultValue={place.description} name="description" type="text" />
                      </div>
                      <button type="submit">Update!</button>
                    </form>
                  </div>
                  <button onClick={() => setUpdatePlaceId(null)} className="btn btn-link text-muted">
                    Clicked!
                  </button>
                </div>
              ) : (
                <button onClick={() => setUpdatePlaceId(place.id)} className="btn btn-link text-muted">
                  <i>Edit {place.name}</i>
                </button>
              )}
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
