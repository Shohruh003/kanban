import { useContext, useMemo } from 'react';
import { CoreContext } from "../core/CoreContext";

export default function useLocale(_locale: { [language: string]: any } = { ru: {} }) {
    const { locale: globalLocale, language } = useContext(CoreContext);

    return useMemo(() => {
        const additionalLocale = typeof _locale === 'function' ? _locale() : _locale;
        return ({ ...globalLocale[language], ...additionalLocale[language] });
    }, [language, _locale, globalLocale]);
}