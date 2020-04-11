import React, { useState } from "react";
import { StyledForm, StyledItemWrapper } from "./CreateRentForm.styles";
import { StyledButton } from "../../styles/index.styles";

const CreateRentForm = ({ onFormSubmit }) => {
  const [bikeName, setBikeName] = useState("");
  const [selectedType, setSelectedType] = useState("Mountain");
  const [price, setPrice] = useState(Number(0).toFixed(2));

  const onNameChanged = e => {
    setBikeName(e.target.value);
  };
  const onTypeChanged = e => {
    setSelectedType(e.target.value);
  };
  const onInputPriceBlur = e => {
    const value = +e.target.value;
    setPrice(value.toFixed(2));
  };

  return (
    <>
      <h3>
        <span role={"img"} aria-label={"dollar"}>
          🤑
        </span>
        Create new rent
      </h3>
      <StyledForm
        onSubmit={e => {
          e.preventDefault();
          onFormSubmit({
            name: bikeName,
            type: selectedType,
            pricePerHour: price,
            takenDate: new Date(),
            available: true
          });
        }}
      >
        <StyledItemWrapper myWidth={"30%"}>
          <label htmlFor="name">Bike name</label>
          <input
            type="text"
            name="name"
            required
            onChange={onNameChanged}
            value={bikeName}
          />
        </StyledItemWrapper>
        <StyledItemWrapper myWidth={"30%"}>
          <label htmlFor="type">Bike type</label>
          <select name="type" value={selectedType} onChange={onTypeChanged}>
            <option value={"Mountain"}>Mountain</option>
            <option value={"Road"}>Road</option>
            <option value={"City"}>City</option>
            <option value={"Custom"}>Custom</option>
          </select>
        </StyledItemWrapper>
        <StyledItemWrapper myWidth={"12%"}>
          <label htmlFor="price">Rent Price</label>
          <input
            type="number"
            name="price"
            step="0.01"
            min="0.01"
            onBlur={onInputPriceBlur}
            onChange={e => setPrice(e.target.value)}
            value={price}
            required
          />
        </StyledItemWrapper>
        <StyledItemWrapper>
          <StyledButton type="submit" buttonColor={"green"}>
            Submit rent
          </StyledButton>
        </StyledItemWrapper>
      </StyledForm>
    </>
  );
};

export default CreateRentForm;
