import React, { useEffect, useState } from "react";
import { StyledItem } from "./Rents.styles";
import { StyledButton } from "../../styles/index.styles";
import { calculatePrice, reduceBikePrice, toFloatNumber } from "../../utils";
import Modal from "./Modal";
import SpanWithDiscount from "./SpanWithDiscount";

const Rents = ({
  rentedBikes,
  availableBikes,
  onCancelRent,
  onDeleteBike,
  onRent
}) => {
  const [totalPrice, setTotalPrice] = useState("");
  const [totalDiscountPrice, setTotalDiscountPrice] = useState("");
  const [debounceCounter, setDebounceCounter] = useState(0);

  useEffect(() => {}, [debounceCounter, rentedBikes.length]);

  useEffect(() => {
    if (rentedBikes.length) {
      const { price, discountPrice } = rentedBikes.reduce(reduceBikePrice, {
        price: 0,
        discountPrice: 0
      });
      setTotalPrice(toFloatNumber(price));
      setTotalDiscountPrice(toFloatNumber(discountPrice));

      const timeout = setInterval(
        () => setDebounceCounter(debounceCounter + 1),
        500
      );
      return () => {
        clearTimeout(timeout);
      };
    }
    setTotalPrice("0");
  }, [rentedBikes, debounceCounter]);

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
    onDeleteBike(modalContent._id);
    setDisplayModal(false);
  };

  const mapRentedBikes = bike => {
    const { price, discountPrice } = calculatePrice({
      takenDate: bike.takenDate,
      pricePerHour: bike.pricePerHour
    });

    return (
      <StyledItem key={bike._id}>
        <span>
          {`${bike.name} / ${bike.type} / `}
          <SpanWithDiscount discountPrice={discountPrice} price={price} />
        </span>
        <StyledButton buttonColor="red" onClick={() => onCancelRent(bike)}>
          Cancel rent
        </StyledButton>
      </StyledItem>
    );
  };
  const mapAvailableBikes = bike => (
    <StyledItem key={bike._id}>
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
          {`Your rent (Total: `}
          <SpanWithDiscount
            discountPrice={totalDiscountPrice}
            price={totalPrice}
          />
          )
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
