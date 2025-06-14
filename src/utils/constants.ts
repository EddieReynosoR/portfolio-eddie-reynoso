import type { Project, ICertification } from "./types";

export const projects: Project[] = [
    {
        key: "besporty",
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
        isDeployed: false,
        gitHubLink: "https://github.com/EddieReynosoR/BeSporty",
        link: ""
    },
    {
        key: "kemishmusic",
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
        gitHubLink: "https://github.com/EddieReynosoR/KemishMusic",
        link: ""
    }
];

export const certifications: ICertification[] = [
    {
        date: 'December 2022',
        title: 'Full-Stack Developer',
        institution: 'San Diego Global Knowledge University',
        description: 'Sed ut justo lectus. Aliquam condimentum risus nisl. Suspendisse potenti. Fusce quis suscipit erat, quis sodales eros. Vestibulum ac mi sem.',
        technologies: ['Frontend', 'Backend', 'Software Engineering'],
        link: ""
    },
]