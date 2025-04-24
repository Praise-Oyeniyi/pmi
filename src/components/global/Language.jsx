import { useEffect } from "react";

function TranslateComponent() {
  useEffect(() => {
    const existingElements = document.querySelectorAll('.google-translate-element, #google_translate_script');
    existingElements.forEach(el => el.remove());

    const googleTranslateScript = document.createElement("script");
    googleTranslateScript.type = "text/javascript";
    googleTranslateScript.async = true;
    googleTranslateScript.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

    document.body.appendChild(googleTranslateScript);

    // Callback function for Google Translate
    window.googleTranslateElementInit = function () {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages:
            "en,es,de,zh,fr,ru,ar,hi,bn,te,mr,ta,gu,kn,ml,pa,ja",
            autoDisplay: true,
        },
        "google_translate_element"
      );
    };
    
  }, []);

  return (
    <div
      className="text-white custom-google-translate border"
      id="google_translate_element"
    ></div>
  ); 
}

export default TranslateComponent;

