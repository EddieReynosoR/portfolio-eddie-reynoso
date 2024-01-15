import { createContext, useRef, useState } from "react"

export const SectionContext = createContext()


export function SectionsProvider ({children}) {

    const projectRef = useRef(null)
    const skillRef = useRef(null)
    const experienceRef = useRef(null)
    const certificationRef = useRef(null)

    const [closestSection, setClosestSection] = useState("Projects")
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
    )
}