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