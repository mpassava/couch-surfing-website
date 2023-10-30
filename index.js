// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
// : number
var reviewTotalDisplay = document.querySelector('#reviews');
var reviews = [
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
];
var getLatestReview = function (arr) {
    var latestDate = Math.max.apply(Math, arr.map(function (r) { return new Date(r.date).getTime(); }));
    var latestReview = arr.filter(function (r) { return (new Date(r.date)).getTime() === latestDate; })[0];
    return latestReview;
};
function showReviewTotal(arrLen, _a) {
    var name = _a.name;
    reviewTotalDisplay.innerHTML = "Total Reviews ".concat(arrLen.toString(), " | Latest by ").concat(name);
}
showReviewTotal(reviews.length, getLatestReview(reviews));
//# sourceMappingURL=index.js.map