export interface Technology {
    name: string;
    color: string;
}

export interface Project {
    name: string;
    type: string;
    description: string;
    image: string;
    images: string[];
    technologies: Technology[];
    isDeployed: boolean;
    gitHubLink: string;
    link: string;
}

export interface IExperience {
    roles: {
        role: string;
        date: string;
        descriptions: string[];
    }[];
    company: string;
    technologies: string[];
    companyLogo: string;
}

export interface ICertification {
    date: string;
    title: string;
    institution: string;
    description: string;
    technologies: string[];
    link: string;
}