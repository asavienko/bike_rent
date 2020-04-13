import React, { useEffect, useState } from "react";
import CreateRentForm from "./components/CreateRentForm/CreateRentForm";
import { StyledApp } from "./App.styles";
import Rents from "./components/Rents/Rents";
import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest
} from "./utiles/fetchUtils";

const App = () => {
  const [availableBikes, setAvailableBikes] = useState([]);
  const [rentedBikes, setRentedBikes] = useState([]);

  useEffect(() => {
    if (!availableBikes.length && !rentedBikes.length) {
      getRequest("bike").then(dataFromServer => {
        const availableBikesFromServer = [];
        const rentedBikesFromServer = [];
        dataFromServer.forEach(({ available, ...bike }) => {
          available
            ? availableBikesFromServer.push(bike)
            : rentedBikesFromServer.push(bike);
        });
        setAvailableBikes(availableBikesFromServer);
        setRentedBikes(rentedBikesFromServer);
      });
    }
  }, [availableBikes.length, rentedBikes.length]);

  const onBikeCreate = bikeObj => {
    postRequest("/bike", bikeObj)
      .then(bikeFromResponse =>
        setAvailableBikes([...availableBikes, bikeFromResponse])
      )
      .catch(e => console.log(e));
  };

  const onCancelRent = bike => {
    putRequest("/bike", { ...bike, available: true })
      .then(response => {
        if (response !== "success") {
          throw Error(response);
        }
        const filteredBikes = rentedBikes.filter(
          item => item._id !== bike._id
        );
        setAvailableBikes([...availableBikes, bike]);
        setRentedBikes(filteredBikes);
      })
      .catch(e => console.log(e));
  };
  const onDeleteBike = _id => {
    deleteRequest("/bike", { _id })
      .then(response => {
        if (response !== "success") {
          throw new Error(response);
        }
        const filteredBikes = availableBikes.filter(
          item => item._id !== _id
        );
        setAvailableBikes(filteredBikes);
      })
      .catch(e => console.log(e));
  };
  const onRent = bike => {
    putRequest("/bike", { ...bike, available: false })
      .then(responseBike => {
        const filteredBikes = availableBikes.filter(
          item => item._id !== responseBike._id
        );
        setAvailableBikes(filteredBikes);
        setRentedBikes([...rentedBikes, bike]);
      })
      .catch(e => console.log(e));
  };

  return (
    <StyledApp>
      <h1>Awesome Bike Rental</h1>
      <CreateRentForm onBikeCreate={onBikeCreate} />
      <Rents
        availableBikes={availableBikes}
        rentedBikes={rentedBikes}
        onCancelRent={onCancelRent}
        onDeleteBike={onDeleteBike}
        onRent={onRent}
      />
    </StyledApp>
  );
};

export default App;
