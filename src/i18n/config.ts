import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'fr',
        load: 'languageOnly', // Only use 'en', 'fr', ignoring 'en-US'
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    nav: {
                        home: "Home",
                        experience: "Experience",
                        sports: "Sports",
                        gallery: "Gallery",
                        cv: "Print CV"
                    },
                    hero: {
                        download: "Download CV",
                        contact: "Contact Me"
                    },
                    titles: {
                        about: "About Me",
                        experience: "Professional Experience",
                        education: "Education & Certifications",
                        skills: "Skills & Competences"
                    }
                }
            },
            fr: {
                translation: {
                    nav: {
                        home: "Accueil",
                        experience: "Expérience",
                        sports: "Sports",
                        gallery: "Galerie",
                        cv: "Imprimer CV"
                    },
                    hero: {
                        download: "Télécharger CV",
                        contact: "Me Contacter"
                    },
                    titles: {
                        about: "À Propos",
                        experience: "Expérience Professionnelle",
                        education: "Formation & Diplômes",
                        skills: "Compétences"
                    }
                }
            }
        }
    });

export default i18n;
