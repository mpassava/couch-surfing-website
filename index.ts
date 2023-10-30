// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
// : number
const reviewTotalDisplay = document.querySelector('#reviews')

const reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '04-01-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '03-28-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '03-27-2021'
    },
]

const getLatestReview = (arr: Array<any>) => {
  const latestDate = Math.max(...arr.map(r => new Date(r.date).getTime()));
  const latestReview = arr.filter(r => (new Date(r.date)).getTime() === latestDate)[0];
  return latestReview;
}

function showReviewTotal(arrLen: number, { name }: { name: string }) {
  reviewTotalDisplay.innerHTML = `Total Reviews ${arrLen.toString()} | Latest by ${name}`;
}

showReviewTotal(reviews.length, getLatestReview(reviews));
