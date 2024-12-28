document.addEventListener("DOMContentLoaded", function () {
    const advanceDayElement = document.getElementById("advance-day");
    const lastAdvanceDayElement = document.getElementById("last-advance-day");

    // Get today's day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const today = new Date().getDay();

    // Determine "advancing" day
    const advanceDay = today === 0 ? "Sunday" : "Wednesday";

    // Set the last advance day (you can change this manually)
    const lastAdvanceDay = "Friday"; // Change this to any day of the week

    // Display the advancing day
    advanceDayElement.textContent = advanceDay;

    // Display the last advance day
    lastAdvanceDayElement.textContent = lastAdvanceDay;
});
