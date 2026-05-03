/**
 * 프로젝트 목록 — 항목을 추가하면 카드가 자동으로 늘어납니다.
 * pdf, youtube, github 중 없는 링크는 빼거나 빈 문자열로 두면 해당 버튼이 숨겨집니다.
 */
const projects = [
  {
    title: "브랜드 리디자인 케이스 스터디",
    description:
      "사용자 리서치와 와이어프레임을 바탕으로 한 UI 리뉴얼 과정을 PDF로 정리했습니다.",
    tags: ["UI", "Research"],
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    links: {
      pdf: "https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/table-word.pdf",
      youtube: "https://www.youtube.com/watch?v=Ke90Tje7VS0",
      github: "https://github.com/",
    },
  },
  {
    title: "데이터 시각화 대시보드",
    description:
      "데모 영상과 소스 코드를 함께 공개합니다. 실제 PDF는 본인 파일 경로로 바꿔 주세요.",
    tags: ["JavaScript", "D3"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    links: {
      pdf: "",
      youtube: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
      github: "https://github.com/topics/dashboard",
    },
  },
  {
    title: "모바일 앱 프로토타입",
    description:
      "피그마 내보내기 PDF와 깃허브에 올린 스마트 컴포넌트 예제를 연결한 카드입니다.",
    tags: ["Figma", "React"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    links: {
      pdf: "https://www.aeee.in/wp-content/uploads/2020/08/Sample-pdf.pdf",
      youtube: "",
      github: "https://github.com/facebook/react",
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
    href
  )}" target="_blank" rel="noopener noreferrer">${icon}<span>${label}</span></a>`;
}

function escapeAttr(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
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
            p.image
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

function initContactForm() {
  const form = document.getElementById("contact-form");
  const success = document.getElementById("form-success");
  if (!form) return;

  const fields = [
    { id: "name", message: "이름을 2자 이상 입력해 주세요." },
    { id: "email", message: "올바른 이메일 주소를 입력해 주세요." },
    { id: "message", message: "메시지를 10자 이상 입력해 주세요." },
  ];

  function showError(inputId, text) {
    const el = form.querySelector(`.field-error[data-for="${inputId}"]`);
    if (el) el.textContent = text || "";
  }

  function validate() {
    let ok = true;
    const name = form.elements.namedItem("name");
    const email = form.elements.namedItem("email");
    const message = form.elements.namedItem("message");

    showError("name", "");
    showError("email", "");
    showError("message", "");

    if (!name.value.trim() || name.value.trim().length < 2) {
      showError("name", fields[0].message);
      ok = false;
    }

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRe.test(email.value.trim())) {
      showError("email", fields[1].message);
      ok = false;
    }

    if (!message.value.trim() || message.value.trim().length < 10) {
      showError("message", fields[2].message);
      ok = false;
    }

    return ok;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (success) {
      success.hidden = false;
      form.reset();
      success.focus();
    }
  });
}

function initYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initNav();
  initContactForm();
  initYear();
});
