import type { Project, ICertification } from "./types";

export const projects: Project[] = [
    {
        key: "parkme",
        name: 'ParkMe',
        type: 'IoT Solution',
        description: 'Sed ut justo lectus. Aliquam condimentum risus nisl. Suspendisse potenti.',
        image: './images/ParkMe/parkMe1.webp',
        images: [
            'ParkMe/parkMe1.webp',
            'ParkMe/parkMe2.webp',
            'ParkMe/parkMe3.webp',
            'ParkMe/parkMe4.webp',
            'ParkMe/parkMe5.webp'
        ],
        technologies: [
            {
                name: 'Arduino',
                color: '#00979D'
            },
            {
                name: 'Raspberry Pi',
                color: '#C514A'
            },
            {
                name: 'Python',
                color: '#3776AB'
            }
        ],
        isDeployed: false,
        gitHubLink: "https://github.com/EddieReynosoR/ParkeMe",
        link: ""
    },
    {
        key: "signlanguage",
        name: 'Sign Language to Text',
        type: 'Computer Vision / Machine Learning',
        description: 'Sed ut justo lectus. Aliquam condimentum risus nisl. Suspendisse potenti.',
        image: './images/SignLanguage/signLanguage1.webp',
        images: [
            'SignLanguage/signLanguage1.webp',
            'SignLanguage/signLanguage2.webp',
            'SignLanguage/signLanguage3.webm',
            'SignLanguage/signLanguage4.webm',
            'SignLanguage/signLanguage5.webm',
        ],
        technologies: [
            {
                name: 'Python',
                color: '#3776AB',
            },
            {
                name: 'OpenCV',
                color: '#5C3EE8',
            },
            {
                name: 'MediaPipe',
                color: '#FF9800',
            },
            {
                name: 'TensorFlow / Keras',
                color: '#FF6F00',
            }
        ],
        isDeployed: false,
        gitHubLink: "https://github.com/EddieReynosoR/SignTalkModel",
        link: ""
    },
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
    },
    {
        key: "chilango",
        name: 'Chilango',
        type: 'C# .NET Deskptop App',
        description: 'Sed ut justo lectus. Aliquam condimentum risus nisl. Suspendisse potenti.',
        image: './images/Chilango/chilango1.webp',
        images: [
            'Chilango/chilango1.webp',
            'Chilango/chilango2.webp',
            'Chilango/chilango3.webp',
            'Chilango/chilango4.webp',
            'Chilango/chilango5.webp'
        ],
        technologies: [
            {
                name: 'C# WPF',
                color: '#684D9'
            },
            {
                name: 'SQL Server',
                color: '#ED1C24'
            }
        ],
        isDeployed: false,
        gitHubLink: "https://github.com/EddieReynosoR/Chilango-Sistema-Restaurante",
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