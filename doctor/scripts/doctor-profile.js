// Booking Form Submission
const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Retrieve form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  // Save booking to local storage (data persistence)
  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.push({ name, email, date, time, doctor: "Dr. Jane Smith" });
  localStorage.setItem("bookings", JSON.stringify(bookings));

  // Confirmation message
  alert(`Appointment confirmed for ${name} on ${date} at ${time}.`);
  bookingForm.reset();
});
