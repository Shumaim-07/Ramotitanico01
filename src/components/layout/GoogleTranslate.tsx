import { useEffect } from "react";

const SITE_LANGUAGE = "en";
const INCLUDED_LANGUAGES = "en,pt-PT";
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

export function GoogleTranslate() {
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

  return (
    <div className="fixed bottom-4 right-4 z-50 rounded-full border border-border bg-card px-3 py-2 shadow-[var(--shadow-elevated)]">
      <div id="google_translate_element" className="google-translate-widget" />
    </div>
  );
}
