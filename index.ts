import { Permissions, User, Review, Property } from "./types.js";
import { populateUser, getLatestReview, showReviewTotal } from "./utils.js";

const propertiesDisplay = document.querySelector(".properties");

const reviews: Review[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: true,
    date: "04-01-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: false,
    date: "03-28-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: true,
    date: "03-27-2021",
  },
];

const you: User = {
  Name: {
    firstName: "Bobby",
    lastName: "Brown",
  },
  permissions: Permissions.ADMIN,
  isReturning: true,
  age: 35,
  stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
};

const properties: Property[] = [
  {
    image: "../assets/villas_villa_coast_bank.jpg",
    title: "Tuscan Villa",
    price: 250,
    address: {
      firstLine: "135 Tuscany Ct",
      city: "Tuscany",
      code: 55545,
      country: "Italy",
    },
    contact: [+11234567890, "vincenzo@gmail.com"],
    isAvailable: true,
  },
  {
    image: "../assets/diladitated_camp_river_swamp.jpg",
    title: "Florida Swamp Shack",
    price: 35,
    address: {
      firstLine: "555 Alligator Rd",
      city: "Swampsville",
      code: 33555,
      country: "United States",
    },
    contact: [+11234567890, "FloridaMan@gmail.com"],
    isAvailable: true,
  },
  {
    image: "../assets/cabin_snow_winter_lake.jpg",
    title: "Canadian Cabin",
    price: 175,
    address: {
      firstLine: "9542 Hoser Way",
      city: "Saskatoon",
      code: 90604,
      country: "Canada",
    },
    contact: [+11234567890, "yourbuddyguy@gmail.com"],
    isAvailable: false,
  },
];

function renderProperties(array: Property[]) {
  let propertiesCards: string = "";
  array.forEach((property: Property) => {
    propertiesCards += `
        <div class="card">
          <div>
            <h3>${property.title}</h3>
          </div>
          <img src="${property.image}" width="200" height="150">
        </div>
      `;
  });

  propertiesDisplay.innerHTML = propertiesCards;
}

renderProperties(properties);

// functions
showReviewTotal(reviews.length, getLatestReview(reviews));
populateUser(you);

const footer = document.querySelector(".footer");

let currentLocation: [string, string, number] = ['Tampa', '6:45pm', 65]
footer.innerHTML = `${currentLocation[0]}  |  ${currentLocation[1]}  |  ${currentLocation[2]}°`
