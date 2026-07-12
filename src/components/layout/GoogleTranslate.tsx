import { useEffect, useState } from "react";

const SITE_LANGUAGE = "en";
const TARGET_LANGUAGE = "pt-PT";
const INCLUDED_LANGUAGES = `${SITE_LANGUAGE},${TARGET_LANGUAGE}`;
const SCRIPT_ID = "google-translate-script";

declare global {
  interface Window {
    google?: { translate?: { TranslateElement: new (options: unknown, elementId: string) => unknown } };
    googleTranslateElementInit?: () => void;
  }
}

function clearStaleTranslateCookie() {
  // A googtrans cookie referencing a language outside INCLUDED_LANGUAGES (e.g.
  // left over from a previous configuration) makes Google's widget silently
  // fail to render the dropdown at all.
  document.cookie = "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  document.cookie = `googtrans=; path=/; domain=${window.location.hostname}; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
}

// Mounted once, globally: loads Google's translate script and keeps a hidden
// select element in the DOM that LanguageToggle drives programmatically.
export function GoogleTranslateMount() {
  useEffect(() => {
    clearStaleTranslateCookie();

    if (document.getElementById(SCRIPT_ID)) return;

    window.googleTranslateElementInit = () => {
      new window.google!.translate!.TranslateElement(
        { pageLanguage: SITE_LANGUAGE, includedLanguages: INCLUDED_LANGUAGES, autoDisplay: false },
        "google_translate_element",
      );
    };

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.async = true;
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);
  }, []);

  // Must stay laid-out (not display:none) — Google's own script relies on
  // this element's visibility to know when translation has finished and to
  // hide its loading overlay; display:none leaves that overlay stuck forever.
  return (
    <div
      id="google_translate_element"
      className="pointer-events-none absolute h-px w-px overflow-hidden whitespace-nowrap"
      style={{ clip: "rect(0 0 0 0)", clipPath: "inset(50%)" }}
    />
  );
}

export function LanguageToggle() {
  const [lang, setLang] = useState<"en" | "pt">("en");

  const toggle = () => {
    const next = lang === "en" ? "pt" : "en";
    const select = document.querySelector<HTMLSelectElement>("select.goog-te-combo");
    if (select) {
      // Google regenerates this <select>'s options after the first
      // translation: the blank placeholder option is replaced by an explicit
      // value="en" option. So reverting must target "en", not "".
      const hasExplicitEnglishOption = Array.from(select.options).some((o) => o.value === SITE_LANGUAGE);
      select.value = next === "pt" ? TARGET_LANGUAGE : hasExplicitEnglishOption ? SITE_LANGUAGE : "";
      select.dispatchEvent(new Event("change"));
    }
    setLang(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle language between English and Portuguese"
      translate="no"
      className="grid h-9 w-9 shrink-0 place-items-center rounded-full border-3 border-black text-xs font-semibold text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
    >
      {lang === "en" ? "PT" : "EN"}
    </button>
  );
}
