const returningUserDisplay = document.querySelector("#returning-user");
const userNameDisplay = document.querySelector("#user");
const reviewTotalDisplay = document.querySelector("#reviews");

let isOpen: boolean;

const reviews = [
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

const getLatestReview = (
  arr: Array<{
    name: string;
    stars: number;
    loyaltyUser: boolean;
    date: string;
  }>
) => {
  const latestDate = Math.max(...arr.map((r) => new Date(r.date).getTime()));
  const latestReview = arr.filter(
    (r) => new Date(r.date).getTime() === latestDate
  )[0];
  return latestReview;
};

function showReviewTotal(
  arrLen: number,
  { name, loyaltyUser }: { name: string; loyaltyUser: boolean }
) {
  reviewTotalDisplay.innerHTML = `Total Reviews ${arrLen.toString()} | Latest by ${name} ${
    loyaltyUser ? "⭐" : ""
  }`;
}

showReviewTotal(reviews.length, getLatestReview(reviews));

type User = {
  Name: {
    firstName: string;
    lastName: string;
  };
  isReturning: boolean;
  age: number;
  stayedAt: string[];
};

const you: User = {
  Name: {
    firstName: "Bobby",
    lastName: "Brown",
  },
  isReturning: true,
  age: 35,
  stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
};

function populateUser({ isReturning, Name: { firstName, lastName } }: User) {
  if (isReturning) {
    returningUserDisplay.innerHTML = "back";
  }
  userNameDisplay.innerHTML = `${firstName} ${lastName}`;
}

populateUser(you);
