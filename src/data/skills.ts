import type { Skill } from '../types/cv';

export const skillsData: Skill[] = [
    {
        category: { fr: "Relationnel & Communication", en: "Interpersonal & Communication" },
        items: [
            { fr: "Aisance relationnelle avec enfants, adolescents et parents", en: "Interpersonal ease with children, teens, and parents" },
            { fr: "Sens de l'écoute et empathie", en: "Active listening and empathy" },
            { fr: "Gestion des conflits et médiation", en: "Conflict management and mediation" },
            { fr: "Travail en équipe et coopération", en: "Teamwork and cooperation" }
        ]
    },
    {
        category: { fr: "Organisation & Gestion", en: "Organization & Management" },
        items: [
            { fr: "Gestion de groupe et maintien d'un climat serein", en: "Group management and maintaining a calm atmosphere" },
            { fr: "Organisation et gestion du temps", en: "Organization and time management" },
            { fr: "Créativité (jeux, ateliers, sorties)", en: "Creativity (games, workshops, outings)" }
        ]
    },
    {
        category: { fr: "Langues", en: "Languages" },
        items: [
            { fr: "Anglais (Bilingue)", en: "English (Bilingual)" },
            { fr: "Français (Bilingue)", en: "French (Bilingual)" },
            { fr: "Allemand (Notions)", en: "German (Basic)" }
        ]
    },
    {
        category: { fr: "Sécurité", en: "Safety" },
        items: [
            { fr: "Règles de sécurité", en: "Safety rules knowledge" },
            { fr: "Gestes de premiers secours (PSC1)", en: "First Aid (PSC1)" }
        ]
    }
];
