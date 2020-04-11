import React, { useEffect, useState } from "react";
import { StyledItem } from "./Rents.styles";
import { StyledButton } from "../../styles/index.styles";
import { calculatePrice, toFloatNumber } from "../../utiles";
import Modal from "./Modal/Modal";

const Rents = ({
  rentedBikes,
  availableBikes,
  onCancelRent,
  onDeleteBike,
  onRent
}) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (rentedBikes.length) {
      const countedPrice = rentedBikes.reduce(
        (acc, bike) =>
          acc +
          calculatePrice({
            takenDate: bike.takenDate,
            pricePerHour: bike.pricePerHour
          }),
        0
      );
      return setTotalPrice(toFloatNumber(countedPrice));
    }
    setTotalPrice(0);
  }, [rentedBikes]);

  const [displayModal, setDisplayModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const onDeleteClick = bike => {
    setModalContent(bike);
    setDisplayModal(true);
  };
  const onModalClose = () => {
    setDisplayModal(false);
  };
  const onModalConfirm = () => {
    onDeleteBike(modalContent.id);
    setDisplayModal(false);
  };

  const mapRentedBikes = bike => (
    <StyledItem key={bike.id}>
      <span>
        {bike.name} / {bike.type} / $
        {toFloatNumber(
          calculatePrice({
            takenDate: bike.takenDate,
            pricePerHour: bike.pricePerHour
          })
        )}
      </span>
      <StyledButton buttonColor="red" onClick={() => onCancelRent(bike)}>
        Cancel rent
      </StyledButton>
    </StyledItem>
  );

  const mapAvailableBikes = bike => (
    <StyledItem key={bike.id}>
      <span>
        {bike.name} / {bike.type} / ${bike.pricePerHour}
      </span>
      <div>
        <StyledButton buttonColor="blue" onClick={() => onRent(bike)}>
          Rent
        </StyledButton>
        <StyledButton
          buttonColor="red"
          onClick={() => {
            onDeleteClick(bike);
          }}
        >
          Delete
        </StyledButton>
      </div>
    </StyledItem>
  );

  return (
    <>
      <div>
        <h3>
          <span role="img" aria-label="stars">
            🤩
          </span>
          Your rent (Total: ${totalPrice})
        </h3>
        {rentedBikes.map(mapRentedBikes)}
        <h3>
          <span role="img" aria-label="bicycle">
            🚲
          </span>
          Available bicycles ({availableBikes.length})
        </h3>
        {availableBikes.map(mapAvailableBikes)}
      </div>
      <Modal
        display={displayModal}
        title="Confirm Delete"
        content={`${modalContent.name} / ${modalContent.type} / $${
          modalContent.pricePerHour
        }`}
        onClose={onModalClose}
        onSubmit={onModalConfirm}
      />
    </>
  );
};

export default Rents;
