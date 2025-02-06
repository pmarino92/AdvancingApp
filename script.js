document.addEventListener("DOMContentLoaded", function () {
    const advanceDayElement = document.getElementById("advance-day");
    const lastAdvanceDayElement = document.getElementById("last-advance-day");

    // Determine "advancing" day
    const advanceDay = "Sunday";

    // Set the last advance day
    const lastAdvanceDay = "Wednesday"; // Change this to any day of the week

    // Display the advancing day
    advanceDayElement.textContent = advanceDay;

    // Display the last advance day
    lastAdvanceDayElement.textContent = lastAdvanceDay;
});
