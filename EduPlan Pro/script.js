// static/app.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("schedule-form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Get form data
      const name = document.getElementById("name").value;
      const studyHours = document.getElementById("study-hours").value;
      const subjects = document.getElementById("subjects").value;
      const learningHabits = document.getElementById("learning-habits").value;
  
      // Create a data object to send to the server
      const data = {
        name: name,
        studyHours: studyHours,
        subjects: subjects,
        learningHabits: learningHabits,
      };
  
      // Send the data to the server using AJAX
      fetch("/generate_schedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from the server
          if (data.message) {
            alert(data.message); // Show a success message
          } else {
            alert("An error occurred. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("An error occurred. Please try again.");
        });
    });
  });
  