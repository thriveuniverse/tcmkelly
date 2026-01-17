import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Menu, X, Globe, Download } from 'lucide-react';
import './Navbar.css';

export const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
    };

    const navLinks = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.sports'), path: '/sports' },
        { name: t('nav.experience'), path: '/experience' },
        { name: t('nav.gallery'), path: '/gallery' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <NavLink to="/" className="nav-logo">
                    Thomas<span>Kelly</span>
                </NavLink>

                <div className="nav-links">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                        >
                            {link.name}
                        </NavLink>
                    ))}

                    <div className="nav-actions">
                        <button onClick={toggleLanguage} className="btn-lang">
                            <Globe size={16} />
                            {i18n.language.toUpperCase()}
                        </button>

                        <NavLink to="/cv" className="btn-cv">
                            <Download size={16} />
                            {t('nav.cv')}
                        </NavLink>
                    </div>
                </div>

                <button onClick={() => setIsOpen(!isOpen)} className="mobile-toggle">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {isOpen && (
                    <div className="mobile-menu">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                                style={{ display: 'block', padding: '0.5rem 0' }}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <button onClick={toggleLanguage} className="btn-lang" style={{ justifyContent: 'flex-start', padding: '0.5rem 0' }}>
                            <Globe size={16} /> {t('nav.cv')} ({i18n.language.toUpperCase()})
                        </button>
                        <NavLink to="/cv" onClick={() => setIsOpen(false)} className="btn-cv" style={{ width: 'fit-content' }}>
                            <Download size={16} /> {t('nav.cv')}
                        </NavLink>
                    </div>
                )}
            </div>
        </nav>
    );
};
