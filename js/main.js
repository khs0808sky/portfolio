/**
 * 프로젝트 목록 — 항목을 추가하면 카드가 자동으로 늘어납니다.
 * pdf, youtube, github 중 없는 링크는 빼거나 빈 문자열로 두면 해당 버튼이 숨겨집니다.
 */
const projects = [
  {
    title: "축제 홍보 마케팅 AI 에이전트",
    description:
      "축제 기획서 기반으로 포스터ㆍ마스코트ㆍ파생 홍보물을 자동 생성하고, 생성 결과를 한곳에서 관리하는 AI 기반 축제 홍보 지원 서비스입니다.",
    tags: ["Python", "OpenAI API", "Replicate API", "FastAPI", "React", "MySQL"],
    // 레포 루트 기준 상대 경로 — GitHub Pages에 올려도 같은 폴더 구조면 그대로 동작합니다.
    image: "assets/images/김현수_AI 서비스 포트폴리오.png",
    links: {
      pdf: "assets/docs/김현수_AI서비스 포트폴리오.pdf",
      youtube: "https://www.youtube.com/watch?v=hFaCz4H10OM",
      github: "https://github.com/aica-acc/",
    },
  },
  {
    title: "2D Game Portfolio",
    description:
      "VisualStudio와 C, C++을 이용해 2D 게임을 만들어보았습니다.",
    tags: ["VisualStudio", "C", "C++"],
    image:
      "assets/images/김현수_2D게임 포트폴리오.png",
    links: {
      pdf: "",
      youtube: "https://www.youtube.com/watch?v=hMxmzXZlqjM",
      github: "https://github.com/khs0808sky/2D_Portfolio",
    },
  },
  {
    title: "3D Game Portfolio",
    description:
      "UnrealEngine5와, C++, Blueprint 기술을 이용해 3D게임을 만들어보았습니다.",
    tags: ["UnrealEngine5", "React"],
    image:
      "assets/images/김현수_3D게임 포트폴리오.png",
    links: {
      pdf: "",
      youtube: "https://www.youtube.com/watch?v=fQB9BXtaZUk&t=33s",
      github: "https://github.com/khs0808sky/3D_Portfolio",
    },
  },
  {
    title: "흉부 수술 환자 임상 정보 기반 1년 내 사망 여부 예측 딥러닝 프로젝트",
    description:
      "공개 의료 표 데이터 기반으로 이진 분류하는 딥러닝 프로젝트를 개인적으로 공부해보았습니다.",
    tags: ["Python", "Google Colab", "Tensorflow / Keras"],
    image:
      "assets/images/김현수_딥러닝 개인 프로젝트.png",
    links: {
      pdf: "assets/docs/김현수_딥러닝 개인 프로젝트.pdf",
      youtube: "",
      github: "",
    },
  },
];

const ICONS = {
  pdf: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  youtube: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>`,
  github: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
};

function buildLinkPill(href, label, iconKey) {
  if (!href || !String(href).trim()) return "";
  const icon = ICONS[iconKey] || "";
  return `<a class="link-pill" href="${escapeAttr(
    safeAssetHref(href)
  )}" target="_blank" rel="noopener noreferrer">${icon}<span>${label}</span></a>`;
}

function escapeAttr(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

/** 레포 안 assets/… 경로(한글·공백 포함)를 브라우저에서 안전하게 쓰기 위해 경로 조각만 인코딩합니다. http(s) URL은 그대로 둡니다. */
function safeAssetHref(href) {
  const s = String(href).trim();
  if (!s) return "";
  if (/^https?:\/\//i.test(s)) return s;
  return s.split("/").map(encodeURIComponent).join("/");
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/"/g, "&quot;");
}

function renderProjects() {
  const grid = document.getElementById("project-grid");
  if (!grid) return;

  grid.innerHTML = projects
    .map((p) => {
      const tags =
        p.tags && p.tags.length
          ? `<ul class="project-tags">${p.tags
              .map((t) => `<li>${escapeHtml(t)}</li>`)
              .join("")}</ul>`
          : "";

      const links = [
        buildLinkPill(p.links?.pdf, "PDF", "pdf"),
        buildLinkPill(p.links?.youtube, "YouTube", "youtube"),
        buildLinkPill(p.links?.github, "GitHub", "github"),
      ]
        .filter(Boolean)
        .join("");

      const thumb = p.image
        ? `<div class="project-thumb"><img src="${escapeAttr(
            safeAssetHref(p.image)
          )}" alt="" loading="lazy" width="800" height="500" /></div>`
        : "";

      return `
        <article class="project-card">
          ${thumb}
          <div class="project-meta">${tags}</div>
          <h3 class="project-title">${escapeHtml(p.title)}</h3>
          <p class="project-desc">${escapeHtml(p.description)}</p>
          <div class="project-links">${links}</div>
        </article>
      `;
    })
    .join("");
}

function initNav() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (!header || !toggle || !nav) return;

  function setOpen(open) {
    header.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
    document.body.style.overflow = open ? "hidden" : "";
  }

  toggle.addEventListener("click", () => {
    setOpen(!header.classList.contains("is-open"));
  });

  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => setOpen(false));
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 720) setOpen(false);
  });
}

function initYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** 맨 위로 — 앵커(#top) + 항상 scrollY=0으로 이동(스티키 헤더 id 사용 시 깨지는 현상 방지) */
function initScrollToTopAnchors() {
  document.querySelectorAll('a[href="#top"]').forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const behavior = prefersReducedMotion() ? "auto" : "smooth";
      window.scrollTo({ top: 0, left: 0, behavior });
      if (typeof window.history.replaceState === "function") {
        window.history.replaceState(null, "", "#top");
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initNav();
  initYear();
  initScrollToTopAnchors();
});
