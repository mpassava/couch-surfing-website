var returningUserDisplay = document.querySelector('#returning-user');
var userNameDisplay = document.querySelector('#user');
var reviewTotalDisplay = document.querySelector("#reviews");
var reviews = [
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
var getLatestReview = function (arr) {
    var latestDate = Math.max.apply(Math, arr.map(function (r) { return new Date(r.date).getTime(); }));
    var latestReview = arr.filter(function (r) { return new Date(r.date).getTime() === latestDate; })[0];
    return latestReview;
};
function showReviewTotal(arrLen, _a) {
    var name = _a.name, loyaltyUser = _a.loyaltyUser;
    reviewTotalDisplay.innerHTML = "Total Reviews ".concat(arrLen.toString(), " | Latest by ").concat(name, " ").concat(loyaltyUser ? '⭐' : '');
}
showReviewTotal(reviews.length, getLatestReview(reviews));
var you = {
    userName: {
        firstName: 'Bobby',
        lastName: 'Brown'
    },
    isReturning: true,
};
function populateUser(isReturning, _a) {
    var firstName = _a.firstName, lastName = _a.lastName;
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = "".concat(firstName, " ").concat(lastName);
}
populateUser(you.isReturning, you.userName);
//# sourceMappingURL=index.js.map