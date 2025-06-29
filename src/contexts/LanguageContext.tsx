import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
import en from "../utils/languages/en.json";
import es from "../utils/languages/es.json";

interface Project {
    name: string;
    type: string;
    description: string;
}

type Role = {
    role: string;
    date: string;
    descriptions: string[];
}

interface Experience {
    roles: Role[];
    company: string;
    technologies: string[];
    companyLogo: string;
}

interface Certification {
    date: string;
    title: string;
    institution: string;
    description: string;
    technologies: string[];
}

const languages = {
    en, es
};

interface LanguageContextType {
    language: keyof typeof languages;
    setLanguage: Dispatch<SetStateAction<keyof typeof languages>>;
    translation: (key: string) => string | string[] | Project[] | Experience[] | Certification[];
    languages: typeof languages;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) =>  {
    const [language, setLanguage] = useState<keyof typeof languages>("en");

    const translation = (key: string): string | string[] | Project[] | Experience[] | Certification[] => {
        return ((languages[language] as unknown) as Record<string, string | string[] | Project[] | Experience[] | Certification[]>)[key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, translation, languages }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
    return context;
};