// Release date:
// October 27, 2026 at midnight

const releaseDate = new Date(
  "2026-10-27T00:00:00-05:00"
).getTime();


function updateCountdown() {

  const now = new Date().getTime();

  const distance = releaseDate - now;


  // If release day has arrived
  if (distance <= 0) {

    document.getElementById("countdown").style.display = "none";

    document
      .getElementById("released")
      .classList.remove("hidden");

    return;
  }


  const days = Math.floor(
    distance / (1000 * 60 * 60 * 24)
  );


  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60)
  );


  const minutes = Math.floor(
    (distance % (1000 * 60 * 60))
    / (1000 * 60)
  );


  const seconds = Math.floor(
    (distance % (1000 * 60))
    / 1000
  );


  document.getElementById("days").textContent =
    String(days).padStart(2, "0");


  document.getElementById("hours").textContent =
    String(hours).padStart(2, "0");


  document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");


  document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");
}


// Run immediately
updateCountdown();


// Update every second
setInterval(updateCountdown, 1000);
