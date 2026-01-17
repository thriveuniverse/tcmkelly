import { useTranslation } from 'react-i18next';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { profileData } from '../data/profile';
import './Home.css';

export const Home = () => {
    const { t, i18n } = useTranslation();
    const lang = (i18n.language && i18n.language.startsWith('fr')) ? 'fr' : 'en';

    return (
        <div className="home-page container">
            <section className="hero-section">
                {/* Profile Tag */}
                <div className="hero-badge">
                    {profileData.title[lang]}
                </div>

                {/* Name */}
                <h1 className="hero-title">
                    {profileData.name}
                </h1>

                {/* Tagline (New) */}
                <div className="hero-tagline">
                    "{profileData.tagline[lang]}"
                </div>

                {/* Expanded Summary */}
                <p className="hero-subtitle">
                    {profileData.summary[lang]}
                </p>

                <div className="hero-actions">
                    <a href={`mailto:${profileData.email}`} className="btn-primary">
                        <Mail size={18} /> {t('hero.contact')}
                    </a>
                    <a href="#about" className="btn-secondary">
                        <ArrowRight size={18} /> {t('titles.about')}
                    </a>
                </div>

                <div className="hero-info">
                    <div className="info-item">
                        <MapPin size={16} /> {profileData.location}
                    </div>
                </div>
            </section>
        </div>
    );
};
