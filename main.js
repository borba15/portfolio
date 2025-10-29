document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".custom-dropdown");
  const button = dropdown.querySelector(".selected");
  const options = dropdown.querySelectorAll(".options li");

  const translations = {
    pt: {
      hero_saudacao: "Olá, eu sou",
      hero_subtitulo: "Onde a tecnologia encontra a criatividade",
      hero_btn: "Contate-Me",
      hero_trabalhando: "Trabalhando em",
      nav_inicio: "início",
      nav_skills: "skills",
      nav_sobre: "sobre mim",
      nav_contato: "contato",
      sobre_titulo: "sobre mim",
      sobre_1:
        "Atualmente, estou no segundo semestre da graduação e sigo firme no caminho para me tornar um desenvolvedor back-end.",
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
      footer_skills: "skills",
      footer_sobre: "sobre mim",
      footer_contato: "contato"
    },
    en: {
      hero_saudacao: "Hi, I am",
      hero_subtitulo: "Where technology meets creativity",
      hero_btn: "Contact Me",
      hero_trabalhando: "Currently working on",
      nav_inicio: "home",
      nav_skills: "skills",
      nav_sobre: "about me",
      nav_contato: "contact",
      sobre_titulo: "about me",
      sobre_1:
        "I am currently in the second semester of my degree and working towards becoming a back-end developer.",
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

    // Hero
    const heroTitle = document.querySelector(".hero-text h1");
    if (heroTitle) heroTitle.childNodes[0].textContent = t.hero_saudacao + " ";
    const heroSubtitle = document.querySelector(".hero-text p");
    if (heroSubtitle) heroSubtitle.textContent = t.hero_subtitulo;
    const heroBtn = document.querySelector(".btn-outline-light");
    if (heroBtn) heroBtn.textContent = t.hero_btn;
    const heroStatus = document.querySelector(".status-text-l");
    if (heroStatus) heroStatus.textContent = t.hero_trabalhando;
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
    const aboutTitle = document.querySelector(".about-title div");
    if (aboutTitle) aboutTitle.textContent = t.sobre_titulo;
    const aboutParagraphs = document.querySelectorAll(".about-text p");
    if (aboutParagraphs.length >= 3) {
      aboutParagraphs[0].textContent = t.sobre_1;
      aboutParagraphs[1].textContent = t.sobre_2;
      aboutParagraphs[2].textContent = t.sobre_3;
      aboutParagraphs[3].textContent = t.sobre_4;
    }
    const sobreBtn = document.querySelector(".about-text .btn-outline-light");
    if (sobreBtn) sobreBtn.textContent = t.sobre_btn;

    // Contato
    const contactTitle = document.querySelector(".contact-title div");
    if (contactTitle) contactTitle.textContent = t.contato_titulo;
    const contactParagraphs = document.querySelectorAll(".contact-text p");
    if (contactParagraphs.length > 0) {
      contactParagraphs[0].textContent = t.contato_1 + " " + t.contato_2;
    }
    const contactTop = document.querySelector(".contact-box .contact-top");
    if (contactTop) contactTop.textContent = t.contato_box;

    // Atualiza botão do dropdown
    if (button) {
      button.textContent = lang === "pt" ? "Português ▾" : "English ▾";
    }

    // Salva a língua
    localStorage.setItem("lang", lang);
  }

  // Dropdown behavior
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

  // Carrega idioma salvo
  const savedLang = localStorage.getItem("lang") || "pt";
  changeLanguage(savedLang);
});
