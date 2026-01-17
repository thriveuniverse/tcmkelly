import type { Certification } from '../types/cv';

export const certificationsData: Certification[] = [
    {
        id: "psc1",
        name: { fr: "PSC1 (Premiers Secours en Équipe)", en: "PSC1 (Level 1 First Aid)" },
        issuer: "Croix-Rouge",
        date: "2024" // Estimated
    },
    {
        id: "safety",
        name: { fr: "Connaissance des règles de sécurité", en: "Safety Rules Knowledge" },
        issuer: "FFME / Education Nationale",
    }
];
