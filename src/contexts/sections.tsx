import { createContext, useRef, useState } from "react";
import { type ReactNode, type MutableRefObject, type Dispatch, type SetStateAction } from "react";

interface SectionContextType {
    projectRef: MutableRefObject<HTMLElement | null>;
    skillRef: MutableRefObject<HTMLElement | null>;
    experienceRef: MutableRefObject<HTMLElement | null>;
    certificationRef: MutableRefObject<HTMLElement | null>;
    closestSection: string;
    setClosestSection: Dispatch<SetStateAction<string>>;
};

export const SectionContext = createContext<SectionContextType | null>(null);

export function SectionsProvider ({children} : {children : ReactNode}) {
    const projectRef = useRef<HTMLElement | null>(null);
    const skillRef = useRef<HTMLElement | null>(null);
    const experienceRef = useRef<HTMLElement | null>(null);
    const certificationRef = useRef<HTMLElement | null>(null);

    const [closestSection, setClosestSection] = useState<string>("Projects");
    
    return (
        <SectionContext.Provider value={{
            projectRef,
            skillRef,
            experienceRef,
            certificationRef,
            closestSection,
            setClosestSection
        }}>
            {children}
        </SectionContext.Provider>
    );
};