import { PlacesNew } from "./PlacesNew";
import axios from "axios";
import { useState } from "react";

/* eslint-disable react/prop-types */
export function TripsShow(props) {
  const [isPlaceCreationShowVisible, setIsPlaceCreationShowVisible] = useState(false);
  const [updatePlaceId, setUpdatePlaceId] = useState(null);
  const [isUpdateTripClicked, setUpdateTrip] = useState(false);
  // const [places, setPlaces] = useState({});

  const handleTripSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateTrip(props.trip.id, params);
    event.target.reset();
  };

  const handleCreatePlace = (params) => {
    console.log("handleCreatePlace", params);
    axios.post("http://localhost:3000/places.json", params).then((response) => {
      console.log("handleCreatePlaceComplete", response);
      window.location.href = "/";
    });
  };

  const handleDestroyPlace = (id) => {
    console.log("handleDestroyPlace", id);
    axios.delete(`http://localhost:3000/places/${id}.json`).then((response) => {
      console.log(response);
      window.location.href = "/";
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    // props.onUpdatePhoto(props.photo.id, params, () => event.target.reset());
    handleUpdatePlace(updatePlaceId, params, () => (window.location.href = "/"));
  };

  const handleUpdatePlace = (id, params, successCallback) => {
    console.log("handleUpdatePlace", params);
    axios.patch(`http://localhost:3000/places/${id}.json`, params).then((response) => {
      console.log(response);
      // setPlaces(
      //   places.map((place) => {
      //     if (place.id === response.data.id) {
      //       return response.data;
      //     } else {
      //       return place;
      //     }
      //   })
      // );
      successCallback();
    });
  };

  const handleClick = () => {
    props.onDestroyTrip(props.trip.id);
    window.location.href = "/";
  };

  return (
    <div className="container">
      {isUpdateTripClicked ? null : (
        <div>
          <button className="btn btn-link text-muted" onClick={() => setUpdateTrip(true)}>
            Edit Trip
          </button>
          <button id="delete_trip" className="btn btn-link text-muted" onClick={handleClick}>
            Delete Trip
          </button>
        </div>
      )}
      {isUpdateTripClicked ? (
        <div>
          <form onSubmit={handleTripSubmit}>
            <div>
              Name: <input defaultValue={props.trip.title} name="title" type="text" />
            </div>
            <div>
              Image: <input defaultValue={props.trip.image_url} name="image_url" type="text" />
            </div>
            <div>
              Start: <input defaultValue={props.trip.start_time} name="start_time" type="text" />
            </div>
            <div>
              End: <input defaultValue={props.trip.end_time} name="end_time" type="text" />
            </div>
            <button type="submit">Update Trip</button>
          </form>
          <button className="btn btn-link text-muted" onClick={() => setUpdateTrip(false)}>
            Cancel
          </button>
        </div>
      ) : null}

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
                    <form onSubmit={handleSubmit}>
                      <div>
                        Name: <input defaultValue={place.name} name="name" type="text"></input>
                      </div>
                      <div>
                        Image: <input defaultValue={place.image_url} name="image_url" type="text" />
                      </div>
                      <div>
                        Description: <input defaultValue={place.description} name="description" type="text" />
                      </div>
                      <button onClick={() => handleUpdatePlace} type="submit">
                        Update!
                      </button>
                    </form>
                    <button onClick={() => handleDestroyPlace(place.id)} id="delete_button">
                      Delete
                    </button>
                  </div>
                  <button onClick={() => setUpdatePlaceId(null)} className="btn btn-link text-muted">
                    Cancel
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

// TO DO: update data w/out closing modal --> repurpose commented out code lines 30-38 to content
