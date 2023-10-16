import Portfolio from '../../models/portfolio'

export const initState: Portfolio = {
    meta: {
        title: 'My Portfolio',
        description: 'Info about me, my interests and my projects.',
        showRepoLink: true,
    },
    menu: {
        home: 'Hello',
        about: 'Resume',
    },
    intro: {
        headline: "Hi, My name's Tobi!",
        typed: [
            "I'm a developer",
            'with experience in full stack web development,',
            'as well as an interest in game dev and composition.',
        ],
    },
    resume: {
        headline: 'Describe yourself in one quick sentence',
        summary: [
            'Expand on that information in more depth in a few short paragraphs',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        ],
        jobsHeadline: 'Employment',
        jobs: [
            {
                title: 'DevOps Engineering Intern',
                company: 'Canada Revenue Agency (CRA)',
                timeframe: 'January 2023 - present',
                summary:
                    "List all the cool stuff you did here. Don't be shy, but be honest and specific.",
            },
            {
                title: 'Computing Analyst',
                company: 'University of Ottawa',
                timeframe: 'June 2022 - December 2022',
                summary:
                    'Highlight some accomplishments in these descriptions. Sometimes people even read them.',
            },
            {
                title: 'IT Specialist',
                company: 'University of Ottawa',
                timeframe: 'October 2021 - December 2021',
                summary:
                    'Action works and quantified results help explain what you really did in a job.',
            },
            {
                title: 'Virtual Software Developer Intern',
                company: 'JP Morgan Chase & Co.',
                timeframe: 'August 2021',
                summary:
                    'Action works and quantified results help explain what you really did in a job.',
            }
        ],
        toolsHeadline: 'Skills',
        tools: [
            {
                name: 'Software',
                list: 'GoLang, Python, JavaScript, TypeScript, Java, C/C++, C#, HTML, CSS, MySQL, LaTeX',
            },
            {
                name: 'Awards & Publications',
                list: 'Dean’s Honour List, Merit Scholarship',
            },
            {
                name: 'Utilities',
                list: 'Git, npm, at least',
            },
        ],
    },
    sections: [
        {
            id: 'portfolio',
            menu: 'Portfolio',
            headline: 'Portfolio',
            subhead: 'Projects that mattered.',
            projects: [
                {
                    id: 'section-1-project-1',
                    title: 'My Cool Project',
                    summary:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
                    image: '',
                    links: [
                        {
                            label: 'Example',
                            url:
                                'https://github.com/doublejosh/react-portfolio',
                        },
                    ],
                },
                {
                    id: 'section-1-project-2',
                    title: 'Another One',
                    summary:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
                    image: '',
                },
                {
                    id: 'section-1-project-3',
                    title: 'Something Neat',
                    summary:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
                    image: '',
                },
            ],
        },
        {
            id: 'more',
            menu: 'More',
            headline: 'Hobbies',
            subhead: 'Another section of work, or extra hobbies, etc.',
            projects: [
                {
                    id: 'section-2-project-1',
                    title: 'Project 1',
                    summary:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
                    image: '',
                },
                {
                    id: 'section-2-project-2',
                    title: 'Project 2',
                    summary:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
                    image: '',
                },
                {
                    id: 'section-2-project-3',
                    title: 'Project 3',
                    summary:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
                    image: '',
                },
            ],
        },
    ],
    footer: {
        social: [
            {
                service: 'github',
                link: 'https://github.com/t0bio',
            },
            {
                service: 'linkedin',
                link: 'https://www.linkedin.com/oluwatobilobaogunbi',
            },
        ],
        footerMessage: 'Thanks for reading.',
        background: '',
    },
}

export default (state: Portfolio = initState) => {
    return state
}
