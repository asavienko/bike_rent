import React, { useState } from "react";
import { StyledForm, StyledItemWrapper } from "./CreateRentForm.styles";
import { StyledButton } from "../../styles/index.styles";
import { toFloatNumber } from "../../utiles";

const CreateRentForm = ({ onBikeCreate }) => {
  const [bikeName, setBikeName] = useState("");
  const [selectedType, setSelectedType] = useState("Mountain");
  const [price, setPrice] = useState(toFloatNumber(0)); //the reason of using toFloatNumber is to visualize default float number in input

  const onNameChanged = e => setBikeName(e.target.value);
  const onTypeChanged = e => setSelectedType(e.target.value);
  const onInputPriceBlur = e => setPrice(toFloatNumber(e.target.value));
  const onPriceChange = e => setPrice(e.target.value);
  const onFormSubmit = e => {
    e.preventDefault();
    onBikeCreate({
      name: bikeName,
      type: selectedType,
      pricePerHour: price,
      takenDate: new Date(),
      available: true
    });
  };

  return (
    <>
      <h3>
        <span role="img" aria-label="dollar">
          🤑
        </span>
        Create new rent
      </h3>
      <StyledForm onSubmit={onFormSubmit}>
        <StyledItemWrapper customWidth="30%">
          <label htmlFor="bikeName">Bike name</label>
          <input
            type="text"
            name="bikeName"
            required
            onChange={onNameChanged}
            value={bikeName}
          />
        </StyledItemWrapper>
        <StyledItemWrapper customWidth="30%">
          <label htmlFor="type">Bike type</label>
          <select name="type" value={selectedType} onChange={onTypeChanged}>
            <option value="Mountain">Mountain</option>
            <option value="Road">Road</option>
            <option value="City">City</option>
            <option value="Custom">Custom</option>
          </select>
        </StyledItemWrapper>
        <StyledItemWrapper customWidth="12%">
          <label htmlFor="price">Rent Price</label>
          <input
            type="number"
            name="price"
            step="0.01"
            min="0.01"
            onBlur={onInputPriceBlur}
            onChange={onPriceChange}
            value={price}
            required
          />
        </StyledItemWrapper>
        <StyledItemWrapper>
          <StyledButton type="submit" buttonColor="green">
            Submit rent
          </StyledButton>
        </StyledItemWrapper>
      </StyledForm>
    </>
  );
};

export default CreateRentForm;
