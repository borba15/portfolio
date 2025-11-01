document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".custom-dropdown");
  const button = dropdown.querySelector(".selected");
  const options = dropdown.querySelectorAll(".options li");

  const translations = {
    pt: {
      skills_titulo: "habilidades",
      projetos_titulo: "projetos",
      front: "Front-End",
      front_desc: "HTML / JavaScript / React",
      styles: "Estilos",
      styles_desc: "CSS / Bootstrap",
      back: "Back-End",
      back_desc: "Node.JS",
      meaning_title: "O que isso significa?",
      meaning_text:
        'Todas estas linguagens que eu trabalho conseguem criar de maneira atrativa, sites, aplicativos e <br><span>Experiências reais e que resolvem problemas!</span>',
      not_found: "#404 not found",
    },
    en: {
      skills_titulo: "skills",
      projetos_titulo: "projects",
      front: "Front-End",
      front_desc: "HTML / JavaScript / React",
      styles: "Styles",
      styles_desc: "CSS / Bootstrap",
      back: "Back-End",
      back_desc: "Node.JS",
      meaning_title: "What does that mean?",
      meaning_text:
        'All these languages I work with can create attractive websites, apps and <br><span>Real experiences that solve problems!</span>',
      not_found: "#404 not found",
    },
  };

  function changeLanguage(lang) {
    const t = translations[lang];

    const skillsTitle = document.querySelectorAll(".skills-title div")[0];
    if (skillsTitle) skillsTitle.textContent = t.skills_titulo;

    const projetosTitle = document.querySelectorAll(".skills-title div")[1];
    if (projetosTitle) projetosTitle.textContent = t.projetos_titulo;

    const skillSections = document.querySelectorAll(".skills-page");
    if (skillSections.length >= 3) {
      skillSections[0].querySelector(".skills-top span").textContent = t.front;
      skillSections[0].querySelector(".skills-bottom span").textContent = t.front_desc;

      skillSections[1].querySelector(".skills-top span").textContent = t.styles;
      skillSections[1].querySelector(".skills-bottom span").textContent = t.styles_desc;

      skillSections[2].querySelector(".skills-top span").textContent = t.back;
      skillSections[2].querySelector(".skills-bottom span").textContent = t.back_desc;
    }

    const meaningTitle = document.querySelector(".meaning-top div");
    if (meaningTitle) meaningTitle.textContent = t.meaning_title;

    const meaningText = document.querySelector(".meaning-bottom div");
    if (meaningText) meaningText.innerHTML = t.meaning_text;

    const notFound = document.querySelector("#a9KKSDmanutenção");
    if (notFound) notFound.innerHTML = `<span class="hashtag">#</span>${t.not_found}`;

    button.textContent = lang === "pt" ? "Português ▾" : "English ▾";

    localStorage.setItem("lang", lang);
  }

  button.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("active");
    }
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      const selectedLang = option.dataset.lang;
      dropdown.classList.remove("active");
      changeLanguage(selectedLang);
    });
  });

  const savedLang = localStorage.getItem("lang") || "pt";
  changeLanguage(savedLang);
});
