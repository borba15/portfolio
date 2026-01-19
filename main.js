document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".custom-dropdown");
  const button = dropdown.querySelector(".selected");
  const options = dropdown.querySelectorAll(".options li");

  const mobileLangBtn = document.getElementById("mobile-lang-btn");
  const mobileLangOptions = document.getElementById("mobile-lang-options");

  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");

  const translations = {
    pt: {
      hero_saudacao: "Olá, eu sou",
      hero_subtitulo: "Onde a tecnologia encontra a criatividade",
      hero_btn: "Currículo",
      hero_trabalhando: "Trabalhando em:",
      nav_inicio: "início",
      nav_skills: "habilidades",
      nav_sobre: "sobre mim",
      nav_contato: "contato",
      skills_titulo: "habilidades",
      sobre_titulo: "sobre mim",
      sobre_1:
        "Atualmente, estou no terceiro semestre da graduação e sigo firme no caminho para me tornar um desenvolvedor full-stack.",
      sobre_2:
        "Além da faculdade, gosto de aprofundar meus conhecimentos por conta própria — faço cursos na Udemy e estou sempre explorando novas tecnologias. Também participo de projetos com amigos, o que tem sido uma ótima forma de aprender na prática e trocar experiências sobre programação.",
      sobre_3:
        "Sou apaixonado por tecnologia, resolver problemas e ver ideias ganhando vida através do código. Cada linha que escrevo é um passo a mais em direção ao meu objetivo de construir soluções reais que façam a diferença.",
      sobre_btn: "Leia mais →",
      contato_titulo: "contate-me",
      contato_1:
        "Estou interessado em qualquer oportunidade, sejam elas estágio, jovem aprendiz, trabalho em meio período ou integral.",
      contato_2:
        "Se você tem qualquer pergunta ou dúvida, não hesite em me perguntar.",
      contato_box: "Entre em contato",
      footer_inicio: "início",
      footer_skills: "habilidades",
      footer_sobre: "sobre mim",
      footer_contato: "contato"
    },
    en: {
      hero_saudacao: "Hi, I am a",
      hero_subtitulo: "Where technology meets creativity",
      hero_btn: "Download CV",
      hero_trabalhando: "Currently working on:",
      nav_inicio: "home",
      nav_skills: "skills",
      nav_sobre: "about me",
      nav_contato: "contact",
      skills_titulo: "skills",
      sobre_titulo: "about me",
      sobre_1:
        "I am currently in the third semester of my degree and working towards becoming a full-stack developer.",
      sobre_2:
        "Besides college, I enjoy deepening my knowledge on my own — I take courses on Udemy and am always exploring new technologies. I also participate in projects with friends, which has been a great way to learn hands-on and share programming experiences.",
      sobre_3:
        "I am passionate about technology, solving problems, and seeing ideas come to life through code. Every line I write is a step closer to my goal of building real solutions that make a difference.",
      sobre_btn: "Read more →",
      contato_titulo: "contact me",
      contato_1:
        "I'm interested in any opportunity — internships, junior roles, part-time or full-time jobs.",
      contato_2: "If you have any questions, don’t hesitate to ask me.",
      contato_box: "Get in touch",
      footer_inicio: "home",
      footer_skills: "skills",
      footer_sobre: "about me",
      footer_contato: "contact"
    }
  };
  function changeLanguage(lang) {
    const t = translations[lang];

    const q = (sel) => document.querySelector(sel);
    const qa = (sel) => document.querySelectorAll(sel);

    const heroTitle = q(".hero-text h1");
    if (heroTitle) heroTitle.childNodes[0].textContent = t.hero_saudacao + " ";

    const heroSubtitle = q(".hero-text p");
    if (heroSubtitle) heroSubtitle.textContent = t.hero_subtitulo;

    const heroBtn = q(".btn-outline-light");
    if (heroBtn)
      heroBtn.innerHTML = `<i class="fa-solid fa-download"></i> ${t.hero_btn}`;

    const heroStatus = q(".status-text-l");
    if (heroStatus) heroStatus.textContent = t.hero_trabalhando;

    const navLinks = qa("#nav-right a");
    if (navLinks.length >= 4) {
      const navTexts = [
        t.nav_inicio,
        t.nav_skills,
        t.nav_sobre,
        t.nav_contato,
      ];
      navLinks.forEach((link, i) => {
        link.innerHTML = `<span class="hashtag">#</span>${navTexts[i]}`;
      });
    }

    const skillsTitle = q(".skills-title div");
    if (skillsTitle) skillsTitle.textContent = t.skills_titulo;

    const footerLinks = qa(".footer-refs a");
    if (footerLinks.length >= 4) {
      const footerTexts = [
        t.footer_inicio,
        t.footer_skills,
        t.footer_sobre,
        t.footer_contato,
      ];
      footerLinks.forEach((link, i) => {
        link.innerHTML = `<span class="hashtag">#</span>${footerTexts[i]}`;
      });
    }

    const aboutTitle = q(".about-title div");
    if (aboutTitle) aboutTitle.textContent = t.sobre_titulo;

    const aboutParagraphs = qa(".about-text p");
    if (aboutParagraphs.length >= 4) {
        aboutParagraphs[0].textContent = t.sobre_0;
        aboutParagraphs[1].textContent = t.sobre_1;
        aboutParagraphs[2].textContent = t.sobre_2;
        aboutParagraphs[3].textContent = t.sobre_3;
    }

    const sobreBtn = q(".about-text .btn-outline-light");
    if (sobreBtn) sobreBtn.textContent = t.sobre_btn;

    const contactTitle = q(".contact-title div");
    if (contactTitle) contactTitle.textContent = t.contato_titulo;

    const contactParagraphs = qa(".contact-text p");
    if (contactParagraphs.length > 0) {
      contactParagraphs[0].textContent = t.contato_1 + " " + t.contato_2;
    }

    const contactTop = q(".contact-box .contact-top");
    if (contactTop) contactTop.textContent = t.contato_box;

    if (button) button.textContent = lang === "pt" ? "PT ▾" : "ENG ▾";

    if (mobileLangBtn)
      mobileLangBtn.textContent = lang === "pt" ? "PT ▾" : "ENG ▾";

    localStorage.setItem("lang", lang);
  }

  // ---------- DROPDOWN DESKTOP ----------
  button.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) dropdown.classList.remove("active");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      changeLanguage(option.dataset.lang);
      dropdown.classList.remove("active");
    });
  });

// ---------- DROPDOWN MOBILE ----------
if (mobileLangBtn && mobileLangOptions) {
  mobileLangBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileLangOptions.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!mobileLangBtn.contains(e.target) && !mobileLangOptions.contains(e.target)) {
      mobileLangOptions.classList.remove("active");
    }
  });

  mobileLangOptions.querySelectorAll("div").forEach((el) => {
    el.addEventListener("click", () => {
      changeLanguage(el.dataset.lang);
      mobileLangOptions.classList.remove("active");
    });
  });
}

  // ---------- HAMBURGUER / MENU MOBILE ----------
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });

  changeLanguage(localStorage.getItem("lang") || "pt");

});

