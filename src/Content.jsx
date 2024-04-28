import axios from "axios";
import { useState, useEffect } from "react";
import { TripsIndex } from "./TripsIndex";
import { TripsNew } from "./TripsNew";
import { Modal } from "./Modal";
import { TripsShow } from "./TripsShow";

export function Content() {
  const [trips, setTrips] = useState([]);
  // const [places, setPlaces] = useState([]);
  const [isTripsShowVisible, setIsTripsShowVisible] = useState(false);
  const [currentTrip, setCurrentTrip] = useState({});

  const handleIndexTrips = () => {
    console.log("handleIndexTrips");
    axios.get("http://localhost:3000/trips.json").then((response) => {
      console.log(response.data);
      setTrips(response.data);
    });
  };

  // const handleIndexPlaces = () => {
  //   console.log("handleIndexPlaces");
  //   axios.get("http://localhost:3000/places.json").then((response) => {
  //     console.log(response.data);
  //     setPlaces(response.data);
  //   });
  // };

  const handleCreateTrip = (params, successCallback) => {
    console.log("handleCreateTrip", params);
    axios.post("http://localhost:3000/trips.json", params).then((response) => {
      setTrips([...trips, response.data]);
      successCallback();
    });
  };

  const handleShowTrip = (trip) => {
    console.log("handleShowTrip", trip);
    setIsTripsShowVisible(true);
    setCurrentTrip(trip);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsTripsShowVisible(false);
  };

  useEffect(handleIndexTrips, []);
  // useEffect(handleIndexPlaces, []);

  return (
    <main>
      <div>
        <h1>Your Trip Starts Here</h1>
        <TripsNew onCreateTrip={handleCreateTrip} />
        <TripsIndex trips={trips} onShowTrip={handleShowTrip} />
        <Modal show={isTripsShowVisible} onClose={handleClose}>
          <TripsShow trip={currentTrip} />
        </Modal>
      </div>
    </main>
  );
}
