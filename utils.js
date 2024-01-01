const returningUserDisplay = document.querySelector("#returning-user");
const userNameDisplay = document.querySelector("#user");
const reviewTotalDisplay = document.querySelector("#reviews");
export function populateUser({ isReturning, Name: { firstName, lastName }, }) {
    if (isReturning) {
        returningUserDisplay.innerHTML = "back";
    }
    userNameDisplay.innerHTML = `${firstName} ${lastName}`;
}
export function getLatestReview(arr) {
    const latestDate = Math.max(...arr.map((r) => new Date(r.date).getTime()));
    const latestReview = arr.filter((r) => new Date(r.date).getTime() === latestDate)[0];
    return latestReview;
}
export function showReviewTotal(arrLen, { name, loyaltyUser }) {
    reviewTotalDisplay.innerHTML = `Total Reviews ${arrLen.toString()} | Latest by ${name} ${loyaltyUser ? "⭐" : ""}`;
}
//# sourceMappingURL=utils.js.map