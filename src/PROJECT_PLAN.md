
import { Languages, Briefcase, GraduationCap, Trophy,  FileText, User, Image, Menu, X, Download } from 'lucide-react';

/* 
  Project Structure & Plan

  1. Tech Stack
     - React (Vite) + TypeScript
     - react-router-dom (Routing)
     - i18next (Internationalization)
     - standard CSS / structured CSS variables (Styling)

  2. Directory Structure
     src/
       components/      -> Reusable UI (Navbar, Footer, Layout, LanguageSwitcher)
       data/            -> Structured content JSON/TS files (profile.ts, experience.ts, etc.)
       pages/           -> Route components (Home, Experience, Sports, Qualifications, Gallery, PrintCV)
       i18n/            -> Locale configuration (en.json, fr.json)
       types/           -> TypeScript interfaces for data models
       hooks/           -> Custom hooks (useScroll, etc.)
  
  3. Data Strategy
     - All content resides in `src/data` as typed objects.
     - Easy to extend by simply adding objects to the arrays in `src/data`.

  4. Pages
     - / (Home/Profile): Introduction, summary, quick links.
     - /experience: Work history timeline.
     - /sports: Special focus on sports & competitions.
     - /qualifications: Certifications, skills grid.
     - /gallery: Photo grid.
     - /cv: A dedicated print-friendly view (A4 layout).

  5. Internationalization
     - deeply integrated; all text content will be keyed.
*/
