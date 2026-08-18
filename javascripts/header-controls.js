(() => {
  const selector = [
    'label.md-header__button[for="__drawer"]',
    'label.md-header__button[for="__search"]',
  ].join(",");
  const mermaidSelector = ".md-typeset .mermaid, .md-typeset pre.mermaid";
  let mermaidPoll = null;
  let chromeObserversBound = false;

  const mermaidTheme = () => (
    document.body.getAttribute("data-md-color-scheme") === "slate" ? "dark" : "default"
  );

  const storeMermaidSource = (el) => {
    if (!el.dataset.mermaidSource) {
      el.dataset.mermaidSource = (el.textContent || "").trim();
    }
  };

  const headingPlainText = (heading) => {
    const clone = heading.cloneNode(true);
    clone.querySelectorAll("a.headerlink, .md-permalink").forEach((node) => node.remove());
    return (clone.textContent || "").replace(/\s+/g, " ").trim();
  };

  const nearestPrecedingHeading = (el) => {
    let current = el;
    while (current && current !== document.body) {
      let sibling = current.previousElementSibling;
      while (sibling) {
        if (sibling.matches("h2, h3")) {
          return headingPlainText(sibling);
        }
        sibling = sibling.previousElementSibling;
      }
      current = current.parentElement;
    }
    return "";
  };

  const wrapMermaidFigures = () => {
    const blocks = Array.from(document.querySelectorAll(mermaidSelector));
    blocks.forEach((el, index) => {
      storeMermaidSource(el);
      if (el.closest("figure")) return;
      const prev = el.previousElementSibling;
      const hasManualCaption = Boolean(
        prev && prev.tagName === "P" && /^\s*Figure\b/i.test(prev.textContent || "")
      );
      const heading = hasManualCaption ? "" : nearestPrecedingHeading(el);
      const figure = document.createElement("figure");
      figure.className = "mermaid-wrap";
      el.parentNode.insertBefore(figure, el);
      figure.appendChild(el);
      if (hasManualCaption) return;
      const caption = document.createElement("figcaption");
      caption.textContent = heading
        ? `Figure ${index + 1} · ${heading}`
        : `Figure ${index + 1}`;
      figure.appendChild(caption);
    });
  };

  const renderMermaid = (theme) => {
    if (!window.mermaid || typeof window.mermaid.initialize !== "function") return false;
    wrapMermaidFigures();
    document.querySelectorAll(mermaidSelector).forEach((el) => {
      const source = el.dataset.mermaidSource;
      if (!source) return;
      el.removeAttribute("data-processed");
      el.textContent = source;
    });
    window.mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      theme: theme || mermaidTheme(),
      themeVariables: {
        fontFamily: "IBM Plex Sans, Segoe UI, sans-serif",
      },
    });
    if (typeof window.mermaid.run === "function") {
      window.mermaid.run({ querySelector: mermaidSelector });
    }
    return true;
  };

  const waitForMermaid = (timeoutMs = 3000) => {
    if (renderMermaid()) return;
    if (mermaidPoll) return;
    const started = Date.now();
    mermaidPoll = window.setInterval(() => {
      if (renderMermaid() || Date.now() - started >= timeoutMs) {
        window.clearInterval(mermaidPoll);
        mermaidPoll = null;
      }
    }, 80);
  };

  const tableToTsv = (table) => (
    Array.from(table.rows).map((row) => (
      Array.from(row.cells).map((cell) => (
        cell.innerText.replace(/\t/g, " ").replace(/\r?\n/g, " ").trim()
      )).join("\t")
    )).join("\n")
  );

  const copyText = async (text) => {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      await navigator.clipboard.writeText(text);
      return;
    }
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.left = "-9999px";
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    document.body.removeChild(area);
  };

  const enhanceTables = () => {
    document.querySelectorAll(".md-typeset table").forEach((table) => {
      if (table.dataset.copyReady === "true") return;
      table.dataset.copyReady = "true";
      const button = document.createElement("button");
      button.type = "button";
      button.className = "hb-copy-table";
      button.setAttribute("aria-label", "Copy table");
      button.textContent = "Copy table";
      button.addEventListener("click", async () => {
        try {
          await copyText(tableToTsv(table));
          button.textContent = "Copied";
          window.setTimeout(() => {
            button.textContent = "Copy table";
          }, 1600);
        } catch (_error) {
          button.textContent = "Copy failed";
          window.setTimeout(() => {
            button.textContent = "Copy table";
          }, 1600);
        }
      });
      const host = table.closest(".md-typeset__scrollwrap") || table.parentNode;
      if (host === table.parentNode) {
        host.insertBefore(button, table);
      } else {
        host.insertBefore(button, host.firstChild);
      }
    });
  };

  const bindChromeObservers = () => {
    if (chromeObserversBound || !document.body) return;
    chromeObserversBound = true;
    const observer = new MutationObserver(() => {
      renderMermaid();
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-md-color-scheme"],
    });
    window.addEventListener("beforeprint", () => {
      renderMermaid("default");
    });
    window.addEventListener("afterprint", () => {
      renderMermaid();
    });
  };

  const enhance = () => {
    document.querySelectorAll(selector).forEach((button) => {
      if (button.dataset.keyboardToggle === "true") return;
      const toggle = document.getElementById(button.htmlFor);
      if (!toggle) return;

      const sync = () => {
        button.setAttribute("aria-expanded", String(toggle.checked));
      };

      button.dataset.keyboardToggle = "true";
      button.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        event.stopPropagation();
        if (event.repeat) return;
        toggle.click();
      });
      button.addEventListener("keyup", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        event.stopPropagation();
      });
      toggle.addEventListener("change", sync);
      sync();
    });
    document.querySelectorAll("button.md-code__button").forEach((button) => {
      if (!button.hasAttribute("aria-label")) {
        button.setAttribute("aria-label", "Copy code to clipboard");
      }
      if (!button.hasAttribute("type")) button.setAttribute("type", "button");
    });

    const query = document.querySelector('[data-md-component="search-query"]');
    const result = document.querySelector('[data-md-component="search-result"]');
    const meta = result && result.querySelector(".md-search-result__meta");
    if (meta) {
      meta.setAttribute("role", "status");
      meta.setAttribute("aria-live", "polite");
      meta.setAttribute("aria-atomic", "true");
    }
    if (query && result && query.dataset.searchReadiness !== "true") {
      query.dataset.searchReadiness = "true";
      const replayStrandedQuery = (expectedValue) => {
        if (query.value !== expectedValue) return;
        query.dispatchEvent(new KeyboardEvent("keyup", {
          bubbles: true,
          key: query.value.slice(-1) || "Unidentified",
        }));
      };
      const scheduleReplay = () => {
        const expectedValue = query.value;
        [0, 350, 1000].forEach((delay) => {
          window.setTimeout(() => replayStrandedQuery(expectedValue), delay);
        });
      };
      query.addEventListener("input", scheduleReplay);
      scheduleReplay();
    }

    bindChromeObservers();
    waitForMermaid();
    enhanceTables();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", enhance, { once: true });
  } else {
    enhance();
  }
  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(enhance);
  }
})();
