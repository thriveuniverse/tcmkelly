export interface LocalizedString {
    fr: string;
    en: string;
}

export interface Profile {
    name: string;
    title: LocalizedString;
    tagline: LocalizedString;
    location: string;
    email: string;
    phone: string;
    summary: LocalizedString;
    photoUrl?: string; // New
    socials?: {
        linkedin?: string;
        instagram?: string;
    };
}

export interface Experience {
    id: string;
    role: LocalizedString;
    company: string;
    location: string;
    startDate: string;
    endDate: string | 'Present';
    description: LocalizedString[];
    type: 'work' | 'volunteer' | 'sports';
}

export interface Education {
    id: string;
    institution: string;
    degree: LocalizedString;
    startDate: string;
    endDate: string | 'Present' | 'En cours';
    details: LocalizedString[];
    location: string;
}

export interface Skill {
    category: LocalizedString;
    items: LocalizedString[];
}

export interface Sport {
    id: string;
    name: LocalizedString;
    icon?: string; // lucide icon name
    roles: LocalizedString[]; // e.g. "Juge Académique"
    description: LocalizedString;
}

export interface Certification {
    id: string;
    name: LocalizedString;
    issuer: string;
    date?: string;
}
