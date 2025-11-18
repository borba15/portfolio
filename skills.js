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
      skills_titulo: "habilidades",
      nav_inicio: "início",
      nav_skills: "habilidades",
      nav_sobre: "sobre mim",
      nav_contato: "contato",
      projetos_titulo: "projetos",
      front: "Front-End",
      front_desc: "HTML / JavaScript / React",
      styles: "Estilos",
      styles_desc: "CSS / Bootstrap",
      back: "Back-End",
      back_desc: "Node.JS / Python",
      softwares: "Softwares",
      softwares_desc: "Pacote Office / Google Workspace / Figma / Inteligência Artificial",
      meaning_default_title: "O que isso significa?",
      meaning_default_text: 'Com essas tecnologias, é feita a criação de maneira atrativa e funcional, de aplicações e',
      meaning_default_cta: "Experiências reais, que resolvem problemas.",
      footer_inicio: "início",
      footer_skills: "habilidades",
      footer_sobre: "sobre mim",
      footer_contato: "contato",
      not_found: "404 not found"
    },
    en: {
      skills_titulo: "skills",
      projetos_titulo: "projects",
      nav_inicio: "home",
      nav_skills: "skills",
      nav_sobre: "about me",
      nav_contato: "contact",
      front: "Front-End",
      front_desc: "HTML / JavaScript / React",
      styles: "Styles",
      styles_desc: "CSS / Bootstrap",
      back: "Back-End",
      back_desc: "Node.JS / Python",
      softwares: "Softwares",
      softwares_desc: "Office Package / Google Workspace / Figma / Artificial Intelligence",
      meaning_default_title: "What does that mean?",
      meaning_default_text: 'With these technologies, attractive and functional applications and',
      meaning_default_cta: "Real experiences that solve problems.",
      footer_inicio: "home",
      footer_skills: "skills",
      footer_sobre: "about me",
      footer_contato: "contact",
      not_found: "404 not found"
    }
  };

  const skillDescriptionsFull = {
    pt: {
      front: {
        title: "O que é Front-End?",
        text: "Front-End envolve criar interfaces visuais e interativas, a estrutura visual do site.",
        cta: "Transformando ideias em experiências digitais reais."
      },
      styles: {
        title: "O que são Estilos?",
        text: "Estilos definem aparência, cores, espaçamentos e a responsividade.",
        cta: "Onde cada detalhe visual faz diferença."
      },
      back: {
        title: "O que é Back-End?",
        text: 'Back-End lida com lógica, servidores, bancos de dados, toda a parte "por trás das câmeras"',
        cta: "A lógica invisível que faz tudo acontecer."
      },
      softwares: {
        title: "O que são Softwares?",
        text: "Softwares são os programas que orientam o usuário realizar tarefas, servindo para facilitar e automatizar diversas atividades.",
        cta: "Ferramentas que potencializam resultados."
      }
    },
    en: {
      front: {
        title: "What is Front-End?",
        text: "Front-End involves creating visual and interactive interfaces, the visual structure of the website.",
        cta: "Turning ideas into real digital experiences."
      },
      styles: {
        title: "What are Styles?",
        text: "Styles define appearance, colors, spacing, and responsiveness.",
        cta: "Where every visual detail matters."
      },
      back: {
        title: "What is Back-End?",
        text: 'Back-End deals with logic, servers, databases, and all the "behind-the-scenes" parts.',
        cta: "The invisible logic making everything possible."
      },
      softwares: {
        title: "What are Softwares?",
        text: "Software programs guide the user in performing tasks, helping to simplify and automate various activities.",
        cta: "Tools that boost productivity and results."
      }
    }
  };

  const meaningBox = document.querySelector(".skills-meaning");
  const meaningTitle = document.getElementById("meaning_title");
  const meaningText = document.getElementById("meaning_text");
  const meaningCTA = document.getElementById("meaning_cta");

  let currentSkill = null;

  function animateMeaning(title, text, cta) {
    meaningBox.classList.remove("visible");
    meaningBox.classList.add("hidden");

    setTimeout(() => {
      meaningTitle.textContent = title;
      meaningText.textContent = text;
      meaningCTA.textContent = cta;

      meaningCTA.classList.remove("show");
      void meaningCTA.offsetWidth;
      meaningCTA.classList.add("show");

      meaningBox.classList.remove("hidden");
      meaningBox.classList.add("visible");
    }, 300);
  }

  function applySkillMeaning(skillKey) {
    currentSkill = skillKey;
    const lang = localStorage.getItem("lang") || "pt";
    const desc = skillDescriptionsFull[lang][skillKey];
    if (!desc) return;
    animateMeaning(desc.title, desc.text, desc.cta);
  }

  function changeLanguage(lang) {
    const t = translations[lang] || translations.pt;

    if (button) button.textContent = lang === "pt" ? "PT ▾" : "ENG ▾";
    if (mobileLangBtn) mobileLangBtn.textContent = lang === "pt" ? "PT ▾" : "ENG ▾";

    // Navbar
    const navLinks = document.querySelectorAll("#nav-right a");
    if (navLinks.length >= 4) {
      const texts = [t.nav_inicio, t.nav_skills, t.nav_sobre, t.nav_contato];
      navLinks.forEach((link, i) => link.innerHTML = `<span class="hashtag">#</span>${texts[i]}`);
    }

    // Footer
    const footerLinks = document.querySelectorAll(".footer-refs a");
    if (footerLinks.length >= 4) {
      const texts = [t.footer_inicio, t.footer_skills, t.footer_sobre, t.footer_contato];
      footerLinks.forEach((link, i) => link.innerHTML = `<span class="hashtag">#</span>${texts[i]}`);
    }

    // Skills title
    const skillsTitle = document.getElementById("skills_titulo");
    if (skillsTitle) skillsTitle.textContent = t.skills_titulo;

    // Atualiza os títulos e descrições de cada skill
    ["front", "styles", "back", "softwares"].forEach(key => {
      const top = document.getElementById(key);
      const bottom = document.getElementById(`${key}_desc`);
      if (top) top.textContent = t[key];
      if (bottom) bottom.textContent = t[`${key}_desc`];
    });

    // Projetos title
    const projetosTitle = document.getElementById("projetos_titulo");
    if (projetosTitle) projetosTitle.textContent = t.projetos_titulo;

    // Painel de significado
    if (currentSkill) {
      const desc = skillDescriptionsFull[lang][currentSkill];
      if (desc) animateMeaning(desc.title, desc.text, desc.cta);
    } else {
      animateMeaning(t.meaning_default_title, t.meaning_default_text, t.meaning_default_cta);
    }

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
  options.forEach(opt => {
    opt.addEventListener("click", () => {
      changeLanguage(opt.dataset.lang);
      dropdown.classList.remove("active");
    });
  });

  // ---------- DROPDOWN MOBILE ----------
  if (mobileLangBtn && mobileLangOptions) {
    mobileLangBtn.addEventListener("click", e => {
      e.stopPropagation();
      mobileLangOptions.classList.toggle("active");
    });
    document.addEventListener("click", e => {
      if (!mobileLangBtn.contains(e.target) && !mobileLangOptions.contains(e.target)) {
        mobileLangOptions.classList.remove("active");
      }
    });
    mobileLangOptions.querySelectorAll("div").forEach(el => {
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

  // ---------- SKILLS ----------
  document.querySelectorAll(".skills-page").forEach(box => {
    const skillKey = box.dataset.skill;

    box.addEventListener("click", () => {
      document.querySelectorAll(".skills-page").forEach(b => b.classList.remove("active"));
      box.classList.add("active");
      applySkillMeaning(skillKey);
    });

    box.addEventListener("keypress", e => {
      if (e.key === "Enter") {
        document.querySelectorAll(".skills-page").forEach(b => b.classList.remove("active"));
        box.classList.add("active");
        applySkillMeaning(skillKey);
      }
    });
  });

  // Inicializa idioma
  changeLanguage(localStorage.getItem("lang") || "pt");
});

