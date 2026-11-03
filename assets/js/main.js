const list = document.getElementById("projects");
PROJECTS.forEach(p => {
  const li = document.createElement("li");
  li.className = "project";
  const links = [
    p.live && `<a href="${p.live}">Open live</a>`,
    p.download && `<a href="${p.download}">Download</a>`,
    p.repo && `<a href="${p.repo}">Source</a>`,
  ].filter(Boolean).join("");
  const media = p.image
    ? `<img src="${p.image}" alt="Screenshot of ${p.title}" loading="lazy">`
    : p.icon
      ? `<img${p.plain ? ' class="plain"' : ""} src="${p.icon}" alt="${p.title} icon" width="80" height="${p.plain ? 57 : 80}" loading="lazy">`
      : "";
  const meta = [p.platform, p.version].filter(Boolean).map(m => `<span>${m}</span>`).join("");
  li.innerHTML = `
    <div class="media">${media}</div>
    <div class="body">
      ${meta ? `<p class="meta">${meta}</p>` : ""}
      <h3>${p.title}</h3>
      <p class="summary">${p.summary}</p>
      ${p.why ? `<p class="why">${p.why}</p>` : ""}
      <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
      <div class="project-links">${links}</div>
    </div>`;
  list.appendChild(li);
});

// Local time in Bandung (WIB, UTC+7)
const clock = document.getElementById("clock");
const tick = () => {
  const t = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Jakarta" }).format(new Date());
  clock.textContent = `Bandung, ${t} WIB`;
};
tick();
setInterval(tick, 30000);

document.getElementById("year").textContent = new Date().getFullYear();

const root = document.documentElement;
document.getElementById("theme-toggle").addEventListener("click", () => {
  const dark = root.dataset.theme
    ? root.dataset.theme === "dark"
    : matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = dark ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  setThemeColor(root.dataset.theme);
});
if (root.dataset.theme) setThemeColor(root.dataset.theme);
