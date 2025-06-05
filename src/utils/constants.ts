import type { IExperience, Project } from "./types";

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
        date: 'December 2022',
        role: 'Full-Stack Developer',
        company: 'San Diego Global Knowledge University',
        description: 'Sed ut justo lectus. Aliquam condimentum risus nisl. Suspendisse potenti. Fusce quis suscipit erat, quis sodales eros. Vestibulum ac mi sem.',
        technologies: ['Frontend', 'Backend', 'Software Engineering']
    },
    {
        date: 'January 2023',
        role: 'Software Engineer Intern',
        company: 'Tech Innovators Inc.',
        description: 'Consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
        technologies: ['JavaScript', 'React', 'Node.js']
    }
]