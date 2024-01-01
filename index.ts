import { User, Review, Property } from "./types";
import { populateUser, getLatestReview, showReviewTotal } from "./utils";

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
  isReturning: true,
  age: 35,
  stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
};

// functions
showReviewTotal(reviews.length, getLatestReview(reviews));
populateUser(you);
