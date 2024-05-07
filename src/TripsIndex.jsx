/* eslint-disable react/prop-types */
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export function TripsIndex(props) {
  return (
    <div className="container">
      {localStorage.getItem("jwt") ? (
        <div>
          <br></br>
          <h2>All Trips</h2>
          <div className="row row-cols-auto">
            {props.trips.map((trip) => (
              <div className="col" key={trip.id}>
                <br></br>
                <h2>{trip.title}</h2>
                <img id="image-covers" height="250" src={trip.image_url} />
                <br></br>
                <button onClick={() => props.onShowTrip(trip)}>Places</button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="container">
          <br></br>
          <h3>
            <i>Log in or Sign Up to View Trips</i>
          </h3>
        </div>
      )}
    </div>
  );
}

// export function TripsIndex(props) {
//   return (
//     <div className="container">
//       <h1>All Trips</h1>
//       <Carousel>
//         {props.trips.map((trip) => (
//           <Carousel.Item key={trip.id}>
//             <img id="trip-img" className="d-block img-thumbnail" src={trip.image_url} alt={trip.title} />
//             <Carousel.Caption>
//               <div id="trip-caption" className="p-3 mb-2 bg-dark text-white">
//                 <text>{trip.title}</text>
//               </div>
//               <p>
//                 <button onClick={() => props.onShowTrip(trip)}>More Info</button>
//               </p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </div>
//   );
// }

// 1. CAROUSEL SHOULD BE LOG IN SCREEN
// 2. TO DO: UPDATE --> TRIPS SHOULD BE A DROP DOWN TO SELECT - NAVIGATE TO SEPARATE PAGE ?? OR MODULE IN A MODULE
// 3. TO DO: ADD ABILITY TO CRUD PLACES WITHIN TRIPS
