// PRORACING — MAIN JS

// YEAR
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// REAL-TIME CLOCK (LOCAL)
const clockEl = document.getElementById("clock");

function updateClock(){
  if (!clockEl) return;
  const now = new Date();
  clockEl.textContent = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
}

updateClock();
setInterval(updateClock, 1000);

// OPTIONAL: active nav highlight on click (simple + minimal)
document.querySelectorAll(".nav-link").forEach(a => {
  a.addEventListener("click", () => {
    document.querySelectorAll(".nav-link").forEach(x => x.classList.remove("active"));
    a.classList.add("active");
  });
});
