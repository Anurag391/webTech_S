const projects = [
  { title: "Tech Shop Management", desc: "C# + SQL Server desktop app", img: "images/project1.jpg", link: "#" },
  { title: "Portfolio Website", desc: "Responsive HTML/CSS/JS site", img: "images/project2.jpg", link: "#" },
  { title: "Signal Processing Lab", desc: "MATLAB coursework project", img: "images/project3.jpg", link: "#" }
];

const projectContainer = document.getElementById("project-container");
projects.forEach(p => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <img src="${p.img}" alt="${p.title}" style="width:100%">
    <h3>${p.title}</h3>
    <p>${p.desc}</p>
    <a href="${p.link}" target="_blank">View Project</a>
  `;
  projectContainer.appendChild(card);
});

const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});
if (localStorage.getItem("theme") === "dark") document.body.classList.add("dark");

document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const msg = document.getElementById("form-msg");

  if (!name || !email || !subject || !message) {
    msg.textContent = "All fields are required!";
    msg.style.color = "red";
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    msg.textContent = "Invalid email format!";
    msg.style.color = "red";
    return;
  }
  msg.textContent = "Message sent successfully!";
  msg.style.color = "green";
});

const scrollBtn = document.getElementById("scrollTop");
scrollBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));