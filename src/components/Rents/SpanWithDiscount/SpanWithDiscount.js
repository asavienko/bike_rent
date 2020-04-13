import React from "react";
import { StyledCrossedSpan } from "./SpanWithDiscount.styles";

const SpanWithDiscount = ({ discountPrice, price }) =>
  discountPrice ? (
    <>
      <StyledCrossedSpan>${price}</StyledCrossedSpan>
      <span> / ${discountPrice}</span>
    </>
  ) : (
    <span>${price}</span>
  );

export default SpanWithDiscount;
