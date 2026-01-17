import type { Education } from '../types/cv';

export const educationData: Education[] = [
    {
        id: "univ-toulouse",
        institution: "Paul Sabatier (UT3)",
        location: "Toulouse",
        degree: { fr: "Licence 1 : STAPS", en: "Bachelor 1 : STAPS (Sports Science)" },
        startDate: "09/2025",
        endDate: "En cours",
        details: []
    },
    {
        id: "bac",
        institution: "Lycée",
        location: "France",
        degree: { fr: "Baccalauréat", en: "High School Diploma (Baccalauréat)" },
        startDate: "2025",
        endDate: "2025",
        details: [
            { fr: "Mentions assez bien", en: "Honors: Good" },
            { fr: "Spécialité SES, SVT", en: "Specialty: Social Sciences, Life & Earth Sciences" }
        ]
    }
];
