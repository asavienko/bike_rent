export const toFloatNumber = value => Number(value).toFixed(2);
export const calculatePrice = ({ takenDate, pricePerHour }) => {
  const hour = 3600 * 1000;
  const hoursOfRent = (new Date() - new Date(takenDate)) / hour;
  const price = hoursOfRent * pricePerHour;
  return hoursOfRent > 20
    ? { price: toFloatNumber(price), discountPrice: toFloatNumber(price / 2) }
    : { price: toFloatNumber(price) };
};
export const filterBikeUtil = function(id) {
  const currentBikeId = id;
  return item => item._id !== currentBikeId;
};

export const reduceBikePrice = (
  { price: currentPrice, discountPrice: currentDiscountPrice },
  { takenDate, pricePerHour }
) => {
  const { price, discountPrice } = calculatePrice({
    takenDate,
    pricePerHour
  });
  return discountPrice
    ? {
        price: currentPrice + Number(price),
        discountPrice: currentDiscountPrice + Number(discountPrice)
      }
    : {
        price: currentPrice + Number(price),
        discountPrice: currentDiscountPrice + Number(price)
      };
};
