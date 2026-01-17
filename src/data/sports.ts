import type { Sport } from '../types/cv';

export const sportsData: Sport[] = [
    {
        id: "climbing",
        name: { fr: "Escalade", en: "Climbing" },
        icon: "Mountain",
        roles: [
            { fr: "Juge niveau académique escalade (FFME)", en: "Academic Level Climbing Judge (FFME)" }
        ],
        description: {
            fr: "Pratique compétitive et arbitrage. Gestion de la sécurité et respect des règles.",
            en: "Competitive practice and officiating. Safety management and rule enforcement."
        }
    },
    {
        id: "raid",
        name: { fr: "Raid / Course d'Aventure", en: "Adventure Racing / Raid" },
        icon: "Map",
        roles: [
            { fr: "Juge niveau district Raid", en: "District Level Adventure Racing Judge" }
        ],
        description: {
            fr: "Endurance, orientation et esprit d'équipe en conditions difficiles.",
            en: "Endurance, orienteering, and team spirit in challenging conditions."
        }
    },
    {
        id: "team-sports",
        name: { fr: "Sports Collectifs", en: "Team Sports" },
        icon: "Users",
        roles: [],
        description: {
            fr: "Pratique régulière favorisant la cohésion et la communication.",
            en: "Regular practice fostering cohesion and communication."
        }
    }
];
