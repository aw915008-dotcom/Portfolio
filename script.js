/* ============================================================
   RENDER + INTERACTIONS
   ============================================================ */
(function () {
  "use strict";

  const icons = {
    external: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg>`,
    github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.7 5.6.7 12c0 5.1 3.3 9.4 7.9 11 .6.1.8-.2.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.3 11.3 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.6 7.9-5.9 7.9-11C23.3 5.6 18.3.5 12 .5z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.2V9h3.4v1.6h.1c.5-.9 1.7-1.9 3.4-1.9 3.7 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 110-4.2 2.1 2.1 0 010 4.2zM7.1 20.4H3.6V9h3.5v11.4z"/></svg>`,
    mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h16v16H4z" opacity="0"/><path d="M3 6l9 7 9-7"/><rect x="3" y="5" width="18" height="14" rx="2"/></svg>`,
    phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .3 2 .7 3a2 2 0 01-.5 2.1L8 10a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5c1 .4 2 .6 3 .7a2 2 0 011.7 2z"/></svg>`,
    pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z"/><circle cx="12" cy="10" r="3"/></svg>`
  };

  const escapeHTML = (str) =>
    String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------------- THEME ---------------- */
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("theme") || "dark";
  root.setAttribute("data-theme", savedTheme);
  themeToggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  /* ---------------- NAV SCROLL + ACTIVE LINK ---------------- */
  const nav = document.getElementById("nav");
  const navLinks = document.querySelectorAll(".nav-links a, .mobile-menu a");
  const sections = document.querySelectorAll("section[id], header[id]");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("is-scrolled", window.scrollY > 30);
    let current = "home";
    sections.forEach((sec) => {
      if (window.scrollY >= sec.offsetTop - 140) current = sec.id;
    });
    navLinks.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === `#${current}`));
  });

  /* ---------------- MOBILE MENU ---------------- */
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    mobileMenu.classList.toggle("open");
  });
  document.querySelectorAll(".mobile-menu a").forEach((a) =>
    a.addEventListener("click", () => {
      hamburger.classList.remove("open");
      mobileMenu.classList.remove("open");
    })
  );

  /* ---------------- HERO TYPED TAGLINE ---------------- */
  const taglineEl = document.getElementById("hero-tagline");
  const fullTagline = PROFILE.tagline;
  let ti = 0;
  function typeTagline() {
    if (ti <= fullTagline.length) {
      taglineEl.textContent = fullTagline.slice(0, ti);
      ti++;
      setTimeout(typeTagline, 14);
    }
  }
  setTimeout(typeTagline, 500);

  /* ---------------- ABOUT ---------------- */
  const aboutSentences = PROFILE.summary.split(". ");
  document.getElementById("about-lede").textContent = aboutSentences.slice(0, 1).join(". ") + ".";
  document.getElementById("about-body").textContent = aboutSentences.slice(1).join(". ");

  const facts = [
    { k: "Focus", v: "Data Science & Machine Learning" },
    { k: "Also skilled in", v: "Data analysis & BI dashboards (Excel, Tableau, Power BI)" },
    { k: "Studying", v: "B.Sc. Computer Science — ML Dept." },
    { k: "Based in", v: PROFILE.location },
    { k: "Languages", v: LANGUAGES.map((l) => l.name).join(" / ") },
    { k: "Looking for", v: "Internships, junior ML roles, freelance work" }
  ];
  document.getElementById("about-facts").innerHTML = facts
    .map((f) => `<div class="fact-row"><div class="k">${f.k}</div><div class="v">${f.v}</div></div>`)
    .join("");

  /* ---------------- SKILLS ---------------- */
  document.getElementById("skills-grid").innerHTML = SKILLS.map(
    (group, i) => `
    <div class="skill-card" style="--i:${i}">
      <h3>${group.category}</h3>
      <div class="skill-tags">${group.items.map((s) => `<span class="skill-tag">${s}</span>`).join("")}</div>
    </div>`
  ).join("");

  /* ---------------- PROJECTS ---------------- */
  const categories = ["All Projects", ...new Set(PROJECTS.map((p) => p.category))];
  const filterGroup = document.getElementById("filter-group");
  filterGroup.innerHTML = categories
    .map((c, i) => `<button class="filter-btn ${i === 0 ? "active" : ""}" data-filter="${c}">${c}</button>`)
    .join("");

  const projectsGrid = document.getElementById("projects-grid");

  function projectCard(p, i) {
    const thumb = p.image
      ? `<img src="${p.image}" alt="${escapeHTML(p.title)} screenshot" loading="lazy" />`
      : `<div class="no-image">/// no preview image</div>`;
    const techPreview = p.technologies.slice(0, 4);
    const extra = p.technologies.length - techPreview.length;
    return `
    <article class="project-card reveal in-view" style="--i:${i}" data-title="${escapeHTML(p.title.toLowerCase())}" data-category="${p.category}" data-index="${i}">
      <div class="project-thumb">
        ${thumb}
        <span class="project-cat-badge">${p.category}</span>
      </div>
      <div class="project-body">
        <h3>${p.title}</h3>
        <p>${p.shortDescription}</p>
        <div class="project-tech">
          ${techPreview.map((t) => `<span>${t}</span>`).join("")}
          ${extra > 0 ? `<span class="more">+${extra} more</span>` : ""}
        </div>
        <div class="project-footer">
          <span class="project-link">View details ${icons.external}</span>
          <span class="project-date">${p.date || ""}</span>
        </div>
      </div>
    </article>`;
  }

  function renderProjects(list) {
    if (!list.length) {
      projectsGrid.innerHTML = `<div class="no-results">No projects match your search.</div>`;
      return;
    }
    projectsGrid.innerHTML = list.map((p) => projectCard(p, PROJECTS.indexOf(p))).join("");
    projectsGrid.querySelectorAll(".project-card").forEach((card) => {
      card.addEventListener("click", () => openModal(PROJECTS[card.dataset.index]));
    });
  }
  renderProjects(PROJECTS);

  let activeFilter = "All Projects";
  const searchInput = document.getElementById("project-search");

  function applyFilters() {
    const q = searchInput.value.trim().toLowerCase();
    const filtered = PROJECTS.filter((p) => {
      const matchCat = activeFilter === "All Projects" || p.category === activeFilter;
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.technologies.join(" ").toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
    renderProjects(filtered);
  }

  filterGroup.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    filterGroup.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    applyFilters();
  });
  searchInput.addEventListener("input", applyFilters);

  /* ---------------- PROJECT MODAL ---------------- */
  const overlay = document.getElementById("modal-overlay");
  const modalContent = document.getElementById("modal-content");

  function openModal(p) {
    const img = p.image ? `<div class="modal-image"><img src="${p.image}" alt="${escapeHTML(p.title)} screenshot" /></div>` : "";
    modalContent.innerHTML = `
      ${img}
      <div class="modal-body">
        <div class="modal-cat">${p.category} · ${p.date || ""}</div>
        <h3 class="modal-title" id="modal-title">${p.title}</h3>
        <div class="modal-section"><p>${p.overview || p.description}</p></div>
        ${p.methodology ? `<div class="modal-section"><h4>Methodology</h4><p>${p.methodology}</p></div>` : ""}
        ${p.features ? `<div class="modal-section"><h4>Key Features</h4><ul class="modal-list">${p.features.map((f) => `<li>${f}</li>`).join("")}</ul></div>` : ""}
        ${p.results ? `<div class="modal-section"><h4>Results</h4><p>${p.results}</p></div>` : ""}
        ${p.keyInsights ? `<div class="modal-section"><h4>Key Insights</h4><ul class="modal-list">${p.keyInsights.map((f) => `<li>${f}</li>`).join("")}</ul></div>` : ""}
        <div class="modal-section"><h4>Technologies</h4><div class="modal-tech">${p.technologies.map((t) => `<span>${t}</span>`).join("")}</div></div>
        <div class="modal-actions">
          ${p.githubUrl ? `<a href="${p.githubUrl}" target="_blank" rel="noopener" class="btn btn-ghost btn-sm">${icons.github} Source Code</a>` : ""}
          ${p.liveUrl ? `<a href="${p.liveUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">${icons.external} Live Demo</a>` : ""}
        </div>
      </div>`;
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }
  document.getElementById("modal-close").addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

  /* ---------------- EXPERIENCE TIMELINE ---------------- */
  document.getElementById("timeline").innerHTML = EXPERIENCE.map(
    (e) => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <h3>${e.position}</h3>
      <div class="role">${e.company}</div>
      <div class="dates">${e.startDate} — ${e.endDate}</div>
      <p class="desc">${e.description}</p>
      <ul class="modal-list">${e.responsibilities.map((r) => `<li>${r}</li>`).join("")}</ul>
      <div class="timeline-tech">${e.technologies.map((t) => `<span>${t}</span>`).join("")}</div>
    </div>`
  ).join("");

  /* ---------------- EDUCATION ---------------- */
  document.getElementById("education-list").innerHTML = EDUCATION.map(
    (ed) => `
    <div class="edu-card">
      <div class="deg">${ed.degree}</div>
      <div class="uni">${ed.university}</div>
      <div class="yrs">${ed.years}</div>
    </div>`
  ).join("");
  document.getElementById("lang-row").innerHTML = LANGUAGES.map(
    (l) => `<div class="lang-chip"><div>${l.name}</div><div class="lvl">${l.level}</div></div>`
  ).join("");

  /* ---------------- CERTIFICATIONS ---------------- */
  document.getElementById("cert-list").innerHTML = CERTIFICATIONS.map(
    (c) => `
    <div class="cert-card">
      <div>
        <div class="name">${c.name}</div>
        <div class="issuer">${c.issuer}</div>
        <div class="cert-skills">${(c.skills || []).map((s) => `<span>${s}</span>`).join("")}</div>
      </div>
      <div class="cert-date">${c.date}</div>
    </div>`
  ).join("");

  /* ---------------- CONTACT ---------------- */
  const contactItems = [
    { icon: icons.mail, label: "Email", val: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { icon: icons.phone, label: "Phone", val: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s/g, "")}` },
    { icon: icons.pin, label: "Location", val: PROFILE.location, href: null }
  ];
  document.getElementById("contact-info").innerHTML =
    contactItems
      .map(
        (it) => `
      <div class="item">
        ${it.icon}
        <div>
          <div class="label">${it.label}</div>
          <div class="val">${it.href ? `<a href="${it.href}">${it.val}</a>` : it.val}</div>
        </div>
      </div>`
      )
      .join("") + document.getElementById("contact-info").innerHTML;

  const socials = [
    PROFILE.social.github ? { icon: icons.github, href: PROFILE.social.github } : null,
    PROFILE.social.linkedin ? { icon: icons.linkedin, href: PROFILE.social.linkedin } : null,
    { icon: icons.mail, href: `mailto:${PROFILE.email}` }
  ].filter(Boolean);
  document.getElementById("social-row").innerHTML = socials
    .map((s) => `<a class="social-btn" href="${s.href}" target="_blank" rel="noopener">${s.icon}</a>`)
    .join("");

  /* ---------------- CONTACT FORM VALIDATION ---------------- */
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("cf-name");
    const email = document.getElementById("cf-email");
    const subject = document.getElementById("cf-subject");
    const message = document.getElementById("cf-message");
    const status = document.getElementById("form-status");
    let valid = true;

    const setErr = (input, id, msg) => {
      document.getElementById(id).textContent = msg;
      if (msg) valid = false;
    };
    setErr(name, "err-name", name.value.trim().length < 2 ? "Please enter your name." : "");
    setErr(email, "err-email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value) ? "" : "Please enter a valid email.");
    setErr(subject, "err-subject", subject.value.trim().length < 3 ? "Please add a subject." : "");
    setErr(message, "err-message", message.value.trim().length < 10 ? "Message should be at least 10 characters." : "");

    if (!valid) {
      status.textContent = "";
      return;
    }

    // No backend is wired up yet — mailto fallback so the message still reaches Ahmed.
    const body = encodeURIComponent(`${message.value}\n\n— ${name.value} (${email.value})`);
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject.value)}&body=${body}`;
    status.textContent = "Opening your email client to send this message...";
    status.className = "form-status success";
    form.reset();
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------------- SCROLL REVEAL ---------------- */
  const revealEls = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => io.observe(el));

  /* ---------------- HERO CANVAS: DATA NODE NETWORK ---------------- */
  const canvas = document.getElementById("hero-canvas");
  const ctx = canvas.getContext("2d");
  let W, H, nodes;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resizeCanvas() {
    W = canvas.width = canvas.offsetWidth * devicePixelRatio;
    H = canvas.height = canvas.offsetHeight * devicePixelRatio;
  }

  function initNodes() {
    const count = Math.min(60, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 22000));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
      vy: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
      r: (Math.random() * 1.4 + 0.8) * devicePixelRatio
    }));
  }

  function drawFrame() {
    ctx.clearRect(0, 0, W, H);
    const accent = getComputedStyle(root).getPropertyValue("--accent").trim() || "#5b6ef5";
    nodes.forEach((n) => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
    });
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        const maxD = 140 * devicePixelRatio;
        if (d < maxD) {
          ctx.strokeStyle = accent;
          ctx.globalAlpha = (1 - d / maxD) * 0.18;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 0.55;
    ctx.fillStyle = accent;
    nodes.forEach((n) => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    if (!prefersReducedMotion) requestAnimationFrame(drawFrame);
  }

  function startCanvas() {
    resizeCanvas();
    initNodes();
    drawFrame();
  }
  if (canvas) {
    startCanvas();
    window.addEventListener("resize", () => { resizeCanvas(); initNodes(); if (prefersReducedMotion) drawFrame(); });
  }
})();
