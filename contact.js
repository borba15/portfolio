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
      footer_skills: "skills",
      footer_sobre: "sobre mim",
      footer_contato: "contato",
      contact_top_1: "Olá.",
      contact_top_2: "Então vamos trabalhar juntos?",
      contact_email_title: "Para comissões e projetos:",
      contact_email_text: "Envie um e-mail para",
      form_name: "Nome",
      form_name_placeholder: "Seu nome completo",
      form_email: "Email",
      form_email_placeholder: "seuemail@email.com",
      form_message: "Mensagem",
      form_message_placeholder: "Escreva sua mensagem...",
      form_button: "Enviar"
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
      contact_top_1: "Hello.",
      contact_top_2: "So, shall we work together?",
      contact_email_title: "For commissions and projects:",
      contact_email_text: "Send an email to",
      form_name: "Name",
      form_name_placeholder: "Your full name",
      form_email: "Email",
      form_email_placeholder: "youremail@email.com",
      form_message: "Message",
      form_message_placeholder: "Write your message...",
      form_button: "Send"
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

    // Top contact texts
    const contactTopParagraphs = document.querySelectorAll(".contact-top-2 div p");
    if (contactTopParagraphs.length >= 2) {
      contactTopParagraphs[0].textContent = t.contact_top_1;
      contactTopParagraphs[1].textContent = t.contact_top_2;
    }

    // Email box
    const emailTitle = document.querySelector(".email-box h3");
    const emailText = document.querySelector(".email-box p");
    if (emailTitle) emailTitle.textContent = t.contact_email_title;
    if (emailText) {
      emailText.innerHTML = `${t.contact_email_text}<br><a href="mailto:leonardmborba@gmail.com" style="text-decoration: underline;">leonardmborba@gmail.com</a>`;
    }

    // Form labels and placeholders
    const formLabels = document.querySelectorAll(".submit form label");
    const formInputs = document.querySelectorAll(".submit form input, .submit form textarea");
    const formButton = document.querySelector(".submit form button");

    if (formLabels.length >= 3) {
      formLabels[0].textContent = t.form_name;
      formLabels[1].textContent = t.form_email;
      formLabels[2].textContent = t.form_message;
    }

    if (formInputs.length >= 3) {
      formInputs[0].placeholder = t.form_name_placeholder;
      formInputs[1].placeholder = t.form_email_placeholder;
      formInputs[2].placeholder = t.form_message_placeholder;
    }

    if (formButton) formButton.textContent = t.form_button;

    // Dropdown button
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
      if (!dropdown.contains(e.target)) dropdown.classList.remove("active");
    });
    options.forEach((option) => {
      option.addEventListener("click", () => {
        changeLanguage(option.dataset.lang);
        dropdown.classList.remove("active");
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

  // Hamburger menu mobile
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
