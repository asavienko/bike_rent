import { toFloatNumber } from "../../../utiles";
import React from "react";
import { StyledCrossedSpan } from "./SpanWithSales.styles";

const SpanWithSale = ({ discountPrice, price }) =>
  discountPrice ? (
    <>
      <StyledCrossedSpan>${toFloatNumber(price)}</StyledCrossedSpan>
      <span> / ${toFloatNumber(discountPrice)}</span>
    </>
  ) : (
    <span>${toFloatNumber(price)}</span>
  );

export default SpanWithSale;
