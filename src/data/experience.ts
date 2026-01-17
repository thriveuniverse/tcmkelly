import type { Experience } from '../types/cv';

export const experienceData: Experience[] = [
    {
        id: "rest-server-1",
        role: { fr: "Serveur", en: "Server / Waiter" },
        company: "T Narbonne",
        location: "Narbonne",
        startDate: "2024",
        endDate: "2024",
        type: "work",
        description: [
            {
                fr: "Gestion de la pression et multitâche en environnement dynamique (transférable au coaching).",
                en: "Pressure management and multitasking in a dynamic environment (transferable to coaching)."
            },
            {
                fr: "Service et relation client : écoute active et adaptation aux besoins.",
                en: "Service and customer relations: active listening and adaptation to needs."
            },
            {
                fr: "Travail d'équipe coordonné pour assurer la fluidité du service.",
                en: "Coordinated teamwork to ensure service fluidity."
            },
            {
                fr: "Responsabilité de la propreté et de l'organisation de l'espace.",
                en: "Responsibility for cleanliness and space organization."
            }
        ]
    },
    {
        id: "rest-server-2",
        role: { fr: "Serveur", en: "Server / Waiter" },
        company: "La Mangeoire",
        location: "Caunes Minervois",
        startDate: "2023",
        endDate: "2023",
        type: "work",
        description: [
            {
                fr: "Accueil professionnel et gestion des premières impressions.",
                en: "Professional greeting and first impression management."
            },
            {
                fr: "Communication efficace avec l'équipe cuisine pour la rapidité du service.",
                en: "Effective communication with kitchen team for service speed."
            }
        ]
    }
];
