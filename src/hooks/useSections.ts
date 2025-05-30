import { useContext } from "react";
import { SectionContext } from "../contexts/sections";

export const useSections = () => {
    const context = useContext(SectionContext);

    if (!context)
        throw new Error("useSections must be used wih a provider");

    return context;
}