import { useTranslation } from 'react-i18next';
import { skillsData } from '../data/skills';
import { sportsData } from '../data/sports';
import { certificationsData } from '../data/certifications';
import { Trophy, Activity, Shield, Mountain, Map, Users } from 'lucide-react';
import './Sports.css';

export const Sports = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language as 'fr' | 'en';

    const getIcon = (iconName?: string) => {
        switch (iconName) {
            case 'Mountain': return <Mountain className="icon" size={32} />;
            case 'Map': return <Map className="icon" size={32} />;
            case 'Users': return <Users className="icon" size={32} />;
            default: return <Activity className="icon" size={32} />;
        }
    };

    return (
        <div className="sports-page container animate-fade-in">
            <header className="page-header">
                {/* Fixed Title Label */}
                <h1 className="page-title">{t('nav.sports')}</h1>
            </header>

            <section className="sports-grid">
                {/* Featured Sports (The "Prominent" Request) */}
                <div className="full-width-section">
                    <h2 className="section-title">
                        <Activity className="section-icon" />
                        {lang === 'fr' ? 'Sports & Compétitions' : 'Sports & Competitions'}
                    </h2>

                    <div className="featured-sports-list">
                        {sportsData.map((sport) => (
                            <div key={sport.id} className="sport-card">
                                <div className="sport-icon-wrapper">
                                    {getIcon(sport.icon)}
                                </div>
                                <div className="sport-content">
                                    <h3 className="sport-name">{sport.name[lang]}</h3>
                                    <p className="sport-desc">{sport.description[lang]}</p>

                                    {sport.roles.length > 0 && (
                                        <div className="sport-roles">
                                            <strong>{lang === 'fr' ? 'Responsabilités :' : 'Roles:'}</strong>
                                            <ul>
                                                {sport.roles.map((r, i) => <li key={i}>{r[lang]}</li>)}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certifications (New Section) */}
                <div className="section-card featured-gold">
                    <h2 className="section-title">
                        <Shield className="section-icon" />
                        {lang === 'fr' ? 'Certifications & Sécurité' : 'Certifications & Safety'}
                    </h2>
                    <div className="certs-list">
                        {certificationsData.map((cert) => (
                            <div key={cert.id} className="cert-badge">
                                <Shield size={16} />
                                <span>{cert.name[lang]}</span>
                                {cert.issuer && <span className="cert-issuer">({cert.issuer})</span>}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills Categories */}
                {skillsData.map((skillGroup, idx) => (
                    <div key={idx} className="section-card">
                        <h2 className="section-title">
                            {idx === 0 ? <Users className="section-icon" /> : <Trophy className="section-icon" />}
                            {skillGroup.category[lang]}
                        </h2>
                        <ul className="skills-list">
                            {skillGroup.items.map((item, idy) => (
                                <li key={idy}>{typeof item === 'string' ? item : item[lang]}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
        </div>
    );
};
