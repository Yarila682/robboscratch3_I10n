import en from 'react-intl/locale-data/en';
import ar from 'react-intl/locale-data/ar';
import de from 'react-intl/locale-data/de';
import es from 'react-intl/locale-data/es';
import he from 'react-intl/locale-data/he';
import ru from 'react-intl/locale-data/ru';
import locales from './supported-locales.js';

let localeData = locales;
localeData.en.localeData = en;
localeData.ar.localeData = ar;
localeData.de.localeData = de;
localeData.es.localeData = es;
localeData.he.localeData = he;
localeData.ru.localeData = ru;

export {
    localeData as default
};
