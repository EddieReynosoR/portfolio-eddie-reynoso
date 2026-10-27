import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// index.html sets data-theme before React mounts, so start from that value.
const getInitialTheme = (): Theme =>
    document.documentElement.dataset.theme === "dark" ? "dark" : "light";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(getInitialTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        try {
            localStorage.setItem("theme", theme);
        } catch {
            // Storage can be blocked; the theme still works for this visit.
        }
    }, [theme]);

    const toggleTheme = () => setTheme(prev => (prev === "dark" ? "light" : "dark"));

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme must be used within a ThemeProvider");
    return context;
};
