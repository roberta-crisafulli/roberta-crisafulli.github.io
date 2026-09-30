(function () {
  var STORAGE_KEY = "lang";

  var copy = {
    it: {
      title: "Roberta Crisafulli",
      description: "Portfolio di Roberta Crisafulli: fotografia e audiovisivo, Accademia di Belle Arti di Roma.",
      langLabel: "Lingua",
      kicker: "Fotografia e audiovisivo",
      intro: "Roberta Crisafulli lavora tra fotografia e audiovisivo nella Scuola di Fotografia, Cinema e Audiovisivo dell’Accademia di Belle Arti di Roma.",
      worksHeading: "Opere",
      worksNote: "Selezione di lavori e crediti pubblici.",
      divietoBody: "Opera audiovisiva realizzata con Alice Capuano e Sara Dongiovanni, presentata in ARCH(L)IVE, notte di performance della Scuola di Fotografia, Cinema e Audiovisivo, nel progetto di ricerca Dataversi e in collaborazione con Oltre Studio.",
      divietoLink: "ARCH(L)IVE, Accademia di Belle Arti di Roma",
      clusterBody: "Credito fotografico dell’installazione esposta nel maggio 2026 nella Galleria dell’Accademia di Belle Arti di Roma, nell’ambito del progetto EAR – Enacting Artistic Research.",
      clusterLink: "OperaViva",
      cosmoLink: "Behance",
      linksHeading: "Collegamenti"
    },
    en: {
      title: "Roberta Crisafulli",
      description: "Portfolio of Roberta Crisafulli: photography and audiovisual work, Academy of Fine Arts in Rome.",
      langLabel: "Language",
      kicker: "Photography and audiovisual",
      intro: "Roberta Crisafulli works across photography and audiovisual media in the School of Photography, Cinema and Audiovisual at the Academy of Fine Arts in Rome.",
      worksHeading: "Works",
      worksNote: "A selection of public works and credits.",
      divietoBody: "Audiovisual piece made with Alice Capuano and Sara Dongiovanni, presented at ARCH(L)IVE, a performance night of the School of Photography, Cinema and Audiovisual, within the Dataversi research project and in collaboration with Oltre Studio.",
      divietoLink: "ARCH(L)IVE, Academy of Fine Arts in Rome",
      clusterBody: "Photo credit for the installation shown in May 2026 in the Gallery of the Academy of Fine Arts in Rome, as part of the EAR – Enacting Artistic Research project.",
      clusterLink: "OperaViva",
      cosmoLink: "Behance",
      linksHeading: "Links"
    }
  };

  function apply(lang) {
    if (!copy[lang]) {
      lang = "it";
    }

    var strings = copy[lang];
    document.documentElement.lang = lang;
    document.title = strings.title;

    var meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", strings.description);
    }

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (Object.prototype.hasOwnProperty.call(strings, key)) {
        el.textContent = strings[key];
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (Object.prototype.hasOwnProperty.call(strings, key)) {
        el.setAttribute("aria-label", strings[key]);
      }
    });

    document.querySelectorAll("[data-set-lang]").forEach(function (button) {
      button.setAttribute("aria-pressed", button.getAttribute("data-set-lang") === lang ? "true" : "false");
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      /* Private browsing can block storage; the visible language still updates. */
    }
  }

  document.querySelectorAll("[data-set-lang]").forEach(function (button) {
    button.addEventListener("click", function () {
      apply(button.getAttribute("data-set-lang"));
    });
  });

  var initial = "it";
  try {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "it" || saved === "en") {
      initial = saved;
    }
  } catch (error) {
    initial = "it";
  }

  apply(initial);
})();
