/* eslint-disable react/prop-types */
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

export function TripsIndex(props) {
  return (
    <div className="container">
      <h1>All Trips</h1>
      <Carousel>
        {props.trips.map((trip) => (
          <Carousel.Item key={trip.id}>
            <img id="trip-img" className="d-block img-thumbnail" src={trip.image_url} alt={trip.title} />
            <Carousel.Caption>
              <div id="trip-caption" className="p-3 mb-2 bg-dark text-white">
                <text>{trip.title}</text>
              </div>
              <p>
                <button onClick={() => props.onShowTrip(trip)}>More Info</button>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

{
  /* <div class="carousel-inner">
        <div class="carousel-item active">
          <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="50%" height="70%" fill="#777"></rect><text x="25%" y="50%" fill="#555" dy=".3em">First slide</text></svg>
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div> */
}

// 1. CAROUSEL SHOULD BE LOG IN SCREEN
// 2. TO DO: UPDATE --> TRIPS SHOULD BE A DROP DOWN TO SELECT - NAVIGATE TO SEPARATE PAGE ?? OR MODULE IN A MODULE
// 3. TO DO: ADD ABILITY TO CRUD PLACES WITHIN TRIPS
