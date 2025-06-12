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
    date: string;
    role: string;
    company: string;
    description: string;
    technologies: string[];
}

export interface ICertification {
    date: string;
    title: string;
    institution: string;
    description: string;
    technologies: string[];
}