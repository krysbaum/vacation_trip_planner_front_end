import axios from "axios";
import { useState, useEffect } from "react";
import { TripsIndex } from "./TripsIndex";
import { TripsNew } from "./TripsNew";
import { Modal } from "./Modal";
import { TripsShow } from "./TripsShow";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { GeminiInputForm } from "./GeminiInputForm";

export function Content() {
  const [trips, setTrips] = useState([]);
  const [isTripsShowVisible, setIsTripsShowVisible] = useState(false);
  const [currentTrip, setCurrentTrip] = useState({});

  const handleIndexTrips = () => {
    console.log("handleIndexTrips");
    axios.get("http://localhost:3000/trips.json").then((response) => {
      console.log(response.data);
      setTrips(response.data);
    });
  };

  const handleUpdateTrip = (id, params) => {
    axios.patch(`http://localhost:3000/trips/${id}.json`, params).then((response) => {
      console.log(response.data);
      setTrips(
        trips.map((trip) => {
          if (trip.id === response.data.id) {
            return response.data;
          } else {
            return trip;
          }
        })
      );
    });
  };

  const handleCreateTrip = (params, successCallback) => {
    console.log("handleCreateTrip", params);
    axios.post("http://localhost:3000/trips.json", params).then((response) => {
      setTrips([...trips, response.data]);
      successCallback();
    });
  };
  const handleDestroyTrip = (id) => {
    console.log("handleDestroyTrip", id);
    axios.delete(`http://localhost:3000/trips/${id}.json`).then((response) => {
      console.log(response);
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
        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/logout" element={<LogoutLink />} />
        </Routes>
        <h1 className="container">Your Trip Starts Here</h1>
        <TripsNew onCreateTrip={handleCreateTrip} />
        <TripsIndex trips={trips} onShowTrip={handleShowTrip} />
        <Modal show={isTripsShowVisible} onClose={handleClose}>
          <TripsShow trip={currentTrip} onUpdateTrip={handleUpdateTrip} onDestroyTrip={handleDestroyTrip} />
        </Modal>
        <GeminiInputForm className="container" />
      </div>
    </main>
  );
}
