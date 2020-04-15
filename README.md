##Before running 

Add .env file in root root directory

.env file should contain MONGODB_URI="YOUR_MONGODB_ACCESS_URI_HERE"

##Running application:

Starting node server npm run `npm run server`

Running development server `npm run start`


##Front-end documentation:

.style.js - extension keeps styles for styled-components

fetchUtils.js - contains fetch reusable functions  

utils/index.js - contains util functions

toFloatNumber() - changes number to string with two digits after dot( 0 => "0.00")

calculatePrice() - returns calculated price and discount price based on takenDate and pricePerHour

excludeChosenItem() - callback function for filter. Returns array without chosen Id.
   
reduceBikePrice() - generates total discount price and total price for array of bikes 


##Beck-end documentation

| Method | Path                                      |Description                                | Body                                           |
| ------ | ----------------------------------------- | ----------------------------------------- | ---------------------------------------------- |
| GET    | /bike                                     | returns list of bikes                     | none                                           |
| ------ | ----------------------------------------- | ----------------------------------------- | ---------------------------------------------- |
| POST   | /bike                                     | create new bike                           | {name: { type: String, required: true },       |
|        |                                           |                                           |  type: { type: String, required: true },       |
|        |                                           |                                           |  pricePerHour: { type: Number, required: true }|
|        |                                           |                                           | }                                              |
| ------ | ----------------------------------------- | ----------------------------------------- | ---------------------------------------------- |
| PUT    | /bike                                     | updates bikes properties                  | {name: { type: String, required: true },       |
|        |                                           |                                           |  type: { type: String, required: true },       |
|        |                                           |                                           |  pricePerHour: { type: Number, required: true }|
|        |                                           |                                           |  available: { type: Boolean, default: true },  |
|        |                                           |                                           | }                                              |
| ------ | ----------------------------------------- | ----------------------------------------- | ---------------------------------------------- |
| DELETE | /bike                                     |  deletes chosen bike