// Doctor data
const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "Cardiologist",
    experience: 15,
    rating: 4.8,
    fee: "₦15,000",
    photo: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialization: "Pediatrician",
    experience: 12,
    rating: 4.9,
    fee: "₦12,000",
    photo: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Dr. Anita Rao",
    specialization: "Dermatologist",
    experience: 10,
    rating: 4.7,
    fee: "₦10,000",
    photo: "https://via.placeholder.com/100",
  },
  {
    id: 4,
    name: "Dr. Ahmed Bello",
    specialization: "Neurologist",
    experience: 20,
    rating: 4.9,
    fee: "₦20,000",
    photo: "https://via.placeholder.com/100",
  },
  {
    id: 5,
    name: "Dr. Emily Carter",
    specialization: "Orthopedic Surgeon",
    experience: 8,
    rating: 4.6,
    fee: "₦18,000",
    photo: "https://via.placeholder.com/100",
  },
  {
    id: 6,
    name: "Dr. Daniel Kim",
    specialization: "Cardiologist",
    experience: 13,
    rating: 4.7,
    fee: "₦16,000",
    photo: "https://via.placeholder.com/100",
  },
  {
    id: 7,
    name: "Dr. Aisha Mohammed",
    specialization: "Pediatrician",
    experience: 9,
    rating: 4.8,
    fee: "₦14,000",
    photo: "https://via.placeholder.com/100",
  },
  {
    id: 8,
    name: "Dr. Henry Ford",
    specialization: "Neurologist",
    experience: 11,
    rating: 4.5,
    fee: "₦19,000",
    photo: "https://via.placeholder.com/100",
  },
  {
    id: 9,
    name: "Dr. Clara Martinez",
    specialization: "General Practitioner",
    experience: 5,
    rating: 4.3,
    fee: "₦8,000",
    photo: "https://via.placeholder.com/100",
  },
  {
    id: 10,
    name: "Dr. Kemi Adebayo",
    specialization: "Dermatologist",
    experience: 14,
    rating: 4.7,
    fee: "₦13,000",
    photo: "https://via.placeholder.com/100",
  },
  {
    id: 11,
    name: "Dr. Rajesh Singh",
    specialization: "Orthopedic Surgeon",
    experience: 16,
    rating: 4.8,
    fee: "₦21,000",
    photo: "https://via.placeholder.com/100",
  },
  {
    id: 12,
    name: "Dr. Olivia Chen",
    specialization: "Cardiologist",
    experience: 10,
    rating: 4.6,
    fee: "₦17,000",
    photo: "https://via.placeholder.com/100",
  },
  {
    id: 13,
    name: "Dr. James Cooper",
    specialization: "Pediatrician",
    experience: 7,
    rating: 4.4,
    fee: "₦11,000",
    photo: "https://via.placeholder.com/100",
  },
  {
    id: 14,
    name: "Dr. Maria Garcia",
    specialization: "General Practitioner",
    experience: 6,
    rating: 4.3,
    fee: "₦9,000",
    photo: "https://via.placeholder.com/100",
  },
  {
    id: 15,
    name: "Dr. Chijioke Okeke",
    specialization: "Neurologist",
    experience: 19,
    rating: 4.9,
    fee: "₦22,000",
    photo: "https://via.placeholder.com/100",
  },
  {
    id: 16,
    name: "Dr. Samantha Brown",
    specialization: "Dermatologist",
    experience: 11,
    rating: 4.6,
    fee: "₦12,000",
    photo: "https://via.placeholder.com/100",
  },
  {
    id: 17,
    name: "Dr. Isaac Newton",
    specialization: "Orthopedic Surgeon",
    experience: 13,
    rating: 4.7,
    fee: "₦19,000",
    photo: "https://via.placeholder.com/100",
  },
  {
    id: 18,
    name: "Dr. Chloe Adams",
    specialization: "Cardiologist",
    experience: 17,
    rating: 4.8,
    fee: "₦16,000",
    photo: "https://via.placeholder.com/100",
  },
  {
    id: 19,
    name: "Dr. Abdul Salim",
    specialization: "General Practitioner",
    experience: 4,
    rating: 4.2,
    fee: "₦7,000",
    photo: "https://via.placeholder.com/100",
  },
  {
    id: 20,
    name: "Dr. Grace Lin",
    specialization: "Neurologist",
    experience: 15,
    rating: 4.9,
    fee: "₦20,000",
    photo: "https://via.placeholder.com/100",
  },
];

// Render doctors
function renderDoctors(doctorsList) {
  const doctorsContainer = document.getElementById("doctorsList");
  doctorsContainer.innerHTML = "";

  doctorsList.forEach((doctor) => {
    const doctorCard = `
      <div class="doctor-card">
        <img src="${doctor.photo}" alt="${doctor.name}">
        <h3>${doctor.name}</h3>
        <p>${doctor.specialization}</p>
        <p>${doctor.experience} years experience</p>
        <p>⭐ ${doctor.rating}</p>
        <p>Consultation: ${doctor.fee}</p>
        <button class="btn-primary" onclick="bookAppointment(${doctor.id})">Book Appointment</button>
      </div>
    `;
    doctorsContainer.innerHTML += doctorCard;
  });
}

// Initial render
renderDoctors(doctors);

// Filter doctors by specialization
function filterDoctors() {
  const searchInput = document.getElementById("search").value.toLowerCase();
  const filteredDoctors = doctors.filter((doctor) =>
    doctor.specialization.toLowerCase().includes(searchInput)
  );
  renderDoctors(filteredDoctors);
}

// Book Appointment: Navigate to doctor detail page
function bookAppointment(doctorId) {
  window.location.href = `doctor-detail.html?doctorId=${doctorId}`;
}
