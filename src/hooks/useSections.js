import { useContext } from "react";
import { SectionContext } from "../context/sections";

export const useSections = () => {
    const context = useContext(SectionContext)

    if (context === undefined) {
        throw new Error("useSections must be used wih a provider")
    }

    return context
}