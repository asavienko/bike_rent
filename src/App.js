import React, { useEffect, useState } from "react";
import { StyledApp } from "./App.styles";
import CreateRentForm from "./components/CreateRentForm";
import Rents from "./components/Rents";
import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest
} from "./utils/fetchUtils";
import { excludeChosenItem } from "./utils/index";

const App = () => {
  const [availableBikes, setAvailableBikes] = useState([]);
  const [rentedBikes, setRentedBikes] = useState([]);

  useEffect(() => {
    if (!availableBikes.length && !rentedBikes.length) {
      getRequest("/bike").then(dataFromServer => {
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
      .catch(e => console.error(e));
  };

  const onCancelRent = bike => {
    putRequest("/bike", { ...bike, available: true })
      .then(() => {
        const filteredBikes = rentedBikes.filter(excludeChosenItem(bike._id));
        setAvailableBikes([...availableBikes, bike]);
        setRentedBikes(filteredBikes);
      })
      .catch(e => console.error(e));
  };
  const onDeleteBike = _id => {
    deleteRequest("/bike", { _id })
      .then(() => {
        const filteredBikes = availableBikes.filter(excludeChosenItem(_id));
        setAvailableBikes(filteredBikes);
      })
      .catch(e => console.error(e));
  };
  const onRent = bike => {
    putRequest("/bike", { ...bike, available: false })
      .then(bikeFromResponse => {
        const filteredBikes = availableBikes.filter(
          excludeChosenItem(bike._id)
        );
        setAvailableBikes(filteredBikes);
        setRentedBikes([...rentedBikes, bikeFromResponse]);
      })
      .catch(e => console.error(e));
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
