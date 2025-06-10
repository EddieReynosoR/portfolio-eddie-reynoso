import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
import en from "../utils/languages/en.json";
import es from "../utils/languages/es.json";

const translations = {
    en, es
};

interface LanguageContextType {
    language: keyof typeof translations;
    setLanguage: Dispatch<SetStateAction<keyof typeof translations>>;
    translation: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) =>  {
    const [language, setLanguage] = useState<keyof typeof translations>("en");

    const translation = (key: string) => {
        return (translations[language] as Record<string, string>)[key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, translation }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
    return context;
};