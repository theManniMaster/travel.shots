import i18next from "i18next";
import { initReactI18next } from "react-i18next";

/**
 * i18next implementation. Translations will be added as separate resource bundles.
 */
i18next
    .use(initReactI18next)
    .init({
        lng: "en",
        fallbackLng: "en",
        resources: {},
    });

export default i18next;