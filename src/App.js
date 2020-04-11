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

const generateId = () => Math.ceil(Math.random() * 10 * Math.pow(10, 6));

const App = () => {
  const [arrOfBikes, setArrOfBikes] = useState([]);

  useEffect(() => {
    if (!arrOfBikes.length) {
      Promise.resolve(dataFromServer).then(arrOfBikesWithPrice =>
        setArrOfBikes(arrOfBikesWithPrice)
      );
    }
  }, [arrOfBikes]);

  const onFormSubmit = bikeObj => {
    bikeObj.id = generateId();
    setArrOfBikes([...arrOfBikes, bikeObj]);
  };

  const onCancelRent = id => {
    const changeList = arrOfBikes.map(bike => {
      if (bike.id === id) {
        bike.available = true;
      }
      return bike;
    });
    setArrOfBikes(changeList);
  };
  const onDeleteBike = id => {};
  const onRent = id => {
    /* const changeList = arrOfBikes.map(bike =>
      bike.id === id ? (bike.available = false) : bike
    );
    setArrOfBikes(changeList);*/
  };

  return (
    <StyledApp>
      <h1>Awesome Bike Rental</h1>
      <CreateRentForm onFormSubmit={onFormSubmit} />
      <Rents
        arrOfBikes={arrOfBikes}
        onCancelRent={onCancelRent}
        onDeleteBike={onDeleteBike}
        onRent={onRent}
      />
    </StyledApp>
  );
};

export default App;
