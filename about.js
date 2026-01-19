document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".custom-dropdown");
  const button = dropdown ? dropdown.querySelector(".selected") : null;
  const options = dropdown ? dropdown.querySelectorAll(".options li") : [];

  const mobileLangBtn = document.getElementById("mobile-lang-btn");
  const mobileLangOptions = document.getElementById("mobile-lang-options");

  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");

  const translations = {
    pt: {
      nav_inicio: "início",
      nav_skills: "habilidades",
      nav_sobre: "sobre mim",
      nav_contato: "contato",
      footer_inicio: "início",
      footer_skills: "habilidades",
      footer_sobre: "sobre mim",
      footer_contato: "contato",
      sobre_title: "introdução",
      sobre_1: `Olá! Eu sou o Leonardo de Menezes Borba, estudante de Sistemas de Informação na UNIFAFIBE, atualmente no terceiro semestre da graduação. Desde cedo, descobri uma grande paixão por tecnologia e por entender como as coisas funcionam. Hoje, sigo determinado a me tornar um desenvolvedor full-stack, unindo lógica, design e criatividade para construir experiências digitais.`,
      sobre_2: `No meu dia a dia, gosto de trabalhar com as ferramentas que já uso, mas também estou sempre aberto a explorar novas tecnologias e frameworks. Tenho grande interesse por inteligência artificial, ciência de dados e inovação tecnológica — áreas que me inspiram a pensar em soluções criativas e a aprender continuamente.`,
      sobre_3: `Além da parte técnica, valorizo muito a comunicação clara, a organização e a proatividade. Acredito que um bom desenvolvedor não apenas escreve código, mas entende o propósito do projeto e contribui para torná-lo melhor em todos os aspectos.`,
      atras_title: "atrás da tela",
      atras_1: `Fora do computador, sou alguém que gosta de jogar videogame, ouvir MPB, lofi e rock clássico, e tenho uma grande admiração por ciência e astronomia. Também sou fã de filmes como De Volta para o Futuro e Interestellar, que reforçam minha curiosidade sobre o tempo, o espaço e as possibilidades infinitas do conhecimento.`,
      atras_2: `Violino... sou apaixonado por este instrumento e me dedico muito a ele, sou músico e toco na orquestra musical da CCB.`,
      atras_3: `Sou movido por desafios e pelo desejo de criar soluções que gerem impacto positivo, sempre com foco em aprender, evoluir e fazer parte de algo maior.`,
      atras_4: `Meu próximo passo é conquistar uma vaga em minha área, especialmente se eu puder aprender bastante com ela!`
    },
    en: {
      nav_inicio: "home",
      nav_skills: "skills",
      nav_sobre: "about me",
      nav_contato: "contact",
      footer_inicio: "home",
      footer_skills: "skills",
      footer_sobre: "about me",
      footer_contato: "contact",
      sobre_title: "introduction",
      sobre_1: `Hello! I'm Leonardo de Menezes Borba, an Information Systems student at UNIFAFIBE, currently in my third semester. From an early age, I developed a great passion for technology and for understanding how things work. Today, I’m determined to become a full-stack developer, combining logic, design, and creativity to build digital experiences.`,
      sobre_2: `In my daily life, I enjoy working with the tools I already know, but I’m always open to exploring new technologies and frameworks. I’m very interested in artificial intelligence, data science, and technological innovation — areas that inspire me to think creatively and keep learning.`,
      sobre_3: `Beyond the technical side, I highly value clear communication, organization, and proactivity. I believe a good developer not only writes code but also understands the project’s purpose and contributes to improving it in every aspect.`,
      atras_title: "behind the screen",
      atras_1: `Away from the computer, I’m someone who loves playing video games, listening to MPB, lofi, and classic rock, and I have a deep admiration for science and astronomy. I’m also a big fan of movies like Back to the Future and Interstellar, which feed my curiosity about time, space, and the endless possibilities of knowledge.`,
      atras_2: `Violin... I’m passionate about this instrument and dedicate a lot of time to it — I’m a musician and play in the CCB orchestra.`,
      atras_3: `I’m driven by challenges and the desire to create solutions that have a positive impact, always focused on learning, evolving, and being part of something bigger.`,
      atras_4: `My next goal is to land a position in my field, especially if it allows me to keep learning a lot!`
    }
  };

  function changeLanguage(lang) {
    const t = translations[lang] || translations.pt;

    // Navbar
    const navLinks = document.querySelectorAll("#nav-right a");
    if (navLinks.length >= 4) {
      navLinks[0].innerHTML = `<span class="hashtag">#</span>${t.nav_inicio}`;
      navLinks[1].innerHTML = `<span class="hashtag">#</span>${t.nav_skills}`;
      navLinks[2].innerHTML = `<span class="hashtag">#</span>${t.nav_sobre}`;
      navLinks[3].innerHTML = `<span class="hashtag">#</span>${t.nav_contato}`;
    }

    // Footer
    const footerLinks = document.querySelectorAll(".footer-refs a");
    if (footerLinks.length >= 4) {
      footerLinks[0].innerHTML = `<span class="hashtag">#</span>${t.footer_inicio}`;
      footerLinks[1].innerHTML = `<span class="hashtag">#</span>${t.footer_skills}`;
      footerLinks[2].innerHTML = `<span class="hashtag">#</span>${t.footer_sobre}`;
      footerLinks[3].innerHTML = `<span class="hashtag">#</span>${t.footer_contato}`;
    }

    // Sobre
    const aboutTitle = document.querySelector("#about-title");
    if (aboutTitle) aboutTitle.textContent = t.sobre_title;

    const aboutParagraphs = document.querySelectorAll(".about-content .about-paragraphs p");
    if (aboutParagraphs.length >= 3) {
      aboutParagraphs[0].textContent = t.sobre_1;
      aboutParagraphs[1].textContent = t.sobre_2;
      aboutParagraphs[2].textContent = t.sobre_3;
    }

    // Atrás da tela
    const behindTitle = document.querySelector(".atras-da-tela .about-title div");
    if (behindTitle) behindTitle.textContent = t.atras_title;

    const behindParagraphs = document.querySelectorAll(".atras-da-tela .about-paragraphs p");
    if (behindParagraphs.length >= 4) {
      behindParagraphs[0].textContent = t.atras_1;
      behindParagraphs[1].textContent = t.atras_2;
      behindParagraphs[2].textContent = t.atras_3;
      behindParagraphs[3].textContent = t.atras_4;
    }

    // Atualiza botão
    if (button) button.textContent = lang === "pt" ? "PT ▾" : "ENG ▾";

    if (mobileLangBtn) mobileLangBtn.textContent = lang === "pt" ? "PT ▾" : "ENG ▾";

    localStorage.setItem("lang", lang);
  }

  // Dropdown desktop
  if (button && dropdown) {
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
  }

  // Dropdown mobile
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

  // Hamburger / menu mobile
  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      mobileMenu.classList.toggle("active");
    });
  }

  // Inicializa idioma
  const savedLang = localStorage.getItem("lang") || "pt";
  changeLanguage(savedLang);
});

