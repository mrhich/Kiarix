const projects = [
  { title: "طراحی سایت شرکتی", category: "frontend", description: "طراحی واکنش‌گرا و مدرن با HTML، CSS و JavaScript", budget: "۵۰۰۰۰۰ تومان", deadline: "۲۰۲۵/۰۹/۳۰", icon: "fa-code" },
  { title: "توسعه API با Node.js", category: "backend", description: "ساخت API امن و سریع برای برنامه وب", budget: "۷۰۰۰۰۰ تومان", deadline: "۲۰۲۵/۱۰/۱۵", icon: "fa-server" },
  { title: "اپلیکیشن موبایل React Native", category: "mobile", description: "ساخت اپلیکیشن اندروید و iOS", budget: "۸۰۰۰۰۰ تومان", deadline: "۲۰۲۵/۱۱/۰۱", icon: "fa-mobile" },
  { title: "پروژه فول‌استک با Django", category: "fullstack", description: "پیاده‌سازی کامل فرانت و بک‌اند", budget: "۱۰۰۰۰۰۰ تومان", deadline: "۲۰۲۵/۱۲/۲۰", icon: "fa-layer-group" },
];

const projectsList = document.getElementById("projects-list");
const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");

function renderProjects(list) {
  projectsList.innerHTML = "";
  if (list.length === 0) {
    projectsList.innerHTML = "<p>هیچ پروژه‌ای یافت نشد.</p>";
    return;
  }
  list.forEach((p) => {
    const card = document.createElement("div");
    card.classList.add("project-card");
    card.innerHTML = `
      <div class="icon"><i class="fas ${p.icon}"></i></div>
      <div class="project-info">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="project-meta">
          <span>بودجه: ${p.budget}</span>
          <span>مهلت: ${p.deadline}</span>
        </div>
      </div>
    `;
    projectsList.appendChild(card);
  });
}

function filterProjects() {
  const searchText = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const filtered = projects.filter((p) => {
    const matchCategory = category ? p.category === category : true;
    const matchSearch = p.title.toLowerCase().includes(searchText) || p.description.toLowerCase().includes(searchText);
    return matchCategory && matchSearch;
  });
  renderProjects(filtered);
}

searchInput.addEventListener("input", filterProjects);
categoryFilter.addEventListener("change", filterProjects);
renderProjects(projects);

// منوی موبایل
const menuToggle = document.getElementById("menu-toggle");
const fullScreenMenu = document.getElementById("full-screen-menu");

menuToggle.addEventListener("click", () => {
  fullScreenMenu.classList.toggle("active");
});
