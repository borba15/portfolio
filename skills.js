document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".custom-dropdown");
  const button = dropdown ? dropdown.querySelector(".selected") : null;
  const options = dropdown ? dropdown.querySelectorAll(".options li") : [];

  const translations = {
    pt: {
      skills_titulo: "habilidades",
      projetos_titulo: "projetos",
      front: "Front-End",
      front_desc: "HTML / JavaScript / React",
      styles: "Estilos",
      styles_desc: "CSS / Bootstrap",
      back: "Back-End",
      back_desc: "Node.JS / Python",
      softwares: "Softwares",
      softwares_desc: "Pacote Office / Google Workspace / Figma / Inteligência Artificial",
      meaning_title: "O que isso significa?",
      meaning_text:
        'Todas estas linguagens que eu trabalho conseguem criar de maneira atrativa, sites, aplicativos e <br><span>Experiências reais e que resolvem problemas!</span>',
      not_found: "404 not found",
      footer_inicio: "início",
      footer_skills: "habilidades",
      footer_sobre: "sobre mim",
      footer_contato: "contato"
    },
    en: {
      skills_titulo: "skills",
      projetos_titulo: "projects",
      front: "Front-End",
      front_desc: "HTML / JavaScript / React",
      styles: "Styles",
      styles_desc: "CSS / Bootstrap",
      back: "Back-End",
      back_desc: "Node.JS / Python",
      softwares: "Softwares",
      softwares_desc: "Office Package / Google Workspace / Figma / Artificial Intelligence",
      meaning_title: "What does that mean?",
      meaning_text:
        'All these languages I work with can create attractive websites, apps and <br><span>Real experiences that solve problems!</span>',
      not_found: "404 not found",
      footer_inicio: "home",
      footer_skills: "skills",
      footer_sobre: "about me",
      footer_contato: "contact"
    }
  };

  function changeLanguage(lang) {
    const t = translations[lang] || translations.pt;

    const skillsTitle = document.querySelector("#skills_titulo");
    if (skillsTitle) skillsTitle.textContent = t.skills_titulo;

    const skillPages = document.querySelectorAll(".skills-page");
    if (skillPages.length >= 4) {
      skillPages[0].querySelector(".skills-top").textContent = t.front;
      skillPages[0].querySelector(".skills-bottom").textContent = t.front_desc;
      skillPages[1].querySelector(".skills-top").textContent = t.styles;
      skillPages[1].querySelector(".skills-bottom").textContent = t.styles_desc;
      skillPages[2].querySelector(".skills-top").textContent = t.back;
      skillPages[2].querySelector(".skills-bottom").textContent = t.back_desc;
      skillPages[3].querySelector(".skills-top").textContent = t.softwares;
      skillPages[3].querySelector(".skills-bottom").textContent = t.softwares_desc;
    }

    const meaningTitle = document.querySelector("#meaning_title");
    if (meaningTitle) meaningTitle.innerHTML = t.meaning_title;

    const meaningText = document.querySelector("#meaning_text");
    if (meaningText) meaningText.innerHTML = t.meaning_text;

    const notFound = document.getElementById("a9KKSDmanutenção");
    if (notFound) notFound.innerHTML = `<span class="hashtag">#</span>${t.not_found}`;

    const footerLinks = document.querySelectorAll(".footer-refs a");
    if (footerLinks.length >= 4) {
      footerLinks[0].innerHTML = `<span class="hashtag">#</span>${t.footer_inicio}`;
      footerLinks[1].innerHTML = `<span class="hashtag">#</span>${t.footer_skills}`;
      footerLinks[2].innerHTML = `<span class="hashtag">#</span>${t.footer_sobre}`;
      footerLinks[3].innerHTML = `<span class="hashtag">#</span>${t.footer_contato}`;
    }

    if (button) button.textContent = lang === "pt" ? "Português ▾" : "English ▾";

    localStorage.setItem("lang", lang);
  }

  if (button && dropdown) {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("active");
    });
  }

  document.addEventListener("click", (e) => {
    if (dropdown && !dropdown.contains(e.target)) dropdown.classList.remove("active");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      const selectedLang = option.dataset.lang;
      if (dropdown) dropdown.classList.remove("active");
      changeLanguage(selectedLang);
    });
  });

  const savedLang = localStorage.getItem("lang") || "pt";
  changeLanguage(savedLang);
});
