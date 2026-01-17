import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Download, Award, Shield, Mountain, Map, Users } from 'lucide-react';
import { profileData } from '../data/profile';
import { experienceData } from '../data/experience';
import { educationData } from '../data/education';
import { skillsData } from '../data/skills';
import { sportsData } from '../data/sports';
import { certificationsData } from '../data/certifications';
import './CVPrint.css';

export const CVPrint = () => {
    const { i18n } = useTranslation();
    const lang = i18n.language as 'fr' | 'en';

    const getIcon = (iconName?: string) => {
        switch (iconName) {
            case 'Mountain': return <Mountain size={16} />;
            case 'Map': return <Map size={16} />;
            case 'Users': return <Users size={16} />;
            default: return <Award size={16} />;
        }
    };

    return (
        <div className="cv-print-container">
            <div className="print-controls no-print">
                <button onClick={() => window.print()} className="print-btn">
                    <Download size={18} /> Imprimer / Save to PDF
                </button>
            </div>

            <div className="a4-page">
                {/* Header with Photo Space */}
                <header className="cv-header">
                    <div className="cv-header-left">
                        <h1 className="cv-name">{profileData.name}</h1>
                        <h2 className="cv-title">{profileData.title[lang]}</h2>
                        <div className="cv-tagline">{profileData.tagline[lang]}</div>
                    </div>

                    <div className="cv-header-right">
                        <div className="cv-photo-placeholder">Photo</div>
                        <div className="cv-contact-info">
                            <div className="info-line"><Phone size={14} /> {profileData.phone}</div>
                            <div className="info-line"><Mail size={14} /> {profileData.email}</div>
                            <div className="info-line"><MapPin size={14} /> {profileData.location}</div>
                        </div>
                    </div>
                </header>

                {/* Profile */}
                <section className="cv-section">
                    <h3 className="cv-section-title">Profil</h3>
                    <p className="cv-summary">{profileData.summary[lang]}</p>
                </section>

                {/* Sports & Activities (Prominent) */}
                <section className="cv-section">
                    <h3 className="cv-section-title">Sports & Activités</h3>
                    <div className="cv-sports-grid">
                        {sportsData.map(sport => (
                            <div key={sport.id} className="cv-sport-item">
                                <div className="cv-sport-header">
                                    {getIcon(sport.icon)}
                                    <span className="cv-sport-name">{sport.name[lang]}</span>
                                </div>
                                {sport.roles.length > 0 && (
                                    <ul className="cv-sport-roles">
                                        {sport.roles.map((r, i) => <li key={i}>{r[lang]}</li>)}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Certifications (Next) */}
                <section className="cv-section">
                    <h3 className="cv-section-title">Certifications & Formations Complémentaires</h3>
                    <div className="cv-certs-list">
                        {certificationsData.map(cert => (
                            <div key={cert.id} className="cv-cert-item">
                                <Shield size={14} className="cert-icon" />
                                <span className="cv-cert-name">{cert.name[lang]}</span>
                                {cert.issuer && <span className="cv-cert-issuer"> — {cert.issuer}</span>}
                            </div>
                        ))}
                    </div>
                </section>

                <div className="cv-columns">
                    <div className="cv-col">
                        {/* Skills */}
                        <section className="cv-section">
                            <h3 className="cv-section-title">Compétences</h3>
                            {skillsData.map((skill, i) => (
                                <div key={i} className="cv-skill-group">
                                    <h4 className="cv-skill-cat">{skill.category[lang]}</h4>
                                    <ul className="cv-bullets compact">
                                        {skill.items.map((item, j) => (
                                            <li key={j}>{typeof item === 'string' ? item : item[lang]}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </section>

                        {/* Education */}
                        <section className="cv-section">
                            <h3 className="cv-section-title">Formation</h3>
                            {educationData.map(edu => (
                                <div key={edu.id} className="cv-item">
                                    <div className="cv-item-header">
                                        <span className="cv-role">{edu.institution}</span>
                                        <span className="cv-date">{edu.startDate && `${edu.startDate} - `}{edu.endDate}</span>
                                    </div>
                                    <div className="cv-degree">{edu.degree[lang]}</div>
                                    {edu.details.map((d, i) => <div key={i} className="cv-detail">{d[lang]}</div>)}
                                </div>
                            ))}
                        </section>
                    </div>

                    <div className="cv-col">
                        {/* Experience */}
                        <section className="cv-section">
                            <h3 className="cv-section-title">Expérience Professionnelle</h3>
                            {experienceData.map(job => (
                                <div key={job.id} className="cv-item">
                                    <div className="cv-item-header">
                                        <span className="cv-role">{job.role[lang]}</span>
                                        <span className="cv-date">{job.startDate}</span>
                                    </div>
                                    <div className="cv-company">{job.company} | {job.location}</div>
                                    <ul className="cv-bullets">
                                        {job.description.map((desc, i) => (
                                            <li key={i}>{desc[lang]}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};
