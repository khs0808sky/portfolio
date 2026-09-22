/**
 * 프로젝트 목록 — 항목을 추가하면 카드가 자동으로 늘어납니다.
 * pdf, youtube, github 중 없는 링크는 빼거나 빈 문자열로 두면 해당 버튼이 숨겨집니다.
 */
const projects = [
  {
    title: "축제 홍보 마케팅 AI 에이전트",
    description:
      "지역 축제 기획서와 행사 정보를 기반으로 포스터, 마스코트, 파생 홍보물을 자동 생성하는 AI 서비스입니다. OpenAI API로 행사 정보를 분석하고 프롬프트를 생성했으며, Replicate API를 통해 이미지 생성 결과를 받아와 웹 화면에서 확인하고 관리할 수 있도록 구성했습니다.",
    tags: ["Python", "OpenAI API", "Replicate API", "FastAPI", "React", "MySQL", "Git"],
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
    "C/C++ 기반으로 제작한 2D 게임 프로젝트입니다. 캐릭터 이동과 충돌 처리를 구현하고, 충돌 결과에 따라 일반 마리오, 파이어 마리오, 미니 마리오로 상태가 변화하도록 구성했습니다. 또한 몬스터 처치, 남은 시간 관리, 게임 오버 및 클리어 상태에 따른 화면 연출을 구현했습니다.",
    tags: ["Visual Studio", "C", "C++", "Git"],
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
      "공개 에셋을 활용해 맵, 캐릭터, 보스 몬스터를 구성한 3D 액션 게임 프로젝트입니다. 캐릭터 이동, 점프, 구르기, 공격, 피격 이펙트, 체력 UI, 락온, 물약 사용, 게임 오버 및 클리어 화면을 구현했습니다. 몬스터는 AI Controller를 활용해 추적, 공격, 체력 50% 이하 진화, 강화 공격 등 페이즈 기반 패턴으로 구성했습니다.",
    tags: ["UnrealEngine5", "C++", "Blueprint", "Git"],
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
      "흉부 수술 환자의 임상 정보를 기반으로 수술 후 1년 내 사망 여부를 예측하는 딥러닝 학습 프로젝트입니다. Python과 TensorFlow/Keras를 활용해 데이터를 학습용·테스트용으로 분리하고, 모델 학습 후 예측 결과와 한계를 분석했습니다.",
    tags: ["Python", "Google Colab", "Tensorflow / Keras"],
    image:
      "assets/images/김현수_딥러닝 개인 프로젝트.png",
    links: {
      pdf: "assets/docs/김현수_딥러닝 개인 프로젝트.pdf",
      youtube: "",
      github: "",
    },
  },
  {
    title: "Cursor AI를 활용한 개인 포트폴리오 웹사이트 제작",
    description:
      "저의 소개, 경험, 자격·수상, 기술 스택, 프로젝트를 한곳에서 확인할 수 있도록 만든 개인 포트폴리오 웹사이트입니다. Cursor AI를 활용해 기본 구조를 만들고, 문구와 화면 구성을 직접 수정하며 웹사이트 제작 흐름을 학습했습니다.",
    tags: ["HTML", "CSS", "JavaScript", "Cursor AI", "Git"], 
    image:
      "assets/images/김현수_Cursor AI 개인 프로젝트.png",
    links: {
      pdf: "assets/docs/김현수_Cursor AI 개인 프로젝트.pdf",
      youtube: "",
      github: "https://github.com/khs0808sky/portfolio",
    },
  },
  {
    title: "서울 생활 가이드 PDF 기반 RAG 챗봇",
    description: "서울 생활 가이드 PDF를 chunk 단위로 처리하고 ChromaDB에 저장한 뒤, 사용자 질문과 관련된 문서를 검색해 LLM이 답변하는 RAG 챗봇입니다. FastAPI와 React를 연결해 웹 화면에서 질문응답과 참고 문서 확인이 가능하도록 구현했습니다.",
    tags: ["Python", "FastAPI", "LangChain", "ChromaDB", "OpenAI API", "React", "Vite", "Cursor AI"],
    image:
      "assets/images/김현수_RAG 개인 프로젝트.png",
    links: {
      pdf: "assets/docs/김현수_RAG 개인 프로젝트.pdf",
      youtube: "",
      github: "https://github.com/khs0808sky/seoul_rag_chatbot",
    },
  },
  {
    title: "청년 주거 안전 지원 AI 에이전트",
    description: "LangGraph와 RAG를 활용해 청년월세지원 및 전세계약 안전 관련 질문을 분류하고, 관련 PDF 문서를 검색해 근거 기반 답변을 제공하는 AI 상담 서비스입니다.",
    tags: ["Python", "LangGraph", "RAG", "FastAPI", "React", "ChromaDB", "OpenAI API", "Git"],
    image:
      "assets/images/김현수_LangGraph_개인프로젝트.png",
    links: {
      pdf: "assets/docs/김현수_LangGraph_개인프로젝트.pdf",
      youtube: "",
      github: "https://github.com/khs0808sky/youth-life-agent",
    },
  },
  {
    title: "오늘 뭐 먹지?",
    description: "LangChain을 활용해 사용자의 기분, 날씨, 위치를 반영한 메뉴 추천과 주변 식당 탐색을 제공하는 풀스택 AI 서비스입니다. 사용자 입력을 분석해 프롬프트를 생성하고, 외부 API로 메뉴와 식당 정보를 받아와 웹 화면에서 확인할 수 있도록 구성했습니다.",
    tags: [ "React", "FastAPI", "Python", "LangChain", "GPT-4o-mini", "Kakao API", "OpenWeatherMap", "Vercel", "Railway" ],
    image:
      "assets/images/김현수_Claude_개인프로젝트.png",
    links: {
      pdf: "assets/docs/김현수_Claude_개인프로젝트.pdf",
      youtube: "",
      github: "https://github.com/khs0808sky/today-menu",
    },
  },
  {
    title: "Cafe Order Service",
    description: "Java Spring Boot와 JPA를 사용해 메뉴 관리, 주문 생성, 주문 상태 변경, 일별 매출 조회 기능을 구현한 카페 주문 관리 백엔드 프로젝트입니다.",
    tags: ["Java", "Spring Boot", "JPA", "REST API", "H2 Database", "Swagger"],
    image:
      "assets/images/김현수_Java_Spring_개인프로젝트.png",
    links: {
      pdf: "assets/docs/김현수_Java_Spring_개인프로젝트.pdf",
      youtube: "",
      github: "https://github.com/khs0808sky/cafe-order-service",
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
        <article class="project-card glow-card" data-reveal="up">
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
    // 모바일 메뉴가 전체 화면을 덮지 않으므로, 기본 스크롤은 막지 않습니다.
    document.body.style.overflow = "";
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

/** getDay(): 0=일 … 6=토 */
const WEEKDAYS_KO_SHORT = ["일", "월", "화", "수", "목", "금", "토"];

function formatHeaderDate(d) {
  const yyyy = String(d.getFullYear());
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  const wd = WEEKDAYS_KO_SHORT[d.getDay()];
  return `${yyyy}. ${mm}. ${dd} (${wd})`;
}

function formatHeaderTime(d) {
  const hh = String(d.getHours()).padStart(2, "0");
  const mi = String(d.getMinutes()).padStart(2, "0");
  const ss = String(d.getSeconds()).padStart(2, "0");
  return `${hh} : ${mi} : ${ss}`;
}

function initHeaderDateTime() {
  const dateEl = document.getElementById("header-date-part");
  const timeEl = document.getElementById("header-time-part");
  if (!dateEl || !timeEl) return;

  const tick = () => {
    const now = new Date();
    dateEl.textContent = formatHeaderDate(now);
    timeEl.textContent = formatHeaderTime(now);
  };

  tick();
  window.setInterval(tick, 1000);
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** 히어로 루프 영상: ‘움직임 줄이기’에서는 재생 안 함 */
function initHeroBgVideo() {
  const v = document.querySelector(".hero-bg__video");
  if (!v) return;
  if (prefersReducedMotion()) {
    v.removeAttribute("autoplay");
    v.pause();
  }
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

/**
 * 스크롤 리빌 — [data-reveal] 요소가 뷰포트에 들어오면 나타납니다.
 * data-reveal 값으로 기법을 고릅니다: fade / up(기본) / down / left / right / scale / blur.
 *
 * [data-reveal-group]로 감싼 묶음(타임라인, 자격증 카드, 기술 스택 그룹 등)은
 * 묶음 컨테이너 하나만 관찰해서, 안의 항목이 하나씩 스크롤 위치에 따라 따로따로
 * 나타나지 않고 묶음이 뷰포트에 들어오는 순간 한꺼번에(약간의 스태거만 두고) 나타납니다.
 * 묶음이 아닌 단일 요소는 각자 뷰포트에 들어올 때 개별적으로 나타납니다.
 *
 * JS/IntersectionObserver가 없거나 '움직임 줄이기' 설정이면 즉시 모두 보여 줍니다.
 */
function initScrollReveal() {
  const groups = Array.from(document.querySelectorAll("[data-reveal-group]"));
  const groupedItems = new Set();
  groups.forEach((group) => {
    group
      .querySelectorAll("[data-reveal]")
      .forEach((el) => groupedItems.add(el));
  });

  const singleItems = Array.from(
    document.querySelectorAll("[data-reveal]")
  ).filter((el) => !groupedItems.has(el));

  if (!singleItems.length && !groups.length) return;

  if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
    singleItems.forEach((el) => el.classList.add("is-visible"));
    groupedItems.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const STAGGER_STEP = 0.08;
  const STAGGER_MAX = 5;

  // 단일 요소: 같은 부모 안에서 순서대로 스태거
  const counters = new Map();
  singleItems.forEach((el) => {
    const parent = el.parentElement;
    const count = counters.get(parent) || 0;
    counters.set(parent, count + 1);
    const delay = Math.min(count, STAGGER_MAX) * STAGGER_STEP;
    el.style.setProperty("--reveal-delay", `${delay}s`);
    el.classList.add("reveal");
  });

  // 묶음 요소: 묶음 안에서 순서대로 스태거(트리거는 묶음 전체가 담당)
  groups.forEach((group) => {
    const children = Array.from(group.querySelectorAll("[data-reveal]"));
    children.forEach((el, i) => {
      const delay = Math.min(i, STAGGER_MAX) * STAGGER_STEP;
      el.style.setProperty("--reveal-delay", `${delay}s`);
      el.classList.add("reveal");
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = entry.target;
        if (target.hasAttribute("data-reveal-group")) {
          target
            .querySelectorAll("[data-reveal]")
            .forEach((el) => el.classList.add("is-visible"));
        } else {
          target.classList.add("is-visible");
        }
        observer.unobserve(target);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );

  singleItems.forEach((el) => observer.observe(el));
  groups.forEach((group) => observer.observe(group));
}

/** 마우스로 조작 가능한 환경(터치 아님)이고 '움직임 줄이기'가 아닐 때만 포인터 추적 효과를 켭니다 */
function canHoverPrecisely() {
  return (
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !prefersReducedMotion()
  );
}

/** 스크롤 진행바 — 문서를 읽은 비율만큼 상단 바가 채워집니다 */
function initScrollProgress() {
  const bar = document.querySelector(".scroll-progress");
  if (!bar) return;

  let ticking = false;
  const update = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const max =
      document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(1, Math.max(0, scrollTop / max)) : 0;
    bar.style.transform = `scaleX(${ratio})`;
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true }
  );
  update();
}

/**
 * 네비게이션 스크롤스파이 — 현재 보고 있는 섹션에 해당하는 메뉴(상단 nav,
 * 넓은 화면의 우측 점 인디케이터)를 함께 강조합니다.
 */
function initScrollSpy() {
  const spyLinks = Array.from(
    document.querySelectorAll('.nav-list a[href^="#"], .side-dot[href^="#"]')
  );
  if (!spyLinks.length) return;

  const sectionIds = Array.from(
    new Set(spyLinks.map((a) => a.getAttribute("href")))
  );
  const sections = sectionIds
    .map((id) => document.querySelector(id))
    .filter(Boolean);
  if (!sections.length) return;

  const linksBySectionId = new Map(
    sectionIds.map((id) => [
      id,
      spyLinks.filter((a) => a.getAttribute("href") === id),
    ])
  );

  if (!("IntersectionObserver" in window)) return;

  const setActive = (id) => {
    spyLinks.forEach((a) => a.classList.remove("is-active"));
    (linksBySectionId.get(id) || []).forEach((a) =>
      a.classList.add("is-active")
    );
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        setActive(`#${entry.target.id}`);
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

/** 맨 위로 플로팅 버튼 — 일정 거리 이상 내려가면 나타납니다 */
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  const toggle = () => {
    btn.classList.toggle("is-visible", window.scrollY > 480);
  };

  window.addEventListener("scroll", toggle, { passive: true });
  toggle();

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  });
}

/** 히어로 배경의 커서 스포트라이트 — 마우스를 따라 은은한 빛이 이동합니다 */
function initHeroCursorGlow() {
  const hero = document.querySelector(".hero");
  const glow = document.getElementById("hero-cursor-glow");
  if (!hero || !glow || !canHoverPrecisely()) return;

  hero.addEventListener("pointermove", (e) => {
    const rect = hero.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    glow.style.setProperty("--cx", `${x}%`);
    glow.style.setProperty("--cy", `${y}%`);
  });
}

/**
 * 카드 스포트라이트 + 프로젝트 카드 3D 틸트
 * [.glow-card] 요소는 마우스를 따라 은은한 빛이 이동하고,
 * 그중 [.project-card]는 마우스 위치에 따라 살짝 입체적으로 기울어집니다.
 */
function initCardTiltGlow() {
  if (!canHoverPrecisely()) return;

  document.querySelectorAll(".glow-card").forEach((card) => {
    const isProjectCard = card.classList.contains("project-card");
    const maxTilt = 6;

    card.addEventListener("pointermove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--spot-x", `${(x / rect.width) * 100}%`);
      card.style.setProperty("--spot-y", `${(y / rect.height) * 100}%`);

      if (isProjectCard) {
        const px = x / rect.width - 0.5;
        const py = y / rect.height - 0.5;
        card.style.setProperty("--tilt-y", `${px * maxTilt * 2}deg`);
        card.style.setProperty("--tilt-x", `${-py * maxTilt * 2}deg`);
      }
    });

    card.addEventListener("pointerleave", () => {
      if (isProjectCard) {
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
      }
    });
  });
}

/** 히어로 통계 카운트업 — 화면에 들어오면 0부터 목표 숫자까지 올라갑니다 */
function initHeroStats() {
  const nums = Array.from(document.querySelectorAll(".hero-stat-num[data-count]"));
  if (!nums.length) return;

  if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
    nums.forEach((el) => {
      el.textContent = el.getAttribute("data-count");
    });
    return;
  }

  const animate = (el) => {
    const target = parseInt(el.getAttribute("data-count"), 10) || 0;
    const duration = 1100;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = String(Math.round(target * eased));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animate(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.6 }
  );

  nums.forEach((el) => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initNav();
  initYear();
  initHeaderDateTime();
  initHeroBgVideo();
  initScrollToTopAnchors();
  initScrollReveal();
  initScrollProgress();
  initScrollSpy();
  initBackToTop();
  initHeroCursorGlow();
  initCardTiltGlow();
  initHeroStats();
});
