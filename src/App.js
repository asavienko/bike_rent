import React, { useEffect, useState } from "react";
import CreateRentForm from "./components/CreateRentForm/CreateRentForm";
import { StyledApp } from "./App.styles";
import Rents from "./components/Rents/Rents";

const dataFromServer = [
  {
    id: 1233123,
    name: "SuperFasts",
    type: "Custom",
    pricePerHour: 10,
    available: false,
    takenDate: new Date(2020, 3, 9, 17, 45)
  },
  {
    id: 12341231,
    name: "SuperFasts1",
    type: "Custom",
    pricePerHour: 90,
    available: false,
    takenDate: new Date(2020, 3, 9, 17, 45)
  },
  {
    id: 12351232,
    name: "SuperFasts2",
    type: "Custom",
    pricePerHour: 90,
    available: false,
    takenDate: new Date(2020, 3, 9, 17, 45)
  },
  {
    id: 12316233,
    name: "SuperFasts2",
    type: "Custom",
    pricePerHour: 90,
    available: true,
    takenDate: new Date(2020, 3, 9, 17, 45)
  },
  {
    id: 12317234,
    name: "SuperFasts2",
    type: "Custom",
    pricePerHour: 90,
    available: true,
    takenDate: new Date(2020, 3, 9, 17, 45)
  }
];

const generateId = () => Math.ceil(Math.random() * 10 * Math.pow(10, 6)); //todo generate in backend side

const App = () => {
  const [availableBikes, setAvailableBikes] = useState([]);
  const [rentedBikes, setRentedBikes] = useState([]);

  useEffect(() => {
    Promise.resolve(dataFromServer).then(dataFromServer => {
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
  }, []);

  const onBikeCreate = bikeObj => {
    bikeObj.id = generateId(); // todo the same as above
    setAvailableBikes([...availableBikes, bikeObj]);
  };

  const onCancelRent = bike => {
    const filteredBikes = rentedBikes.filter(item => item.id !== bike.id);
    setAvailableBikes([...availableBikes, bike]);
    setRentedBikes(filteredBikes);
  };
  const onDeleteBike = id => {
    const filteredBikes = availableBikes.filter(item => item.id !== id);
    setAvailableBikes(filteredBikes);
  };
  const onRent = bike => {
    const filteredBikes = availableBikes.filter(item => item.id !== bike.id);
    bike.takenDate = new Date();
    setAvailableBikes(filteredBikes);
    setRentedBikes([...rentedBikes, bike]);
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
