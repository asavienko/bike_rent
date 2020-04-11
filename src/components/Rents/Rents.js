import React from "react";
import { StyledItem } from "./Rents.styles";
import { StyledButton } from "../../styles/index.styles";

const Rents = ({ arrOfBikes, onCancelRent, onDeleteBike, onRent }) => {
  const mapRentedBikes = ({
    name,
    type,
    takenDate,
    pricePerHour,
    available,
    id
  }) =>
    !available && (
      <StyledItem key={id}>
        <span>
          {name} / {type} / $
          {(((new Date() - takenDate) * pricePerHour) / (3600 * 1000)).toFixed(
            2
          )}
        </span>
        <StyledButton
          buttonColor={"red"}
          onClick={e => {
            e.preventDefault();
            return onCancelRent(id);
          }}
        >
          Cancel rent
        </StyledButton>
      </StyledItem>
    );

  const mapAvailableBikes = ({ name, type, available, id, pricePerHour }) =>
    available && (
      <StyledItem key={id}>
        <span>
          {name} / {type} / ${pricePerHour}
        </span>
        <div>
          <StyledButton buttonColor={"blue"} ocClick={onRent}>
            Rent
          </StyledButton>
          <StyledButton
            buttonColor={"red"}
            onClick={() => {
              onDeleteBike(id);
            }}
          >
            Delete
          </StyledButton>
        </div>
      </StyledItem>
    );

  return (
    <div>
      <h3>
        <span role={"img"} aria-label={"stars"}>
          🤩
        </span>
        Your rent
      </h3>
      {arrOfBikes.map(mapRentedBikes)}
      <h3>
        <span role={"img"} aria-label={"bicycle"}>
          🚲
        </span>
        Available bicycles
      </h3>
      {arrOfBikes.map(mapAvailableBikes)}
    </div>
  );
};

export default Rents;
