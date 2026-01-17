import { useTranslation } from 'react-i18next';
import { Calendar, MapPin } from 'lucide-react';
import { experienceData } from '../data/experience';
import { educationData } from '../data/education';
import './Experience.css';

export const Experience = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language as 'fr' | 'en';

    return (
        <div className="experience-page container animate-fade-in">
            <header className="page-header">
                <h1 className="page-title">{t('titles.experience')}</h1>
            </header>

            <div className="timeline">
                {experienceData.map((job) => (
                    <div key={job.id} className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content card">
                            <div className="job-header">
                                <div>
                                    <h2 className="job-role">{job.role[lang]}</h2>
                                    <h3 className="job-company">{job.company}</h3>
                                </div>
                                <div className="job-meta">
                                    <div className="meta-item">
                                        <Calendar size={14} />
                                        {job.startDate} - {job.endDate}
                                    </div>
                                    <div className="meta-item">
                                        <MapPin size={14} /> {job.location}
                                    </div>
                                </div>
                            </div>

                            <ul className="job-description">
                                {job.description.map((point, index) => (
                                    <li key={index}>{point[lang]}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            <header className="page-header" style={{ marginTop: '4rem' }}>
                <h1 className="page-title">{t('titles.education')}</h1>
            </header>

            <div className="grid-list">
                {educationData.map((edu) => (
                    <div key={edu.id} className="card educational-card">
                        <h3 className="edu-degree">{edu.degree[lang]}</h3>
                        <div className="edu-institution">{edu.institution}</div>
                        <div className="edu-meta">
                            <span>{edu.startDate} - {edu.endDate}</span>
                            {edu.location && <span> | {edu.location}</span>}
                        </div>
                        {edu.details.length > 0 && (
                            <ul className="edu-details">
                                {edu.details.map((detail, idx) => (
                                    <li key={idx}>{detail[lang]}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
