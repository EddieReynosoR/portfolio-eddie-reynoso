import type { IExperience, Project, ICertification } from "./types";

export const projects: Project[] = [
    {
        name: 'BeSporty',
        type: 'Fullstack Web App',
        description: 'Sed ut justo lectus. Aliquam condimentum risus nisl. Suspendisse potenti.',
        image: './images/943shots_so.webp',
        images: [
            'BeSporty/beSporty1.webp',
            'BeSporty/beSporty2.webp',
            'BeSporty/beSporty3.webp',
            'BeSporty/beSporty4.webp',
            'BeSporty/beSporty5.webp'
        ],
        technologies: [
            {
                name: 'Django',
                color: '#005b11'
            },
            {
                name: 'Javascript',
                color: '#ebe700eb'
            },
            {
                name: 'PostgreSQL',
                color: '#008bb9'
            }
        ],
        isDeployed: true,
        gitHubLink: "",
        link: ""
    },
    {
        name: 'Kemish Music',
        type: 'C# .NET Deskptop App',
        description: 'Sed ut justo lectus. Aliquam condimentum risus nisl. Suspendisse potenti.',
        image: './images/kemishMusic.webp',
        images: [
            'KemishMusic/kemishMusic1.webp',
            'KemishMusic/kemishMusic2.webp',
            'KemishMusic/kemishMusic3.webp',
            'KemishMusic/kemishMusic4.webp',
            'KemishMusic/kemishMusic5.webp'
        ],
        technologies: [
            {
                name: 'C# Winforms',
                color: '#684D9'
            },
            {
                name: 'SQL Server',
                color: '#ED1C24'
            }
        ],
        isDeployed: false,
        gitHubLink: "",
        link: ""
    }
];

export const experiences: IExperience[] = [
    {
        date: 'April 2025 - Present',
        role: 'Software Developer',
        company: 'RSI México',
        description: 'Sed ut justo lectus. Aliquam condimentum risus nisl. Suspendisse potenti. Fusce quis suscipit erat, quis sodales eros. Vestibulum ac mi sem.',
        technologies: ['Android', '.NET', 'Problem Solving']
    },
    {
        date: 'July 2024',
        role: 'Software Development Intern',
        company: 'RSI México',
        description: 'Consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
        technologies: ['Java', 'C#', 'SCRUM']
    },
    {
        date: 'November 2022',
        role: 'Full-Stack Developer',
        company: 'SuperTeam Mexico',
        description: 'Consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
        technologies: ['Next JS', 'Crypto']
    }
]

export const certifications: ICertification[] = [
    {
        date: 'December 2022',
        title: 'Full-Stack Developer',
        institution: 'San Diego Global Knowledge University',
        description: 'Sed ut justo lectus. Aliquam condimentum risus nisl. Suspendisse potenti. Fusce quis suscipit erat, quis sodales eros. Vestibulum ac mi sem.',
        technologies: ['Frontend', 'Backend', 'Software Engineering']
    },
]