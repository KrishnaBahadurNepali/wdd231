const courses = [
  { code: "WDD 130", name: "Web Fundamentals", credits: 3, completed: true },
  { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 3, completed: true },
  { code: "WDD 230", name: "Web Frontend Development I", credits: 3, completed: false },
  { code: "CSE 110", name: "Introduction to Programming", credits: 2, completed: true },
  { code: "CSE 111", name: "Programming with Functions", credits: 3, completed: false },
  { code: "CSE 210", name: "Programming with Classes", credits: 3, completed: false }
];

// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navLink = document.getElementById("navLink");

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("show");
  hamburger.classList.toggle("open");
});

// Filter and display courses
const container = document.querySelector(".courses-grid");
const buttons = document.querySelectorAll("button.filter");

function getCategory(code) {
  return code.startsWith("WDD") ? "WDD" : "CSE";
}

function displayCourses(filter) {
  container.innerHTML = "";

  const filtered = filter === "All"
    ? courses
    : courses.filter(course => getCategory(course.code) === filter);

  filtered.forEach(course => {
    const card = document.createElement("div");
    card.className = "course-card";
    card.innerHTML = `
      <h4>${course.code} - ${course.name}</h4>
      <p><strong>Credits:</strong> ${course.credits}</p>
      <p><strong>Completed:</strong> ${course.completed ? "Yes" : "No"}</p>
      <p><strong>Category:</strong> ${getCategory(course.code)}</p>
    `;
    container.appendChild(card);
  });
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    displayCourses(btn.textContent);
  });
});

displayCourses("All");

// Show last modified date
document.getElementById("last-modified").textContent =
  "Last Modified: " + document.lastModified;
